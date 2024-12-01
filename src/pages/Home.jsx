import React from 'react'
import Header from '../components/home/Header'
import Products from '../components/home/featured-products'
import Introduction from '../components/home/intro'
const Home = () => {
  return (
  <>
  <Header/>
  {/* Chnage the carousl for Products page to be responsive */}
   <Products/>
   <Introduction/>
  </>
  )
}

export default Home