import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import './ThreeNode.css'
import { useState } from 'react'
export default function ThreeNode() {
  const power = 100
  const [node1, setNode1] = useState(true)
  const [node2, setNode2] = useState(true)
  const [node3, setNode3] = useState(true)
  return (
    <div className='THREENODEGRAPH flex flex-col items-center'>
      <div
        className='node1 border p-10 w-32 absolute shadow-[10px_40px_30px_rgb(255,255,255,0.12)] cursor-pointer'
        style={{ borderRadius: '100px', zIndex: 1 }}
        onMouseEnter={() => {
          setNode1(false)
        }}
        onMouseLeave={() => {
          setNode1(true)
        }}
      >
        {node1 ? (
          <FontAwesomeIcon icon={faIndustry} className='h-10' />
        ) : (
          <div className='h-11'>20% = {power * 0.2}kW </div>
        )}
      </div>
      <div
        className='node1 border p-10 w-32 absolute mt-80 mr-80 shadow-[10px_40px_30px_rgb(255,255,255,0.12)] cursor-pointer'
        style={{ borderRadius: '100px', zIndex: 2 }}
        onMouseEnter={() => {
          setNode2(false)
        }}
        onMouseLeave={() => {
          setNode2(true)
        }}
      >
        {node2 ? (
          <FontAwesomeIcon icon={faIndustry} className='h-10' />
        ) : (
          <div className='h-11'>35% = {power * 0.35}kW </div>
        )}
      </div>
      <div
        className='node1 border  p-10 w-32 absolute mt-48 shadow-[10px_40px_30px_rgb(255,255,255,0.12)]'
        style={{ borderRadius: '100px', zIndex: 3 }}
      >
        <FontAwesomeIcon icon={faFan} className='h-10 rotate' />
        {/* center node */}
      </div>
      <div
        className='node1 border p-10 w-32 absolute mt-80 ml-80 shadow-[10px_40px_30px_rgb(255,255,255,0.12)] cursor-pointer'
        style={{ borderRadius: '100px', zIndex: 4 }}
        onMouseEnter={() => {
          setNode3(false)
        }}
        onMouseLeave={() => {
          setNode3(true)
        }}
      >
        {node3 ? (
          <FontAwesomeIcon icon={faIndustry} className='h-10' />
        ) : (
          <div className='h-11'>45% = {power * 0.45}kW </div>
        )}
      </div>
      <div className='arrow1 absolute w-1 h-10 border border-white bg-white mt-[140px]'></div>
      <div className='arrow1 absolute w-1 h-10 border border-white bg-white mt-[300px] mr-40 rotate-45'></div>
      <div className='arrow1 absolute w-1 h-10 border border-white bg-white mt-[300px] ml-40 -rotate-45'></div>
    </div>
  )
}
