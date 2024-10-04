"use client"

import Introduction from "../components/Introduction";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";

import React, { useEffect, useState } from "react";
import cong from "../configuration"; // Assuming the correct path to your configuration file
import { getDatabase, ref, onValue } from "firebase/database";
interface SectionData {
  id: string;
  sections: {
    Title: string;
    Description: string;
    ImageCover: string;
    Date: string;
    Skills: string;
    Company: string;
  }[];}

export default function Home() {

  const [data, setData] = useState<SectionData[]>([]);
  //console.log("This is the data: ", data)
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

        // Check if dataItem exists
        if (dataItem) {

          // Convert the object values into an array
          const displayItems = Object.keys(dataItem[1]).map((key) => ({
            id: key,
            sections: dataItem[1][key]
          }));
          //console.log("Display Items", displayItems)
          setData(displayItems);
          setLoading(false); // Set loading to false when data is fetched
        }
      });
    };


    // Fetch data when the component mounts
    fetchData();
  }, []);
  return (
    <div className=" flex min-h-full sm:w-full lg:flex-row flex-col  font-[family-name:var(--font-geist-sans)] overflow-hidden">

      {/* First section: Introduction (Left side on PC) */}
      <div className="lg:fixed lg:w-1/2 flex-col w-full items-center justify-center text-center h-screen transform -translate-y-10 ">
        <Introduction/>
      </div>

      {/* Second section: About Me, Work, etc (Right side on PC) */}
      <div className="lg:w-1/2 lg:ml-[50%] w-full flex flex-col items-center lg:pl-20 lg:pr-20 pl-10 pr-10">
        {loading ? (
          <p>Loading...</p> // Show a loading state while fetching data
            ) : (
          <div>
            <AboutMe />
            { data[0] &&<Education education = {data[0].sections}/> }
            { data[2] && <Work work={data[2].sections} />  }
            { data[1] &&<Projects projects = {data[1].sections}/> }
        
          </div>
          )}
      </div>
      
    </div>
  );
}
