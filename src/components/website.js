import { contactCreator } from "./contact";
import { homeCreator } from "./home";
import { menuCreator } from "./menu";

const clearContent = () => {
    let contentArr = document.querySelectorAll('.content');
    contentArr.forEach(content => {
        content.classList.remove('active');
        content.remove();
    });
    let navItem = document.querySelectorAll('.nav-item');
    navItem.forEach(item => {
        item.classList.remove('active')
    });
    // contentArr.forEach(content => {
        
    // });
}

const websiteBuilder = (page) => {
    
    if (page.id == 'home-btn' && !page.className.includes('active')) {
        clearContent();
        homeCreator();
        page.classList.add('active');
    }
    if (page.id == 'menu-btn' && !page.className.includes('active')) {
        clearContent();
        menuCreator();
        page.classList.add('active');
    }
    if (page.id == 'contact-btn' && !page.className.includes('active')) {
        clearContent();
        contactCreator();
        page.classList.add('active');
    }
}

export {websiteBuilder};