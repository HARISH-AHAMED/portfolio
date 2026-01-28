
import React, { ReactNode, useEffect, useRef } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

export const AuroraBackground = ({
    className,
    children,
    ...props
}: AuroraBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) return;

        const vertexShaderSource = `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = position * 0.5 + 0.5;
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;
            varying vec2 vUv;
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec2 uMouse;
            uniform float uLayerCount;

            // Simple noise function
            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float smoothNoise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                float a = noise(i);
                float b = noise(i + vec2(1.0, 0.0));
                float c = noise(i + vec2(0.0, 1.0));
                float d = noise(i + vec2(1.0, 1.0));
                return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
            }

            float fbm(vec2 p) {
                float v = 0.0;
                float a = 0.5;
                for (int i = 0; i < 5; i++) {
                    v += a * smoothNoise(p);
                    p *= 2.0;
                    a *= 0.5;
                }
                return v;
            }

            vec3 getAuroraLayer(vec2 uv, float t, float id) {
                // Varying properties based on curtain ID
                float seed = id * 137.45;
                float z = 1.0 + id * 0.4; // Depth/Parallax
                float speed = (0.1 + noise(vec2(id, 0.0)) * 0.2) * t;
                
                // Parallax adjustment
                vec2 p = uv;
                p.x += uMouse.x * (0.02 / z);
                p.y += uMouse.y * (0.01 / z);

                // Horizontal distribution offset
                float xOffset = noise(vec2(id, 1.0)) * 10.0;
                
                // Multi-noise curtain shape
                float n1 = smoothNoise(vec2(p.x * 0.8 / z + speed + xOffset, seed));
                float n2 = smoothNoise(vec2(p.x * 2.0 / z - speed * 0.5 + seed, id * 45.0));
                float curtain = smoothstep(0.2, 0.8, n1 * n2);
                
                // Vertical wave shape
                float wave = sin(p.x * (1.0 + id * 0.2) + t + seed) * 0.15;
                float dist = abs(p.y - (0.4 + noise(vec2(id, 2.0)) * 0.3) - wave);
                
                // Ray structure
                float rays = fbm(vec2(p.x * (8.0 + id) / z, p.y * 3.0 - t * 0.4));
                
                // Opacity / Intensity
                float intensity = pow(curtain, 1.5) * exp(-dist * (6.0 - id * 0.2)) * (0.4 + 0.6 * rays);
                intensity *= (1.0 - id * 0.05); // Fade background layers slightly

                // Aurora Color Palettes
                vec3 col;
                float colorTimer = fract(t * 0.05 + id * 0.1);
                vec3 c1 = vec3(0.0, 0.8, 0.4); // Emerald
                vec3 c2 = vec3(0.0, 0.5, 0.9); // Cyan
                vec3 c3 = vec3(0.5, 0.2, 0.8); // Violet
                
                float cNoise = noise(vec2(id, 3.0));
                if(cNoise < 0.4) col = mix(c1, c2, curtain);
                else if(cNoise < 0.7) col = mix(c2, c3, curtain);
                else col = mix(c3, c1, curtain);

                return col * intensity * smoothstep(1.0, 0.1, p.y);
            }

            void main() {
                vec2 uv = vUv;
                float t = uTime * 0.4;
                
                vec3 sky = vec3(0.005, 0.01, 0.03); // Darker night sky
                vec3 auroraSum = vec3(0.0);
                
                // Loop through independent curtains
                float count = uLayerCount;
                for(float i=0.; i<12.; i++) {
                    if(i >= count) break;
                    auroraSum += getAuroraLayer(uv, t, i);
                }
                
                // Final blend with bloom-like softness
                vec3 finalCol = sky + auroraSum;
                
                // Prevent over-exposure
                finalCol = 1.0 - exp(-finalCol * 1.5);
                
                gl_FragColor = vec4(finalCol, 1.0);
            }
        `;

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const program = gl.createProgram();
        if (!program) return;
        const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vs || !fs) return;

        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const uTimeLocation = gl.getUniformLocation(program, "uTime");
        const uResLocation = gl.getUniformLocation(program, "uResolution");
        const uMouseLocation = gl.getUniformLocation(program, "uMouse");
        const uLayerCountLocation = gl.getUniformLocation(program, "uLayerCount");

        let startTime = Date.now();

        const resize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();

        const render = () => {
            const time = (Date.now() - startTime) * 0.001;

            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

            // Reduce layers for performance on smaller screens
            const layers = window.innerWidth < 768 ? 6.0 : 12.0;

            gl.uniform1f(uTimeLocation, time);
            gl.uniform2f(uResLocation, canvas.width, canvas.height);
            gl.uniform2f(uMouseLocation, mouseRef.current.x, mouseRef.current.y);
            gl.uniform1f(uLayerCountLocation, layers);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className={`relative flex flex-col h-[100vh] items-center justify-center bg-slate-950 text-slate-100 overflow-hidden ${className || ""}`}
            {...props}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
            />
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};
