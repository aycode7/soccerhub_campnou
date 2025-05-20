import React from 'react'
import Link from 'next/link'
import Footer from '../../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <p>This is our contact age 949488484</p>
        <p>Here you can contact us</p>
        <p>Customer to Seller</p>
        <Link href='/'>
        <p>Click Here To Go Back To The HomePage</p>
        </Link>
        <Footer />
    </div>
  )
}

export default page