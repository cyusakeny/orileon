/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Dasha Klyusova (https://sketchfab.com/AnoFail)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ori-and-the-blind-forest-df3da5dfa8b04a988e0ae2bc0202e94d
title: Ori and the Blind Forest
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Ori(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ori.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation.play()
  })
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.3, 0, 10]} >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} scale={1.4}>
              <group name="ORB001_46" position={[-0.46, 1.4, -0.57]} scale={0.59}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Material.003']} />
              </group>
              <group name="ORB002_47" position={[-0.46, 1.4, -0.57]} scale={0.65}>
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['Material.002']} />
              </group>
              <group name="ORB003_48" position={[-0.46, 1.4, -0.57]} scale={0.65}>
                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.core} />
              </group>
              <group name="Armature_44" position={[0.6, -0.02, -0.15]} rotation={[0, -0.77, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.material} skeleton={nodes.Object_7.skeleton} />
                </group>
              </group>
              <group name="land_45" position={[0, -0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['land.001']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ori.gltf')
