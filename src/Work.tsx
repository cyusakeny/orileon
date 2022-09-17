import React,{Suspense} from "react";
import {BiSearchAlt} from"react-icons/bi"
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"
import {GrWindows} from "react-icons/gr"
import {FaXbox} from "react-icons/fa"
import {SiNintendoswitch} from "react-icons/si"
import {IoLogoSteam} from "react-icons/io"
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Float } from "@react-three/drei";
import {Ori} from "./Ori"
import { motion } from "framer-motion";
import { Rock } from "./Rock";

import "./workcss/work.css"
const Work:React.FC = () => {
  return (
    <div className="main">
        <div className="main2">
 <motion.div 
 animate={{x:0}}
  initial={{x:-1000}}
  transition={{duration:4}}
 className="text-gray-200 space-x-[30px] flex flex-row ml-[14%] pt-[30px]">
  <span className="cursor-pointer
  text-lg font-bold text-white text-shadow-2xl
  ">Store</span>
  <span className="cursor-pointer">News</span>
  <span className="cursor-pointer">Media</span>
  <span className="cursor-pointer">Studios</span>
  <div className="flex flex-row left-[53%] relative bottom-[13px] space-x-[15px]">
    <BiSearchAlt className="fill text-gray-300 w-[25px] h-[50px]"/>
    <AiOutlineShoppingCart className="fill text-gray-300 w-[25px] h-[50px]"/>
    <AiOutlineHeart className="fill text-gray-300 w-[25px] h-[50px]"/>
  </div>
 </motion.div>
 <div className="flex flex-row ">
  <div className="flex flex-col justify-start  mt-[45px] ml-[6%]   w-[50%] ">
    <motion.h1
    animate={{y:0}}
    initial={{y:1000}}
    transition={{type:"spring",duration:4.5}}
    className="text-white
    font-bold text-[80px] text-shadow-3xl  w-[100%]
    ">LET THE</motion.h1>
    <motion.h1 
    animate={{y:0}}
    initial={{y:1000}}
    transition={{type:"spring",duration:4.5}}
    className="text-white
    font-bold text-[80px] text-shadow-3xl 
    ">GAME BEGIN</motion.h1>
    <p className="
    text-white w-[90%] font-normal  text-start
    ">The little Square is no stranger to peril,but when a fateful flight puts owlet Ku in
    harm's way , it will take more than bravery to bring a family back together,heal a broken 
    land and discover Square true destiny   
     </p>
     <div className="flex flex-row pt-[20px] space-x-[20px] ">
       <button className="font-bold w-[40%] h-[50px] rounded-md text-black bg-white"> 
        Buy now
       </button>
       <button className="font-bold w-[40%] h-[50px] rounded-md text-white bg-transparent border-[1px] border-white ">
       Play
       </button>
     </div>
     <div className="flex flex-col mt-[18px]">
      <span className="text-gray-300 text-[14px] font-normal">Available on:</span>
       <div className="flex flex-row text-gray-300 font-normal pt-[15px] space-x-[15px]">
        <span className="flex flex-row text-gray-300 font-normal"><GrWindows className="
        mr-[3px] relative top-[3px]"/> Windows</span>
        <span className="flex flex-row text-gray-300 font-normal">
        <FaXbox className="mr-[3px] relative top-[3px]"/>
        Xbox
        </span>
        <span className="flex flex-row text-gray-300 font-normal">
 <SiNintendoswitch className="mr-[3px] w-[20px] h-[20px] relative top-[3px]"/>
 <p className="text-start flex flex-col space-y-[0px] ">
 <span className="text-[9px]">Nintendo</span> <span className="text-[15px] relative bottom-[7px]">Switch</span>  </p>
        </span>
        <span className="flex flex-row text-gray-300 font-normal">
          <IoLogoSteam className="mr-[3px] relative bottom-[2.5px] w-[30px] h-[30px]"/>
          Steam
        </span>
       </div>
     </div>
  </div>
  <div className="  w-[800px] ">
   <Canvas   >
    <OrbitControls enableZoom={false}/>
    <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Float speed={0.7} rotationIntensity={1.4} floatIntensity={2} key={undefined} attach={undefined} args={undefined} onUpdate={undefined} clear={undefined} raycast={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}>
      <Ori />
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={1} key={undefined} attach={undefined} args={undefined} onUpdate={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} >
      <Rock x={-3} y={3} z={-0.58}/>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={1} key={undefined} attach={undefined} args={undefined} onUpdate={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} >
      <Rock x={-2.3} y={-2.4} z={-0.58}/>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={1} key={undefined} attach={undefined} args={undefined} onUpdate={undefined} visible={undefined} type={undefined} isGroup={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} >
      <Rock x={2} y={-3.4} z={-0.58}/>
      </Float>
      </Suspense>
   </Canvas>
  </div>

 </div>
        </div>
    </div>
  );
}
export default Work;