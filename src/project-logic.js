import { toDoRender } from "./todo";

function projectLogic() {
    let myProject = [];

    const projectContainer = document.querySelector('.project-container');
    let projectName = document.getElementById('project-name');

    function Project(name) {
        this.name = name
    }

    function displayProject() {
        const newBox = document.createElement('div');
        newBox.classList.add('new-box');
        projectContainer.appendChild(newBox);

        const newLine = document.createElement('p');
        newLine.classList.add('new-line');
        newBox.appendChild(newLine);
        newLine.textContent = `"${projectName.value}"`;

        const newButtons = document.createElement('div');
        newButtons.classList.add('new-btn-container');
        newBox.appendChild(newButtons);

        const aTTPButton = document.createElement('button')
        aTTPButton.classList.add('remove-btn');
        newButtons.appendChild(aTTPButton);
        aTTPButton.textContent = 'Add task';

        for (let i = 0; i < myProject.length; i++) {
            aTTPButton.addEventListener('click', () => {
                toDoRender();
            })
        }
    }

    document.getElementById('create-btn').addEventListener('click', () => {
        let project1 = projectName.value;

        let newProject = new Project(project1);

        myProject.push(newProject);
        displayProject();

        document.querySelector('.popup').style.display = 'none';
    })

    document.getElementById('project').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'flex';
    })
}

export { projectLogic, Project }