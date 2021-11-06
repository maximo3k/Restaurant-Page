import { textObj } from "../text";

const homeCreator = () => {
    const header = document.createElement('div');
    header.classList.add('header', 'content', 'active');
    header.id = 'header';

    const title = document.createElement('h1');
    title.textContent = textObj.title;
    header.appendChild(title);
    const description = document.createElement('p');
    description.textContent = textObj.titleDescription;
    header.appendChild(description);
    const homeImage = new Image ();
    homeImage.src = textObj.titleImage;
    header.appendChild(homeImage);
    content.appendChild(header);



}

export {homeCreator};