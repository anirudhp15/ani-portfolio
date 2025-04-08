export interface Project {
  title: string;
  date: string;
  brief: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  codeUrl: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: "RSSLive Feed",
    date: "Feb 2025",
    brief:
      "Developed a Python script to aggregate RSS feeds from multiple sources and display them in a unified format.",
    description:
      "This Python script aggregates RSS feeds from multiple sources and displays them in a unified format. It allows users to stay updated on news, blogs, and other content from various websites.",
    imageUrl: "/images/projects/rss.jpg",
    projectUrl: "#",
    codeUrl: "#",
    tools: [
      "C",
      "FinBERT",
      "RSS",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "GitHub Actions",
    ],
  },
  {
    title: "Quantercise",
    date: "July 2024 - Present",
    brief:
      "A platform for students to enhance their quantitative skills for trading and analyst internships through interactive exercises.",
    description:
      "Quantercise provides a set of interactive exercises designed to help students improve their quantitative skills for finance and trading. It helps aspiring analysts and traders prepare for internships in competitive fields.",
    imageUrl: "/images/projects/quantercise.jpg",
    projectUrl: "https://quantercise.com",
    codeUrl: "#",
    tools: ["MERN Stack", "OpenAI", "Framer Motion", "Firebase"],
  },
  {
    title: "SPY Volatility Analysis with kdb+/q",
    date: "Feb 2025",
    brief:
      "Developed a kdb+/q database to analyze SPY options data for volatility trading strategies.",
    description:
      "Created a kdb+/q database to analyze SPY options data for volatility trading strategies. The system stores historical options data and allows for the analysis of both implied and realized volatility.",
    imageUrl: "/images/projects/spykdb.jpg",
    projectUrl: "#",
    codeUrl: "https://github.com/anirudhp15/kdb-spy",
    tools: ["kdb+", "q", "Python", "Data Analysis"],
  },
  {
    title: "TaskSpin",
    date: "Jan 2025",
    brief:
      "A Google Chrome task management web extension that gamifies productivity through a spinning wheel.",
    description:
      "TaskSpin is a web extension that turns task management into a game by allowing users to spin a wheel to determine their next task. It offers an interactive and fun way to increase productivity through gamification.",
    imageUrl: "/images/projects/taskspin.jpg",
    projectUrl: "https://taskspin.com",
    codeUrl: "#",
    tools: ["React", "Node.js", "TailwindCSS", "MongoDB"],
  },
  {
    title: "Parameterized Momentum Trading",
    date: "June 2024",
    brief:
      "Developed a Python script for automating momentum trading strategies on DJIA constituents, using a hyperparameterized approach to optimize performance over 20 years.",
    description:
      "This Python script automates momentum trading strategies on DJIA constituents using hyperparameter optimization. The model adjusts trading decisions based on market conditions and evaluates the strategy over a 20-year period.",
    imageUrl: "/images/projects/momentum_trading.jpg",
    projectUrl:
      "https://github.com/anirudhp15/momentum-trading/blob/main/Parameter_Tuning_in_Momentum_Strategies.pdf",
    codeUrl:
      "https://github.com/anirudhp15/momentum-trading/blob/main/momemtum.ipynb",
    tools: ["Python", "Scikit-learn", "NumPy", "Matplotlib", "DataBento"],
  },
  {
    title: "HabitTracks",
    date: "Aug 2024",
    brief:
      "Developed an analytics dashboard to monitor realtime music artist trends for Atlantic Records subsidiary",
    description:
      "HabitTracks provides an analytics dashboard that monitors real-time trends of music artists. It helps Atlantic Records subsidiary track key metrics and trends for artists within their portfolio.",
    imageUrl: "/images/projects/habittracker.jpg",
    projectUrl: "#",
    codeUrl: "#",
    tools: [
      "SQLite",
      "Python",
      "Chartmetric API",
      "CrawlScrape",
      "Streamlit",
      "Cron",
    ],
  },
];
