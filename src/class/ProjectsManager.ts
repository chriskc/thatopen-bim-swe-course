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

    logProjects() {
        console.log(this.list)
    }

    exportToJSON() {
        console.log(this.list)
        this.list.forEach((project) => {
            delete project.ui
        })
        console.log(this.list)
        const json = JSON.stringify(this.list, null, 2)
        const file = new Blob([json], {
            type: "application/json",
        })
        const timestamp = new Date().toJSON()
        const a = document.createElement("a")
        const fileName = `project_${timestamp}.json`
        const url = URL.createObjectURL(file)

        a.href = url
        a.download = fileName
        a.click()

        URL.revokeObjectURL(url)
    }

    importFromJSON() {
        let input = document.createElement("input")
        input.type = "file"
        input.accept = "application/json"

        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const json = reader.result
            if (!json) {
                return
            }
            const projects: IProject[] = JSON.parse(json as string)
            for (const project of projects) {
                try {
                    this.newProject(project)
                } catch (error) {
                    console.log(error)
                }
            }
        })

        input.onchange = () => {
            const files = input.files
            if (!files) {
                return
            }
            reader.readAsText(files[0])
        }
        input.click()
    }

    updateProject(data: IProject) {}
}
