import './product.scss'
import { useState } from 'react';
import {AiOutlineLeft,AiOutlineRight}from "react-icons/ai";
import { Prod } from './data';
export default function Product() {

  const[current,setCurrent]=useState(0)
  
 if(!Array.isArray(Prod) || Prod.length <=0 ){
    return null
  }

  const nextSlide=()=>{
    setCurrent(current === Prod.length - 1 ? 0 : current + 1)
  }

  const prevSlide=()=>{
    setCurrent(current === 0 ? Prod.length - 1 : current - 1 )
  }
 
  return (
    <div className='product' id='product'>
      <div className='Block'> 
        <h1>Products</h1>
      </div>
      <div className="slider">
      {Prod.map((p,i)=>{

        return( 
          <div className={i === current ? 'slide active ' : 'slid'} key={p.id}>
            {i === current &&(<img src={p.img} alt="" />
            )}
            </div>
            
       )
        
      })}
  </div>

      <AiOutlineLeft 
       className='arrow left'
       onClick={prevSlide}
      /> 

      <AiOutlineRight
       className='arrow right'
       onClick={nextSlide}
      />    
    </div>
  )
}
