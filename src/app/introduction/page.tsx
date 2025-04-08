import React from "react";

export default function IntroductionPage() {
  return (
    <div className="relative z-10 py-20 mx-auto w-full bg-transparent">
      <div className="w-5/6 mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10">
          About Me
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl">
          <p className="text-xl text-white mb-6 leading-relaxed">
            I'm Anirudh Pottammal, a math and computer science student based in
            NYC. I'm passionate about the intersection of mathematics,
            programming, and finance.
          </p>

          <p className="text-xl text-white mb-6 leading-relaxed">
            My interests span across various fields including probabilistic
            systems, combinatorial optimization, machine learning, and
            quantitative finance. I enjoy solving complex problems and building
            innovative solutions.
          </p>

          <p className="text-xl text-white mb-6 leading-relaxed">
            When I'm not coding or solving math problems, I practice magic
            tricks and explore the city. I believe in continuous learning and
            applying theoretical knowledge to practical challenges.
          </p>

          <p className="text-xl text-white leading-relaxed">
            Feel free to explore my projects or reach out if you'd like to
            collaborate on interesting problems!
          </p>
        </div>
      </div>
    </div>
  );
}
