import { IProject, Project } from "./Project"

export class ProjectsManager {
    list: Project[] = []

    newProject(data: IProject) {
        const project = new Project(data)
        this.list.push(project)
        return project
    }

    updateProject(data: IProject){}

    listProjects(){
        console.log(this.list)
    }

}