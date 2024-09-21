import { useEffect } from "react";

// In Work.tsx or Work.ts
interface ProjectProps {
  projects: Array<{ Title: string; Description: string  }>; // projects is an array of objects, each with a sections property
}
  
  const Projects: React.FC<ProjectProps> = ({ projects }) => {
    //{console.log('Hi')}
    console.log(projects)
    return (
      <div>
        <h2>Project Experience</h2>
        <ul>
          {Object.entries(projects).map(([key, value]) => (

            <li> 
               <h3> {value.Title}</h3>
               <h3>{value.Description}</h3>

                   
                {/* {value.title} */}
            </li> // Modify based on the structure of `item`
          )) }
        </ul>
      </div>
    );
  };
  
  export default Projects;

