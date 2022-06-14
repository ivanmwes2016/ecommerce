import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'


const Product = ({product:{image, name, slug, price}}:any) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img src={urlFor(image && image[0]).toString()} alt=""/>
                </div>
            </Link>
        </div>
    )
}

export default Product
