import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl relative" style={{height : "450px"}}>
            <img src={product.api_featured_image} alt="" className="rounded-t-lg h-1/2 w-full" />
            <div className="p-6">
                <h3>{product.price_sign}{product.price}</h3>
                <h2 className="font-bold mb-2 text-center text-2xl">{product.name}</h2>
                <p className="mb-2">{product.description.slice(0,100)}...<a href="#" className=" hover:text-purple-500 underline text-sm">Read More</a></p>
            </div>
                <button className='absolute bottom-0 bg-cyan-500 w-full h-10 text-white hover:bg-cyan-700'>Add to cart</button>
           
        </div>
    )
}

export default Product
