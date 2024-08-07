"use client"

import React, {useState, useEffect} from "react";
import FilterSearchBar from "../components/FilterSearchBar";
import FormSearchBar from "../components/FormSearchBar";

const styleTemp = {
    "border": "solid red 1px"
};

export type filterStates = "BestMatch" | "HighestRated" | "MostReviewed"

export default function SearchBarContainer(){
    const [activeFilter, setActiveFilter] = useState<filterStates>("BestMatch");
    const [businessType, setBusinessType] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    //Change viewing function when active filter change
    useEffect(()=>{
    },[activeFilter])

    return (
        <div style = {{
            // Background Image fpr SearchBar
            backgroundImage: `url(/background_search.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
        }} >
            <FilterSearchBar activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>  
            <FormSearchBar businessType={businessType} setBusinessType={setBusinessType}
            location={location} setLocation={setLocation}/>
        </div>
    );
}
