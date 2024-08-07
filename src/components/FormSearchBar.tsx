import React, { ChangeEvent, SetStateAction } from "react";


interface formProps {
    businessType: string;
    setBusinessType: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInputStyle = "border border-black w-[300px] mx-3 w-6/12 rounded-sm p-1"

export default function FormSearchBar(props: formProps) {
    //Handler for input Business
    const bussinessInput = (e: React.SyntheticEvent<Element, ChangeEvent>) => {
            console.log((e.currentTarget as HTMLInputElement).value);
            
    }

    //Handler for input What
    const locationInput = (e: React.SyntheticEvent) => {

    }

    return (
        <div>
            <form className="flex flex-col h-[100px] mt-1">
                <div className="flex justify-center" >
                    <input className={SearchInputStyle} placeholder="Search Business" onChange={bussinessInput}/>
                    <input className={SearchInputStyle} placeholder="What?" onChange={locationInput}/>
                </div>
                <div className="flex justify-center align-middle my-2" >
                    <button
                        className="border border-[rgb(172,126,32)] w-[80px] p-1 rounded-md justify-items-center bg-[rgb(224,153,10)] font-semibold text-white hover:bg-[rgb(90,53,18)] hover:shadow-lg">
                        Let&#39;s Go
                    </button>
                </div>
            </form>
        </div>
        )
};