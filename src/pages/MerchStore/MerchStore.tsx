import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react'
import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { products } from '../../components/MerchSection/MerchSection';

export default function MerchStore() {
    return (
        <div className='container flex-1 flex-col flex items-center justify-items-start m-auto py-[60px] gap-8'>

            {/* Header */}
            <div className='w-full'>
                <h1 className='font-syncopate font-bold'>SHOP OUR MERCHANDISE</h1>
                <h2>Get the latest Game Arena gear!</h2>
            </div>

            {/* Page Content */}
            <div className="w-full flex flex-col items-center justify-center gap-6">
                {/* Search + Filter */}
                <div className="w-full flex-1 flex items-center justify-between">
                    <div className="border-1 border-primary-purple w-117 px-2 py-1 flex gap-2.5 rounded-10">
                        <Search className='text-primary-purple' />
                        <p className='text-primary-purple'>Search</p>
                    </div>
                    <button className='bg-secondary-pink px-[7px] py-[5.5px] rounded-10'>
                        <Filter />
                    </button>
                </div>

                {/* Products */}
                <div className="w-full flex flex-col gap-2.5">
                    <div className="flex flex-col md:flex-row flex-wrap items-stretch gap-10 w-full justify-center">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="w-full flex items-center justify-center gap-3">
                    <ChevronLeft className='text-primary-purple' />
                    {
                        Array.from({ length: 5 }).fill(4).map((_, i) => (
                            <span key={i} className='text-primary-purple'>{i + 1}</span>
                        ))
                    }
                    <ChevronRight className='text-primary-purple' />
                </div>
            </div>


        </div>
    )
}
