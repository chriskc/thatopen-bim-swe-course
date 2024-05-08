import { IProject, Project } from "./Project"

export class ProjectsManager {
    list: Project[] = []
    ui: HTMLElement

    newProject(data: IProject) {
        const projectNames = this.list.map((project) => {
            return project.name
        })
        if (projectNames.includes(data.name)) {
            throw new Error(
                `A project with the name ${data.name} already exists.`
            )
        }
        const project = new Project(data)
        this.list.push(project)
        return project
    }

    getProjectById(id: string) {
        const project = this.list.find((project) => {
            return project.id === id
        })
        return project
    }

    // TODO add condition in case multiple project have the same name
    getProjectByName(name: string) {
        const project = this.list.find((project) => {
            return project.name === name
        })
        return project
    }

    deleteProject(id: string) {
        const project = this.getProjectById(id)
        if (project instanceof HTMLElement) {
            project.ui.remove()
        }
        const remaining = this.list.filter((project) => {
            return project.id !== id
        })
        this.list = remaining
        console.log(this.list)
    }

    costOfAllProjects() {
        var totalCost = 0
        const projectCosts = this.list.map((project) => {
            return project.cost
        })
        for (let cost of projectCosts) {
            totalCost += cost
        }
        console.log(`Total cost of all projects is: $${totalCost.toFixed(2)}`)
    }

    exportToJSON() {}
    importFromJSON() {}

    updateProject(data: IProject) {}

    listProjects() {
        console.log(this.list)
    }
}
