"use client"

import React from "react";
import FilterSearchBar from "./FilterSearchBar";
import FormSearchBar from "./FormSearchBar";

const styleTemp = {
    "border": "solid red 1px"
};

export default function SearchBar(){
    return (
        <div style = {{
            backgroundImage: `url(/background_search.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
        }} >
            <FilterSearchBar />  
            <FormSearchBar />

        
        </div>
    );
}

// <div className="grid grid-rows-6 grid-cols-6 h-[150px] content-center align-middle">
//     <ul className="flex border border-black row-start-2 col-start-3 col-end-5">
//         <li>Best Match</li>
//         <li>Highest Rated</li>
//         <li>Most Reviewed</li>
//     </ul>
//     <form className="align-middle row-start-3 row-end-7 col-start-2 col-end-6 border border-blue-500 bg-green-300 min-h-[150px] w-[600px]">
//         <div className="flex justify-center m-2 p-0 w-[600px]">
//             <input className={SearchInputClassStyle} placeholder="Search Businesses"/>
//             <input className={SearchInputClassStyle} placeholder="Where?"/>
//         </div>
//         <div className="flex justify-center">
//             <button className="border border-[rgb(109,73,0)] py-1 px-4 m-1 rounded-md bg-[rgb(219,150,12)] text-white hover:shadow-lg hover:bg-[rgb(220,175,84)]" >Let's Go</button>
//         </div>
//     </form>
// </div>