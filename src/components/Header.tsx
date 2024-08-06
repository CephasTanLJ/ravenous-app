import React from "react"
import Title from "./Title"
import SearchBar from "./Searchbar"

export default function Header() {
    return (
        <div className="border border-black min-h-[180px] h-[25%] m-0">
            <Title />
            <SearchBar />
        </div>
    )
}