// src/components/RotatingLaptop.jsx
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function LaptopModel({ target }) {
  const ref = useRef();
  const { scene } = useGLTF("/t.glb");

  useFrame(() => {
    if (!ref.current || !target.current) return;

    ref.current.rotation.x += (target.current.x - ref.current.rotation.x) * 0.06;
    ref.current.rotation.y += (target.current.y - ref.current.rotation.y) * 0.06;
    ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.06;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.05}          // yahan halka sa bada kiya (0.9 -> 1.05)
      position={[0, -0.2, 0]}
    />
  );
}

useGLTF.preload("/t.glb");

const RotatingLaptop = () => {
  const target = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    target.current = {
      x: y * 0.2,
      y: x * 0.25,
    };
  };

  const resetTilt = () => {
    target.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    const handleOrientation = (e) => {
      if (!e.beta || !e.gamma) return;
      target.current = {
        x: Math.max(-0.8, Math.min(0.8, e.beta / 90)) * 0.15,
        y: Math.max(-0.8, Math.min(0.8, e.gamma / 90)) * 0.15,
      };
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
      return () =>
        window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative w-full max-w-xl lg:max-w-2xl h-[380px] lg:h-[480px] mx-auto"
    >
      <Canvas
        camera={{ position: [0, 1.0, 7], fov: 48 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[2.8, 4.5, 2.2]}
          intensity={1.6}
          color="#0064D2"
        />
        <directionalLight
          position={[-2, 2.2, -1.8]}
          intensity={1.1}
          color="#00BFB2"
        />
        <directionalLight
          position={[1.2, 1.2, -2.2]}
          intensity={0.9}
          color="#FF8C42"
        />
        <pointLight position={[0, -1.8, 3.8]} intensity={0.9} color="#ffffff" />

        <LaptopModel target={target} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
};

export default RotatingLaptop;