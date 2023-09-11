import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.slice(0,6))
            })
    }, [])
    return (
        <div className='py-20 px-28 bg-teal-50'>
            <div className='text-center uppercase mb-10'>
                <p className='tracking-wider'>Top Branded</p>
                <h1 className='text-3xl font-bold font-serif tracking-widest'>Products</h1>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => 
                    <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    )
}

export default Products
