import React from "react"
import Title from "./Title"
import SearchBarContainer from "../Container/SearchbarContainer"

export default function Header() {
    return (
        <div className="border border-black min-h-[180px] h-[25%] m-0">
            <Title />
            <SearchBarContainer />
        </div>
    )
}