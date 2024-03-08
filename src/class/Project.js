
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
}