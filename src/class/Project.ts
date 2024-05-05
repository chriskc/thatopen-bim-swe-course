export type ProjectStatus = "pending" | "active" | "finished" 
export type UserRoles =  "architect" | "engineer" | "developer"

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

    constructor(data: IProject) {
        this.name = data.name;
        this.description = data.description;
        this.userRole = data.userRole;
        this.status = data.status;
        this.finishDate = data.finishDate;
    }

    createProjectCard() {
        const cardTemplate = document.getElementById("project-card-template")
        
        if (!cardTemplate) {
            console.error("Project card template element is missing")
            return
        }

        const projectCard = cardTemplate.cloneNode(true)

        if (projectCard instanceof HTMLElement){
            
            projectCard.style.display = "block"
            
            const randomNumber = Math.floor(Math.random() * 1000000);
            projectCard.id = `project-card-${randomNumber}`
            projectCard.classList.add("project-card")
            
            setTextContent(projectCard, ".card-title", this.name)
            setTextContent(projectCard, ".card-description", this.description)
            setTextContent(projectCard, ".card-role-value", this.userRole)
            setTextContent(projectCard, ".card-status-value", this.status)
        }
        
        const projectList = document.getElementById("projects-list")
        if (projectList){
            projectList.appendChild(projectCard)   
        }       
    }
}

function setTextContent(parentElement: HTMLElement | null, className: string, text: string) {
    if (!parentElement) {
        console.error('Parent element is null')
        return
    }
    
    const element = parentElement.querySelector(className)
    if (element) {
        element.textContent = text
    }
}