function taskLogic() {
    let myTask = [];

    const taskContainer = document.querySelector('.task-container');
    let taskName = document.getElementById('name');
    let taskDate = document.getElementById('date');

    function Task(name, date) {
        this.name = name
        this.date = date
    }

    function displayTask() {
        const newBox = document.createElement('div');
        newBox.classList.add('new-box');
        taskContainer.appendChild(newBox);

        const newLine = document.createElement('p');
        newLine.classList.add('new-line');
        newBox.appendChild(newLine);
        newLine.textContent = `"${taskName.value}" due to ${taskDate.value}.`;

        const newButtons = document.createElement('div');
        newButtons.classList.add('new-btn-container');
        newBox.appendChild(newButtons);

        const removeButton = document.createElement('button')
        removeButton.classList.add('remove-btn');
        newButtons.appendChild(removeButton);
        removeButton.textContent = 'Done';

        for (let i = 0; i < myTask.length; i++) {
            removeButton.addEventListener('click', () => {
                taskContainer.removeChild(newBox);
                return myTask.splice(i);
            })
        }
    }

    document.getElementById('create-btn').addEventListener('click', () => {
        let name1 = taskName.value;
        let date1 = taskDate.value;

        let newTask = new Task(name1, date1);
        
        myTask.push(newTask);
        displayTask();

        document.querySelector('.popup').style.display = 'none';
    })

    document.getElementById('task').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'flex';
    })
}

export { taskLogic, Task }