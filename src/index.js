import './style.css';
import {textObj, menuObj} from './text.js';
import { homeCreator } from './components/home'
import { menuCreator } from './components/menu';
import { contactCreator } from './components/contact';
import { websiteBuilder } from './components/website';

const activeButton = (button) => {
    button.classList.add('active');
}

const pageCreator = () => {
    //content
    const content = document.getElementById('content')

    //navigation
    const nav = document.createElement('nav');
    const home = document.createElement('ul');
    const menu = document.createElement('ul');
    const contact = document.createElement('ul');

    home.classList.add('nav-item');
    menu.classList.add('nav-item');
    contact.classList.add('nav-item');
    nav.classList.add('nav-menu');

    home.id = 'home-btn';
    menu.id = 'menu-btn';
    contact.id = 'contact-btn';

    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';

    nav.append(home, menu, contact);
    content.append(nav);

    //navigation paths
    home.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });
    menu.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });
    contact.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });  

    homeCreator();


    //footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const slogan = document.createElement('p');
    slogan.innerText = `Call us Now ${textObj.phone}`
    footer.appendChild(slogan);
    content.appendChild(footer);
}

pageCreator()