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

// Create container helper
function getJobsContainer() {
    return document.getElementById('jobsContainer');
}


// function to filter jobs
function getFilteredJobs() {
    if (currentTab === 'all') {
        return jobs;
    }

    return jobs.filter(function (job) {
        return job.status === currentTab;
    });
}

// update tab count function
function updateTabCount(count) {
    const textElement = document.getElementById('tabcount');
    textElement.innerText = count + " jobs";
}

// empty state function
function renderEmptyState(container) {
    container.innerHTML = `
    <div class="w-full flex items-center justify-center">
      <div class="bg-base-100 rounded-lg border border-base-300 w-full p-10 text-center">
        <img src="assets/jobs.png" class="mx-auto w-20 mb-4" />
        <h3 class="text-lg font-semibold">No jobs available</h3>
        <p class="text-sm opacity-70">Check back soon for new job opportunities</p>
      </div>
    </div>
    `;
}


// job card creating function
function createJobCard(job) {
    let statusBadge = "";

    if (job.status === "all") {
        statusBadge = `<span class="badge badge-neutral">NOT APPLIED</span>`;
    } else if (job.status === "interview") {
        statusBadge = `<span class="badge badge-success">INTERVIEW</span>`;
    } else if (job.status === "rejected") {
        statusBadge = `<span class="badge badge-error">REJECTED</span>`;
    }

    return `
    <div class="card bg-base-100 shadow border border-base-300">
      <div class="card-body">

        <div class="flex justify-between items-start">
          <div>
            <h2 class="font-semibold text-lg">${job.position}</h2>
            <p class="text-sm opacity-70">${job.location} • ${job.type} • ${job.salary}</p>
          </div>
          <button onclick="deleteJob(${job.id})" class="btn btn-ghost btn-sm">🗑️</button>
        </div>

        <div class="mt-2">
          ${statusBadge}
        </div>

        <p class="text-sm mt-2">${job.description}</p>

        <div class="flex flex-wrap gap-2 mt-3">
          <button onclick="setStatus(${job.id}, 'interview')" class="btn btn-sm btn-outline btn-success">INTERVIEW</button>
          <button onclick="setStatus(${job.id}, 'rejected')" class="btn btn-sm btn-outline btn-error">REJECTED</button>
        </div>

      </div>
    </div>
  `;
}