import React from 'react';
import category1 from '../assets/category1.svg';
import category2 from '../assets/category2.svg';
import category3 from '../assets/category3.svg';
import category4 from '../assets/category4.svg';
import category5 from '../assets/category5.svg';
import category6 from '../assets/category6.svg';
import category7 from '../assets/category7.svg';
import category8 from '../assets/category8.svg';

const categories = [
    "Smartfonlar",
    "Kompyuterlar va noutbuklar",
    "Televizorlar",
    "Aqlli soatlar",
    "Quloqchinlar",
    "Konditsioner",
    "Sovutkichlar",
    "Kir yuvish mashinalari"
];

const categoryImages = [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8
];

function Categories() {
    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Kategoriyalar</h2>
            <div className="grid grid-cols-8 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded text-center">
                        <img src={categoryImages[index]} alt={category} className="mb-2" />
                        {category}
                    </div>
                ))}
                <div className="flex flex-col items-center p-4 border rounded text-center col-span-8">
                    Batafsil
                </div>
            </div>
        </section>
    );
}

export default Categories;
