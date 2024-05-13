import { v4 as uuidv4 } from "uuid"

export type ProjectStatus = "pending" | "active" | "finished"
export type UserRoles = "architect" | "engineer" | "developer"

export interface IProject {
    name: string
    description: string
    status: ProjectStatus
    userRole: UserRoles
    finishDate: Date
}

export class Project {
    name: string
    description: string
    status: ProjectStatus
    userRole: UserRoles
    finishDate: Date
    ui?: HTMLDivElement
    cost: number = 1000000
    progress: number = 0
    id: string

    constructor(data: IProject) {
        for (const key in data) {
            this[key] = data[key]
        }
        this.id = uuidv4()
        this.createProjectCard()
    }

    createProjectCard() {
        if (this.ui) {
            return
        }
        this.ui = document.createElement("div")
        this.ui.id = this.id
        this.ui.classList.add("project-card")
        this.ui.innerHTML = `
        <div class="card-header">
            <p class="card-icon">PR</p>
            <div>
                <h5 class="card-title">${this.name}</h5>
                <p class="card-description">${this.description}</p>
            </div>
        </div>
        <hr>
        <div class="card-body">
            <div class="card-property">
                <p class="card-status-label">Status</p>
                <p class="card-status-value">${this.status}</p>
            </div>
            <div class="card-property">
                <p class="card-role-label">Role</p>
                <p class="card-role-value">${this.userRole}</p>
            </div>
            <div class="card-property">
                <p class="card-cost-label">Cost</p>
                <p class="card-cost-value">$${this.cost}</p>
            </div>
            <div class="card-property">
                <p class="card-prog-label">Estimated Progress</p>
                <p class="card-prog-value">${this.progress * 100}%</p>
            </div>
        </div>
        `
        this.ui.addEventListener("click", () => {
            console.log(this.ui.id)
        })

        const projectList = document.getElementById("projects-list")
        if (projectList) {
            projectList.appendChild(this.ui)
        }
    }

    // createProjectCard() {
    //     const cardTemplate = document.getElementById("project-card-template")

    //     if (!cardTemplate) {
    //         console.error("Project card template element is missing")
    //         return
    //     }

    //     const projectCard = cardTemplate.cloneNode(true)

    //     if (projectCard instanceof HTMLElement){

    //         projectCard.style.display = "block"

    //         const randomNumber = Math.floor(Math.random() * 1000000);
    //         projectCard.id = `project-card-${randomNumber}`
    //         projectCard.classList.add("project-card")

    //         setTextContent(projectCard, ".card-title", this.name)
    //         setTextContent(projectCard, ".card-description", this.description)
    //         setTextContent(projectCard, ".card-role-value", this.userRole)
    //         setTextContent(projectCard, ".card-status-value", this.status)
    //     }

    //     const projectList = document.getElementById("projects-list")
    //     if (projectList){
    //         projectList.appendChild(projectCard)
    //     }
    // }
}

function setTextContent(
    parentElement: HTMLElement | null,
    className: string,
    text: string
) {
    if (!parentElement) {
        console.error("Parent element is null")
        return
    }

    const element = parentElement.querySelector(className)
    if (element) {
        element.textContent = text
    }
}
