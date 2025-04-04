import { Play } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { Star } from 'lucide-react'
import React from 'react'

const HeroComp = () => {
    return (
        <>
            <div style={{ background: "url(https://img.nowrunning.com/content/movie/2024/case-29889/bg_case-no15.jpg)" }} className="h-[500px] w-full bg-slate-600">
                <div className="flex p-10 w-5/6 h-full items-center">
                    <div className="left">
                        <h1 className="text-white text-4xl font-extrabold mb-3">Cold Meat</h1>
                        <p className="text-white text-lg">A thrilling and heartwarming drama about a young man<br></br> who discovers a mysterious and powerful meat that will change the course of his life.</p>
                        <div className="flex gap-2 mt-2 mb-3">
                            <Star color='yellow' />
                            <Star color='yellow' />
                            <Star color='yellow' />
                            <Star color='yellow' />
                            <Star color='yellow' />
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="bg-red-500 text-white rounded-lg p-2 flex px-7 gap-3"><ShoppingCart/> Buy Now</a>
                            <a href="#" className="bg-blue-500 text-white rounded-lg p-2 flex px-7 gap-3"><Play/> Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComp
