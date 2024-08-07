"use client"

import React, {useState, useEffect} from "react";
import { BusinessProps } from "@/components/Business";
import Business from "@/components/Business";

// To load the database
const str = [0, 1, 2, 3, 4, 5];
const dummyDataLocation = str.map( i => `database/dummyData${i}.json`);

//Helper function to compare objects
const compareObj = (obj1: any, obj2: any) =>{
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export default function BusinessContainer(){
    const [restaurantsData, setRestaurantsData] = useState<BusinessProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [numOfRes, setNumOfRes] = useState<number>(0);

    useEffect(()=>{
        dummyDataLocation.forEach(resURL => fetchDummyData(resURL));
        return () => {setRestaurantsData([])}
    },[])

    //Fetch dummy data function
    const fetchDummyData = async (resURL: string) => {
        try {
            const response = await fetch(resURL, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }); 
            const data= await response.json();
            setRestaurantsData((prev) => {
                    //Check if the object already exists
                    setLoading(false); //Data available for loading
                    if (prev.find((resObj) => compareObj(resObj, data))){
                        return [...prev];
                    } else {
                        return [...prev, data];
                    }    
                
                    
            });

        } catch (error) {
            console.log(`something wrong with file ---${resURL}--- loading...`);
        };

    } 
    
    
    // (<>{!loading ? <p>{JSON.stringify(restaurantsData)}</p> : <p>loading...</p>}</>)
    
    return (<>

        {!loading && restaurantsData.map((restaurantObj) => {
                return (
                <li key={restaurantObj.name} className="flex">
                    <Business businessDetails={{...restaurantObj}} />
                </li>
                );
            }) 
        }
    
    </>);
}