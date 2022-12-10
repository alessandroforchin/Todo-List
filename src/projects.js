import { content } from './index';
import { projectLogic } from './project-logic';

function projectRender() { 
    content.innerHTML = `
        <div class="header">
            <h1>To do List</h1>
        </div>

        <div class="sidebar">
            <ul>
                <li class="inactive"><a href="#"> <i class="fa-solid fa-house"></i> Home</a></li>
                <li class="inactive"><a href="#"> <i class="fa-solid fa-list"></i> To do</a></li>
                <li class="active"><a href="#"> <i class="fa-regular fa-folder-open"></i> Projects</a></li>
            </ul>
        </div>

        <div class="menu-container">
            <h2>Projects</h2>
            <input id="project" type="button" value="+ new project">

            <div class="project-container">
                <div class="popup">
                    <div class="popup-container">
                        <div class="name-container">
                            <label>Project name: </label>
                            <input id='project-name' class='project-input' type='text'>
                        </div>
                        <input id='create-btn' type='button' value='create'>
                    </div>
                </div>
            </div>
        </div>
        
        <footer class="footer">
            <p>Copyright 2022 <span><i class="fa-solid fa-copyright"></i></span> <a href="https://github.com/alessandroforchin">alessandroforchin <span><i class="fa-brands fa-github"></i></span></a></p>
        </footer>`;

    projectLogic();
}

export { projectRender };