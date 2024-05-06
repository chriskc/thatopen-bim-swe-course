import { IProject, Project, ProjectStatus, UserRoles } from "./class/Project.ts"
import { ProjectsManager } from "./class/ProjectsManager.ts"

// ------------------------------------
// Placeholder projects
// ------------------------------------

// TODO update with projects manager function

const projectsManager = new ProjectsManager()
projectsManager.listProjects()

const placeholderData = {
    name: "Hospital Center" as string,
    description: "Community hospital located at downtown" as string,
    status: "Active" as ProjectStatus,
    userRole: "Engineer" as UserRoles,
    cost: "$ 2,000,000.00" as string,
    finishDate: new Date("" as string)
}

projectsManager.newProject(placeholderData)

// const placeholder = new Project(placeholderData)
// for (let i = 0; i < 4; i++){
//     placeholder.createProjectCard()
// }

// ------------------------------------
// Create new projects
// ------------------------------------

function toggleModal(id: string){
    const modal = document.getElementById(id)
    if (modal.open && modal && modal instanceof HTMLDialogElement) {
        modal.close()
    } else if (modal && modal instanceof HTMLDialogElement) {
        modal.showModal()
    } else {
        console.warn("Modal not found when showing. ID: ", id)
    }
}

const newProjectBtn = document.getElementById("new-project-btn")
if (newProjectBtn) {
    newProjectBtn.addEventListener("click", () => {toggleModal("new-project-modal")})
} else {
    console.warn("New Project Button not found.")
}

const projectForm = document.getElementById("new-project-form")
console.log(projectForm)

if (projectForm && projectForm instanceof HTMLFormElement) {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(projectForm)        
        const projectData = {} as IProject // Assigning type of object here! Assumes data structure of projectData matches that of IProject. Don't overuse.
        formData.forEach(function(value, key){
            projectData[key] = value
        })
        projectsManager.newProject(projectData)
        projectForm.reset()
    })
    projectForm.addEventListener("reset", (e) => {
        toggleModal("new-project-modal")    
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
