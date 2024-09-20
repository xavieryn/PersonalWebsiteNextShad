import { useEffect } from "react";

// In Work.tsx or Work.ts
interface WorkProps {
    work: any[]; // You can replace `any[]` with a more specific type if known
  }
  
  const Work: React.FC<WorkProps> = ({ work }) => {
    //{console.log('Hi')}
    console.log(work)
    return (
      <div>
        <h2>Work Experience</h2>
        <ul>
          {/* work.map((item, index) => (
            <li key={index}>{item}</li> // Modify based on the structure of `item`
          )) */}
        </ul>
      </div>
    );
  };
  
  export default Work;
  