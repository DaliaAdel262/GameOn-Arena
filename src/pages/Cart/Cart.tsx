import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react'
import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../components/MerchSection/MerchSection';

export default function Cart() {
    return (
        <div className='container flex-1 flex-col flex items-center justify-center m-auto py-[60px] gap-8'>

            {/* Header */}
            <div className='w-full'>
                <h1>CART</h1>
                <h2>View your purchase before checking out</h2>
            </div>

            {/* Page Content */}
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Products */}
                    <div className="grid grid-cols-1 gap-10 w-full justify-center">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    {/* Price details */}
                    <div className="flex flex-1 flex-col">
                        <div className='border-b border-primary-purple pb-3'>
                            <h3>Total</h3>
                        </div>

                        <div className="border-b border-primary-purple py-12 px-2">
                            <ul className='flex flex-col gap-2.5'>
                                {products.map((product, i) => (
                                    <li key={i} className='flex flex-1 justify-between'>
                                        <p>{product.title}</p>
                                        <span>${product.price}</span>
                                    </li>
                                ))}
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="w-full flex items-center justify-center gap-3">
                    <ChevronLeft className='text-primary-purple' />
                    {
                        Array.from({ length: 5 }).fill(4).map((_, i) => (
                            <span className='text-primary-purple'>{i + 1}</span>
                        ))
                    }
                    <ChevronRight className='text-primary-purple' />
                </div>
            </div>


        </div>
    )
}
