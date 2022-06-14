import React, { useState } from 'react'
import {urlFor, client} from '../../lib/client'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Product from '../../components/product'

const ProductDetails = ({product, products}:any) => {
    const{image, name, details, price} = product

    const [index, setIndex] = useState(0)

    return (
        <div>
    
            <div className="product-detail-container">
                <div className="flex justify-center  items-center m-auto">
                    
                    <div className="image-container">
                        <div>
                            <img src={urlFor(image && image[index]).toString()}
                            className="product-detail-image"
                            />
                        </div>

                    <div className="small-images-container">
                            {image?.map((item:any, i:any) => ( 
                                <img src={urlFor(item).toString()}
                                className={i === index ? 'small-image selected image': 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                                />
                            
                            ) )}
                        </div>
                    </div>
                        

                        <div className="product-detail-desc px-7">
                            <h1 className="font-extrabold text-2xl">{name}</h1>
                            <div className="reviews">
                            <> 
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                </>

                                <p>(20)</p>
                            </div>
                            <h4>Details:</h4>
                            <p>{details}</p>
                            <p className='price'> ${price}</p>
                            <div className="quantity">
                                <h3>Quantity</h3>
                                <div className="quantity-desc flex">
                                    <span className="minus"><AiOutlineMinus /></span>
                                    <span className="num">0</span>
                                    <span className="plus"><AiOutlinePlus /></span>
                                </div>
                            </div>
                            <div className="buttons">
                                <button type="button" className="add-to-cart">Add to Cart</button>
                                <button type="button" className="buy-now">Buy Now</button>
                            </div>

                    
                </div>
            </div>
            </div>

        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
                <div className="maylike-products-container track">
                    {products?.map((item:any) => (
                        <Product key={item._id} product={item} />
                    ))}
                </div>
                
            </div>
        </div>
        </div>
    )
}

export const getStaticProps = async ({params:{slug}}:any) => {

    const product = await client.fetch(
      `*[_type == "product" && slug.current == '${slug}'][0]`
    )
    console.log('product :>> ', product);
    const products = await client.fetch(
        `*[_type == "product"]`
      )
  
    return{
      props:{product, products}
    }
  }

  export const getStaticPaths = async () =>{
      const query = `*[_type == "product"]{
          slug{
              current
          }
      }`
      const products = await client.fetch(query)
      const paths = products.map(((product:any) => ({
          params:{
              slug:product.slug.current
          }
      })))

      return{
          paths,
          fallback:'blocking'
      }

  }

export default ProductDetails
