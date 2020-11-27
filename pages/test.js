import React from 'react'

// Next
import Link from 'next/link'

const Test = () => {
  return (
    <div>
      <p>This is a Client Test page</p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Test
