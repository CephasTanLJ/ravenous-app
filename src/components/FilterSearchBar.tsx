import React, { useState } from "react";
import Image from "next/image";
import {filterStates} from "@/Container/SearchbarContainer";

const filterStyle = "p-0 min-w-[150px] my-2 border-2 border-x-0 border-t-0 border-b-black content-end hover:text-slate-400 hover:border-b-slate-400";
const activeFilterStyle = "text-slate-400 border-b-slate-400";

interface FilterSearchBarProps {
    activeFilter: filterStates;
    setActiveFilter: React.Dispatch<React.SetStateAction<any>>;
}

export default function FilterSearchBar(props: FilterSearchBarProps) {

    //OnClickHandler
    const OnClickHandler = (e: React.SyntheticEvent) =>{
        const activeFilter = e.currentTarget.id
        props.setActiveFilter(()=> activeFilter);
    }


    return (
        <div>
            <ul className="flex justify-center align-bottom h-[50px]">
                <li className={`${filterStyle} text-start ${props.activeFilter === "BestMatch" && activeFilterStyle }`} >
                    <button onClick={OnClickHandler} id="BestMatch">Best Match</button>
                </li>
                <li className={`${filterStyle} text-center ${props.activeFilter === "HighestRated" && activeFilterStyle }`}  >
                    <button onClick={OnClickHandler} id="HighestRated">Highest Rated</button>
                </li>
                <li className={`${filterStyle} text-end ${props.activeFilter === "MostReviewed" && activeFilterStyle}`} >
                    <button onClick={OnClickHandler} id="MostReviewed">Most Reviewed</button>
                </li>
            </ul>  

        </div>
    )
}