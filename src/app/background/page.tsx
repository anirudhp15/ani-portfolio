import React from "react";

export default function BackgroundPage() {
  return (
    <div className="relative z-10 py-20 mx-auto w-full bg-transparent">
      <div className="w-5/6 mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-10">
          My Background
        </h1>

        {/* Experiences Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Experiences</h2>

          {/* Experience Item */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-indigo-300">
                Quantitative Researcher
              </h3>
              <span className="text-white/80">2023 - Present</span>
            </div>
            <h4 className="text-lg text-white/90 mb-3">
              Financial Technology Group
            </h4>
            <p className="text-white/80 leading-relaxed">
              Leading research on market microstructure and algorithmic trading
              strategies. Developed pricing models for complex derivative
              instruments and implemented backtesting frameworks for strategy
              evaluation.
            </p>
          </div>

          {/* Experience Item */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-indigo-300">
                Software Engineering Intern
              </h3>
              <span className="text-white/80">Summer 2022</span>
            </div>
            <h4 className="text-lg text-white/90 mb-3">
              Tech Innovations Inc.
            </h4>
            <p className="text-white/80 leading-relaxed">
              Built and optimized backend systems for high-frequency data
              processing. Collaborated with cross-functional teams to implement
              new features and maintain existing codebase.
            </p>
          </div>

          {/* Experience Item */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-indigo-300">
                Research Assistant
              </h3>
              <span className="text-white/80">2021 - 2022</span>
            </div>
            <h4 className="text-lg text-white/90 mb-3">
              University Mathematics Department
            </h4>
            <p className="text-white/80 leading-relaxed">
              Assisted faculty with research on probabilistic systems and
              stochastic processes. Implemented simulations and data analysis
              procedures using Python and R.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>

          {/* Education Item */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-indigo-300">
                New York University
              </h3>
              <span className="text-white/80">2020 - 2024</span>
            </div>
            <h4 className="text-lg text-white/90 mb-3">
              B.S. Mathematics & Computer Science
            </h4>
            <p className="text-white/80 leading-relaxed">
              Dual major in Mathematics and Computer Science with focus on
              computational finance and algorithms. GPA: 3.9/4.0
            </p>
            <div className="mt-3">
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Algorithms
              </span>
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Machine Learning
              </span>
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Computational Finance
              </span>
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Number Theory
              </span>
            </div>
          </div>

          {/* Education Item */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-indigo-300">
                Advanced Online Coursework
              </h3>
              <span className="text-white/80">2019 - Present</span>
            </div>
            <h4 className="text-lg text-white/90 mb-3">Various Platforms</h4>
            <p className="text-white/80 leading-relaxed">
              Completed specialized courses in quantitative finance, blockchain
              technology, and advanced programming paradigms through platforms
              like Coursera, edX, and MIT OpenCourseWare.
            </p>
            <div className="mt-3">
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Financial Engineering
              </span>
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Blockchain
              </span>
              <span className="inline-block bg-indigo-900/50 text-white/90 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                Data Science
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
