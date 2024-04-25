import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ShopAreaSection from '../shop/ShopAreaSection'

const ShopMain = () => {
  return (
    <>
        <BreadcrumbSection title={"All Products"} current={"Products"}/>
        <ShopAreaSection/>
    </>
  )
}

export default ShopMain