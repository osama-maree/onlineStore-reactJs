import './footer.scss'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiTwotoneMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <video controls autoPlay loop muted>
        <source src='assets/video.mp4' type='video/mp4'/>
      </video>
      <div className="container">
        <div className="info">
          Number : 972 578239 <br/>
          Email:osama@mzckzv.com
        </div>
        <div className="name">
          osama
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/florianabrands" 
                   target='_blank'
                   rel="noopener noreferrer"
          ><BsFacebook className='social'/></a>

          <a href="https://wa.me/message/BT6PNJLHTYILK1"
                  target='_blank'
                  rel="noopener noreferrer"
          ><AiFillInstagram className='social'/></a>
          <a href="florianabrand@gmail.com"
                            target='_blank'
                            rel="noopener noreferrer"
                           >
            <AiTwotoneMail className='social'/>
          </a>
        </div>
      </div>
      </div>
      
  )
}
