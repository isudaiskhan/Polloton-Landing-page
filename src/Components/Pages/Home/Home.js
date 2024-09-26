import React from 'react'
import Layout from '../../Layout/Layout'
import Hero from '../../Hero/Hero'
import NewOffers from '../../NewOffers/NewOffers'
import Offer from '../../Offer/Offer'
import Download from '../../Download/Download'
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'

const Home = () => {
  return (
    <>

    <Layout>
        <Hero />
        <NewOffers />
        <Offer />
        <Download />
        <Footer />
        <ScrollButton />
    </Layout>
      
    </>
  )
}

export default Home