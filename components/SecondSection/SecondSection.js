import { animate, inView } from "framer-motion";
import { useEffect } from "react";
export const SecondSection = () => {
  useEffect(() => {
    inView("#in-view", (info) => {
      const aboutMeanimation = animate(
        ".about-me",
        { x: [-1000, 0] },
        { type: "spring", delay: 0.2 }
      );
      const descriptionAnimation = animate(
        ".description",
        { y: [500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      const imageAnimation = animate(
        ".me",
        { x: [500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      return () => {
        aboutMeanimation.stop();
        descriptionAnimation.stop();
        imageAnimation.stop();
      };
    });
  });
  return (
    <section
      id="second-section"
      className="flex items-center justify-around px-10 py-4 top-full  h-screen w-screen absolute"
    >
      <div id="in-view" className="h-full flex justify-center flex-col gap-4">
        <h2 className="about-me text-white text-4xl font-ubuntu font-bold ">
          About <span className="text-orange-400">Me</span>
        </h2>
        <p className="description text-white font-ubuntu text-xl max-w-2xl">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
      <img
        src="/assets/me.jpg"
        className="w-64 h-64 me object-cover rounded-full border-white border-8 shadow-lg"
      />
    </section>
  );
};

export default SecondSection;
