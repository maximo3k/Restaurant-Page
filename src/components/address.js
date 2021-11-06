import { textObj } from "../text";

const addressCreator = () => {
    const address = document.createElement('div');
    address.classList.add('address', 'content', 'active');
    address.innerHTML = textObj.address;
    
    const map = document.createElement('div');
    map.id = 'map'

    content.append(address);
}

export {addressCreator};