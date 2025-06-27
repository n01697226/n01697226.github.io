const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// enabling CORS for requests from React app port 3000
app.use(cors({ origin: "http://localhost:3000" }));

// overview
const overview = {
  name: "Sahil",
  title: "A creative designer & full-stack developer based in Toronto, Ontario",
  paragraphs: [
    "Currently, I am pursuing a Computer Programming course at Humber Polytechnic, where I am learning to create innovative and efficient digital solutions. Over the semesters, I have completed projects spanning front-end development, back-end systems, database design, and API development.",
    "I am focused on securing a learning opportunity with a dynamic and forward-thinking firm where I can apply my expertise, gain real-world experience, and grow alongside talented professionals. My goal is to contribute meaningfully to impactful projects while constantly learning and evolving as a developer.",
  ],
};

// education
const education = [
  {
    semester: "Semester 01",
    courses: [
      "Database Concepts and Design",
      "Fundamentals of Numeric Computing",
      "Algorithms and Problem Solving",
      "Operating Systems",
      "Web Programming and Design",
      "Technical Reading and Writing Skills",
    ],
  },
  {
    semester: "Semester 02",
    courses: [
      "Database Programming",
      "Statistical Data Analysis",
      "Object-Oriented Programming",
      "Advanced Front-End Programming",
      "Technical Workplace Writing Skills",
      "An Introduction to Arts and Sciences",
    ],
  },
  {
    semester: "Semester 03",
    courses: [
      "Systems Design",
      "Data Structures and Algorithms",
      "Modern Web Technologies",
      "Cross-Platform Mobile Application Development",
      "High-Level Programming Languages",
      "The World Religion",
    ],
  },
  {
    semester: "Semester 04",
    courses: [
      "Application Testing",
      "Principles of Project Management",
      "Network Programming",
      "Advanced Database Programming",
      "Web Application Development",
      "Intro to Psychology",
    ],
  },
];

// experience
const experience = [
  {
    title: "Volunteer",
    description:
      "Assisted peers with Operating Systems concepts. Organized one-on-one help and a Discord community.",
    details: [
      "Helped over 20 students during volunteer sessions",
      "Organized a 'Course Revision' for anyone interested",
      "Started a Discord community for knowledge sharing",
    ],
  },
  {
    title: "Collaborative Project",
    description:
      "Worked on Humber Merch Store, emphasizing teamwork and technical expertise.",
    details: [
      "Designed and developed a fully functional merch store",
      "Effectively divided tasks and achieved milestones on time",
      "Gained hands-on experience with collaboration tools",
    ],
  },
];

// endpoints
app.get("/getOverview", (req, res) => {
  res.json(overview);
});

app.get("/getEducation", (req, res) => {
  res.json(education);
});

app.get("/getExperience", (req, res) => {
  res.json(experience);
});

// starting server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
