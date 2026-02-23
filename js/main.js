console.log("JS connected");

let currentTab = "all";

const jobs = [
  {
    id: 1,
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description: "Build responsive user interfaces using HTML, CSS, and JavaScript.",
    status: "all"
  },
  {
    id: 2,
    position: "Backend Developer",
    location: "New York",
    type: "Part-time",
    salary: "$60,000 - $80,000",
    description: "Work with APIs and databases.",
    status: "all"
  },
  {
    id: 3,
    position: "UI/UX Designer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description: "Design user-friendly interfaces and improve user experience.",
    status: "all"
  },
  {
    id: 4,
    position: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description: "Build cross-platform mobile apps.",
    status: "all"
  },
  {
    id: 5,
    position: "Data Analyst",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    description: "Analyze datasets and present insights to the team.",
    status: "all"
  },
  {
    id: 6,
    position: "DevOps Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Maintain cloud infrastructure and CI/CD pipelines.",
    status: "all"
  },
  {
    id: 7,
    position: "QA Tester",
    location: "Remote",
    type: "Contract",
    salary: "$40/hr - $55/hr",
    description: "Test web apps and report bugs clearly.",
    status: "all"
  },
  {
    id: 8,
    position: "Product Manager",
    location: "San Francisco",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description: "Plan roadmap and coordinate with engineering and design.",
    status: "all"
  }
];

function renderJobs(){
    const container = document.getElementById('jobscontainer');
}