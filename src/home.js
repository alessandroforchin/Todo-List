import { content } from './index';
import { taskLogic } from './task-logic';

function homeRender() {
    content.innerHTML = `
        <div class="header">
            <h1>To do List</h1>
        </div>

        <div class="sidebar">
            <ul>
                <li class="active"><a href="#"> <i class="fa-solid fa-house"></i> Home</a></li>
                <li class="inactive"><a href="#"> <i class="fa-solid fa-list"></i> To do</a></li>
                <li class="inactive"><a href="#"> <i class="fa-regular fa-folder-open"></i> Projects</a></li>
            </ul>
        </div>

        <div class="menu-container" id='menu-container'>
            <h2>Inbox</h2>
            

            <div class="task-container">
                <div class="popup">
                    <div class="popup-container">
                        <div class="name-container">
                            <label>Name: </label>
                            <input id='name' class='task-input' type='text'>
                        </div>
                        <div class="date-container">
                            <label>Date: </label>
                            <input id='date' class='task-input' type='date'>
                        </div>
                        <input id='create-btn' type='button' value='create'>
                    </div>
                </div>
            </div>
        </div>
        
        <footer class="footer">
            <p>Copyright 2022 <span><i class="fa-solid fa-copyright"></i></span> <a href="https://github.com/alessandroforchin">alessandroforchin <span><i class="fa-brands fa-github"></i></span></a></p>
        </footer>`;

    // taskLogic();
    
}

export { homeRender };



