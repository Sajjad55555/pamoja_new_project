import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/Footers'
import Text from './text'
import Pomoja_brand_identity from './pomoja_brand_identity'
export default function Female() {
  return (
    <>
   <div className="bg-[#EFECE3] min-h-screen ">
    
    <div>
      <Text/>
    </div>
      <Pomoja_brand_identity/>
   <div>
   <Footer/>
   </div>
   </div>
   
    
    </>
  )
}
