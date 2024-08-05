import React from "react"
import Business from "./Business"
import { dummyData } from "@/database/dummyData"

export default function Body() {
    return (<div className="flex bg-green-300 h-[75%] p-0">
        <div className="bg-blue-600 mx-20 my-0 h-[100%] w-[100%]">
            <Business businessDetails={dummyData} />

        </div>
    </div>);
};