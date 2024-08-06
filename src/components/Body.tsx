import React from "react"
import BusinessContainer from "@/Container/BusinessContainer";

export default function Body() {


    return (<div className="flex bg-green-300 h-[75%] p-0">
        <div className="bg-blue-600 mx-20 my-0 h-[100%] w-[100%]">
            <ul className="flex flex-wrap">
                <BusinessContainer />
            </ul>
        </div>
    </div>);
};