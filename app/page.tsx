"use client"

import { Edges, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';

const RotatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.5]} />
      <meshLambertMaterial color="#1856F3" emissive="#1856F3" />
      <Edges color="red" />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1 , 1]} intensity={10} color={0x9CDBA6} />

      <color attach="background" args={['#d0d0d0']} />

      <RotatingShape />
    </Canvas>
  );
}
