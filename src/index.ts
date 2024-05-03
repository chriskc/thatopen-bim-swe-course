import { Project } from "./class/Project"



// ------------------------------------
// Placeholder projects
// ------------------------------------

const placeholderData = {
    name: "Hospital Center",
    description: "Community hospital located at downtown",
    status: "Active",
    role: "Engineer",
    cost: "$ 2,000,000.00",
    date: ""
};

console.log(placeholderData)

const placeholder = new Project(placeholderData)
for (let i = 0; i < 4; i++){
    placeholder.createProjectCard()
}

// ------------------------------------
// Create new projects
// ------------------------------------

function showModal(id: string) {
    const modal = document.getElementById(id)
    if (modal && modal instanceof HTMLDialogElement) {
        modal.showModal()
    } else {
        console.warn("Modal not found when showing. ID: ", id)
    }
}
// showModal("new-project-modal")

function closeModal(id: string) {
    const modal = document.getElementById(id)
    if (modal && modal instanceof HTMLDialogElement) {
        modal.close()
    } else {
        console.warn("Modal not found when closing. ID: ", id)
    }
}


const newProjectBtn = document.getElementById("new-project-btn")
if (newProjectBtn) {
    newProjectBtn.addEventListener("click", () => {showModal("new-project-modal")})
} else {
    console.warn("New Project Button not found.")
}

const projectForm = document.getElementById("new-project-form")
if (projectForm && projectForm instanceof HTMLFormElement) {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(projectForm)        
        const projectData = {}
        formData.forEach(function(value, key){
           projectData[key] = value
        })
        const newProject = new Project(projectData)
        closeModal("new-project-modal")
        newProject.createProjectCard()
        console.log(projectData)
    })
} else {
    console.warn("Form not found.")
}


// ------------------------------------
// Naviation
// ------------------------------------

function assignBtnToPage(buttonId: string, pageId: string) {
    const button = document.getElementById(buttonId)
    const selectedPage = document.getElementById(pageId)
    if (button && selectedPage) {
        button.addEventListener("click", () => {
            const allPages = document.getElementsByClassName("page")
            for (const page of allPages) {
                if (page instanceof HTMLElement)
                page.style.display = "none"
            }
            selectedPage.style.display = "block"
        })
    }
}

assignBtnToPage("nav-projects", "projects-home")
assignBtnToPage("nav-people", "people-home")

// function addNumbers(a: number , b: number) {
//     console.log(a + b)
// }

// addNumbers(5, 10)