import React from "react";

const SearchInputStyle = "border border-black w-[300px] mx-3 w-6/12 rounded-sm p-1"

export default function FormSearchBar() {
    return (
        <div>
            <form className="flex flex-col h-[100px] mt-1">
                <div className="flex justify-center" >
                    <input className={SearchInputStyle} placeholder="Search Business" />
                    <input className={SearchInputStyle} placeholder="What?" />
                </div>
                <div className="flex justify-center align-middle my-2" >
                    <button type="submit"
                        className="border border-[rgb(172,126,32)] w-[80px] p-1 rounded-md justify-items-center bg-[rgb(224,153,10)] font-semibold text-white hover:bg-[rgb(90,53,18)] hover:shadow-lg">
                        Let&#39;s Go
                    </button>
                </div>
            </form>
        </div>
        )
};