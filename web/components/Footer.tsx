import Link from 'next/link'
import React from 'react'
import {urlFor} from '../lib/client'

const Footer = ({footerBanner:{
    discount,
    largeText1,
    SaleTime,
    midText,
    smallText,
    product,
    buttonText,
    image,
    desc

}}:any) => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{discount}</p>
                    <h3>{largeText1}</h3>
                    <p>{SaleTime}</p>
                    
                </div>
                <div className="right">
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button type='button'>{buttonText}</button>
                    </Link>
                </div>

                <img src={urlFor(image).toString()} className="footer-banner-image"/>
            </div>
        </div>
    )
}

export default Footer
