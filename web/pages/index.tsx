import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { HeroBanner } from '../components/HeroBanner'
import Product from '../components/product'
import { client } from '../lib/client'

// console.log('client :>> ', client);


const Home: NextPage = ({product, bannerData}:any) => {

  return (
    <>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />
      {console.log('bannerData :>> ', bannerData)}

      <div className="products-heading">
        <h2>Best Selling Products</h2> 
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {product?.map((item:any) => 
          <Product  key={item._id} product={item}/>
        )}
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps = async (pageContext:any) => {

  const product = await client.fetch(
    `*[_type == "product"]`
  )

  const bannerData = await client.fetch(
    `*[_type == "banner"]`
  )

  return{
    props:{product, bannerData}
  }
}

export default Home
