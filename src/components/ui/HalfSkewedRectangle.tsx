import React from 'react'

export default function HalfSkewedRectangle({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full md:w-md lg:w-2xl xl:w-3xl bg-secondary-pink h-0 relative h-[57px]">
        <div className="absolute top-0 left-full w-0 h-full md:border-l-[45px] border-l-secondary-pink md:border-b-[57px] md:border-b-transparent"></div>
        <div className="hidden md:block bg-secondary-pink absolute -right-30  w-[50px] h-full -skew-x-[38deg]"></div>
        <div className="hidden md:block bg-secondary-pink absolute -right-54  w-[50px] h-full -skew-x-[38deg]"></div>

      {children}
    </div>
  )
}
