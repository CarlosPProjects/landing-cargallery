import React, { useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/model-2/scene-transformed.glb");
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.15;
  });

  return (
      <group ref={ref} {...props} dispose={null} position={[0, -0.5, 0]}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.PaletteMaterial001}
        />
        <skinnedMesh
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_12.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_12.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_13.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_13.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_14.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_14.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_15.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_15.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_16.geometry}
          material={materials.PaletteMaterial002}
          skeleton={nodes.Object_16.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_17.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_17.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_18.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_18.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_19.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_19.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_20.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_20.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_21.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_21.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_22.geometry}
          material={materials.PaletteMaterial004}
          skeleton={nodes.Object_22.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_23.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_23.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_25.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_25.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_26.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_26.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_27.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_27.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_29.geometry}
          material={materials.Plate}
          skeleton={nodes.Object_29.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_31.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_31.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_32.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_32.skeleton}
        />
      </group>
  );
}

useGLTF.preload("/models/model-2/scene-transformed.glb");
