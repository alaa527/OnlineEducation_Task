import React from 'react'
import style from "./Footer.module.css"
function Footer() {
  return (
    <div>
        <div className={style.footer}>
            <div className='container'>
                <span>Copyright &copy; 2022 Alaa Sayed</span>
                <ul>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-google-plus"></i></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer