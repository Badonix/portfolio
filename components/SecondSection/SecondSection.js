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
      const authorAnimation = animate(
        ".author",
        { x: [-500, 0], opacity: [0, 1] },
        { type: "spring", delay: 0.2 }
      );
      return () => {
        aboutMeanimation.stop();
        descriptionAnimation.stop();
        imageAnimation.stop();
        authorAnimation.stop();
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
          Hi, I'm Nick, a 17-year-old high school senior deeply passionate about
          web development for the past 2.5 years. With 4 years of coding
          experience, I bring a blend of creativity and technical proficiency to
          every project. Outside the digital realm, I adore cats and find joy in
          solving math problems. Let's bring your ideas to life!
        </p>
        <p className="author text-gray-400 italic font-ubuntu self-end">
          ... (Thanks to ChatGPT)
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
