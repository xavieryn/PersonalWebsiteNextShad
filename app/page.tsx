"use client"

import Image from "next/image";
import Introduction from "../components/Introduction";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";

import React, { useEffect, useState } from "react";
import cong from "../configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, onValue } from "firebase/database";

export default function Home() {

  const [data, setData] = useState<any[]>([]);
  //console.log("This is the data: ", data)
  console.log(data);
  const [loading, setLoading] = useState(true); // Add a loading state


  useEffect(() => {
    // Initialize the Firebase database with the provided configuration
    const database = getDatabase(cong);
    
    // Reference to the specific collection in the database
    const collectionRef = ref(database, "/");

    // Function to fetch data from the database
    const fetchData = () => {
      // Listen for changes in the collection
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        //console.log(dataItem)

        // Check if dataItem exists
        if (dataItem) {
          console.log(dataItem[1]['Education'])

          // Convert the object values into an array
          const displayItems = Object.keys(dataItem[1]).map((key) => ({
            id: key,
            sections: dataItem[1][key]
          }));
          console.log("Display Items", displayItems)
          setData(displayItems);
          setLoading(false); // Set loading to false when data is fetched
        }
      });
    };


    // Fetch data when the component mounts
    fetchData();
  }, []);
  return (


    <div className=" flex min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="lg:fixed lg:w-1/2 lg:flex lg:flex-col items-center    ">
        <div className="m-auto"> <Introduction/></div>
        
      </div>

      <div className="lg:w-1/2 lg:ml-[50%] lg:flex lg:flex-col items-center pl-20 pr-20">
        {loading ? (
          <p>Loading...</p> // Show a loading state while fetching data
            ) : (
          <div>
            <AboutMe/>
            { <Work work={data[3]} />  }
            {/* <Projects projects = {data[2]}/> */}
            <Education education = {data[0]}/>
            {/* <Hobbies hobbies = {data[1]}/> */}
        
          </div>
          )}
      </div>
      
    </div>
  );
}
