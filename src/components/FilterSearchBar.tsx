import React, { useState } from "react";
import Image from "next/image";

const filterStyle = "min-w-[150px] my-2 border-2 border-x-0 border-t-0 border-b-black content-end hover:text-slate-400 hover:border-b-slate-400";

export default function FilterSearchBar() {
    return (
        <div>
            <ul className="flex justify-center align-bottom h-[50px]">
                <li className={`${filterStyle} text-start`}>
                    <button>Best Match</button>
                </li>
                <li className={`${filterStyle} text-center`}>
                    <button>Highest Rated</button>
                </li>
                <li className={`${filterStyle} text-end`}>
                    <button>Most Reviewed</button>
                </li>
            </ul>  

        </div>
    )
}