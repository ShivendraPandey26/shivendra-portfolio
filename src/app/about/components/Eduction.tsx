"use client";
import React from 'react';

const Education = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Education</h1>
                <div className="space-y-6">
                    {/* Bachelor of Technology */}
                    <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-700">Bachelor of Technology in Computer Science</h2>
                        <p className="text-gray-600">Shri Shankaracharya Institute of Professional Management and Technology, Raipur</p>
                        <p className="text-gray-500">2022 - 2026</p>
                    </div>
                    
                    {/* CBSE 12th */}
                    <div className="p-4 border-l-4 border-green-500 bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-700">CBSE 12th (PCM)</h2>
                        <p className="text-gray-600">Daffodils English School</p>
                        <p className="text-gray-500">2021 - 2022</p>
                    </div>
                    
                    {/* CBSE 10th */}
                    <div className="p-4 border-l-4 border-yellow-500 bg-gray-50">
                        <h2 className="text-xl font-semibold text-gray-700">CBSE 10th</h2>
                        <p className="text-gray-600">Daffodils English School</p>
                        <p className="text-gray-500">2019 - 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;

