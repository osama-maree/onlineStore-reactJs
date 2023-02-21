import React from 'react'
import { Data } from '../../DataInfo'
import './desc.scss'
function Desc(props) {
  return (
    Data.map(P=>( P.id === props.value?
    <div className='Desc' id="Des">
     <img src={P.img} alt="" />
    </div> : ""
    ))
  )
}

export default Desc