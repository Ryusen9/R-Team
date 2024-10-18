import { useRef } from "react";
import Card from "./Card";

const DashboradHome = () => {
    const ref = useRef(null);
  return (
    <div ref={ref} className="absolute top-20 w-full h-[90%] flex flex-wrap gap-2 p-3 z-0 overflow-hidden">
      <Card reference={ref} />
    </div>
  );
};

export default DashboradHome;
