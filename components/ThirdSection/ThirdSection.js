import { useEffect } from "react";
import { useThirdSection } from "./useThirdSection";
import { animate, inView } from "framer-motion";

export const ThirdSection = () => {
  useEffect(() => {
    inView("#in-view2", (info) => {
      const chartAnimation = animate(
        ".chart",
        { y: [200, 0], scale: [0, 1] },
        { type: "spring", stiffness: 200, delay: 0.5, duration: 1.5 }
      );

      return () => {
        chartAnimation.stop();
      };
    });
  });
  const { options, data, Bar } = useThirdSection();
  return (
    <section className="h-screen w-screen absolute top-200">
      <div
        id="in-view2"
        className="w-full md:p-56 p-4 h-full flex items-center justify-center"
      >
        <div className="chart relative w-full h-full flex items-center justify-center">
          <Bar options={options} data={data} />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
