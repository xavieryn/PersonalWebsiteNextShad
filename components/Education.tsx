import { useEffect } from "react";

// In Work.tsx or Work.ts
interface ProjectProps {
  education: Array<{ Title: string; Description: string; sections: Object}>; // education is an array of objects, each with a sections property
}
  
  const Education: React.FC<ProjectProps> = ({ education

   }) => {
    //{console.log('Hi')}
    console.log(education)
  
    
    return (
      <div className="mt-4" >
        <h2>Education Experience</h2>
        <ul className="mt-4">
          {Object.entries(education.sections).map(([key, value]) => (

            <li className="mt-4" key={key}> 
               <h3> {value.Title}</h3>
               <h3>{value.Description}</h3>

                   
            </li> // Modify based on the structure of `item`
          )) }
        </ul>
      </div>
    );
  };
  
  export default Education;

