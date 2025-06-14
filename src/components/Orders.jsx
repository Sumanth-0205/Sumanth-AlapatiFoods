 import { Link } from "react-router-dom";
 import React, {useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../components/CartContext';
import QuantityButton from './QuantityButton';



  const ordersList = [
        {
            id: 1,
            
            name: "Orange juice",
            price: 10000,
            
            imgsrc: "https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 2,
           
            name: "water-melon juice",
            price: 5000,
           
            imgsrc: "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 3,
           
            name: "Choclate ice-cream",
            price: 25000,
            
            imgsrc: "https://images.pexels.com/photos/28309088/pexels-photo-28309088/free-photo-of-ice-cream-cones-with-nuts-and-chocolate-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 4,
            
            name: "Strawberry milkshake",
            price: 35000,
           
            imgsrc: "https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 5,
           
            name: "Fruit-bowl",
            price: 20000,
            
            
            imgsrc: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

         {
            id: 6,
           
            name: "Lassi",
            price: 3000,
            
            imgsrc: "https://images.pexels.com/photos/18142603/pexels-photo-18142603/free-photo-of-cold-drink-in-a-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 7,
            
            name: "cake",
            price: 15000,
           
            imgsrc: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id: 8,
           
            name: "cup cake",
            price: 29000,
            
            
            imgsrc: "https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },


    ]

    function Orders (){

        const { handleUpdateCart } = useContext(CartContext);
        
            console.log("Orders List:", ordersList);

  return (
     <div className="grid grid-cols-4 gap-2 mt-0 bg-yellow-500 ">
            {
                ordersList.map((order) => (
                    <div className="border border-red-900 bg-blue-400 p-3 rounded-md">
                        <div key={order.id} className="w-40 border border-red-900 bg-green-500 p-2 rounded-md ml-23 ">
                            <img className="w-40 h-40" src={order.imgsrc} alt="no image" />
                        </div>

                    

                        <div className="flex space-x-25 ">
                            <h2 className="m-0 mt-2 p-2 ml-15">{order.name}- {order.price/100}</h2> 
                        

                        <QuantityButton product={order} onUpdate={handleUpdateCart}/>
                        </div>

                                  </div>
                ))
            }
        </div>

    );
}
  

export default Orders;