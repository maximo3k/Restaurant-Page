import './style.css';
import {textObj, menuObj} from './text.js';
import { homeCreator } from './components/home'
import { menuCreator } from './components/menu';
import { addressCreator } from './components/address';
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
    const address = document.createElement('ul');

    home.classList.add('nav-item');
    menu.classList.add('nav-item');
    address.classList.add('nav-item');
    nav.classList.add('nav-menu');

    home.id = 'home-btn';
    menu.id = 'menu-btn';
    address.id = 'address-btn';

    home.innerText = 'Home';
    menu.innerText = 'Menu';
    address.innerText = 'Address';

    nav.append(home, menu, address);
    content.append(nav);

    //navigation paths
    home.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });
    menu.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });
    address.addEventListener('click', (e)=> {
        websiteBuilder(e.target);
    });  

    homeCreator();


    //footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const slogan = document.createElement('p');
    slogan.innerText = 'call us now under +12316346238'
    footer.appendChild(slogan);
    content.appendChild(footer);
}

pageCreator()