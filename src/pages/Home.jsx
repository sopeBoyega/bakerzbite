import React from 'react'
import Header from '../components/home/Header'
import Products from '../components/home/featured-products'
import Introduction from '../components/home/intro'
import Merchandise from '../components/home/merchandise'
import Reviews from '../components/home/reviews'
const Home = () => {
  return (
  <>
  <Header/>
  {/* Change the carousel for Products page to be responsive */}
   <Products/>
   <Introduction/>
   <Merchandise/>
   <Reviews/>
  </>
  )
}

export default Home