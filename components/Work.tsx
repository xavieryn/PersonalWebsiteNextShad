import { useEffect } from "react";
import Image from 'next/image'


// In Work.tsx or Work.ts
interface ProjectProps {
  work: Array<{ Title: string; Description: string; sections: Object; ImageCover: string}>; // work is an array of objects, each with a sections property
}
  
  const Work: React.FC<ProjectProps> = ({ work

   }) => {
    //{console.log('Hi')}
    console.log(work)
  
    
    return (
      <div className="mt-4" >
        <h2>Work Experience</h2>
        <ul className="mt-4">
          {Object.entries(work.sections).map(([key, value]) => (

            <li className="mt-4" key={key}> 
               <h3> {value.Title}</h3>
               <h3>{value.Description}</h3>
               <Image 
               src={value.ImageCover}
               width={500}
               height={500}
               alt="Cover Photo"/>

            </li> // Modify based on the structure of `item`
          )) }
        </ul>
      </div>
    );
  };
  
  export default Work;

