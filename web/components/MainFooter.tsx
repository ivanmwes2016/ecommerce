import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const MainFooter = () => {
    return (
        <div className="footer-container">
            <p>2022 JSM Headphones • All rights reserved</p>
            <p className='icons'>
                <AiFillInstagram />
                <AiOutlineTwitter />
                </p>
        </div>
    )
}

export default MainFooter
