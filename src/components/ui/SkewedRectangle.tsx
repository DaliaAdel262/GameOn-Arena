import React from 'react'

export default function SkewedRectangle({children}: {children: React.ReactNode}) {
  return (
    <div className="lg:w-lg xl:w-xl bg-secondary-pink h-0 relative h-[95px]">
        <div className="absolute top-0 left-full w-0 h-full border-l-[45px] border-l-secondary-pink border-t-[95px] border-t-transparent"></div>
        <div className="bg-secondary-pink absolute -left-30  w-[50px] h-full -skew-x-[25deg]"></div>
        <div className="bg-secondary-pink absolute -right-30  w-[50px] h-full skew-x-[25deg]"></div>
        <div className="absolute top-0 right-full w-0 h-full border-r-[45px] border-r-secondary-pink border-t-[95px] border-t-transparent"></div>

      {children}
    </div>
  )
}
