import React from 'react'
import Link from 'next/link'
import Footer from '../../Components/Footer'

const page = () => {
  return (
    <div>
      <p>this is the about page</p>

      <Link href="/"><button>click here to go back</button></Link>
      <Footer />
    </div>
  )
}

export default page