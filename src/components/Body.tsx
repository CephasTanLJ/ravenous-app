import React from "react"
import BusinessContainer from "@/Container/BusinessContainer";

export default function Body() {


    return (<div className="flex overflow-auto h-[75%] p-0 align-top bg-gray-100">
        <div className=" mx-20 my-0 h-[100%] w-[100%] align-top">
            <ul className="flex flex-wrap align-top justify-center">
                <BusinessContainer />
            </ul>
        </div>
    </div>);
};