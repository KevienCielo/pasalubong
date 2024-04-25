import React from 'react'
import CakeHeaderWrapper from '../components/wrapper/CakeHeaderWrapper'
import FooterSection from '../components/footer/FooterSection'
import CakeShopMain from '../components/main/CakeShopMain'
import RightSideBar from '../components/sidebar/RightSideBar'

const CakeShop = () => {
  return (
    <>
        <CakeHeaderWrapper/>
        <CakeShopMain/>
        <RightSideBar/>
        <FooterSection/>
    </>
  )
}

export default CakeShop