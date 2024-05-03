
export class Project {
    name
    description
    status
    userRole
    finishDate

    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.role = data.role;
        this.status = data.status;
        this.date = data.date;
    }

    createProjectCard() {
        const cardTemplate = document.getElementById("project-card-template")
        const projectCard = cardTemplate.cloneNode(true)
        projectCard.style.display = "block"
            
        const randomNumber = Math.floor(Math.random() * 1000000);
        projectCard.id = `project-card-${randomNumber}`
        projectCard.classList.add("project-card")
        
        projectCard.querySelector(".card-title").textContent = this.name
        projectCard.querySelector(".card-description").textContent = this.description
        projectCard.querySelector(".card-role-value").textContent = this.role
        projectCard.querySelector(".card-status-value").textContent = this.status
        
        document.getElementById("projects-list").appendChild(projectCard)
        
    }
}