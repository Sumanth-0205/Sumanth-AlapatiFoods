
import React, {useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { CartContext } from '../components/CartContext';
import QuantityButton from './QuantityButton';

const productsList = [
        {
            id: 1,

            name: "Chicken Biryani",
            price: 25000,

            imgsrc: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 2,

            name: "Fried rice",
            price: 10000,

            imgsrc: "https://images.pexels.com/photos/6937454/pexels-photo-6937454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 3,

            name: "Butter naan",
            price: 7500,

            imgsrc: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 4,

            name: "Egg biryani",
            price: 35000,

            imgsrc: "https://images.pexels.com/photos/31537384/pexels-photo-31537384/free-photo-of-delicious-biryani-with-boiled-egg-and-naan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 5,

            name: "MANDI",
            price: 45000,


            imgsrc: "https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 6,

            name: "Meals",
            price: 30000,

            imgsrc: "https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 7,

            name: "Noodles",
            price: 15000,

            imgsrc: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 8,

            name: "PASTA",
            price: 25000,


            imgsrc: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },


    ]

function Products() {


 const { handleUpdateCart } = useContext(CartContext);

    console.log("Products List:", productsList);



    return (
        <div className="grid grid-cols-4 gap-2 mt-0 mb-2 bg-yellow-500 ">
            {
                productsList.map((product) => (
                    <div className="border border-red-900 bg-blue-200 p-3 rounded-md">
                        <div key={product.id} className="w-40 border border-red-900 bg-yellow-500 p-2 rounded-md ml-23 ">
                            <img className="w-40 h-40 " src={product.imgsrc} alt="no image" />
                        </div>

                        <div className="flex space-x-25 ">
                            <h2 className="m-0 mt-2 p-2 ml-15">{product.name}- {product.price / 100}</h2>
                            
                            <QuantityButton product={product} onUpdate={handleUpdateCart} />
                           
                        </div>

                    </div>
                ))
            }
          
        </div>

    );
}


export default Products;