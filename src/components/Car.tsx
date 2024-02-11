"use client";

import { Suspense } from "react";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "@/components/models/Scene";

const Car = () => {
  return (
    <div className="flex items-center flex-1 relative">
      <div className="flex flex-col gap-4 max-w-lg absolute left-0 bottom-auto">
        <h2 className="text-7xl text-primary">1930 Ford Model A</h2>
        <p className="text-base text-secondary max-w-72">
          Own piece of history! Buy your vintage car affortlessly
        </p>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Car;
