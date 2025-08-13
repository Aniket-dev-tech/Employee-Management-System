const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare monthly report",
        description: "Compile financial data for the monthly review meeting.",
        date: "2025-08-15",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client meeting",
        description: "Discuss project requirements with the client.",
        date: "2025-08-10",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Website bug fix",
        description: "Resolve navigation issue on the homepage.",
        date: "2025-08-05",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Design new logo",
        description: "Create multiple design variations for the client.",
        date: "2025-08-14",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team training session",
        description: "Conduct UI/UX training for new interns.",
        date: "2025-08-18",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update documentation",
        description: "Revise the user manual with the latest updates.",
        date: "2025-08-08",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "App deployment",
        description: "Deploy the updated version to the production server.",
        date: "2025-08-03",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social media campaign",
        description: "Plan and schedule posts for the next two weeks.",
        date: "2025-08-20",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare presentation",
        description: "Create slides for the quarterly review.",
        date: "2025-08-09",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email campaign",
        description: "Send promotional emails to customer list.",
        date: "2025-08-04",
        category: "Marketing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market research",
        description: "Collect competitor data for analysis.",
        date: "2025-08-17",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Blog writing",
        description: "Write an article about industry trends.",
        date: "2025-08-06",
        category: "Content"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Audit office supplies and update records.",
        date: "2025-08-13",
        category: "Operations"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule interviews",
        description: "Plan interview slots for new hires.",
        date: "2025-08-19",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare payroll",
        description: "Process employee salary payments.",
        date: "2025-08-07",
        category: "Finance"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "API integration",
        description: "Integrate third-party API into the application.",
        date: "2025-08-12",
        category: "Development"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Security audit",
        description: "Run penetration tests on the staging server.",
        date: "2025-08-21",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI bugs",
        description: "Resolve mobile responsiveness issues.",
        date: "2025-08-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database backup",
        description: "Backup production database before update.",
        date: "2025-08-02",
        category: "IT"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin) 
}