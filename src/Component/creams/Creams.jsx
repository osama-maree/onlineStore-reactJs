import './creams.scss'
import {Imag} from '../../DataInfo';
import {useState,React} from 'react'
import Desc from './Desc';
export default function Creams() {
  const[Des,setDesc]=useState(false)
  const[id,setId]=useState(0)
  return (
   <div className="container">
    <div className='creams' id='creams'>
      <div className="desc">
        <div className="anima">
        <h1>Main Package</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo, praesentium minus ipsum sapiente quis tempora. Nostrum nam soluta repudiandae. Provident esse sequi soluta nostrum obcaecati reiciendis ex molestias amet.</p>
      </div>
      <div className="mainPackage">
      { Imag.map(P=>(
        <div className="box">
          <div className="image">
              <img src={P.img} alt="" />
              <div className="desc2" onClick={()=>{setDesc(true);setId(P.id)}}>OSama maree <a href="#Des" className="add">Click whats</a> </div>
          </div> 
          </div>
          ))}

      </div>
      <div className="price"><h3>price : <span>200$</span>
      </h3>
      </div> 
    </div>
   {Des ? <Desc value={id}/> :null}
    </div> 
  )
}
