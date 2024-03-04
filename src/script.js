

function showModal(id) {
    const modal = document.getElementById(id)
    if (modal) {
        modal.showModal()
    } else {
        console.warn("Modal not found when showing. ID: ", id)
    }
}
// showModal("new-project-modal")

function closeModal(id) {
    const modal = document.getElementById(id)
    if (modal) {
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
if (projectForm) {
    projectForm.addEventListener("submit", (e) => {
        // console.log(e)
        e.preventDefault()
        const formData = new FormData(projectForm)
        
        var projectData = {}
        formData.forEach(function(value, key){
           projectData[key] = value
        })
        const json = JSON.stringify(projectData)
        closeModal("new-project-modal")
        
        console.log(projectData)
        console.log(json)
    })
} else {
    console.warn("Form not found.")
}

