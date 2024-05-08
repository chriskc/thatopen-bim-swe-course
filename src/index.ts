import { IProject, ProjectStatus, UserRoles } from "./class/Project.ts"
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
    cost: 100,
    finishDate: new Date("" as string),
}

const placeholderCard = projectsManager.newProject(placeholderData)

// console.log(placeholderCard)
// const testId = placeholderCard.id
// const card = projectsManager.getProjectById(testId)
const card = projectsManager.getProjectByName("Hospital Center")

console.log(card)

// projectsManager.deleteProject(testId)
projectsManager.costOfAllProjects()

// const placeholder = new Project(placeholderData)
// for (let i = 0; i < 4; i++){
//     placeholder.createProjectCard()
// }

// ------------------------------------
// Create new projects
// ------------------------------------

function toggleModal(id: string) {
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
    newProjectBtn.addEventListener("click", () => {
        toggleModal("new-project-modal")
    })
} else {
    console.warn("New Project Button not found.")
}

const closeAlertBtn = document.getElementById("close-alert-modal")
if (closeAlertBtn) {
    closeAlertBtn.addEventListener("click", () => {
        toggleModal("alert-modal")
    })
}

const projectForm = document.getElementById("new-project-form")

if (projectForm && projectForm instanceof HTMLFormElement) {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(projectForm)
        const projectData = {} as IProject // Assigning type of object here! Assumes data structure of projectData matches that of IProject. Don't overuse.
        formData.forEach(function (value, key) {
            projectData[key] = value
        })

        try {
            projectsManager.newProject(projectData)
            projectForm.reset()
        } catch (err) {
            // alert(err)
            const alertMessage = document.getElementById("alert-message")
            if (alertMessage instanceof HTMLElement) {
                alertMessage.textContent = err
            }
            toggleModal("alert-modal")
        }
    })
    projectForm.addEventListener("reset", (e) => {
        toggleModal("new-project-modal")
    })
} else {
    console.warn("Form not found.")
}

// ------------------------------------
// Interacting with Cards
// ------------------------------------

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
                if (page instanceof HTMLElement) page.style.display = "none"
            }
            selectedPage.style.display = "block"
        })
    }
}

assignBtnToPage("nav-projects", "projects-home")
assignBtnToPage("nav-people", "people-home")
