// In Work.tsx or Work.ts
interface WorkProps {
    items: any[]; // You can replace `any[]` with a more specific type if known
  }
  
  const Work: React.FC<WorkProps> = ({ items }) => {
    //{console.log('Hi')}

    return (
      <div>
        <h2>Work Experience</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Modify based on the structure of `item`
          ))}
        </ul>
      </div>
    );
  };
  
  export default Work;
  