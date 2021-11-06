import { menuObj } from "../text";

const menuCreator = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu', 'content', 'active');
    menu.id = 'menu';
    content.appendChild(menu);
    
    
    //menu item loop
    for (let i in menuObj){
        const menuItem = document.createElement('div');
        const imageBox = document.createElement('div');
        const textBox = document.createElement('div');
        const image = new Image (200,200);
        const text = document.createElement('p');
        const price = document.createElement('span');
        
        menuItem.classList.add('menu-item');
        imageBox.classList.add('food-image-box');
        textBox.classList.add('image-text');
        
        image.src = menuObj[i].image;
        text.textContent = menuObj[i].description;
        price.textContent = (menuObj[i].currency + menuObj[i].price);

        imageBox.appendChild(image);  
        textBox.append(text, price);
        menuItem.append(imageBox, textBox);
        menu.appendChild(menuItem);
    }
}

export {menuCreator};
