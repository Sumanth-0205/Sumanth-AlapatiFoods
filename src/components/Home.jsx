//Navbar

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Home({onClick}) {
  return (
    <>
    <div className="flex space-x-185 mt-2 bg-teal-500 p-6">
      <div className="flex space-x-6">

        {/* <img src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="100" height="100" /> */}

        <Link to="/products">
          <button
            onClick={
              () => onClick(hover)}
            className="focus:outline-none focus:ring-5 focus:ring-red-500 px-6 py-6 me-3 mb-3 rounded-lg bg-red-600 hover:bg-red-400 " width="100" height="50"  >

            main course</button>
        </Link>

        <Link to="/orders">
          <button
            onClick={
              () => onClick(hover)}


            className="focus:outline-none focus:ring-5 focus:ring-red-500 px-6 py-6 me-3 mb-3 rounded-lg bg-red-600 hover:bg-red-400" width="100" height="50"
          >

            desserts</button>
        </Link>

      </div>

    <Link to="/cart">
      <button

        className='focus:outline-none focus:ring-5 focus:ring-orange-500 px-6 py-6 me-3 mb-3 rounded-lg bg-orange-600 hover:bg-red-400" width="100" height="50"'>
        <FontAwesomeIcon icon={faCartPlus} size="2x" />Add cart
      </button>
      </Link>
           
    </div>
          
     
         </>
  )
}

export default Home;

