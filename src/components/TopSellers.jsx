import React from 'react';
import buyIcon from '../assets/buy.svg';

const products = [
    { 
        name: "Apple Airpods Pro",
        price: "299 000 so’m",
        description: "simsiz quloqchin , Oq rangda",
        orders: "1230 ta buyurtma",
        img: buyIcon 
    },
    { 
        name: "Apple Macbook Pro",
        price: "16 114 285 so’m",
        description: "13\" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
        orders: "230 ta buyurtma",
        img: buyIcon 
    },
    { 
        name: "Apple watch 4",
        price: "4 234 000 so’m",
        description: "Robot - tozalagich Xiaomi Mi Robot",
        orders: "543 ta buyurtma",
        img: buyIcon 
    },
    { 
        name: "Robot - tozalagich Xiaomi Mi Robot",
        price: "1 340 000 so’m",
        description: "Oynali Fotoaparat Canon EOS 6D Body",
        orders: "876 ta buyurtma",
        img: buyIcon 
    },
    { 
        name: "Oynali Fotoaparat Canon EOS 6D Body",
        price: "4 465 000 so’m",
        description: "Fotoaparat Apple Watch Series 5 GPS Cellular",
        orders: "342 ta buyurtma",
        img: buyIcon 
    }
];

function TopSellers() {
    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Topsellers</h2>
            <div className="grid grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="border rounded overflow-hidden">
                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-gray-500">{product.description}</p>
                            <p className="text-gray-500">{product.price}</p>
                            <p className="text-gray-500">{product.orders}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopSellers;
