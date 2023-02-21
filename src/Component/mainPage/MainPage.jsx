import './manpage.scss'
import { init } from 'ityped'
import { useEffect,useRef,useState } from 'react'
import { Prod } from '../product/data'
export default function MainPage() {
  
  const TextRef=useRef()
  const [start,setStart]=useState(0)
  useEffect(()=>{
    init(TextRef.current, {
       showCursor: false,
       strings: ['Osama', 'Momen',"maree" ] })
    
  },[])

  useEffect(()=>{
    const interval=setInterval(
      ()=> setStart(start === Prod.length - 1 ? 0 : start + 1 )
    ,1000)
    return ()=>{
      clearInterval(interval)
    }
  },[start])
  return (
    <div className='mainpage' id='Home'>
      <div className="left">
       {
        Prod.map((p,i)=>(
         <div className={i === start ? 'slide active ' : 'slid'} key={p.id}>
        {i === start &&(<img src={p.img} alt="" />
            )}
        </div>))
        }
      </div>
      <div className="right">
        <h3>Hi my name is Ali</h3>
        <h2>Oh no lo Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus laudantium rem magnam corporis hic eius aspernatur cum minima provident at accusamus ab distinctio beatae cumque minus odit, nesciunt porro.</p>
        <h3>Product Is <span ref={TextRef}></span></h3>
      </div>
    </div>
  )
}
