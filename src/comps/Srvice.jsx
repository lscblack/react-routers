import { PiggyBank } from 'lucide-react'
import React from 'react'

const Service = () => {
    return (
        <>
            <div className="p-10 w-5/6 m-auto">
                <h1 className="text-3xl font-bold text-center w-full hover:underline underline-offset-8 cursor-pointer text-gray-900">Our Services</h1>
                <div className="flex gap-2 w-full p-5">
                    {/* {[1, 2, 3].map((data) => (
                        <div className="flex bg-gray-50 p-3 rounded-md gap-5 items-center">
                            <div className="bg-red-100 p-2 rounded-md">
                                <PiggyBank size={45} color='red' />
                            </div>
                            <div className="right">
                                <h2 className="text-lg font-medium text-gray-900">Service 1</h2>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    ))} */}
                    <div className="flex bg-gray-50 p-3 rounded-md gap-5 items-center">
                        <div className="bg-red-100 p-2 rounded-md">
                            <PiggyBank size={45} color='red' />
                        </div>
                        <div className="right">
                            <h2 className="text-lg font-medium text-gray-900">Service 1</h2>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-50 p-3 rounded-md gap-5 items-center">
                            <div className="bg-green-100 p-2 rounded-md">
                                <PiggyBank size={45} color='green' />
                            </div>
                            <div className="right">
                                <h2 className="text-lg font-medium text-gray-900">Service 1</h2>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="flex bg-gray-50 p-3 rounded-md gap-5 items-center">
                            <div className="bg-blue-100 p-2 rounded-md">
                                <PiggyBank size={45} color='blue' />
                            </div>
                            <div className="right">
                                <h2 className="text-lg font-medium text-gray-900">Service 1</h2>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Service
