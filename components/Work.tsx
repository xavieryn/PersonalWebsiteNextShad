import { useEffect } from "react";
import Image from 'next/image'


// In Work.tsx or Work.ts
interface ProjectProps {
  work: Array<{ Title: string; Description: string; sections: Object; ImageCover: string; Date: string; Skills: string }>; // work is an array of objects, each with a sections property
}

const Work: React.FC<ProjectProps> = ({ work

}) => {
  //{console.log('Hi')}
  console.log(work)


  return (
    <div className="mt-4 flex flex-col w-full" >
      <div className="m-5">
        <h2>Experience</h2>
        <hr className="h-1 mx-auto my-4 bg-[hsl(255,67%,5%)] border-1 rounded  dark:bg-white" />
      </div>

      <ul className="mt-4">
        {Object.entries(work.sections).map(([key, value]) => (
          <div className="flex flex-col bg-white dark:bg-[hsl(255,67%,5%)] dark:border-white  border-black border-2 w-full h-3/5 justify-center items-center  rounded-2xl p-10">
            <li className="sm:text-xs lg:text-base" key={key}>
              <h3> {value.Title}</h3>
              <h3>{value.Description}</h3>
              <h3>{value.Date}</h3>

              {value.Skills.split(',').map((skill: string, skillIndex: number) => (
                <span key={skillIndex} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {skill.trim()}
                </span>
              ))}
              <Image
                src={value.ImageCover}
                width={300}
                height={40}
                alt="Cover Photo"
                className="p-2" />

            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Work;

