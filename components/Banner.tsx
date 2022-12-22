import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-5xl pb-4">Tom's blog</h1>
            <h2 className="mt-5 md:mt-0">
                
                <span className="underline decoration-4 decoration-orange-400">
                Welcome to Everybody
                </span>{" "}

            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Ecommerce | Blogs | Video | Chats | NFTs | MERN
        </p>
    </div>
  )
}

export default Banner