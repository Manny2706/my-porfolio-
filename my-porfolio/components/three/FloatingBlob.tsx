"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import { useRef } from "react";
import type { Mesh } from "three";

function BlobMesh() {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const targetX = state.pointer.y / 4;
    const targetY = state.pointer.x / 4;

    // smooth rotation following the pointer
    easing.dampE(
      meshRef.current.rotation,
      [targetX, targetY, 0],
      0.3,
      delta
    );
  });

  return (
    <Float speed={2} floatIntensity={1.4} rotationIntensity={1.0}>
      <mesh ref={meshRef}>
        {/* keep geometry simple */}
        <icosahedronGeometry args={[1.4, 1]} />
        {/* use a simpler material than full PBR */}
        <meshPhongMaterial
          color="#38bdf8"
          shininess={60}
          specular={0x88ccff}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]} // limit pixel ratio for stability / perf
    >
      {/* simple background color */}
      <color attach="background" args={["#020617"]} />

      {/* simple basic lights instead of env PBR setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 2]} intensity={1.1} />
      <directionalLight position={[-3, -2, -1]} intensity={0.5} />

      <BlobMesh />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        // you can keep autoRotate, it's not shader related
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
