"use client";

import { Suspense } from "react";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "@/components/models/Scene";

const Car = () => {
  return (
    <div className="flex items-center flex-1 relative overflow-hidden flex-col md:flex-row">
      <div className="flex flex-col gap-4 max-w-lg md:absolute left-0 top-0 text-center md:text-start m-0 md:ml-32">
        <h2 className="text-4xl md:text-7xl text-primary">1930 Ford Model A</h2>
        <p className="text-base text-secondary max-w-72">
          Own piece of history! Buy your vintage car affortlessly
        </p>
      </div>
      <Canvas camera={{ position: [2, 1, 2] }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Car;
