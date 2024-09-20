import { useEffect } from "react";

// In Work.tsx or Work.ts
interface ProjectProps {
  hobbies: Array<{ Title: string; Description: string  }>; // hobbies is an array of objects, each with a sections property
}
  
  const Hobbies: React.FC<ProjectProps> = ({ hobbies }) => {
    //{console.log('Hi')}
    console.log(hobbies)
    return (
      <div>
        <h2>Hobbies Experience</h2>
        <ul>
          {Object.entries(hobbies).map(([key, value]) => (

            <li> 
               <h3> {value.Title}</h3>
               <h3>{value.Description}</h3>

                <h3>Hello?</h3>
                {/* {value.title} */}
            </li> // Modify based on the structure of `item`
          )) }
        </ul>
      </div>
    );
  };
  
  export default Hobbies;

