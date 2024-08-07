"use client"

import React from "react";
import FilterSearchBar from "../components/FilterSearchBar";
import FormSearchBar from "../components/FormSearchBar";

const styleTemp = {
    "border": "solid red 1px"
};

export default function SearchBarContainer(){
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
