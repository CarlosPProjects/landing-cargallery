import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} position={[-4.683, 1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube001_Materiais_0.geometry} material={materials.Materiais} position={[-4.683, 1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube005_farois_3_0.geometry} material={materials.farois_3} position={[-4.683, 1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube006_farois_f_0.geometry} material={materials.farois_f} position={[-4.683, 1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')