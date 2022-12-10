import { homeRender } from "./home";
import { toDoRender } from "./todo";
import { projectRender } from "./projects";

const content = document.getElementById('content');

homeRender();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === ' Home') homeRender();
    if (target === ' To do') toDoRender();
    if (target === ' Projects') projectRender();
})

export { content } 