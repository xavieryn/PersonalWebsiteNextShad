// In Work.tsx or Work.ts
interface ProjectProps {
  education: Array<{ Title: string; Description: string}>; // education is an array of objects, each with a sections property
}

const Education: React.FC<ProjectProps> = ({ education

}) => {
  //console.log(education)
  
  return (
    <div className="mt-4" id="Education">

      <div className="m-5">
        <p className="sm:text-base lg:text-xl">Education</p>
        <hr className="h-1 mx-auto my-4 bg-[hsl(255,67%,5%)] border-1 rounded  dark:bg-white" />
      </div>

      <ul className="mt-4 pb-5">
        {Object.entries(education).map(([key, value]) => (

          <li className="flex flex-col bg-[hsl(40, 20%, 97%)] dark:bg-[hsl(245,23%,14%)] dark:border-white  border-black border-2 w-full mx-auto max-w-full h-3/5  rounded-2xl lg:p-5 p-2 m-4" key={key}>
            <h3 className="lg:text-xl font-bold p-1"> {value.Title}</h3>
            <h3>{value.Description}</h3>
          </li> // Modify based on the structure of `item`
        ))}
      </ul>
    </div>
  );
};

export default Education;

