import { useEffect } from "react";
import Image from 'next/image'


// In Work.tsx or Work.ts
interface ProjectProps {
  work: Array<{ Title: string; Description: string; sections: Object; ImageCover: string }>; // work is an array of objects, each with a sections property
}

const Work: React.FC<ProjectProps> = ({ work

}) => {
  //{console.log('Hi')}
  console.log(work)


  return (
    <div className="mt-4" >
      <h2>Experience</h2>
      <hr className="h-1 mx-auto my-4 bg-[hsl(255,67%,5%)] border-0 rounded  dark:bg-white" />


      <ul className="mt-4">
        {Object.entries(work.sections).map(([key, value]) => (
          <div className="flex flex-col bg-white  border-black border-2 w-3/5 h-3/5 justify-center items-center m-2 rounded-2xl p-2">
            <li className="mt-4" key={key}>
              <h3> {value.Title}</h3>
              <h3>{value.Description}</h3>
              <Image
                src={value.ImageCover}
                width={500}
                height={500}
                alt="Cover Photo" 
                className="p-2"/>

            </li> 
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Work;

