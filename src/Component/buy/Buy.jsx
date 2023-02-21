import {BsWhatsapp} from 'react-icons/bs'
import './buy.scss'
export default function Buy() {
  return (
    <div className='buy'>
       <a 
       href="https://wa.me/message/BT6PNJLHTYILK1" 
       target="_blank"    
       rel="noopener noreferrer"
       >
          <BsWhatsapp className='icon'/>
        </a>
    </div>
  )
}
