export const PORTFOLIO_DATA = {
  profile: {
    name: "James Laurence Talagon",
    role: "Frontend Developer & IT Student",
    school: "Western Institute of Technology",
    year: "2nd year BSIT",
    location: "Iloilo, Philippines",
    email: "jtalagon42@gmail.com",
    status: "Open to Internships"
  },
  skills: [
    { emoji: "💻", title: "Languages", tags: ["HTML5", "CSS3", "JavaScript", "Java"] },
    { emoji: "⚛️", title: "Frameworks & Libraries", tags: ["React", "Next.js", "Node.js", "Express.js"], color: "teal" },
    { emoji: "🗄️", title: "Database", tags: ["MongoDB", "Mongoose", "REST APIs"], color: "green" },
    { emoji: "🎨", title: "UI & Styling", tags: ["Tailwind CSS", "CSS Modules", "Figma", "Responsive Design"] },
    { emoji: "🔧", title: "Tools", tags: ["Git", "GitHub", "Postman", "VS Code"], color: "teal" },
    { emoji: "☁️", title: "Deployment", tags: ["Render", "Vercel", "Netlify", "GitHub Pages"], color: "green" }
  ],
  projects: [
    {
      num: "01",
      title: "Dev Portfolio V1",
      desc: "A professional, dark-themed personal portfolio built with React. Features dynamic theme switching, responsive grid layouts, and a data-driven architecture.",
      tags: ["React", "JavaScript", "CSS Variables"],
      link: "#",
      isEmpty: false
    },
    {
      num: "02",
      title: "Awesome Todos",
      desc: "A full-stack task management application. Features a React frontend, Node/Express backend, and MongoDB for persistent data storage.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://awesometodos-1uij.onrender.com/",
      isEmpty: false
    },
    {
      num: "03",
      title: "Coming Soon...",
      desc: "Working on something new. Stay tuned! 🚀",
      isEmpty: true
    },
    {
      num: "Github Repositories",
      title: "View Projects",
      desc: "A digital task management solution designed to streamline productivity. Features a structured database and a dynamic user interface for real-time status updates.",
      tags: ["HTML","CSS Variables","PHP","MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/cxzucchini?tab=repositories",
      isEmpty: false
    }
  ]
};