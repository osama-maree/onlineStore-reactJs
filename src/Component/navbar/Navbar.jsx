import './navbar.scss'

export default function Navbar() {
  return (
  <div className='parent'>
    <div className='container'>
         <div className="name">FLORIANA</div>
         <div className="List">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#product">Secend</a>
            </li>
            <li>
              <a href="#creams">Third</a>
            </li>
            <li>
              <a href="#footer">Foure</a>
            </li>
          </ul>
         </div>
         <div className="logo"><img src="assets/logo.jpeg" alt="" /></div>
    </div>
    </div>  
  )
}
