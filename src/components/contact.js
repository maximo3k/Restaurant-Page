import { textObj } from "../text";

const contactCreator = () => {

    const contact = document.createElement('div');
    contact.classList.add('contact-box', 'content', 'active');

    const contactItems = document.createElement('div');
    contactItems.classList.add('contact-items');

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerHTML = textObj.address;

    const imageOutside = new Image(512, 341);
    imageOutside.src = textObj.imgRestaurantOutside;

    contactItems.append(imageOutside, address);
    contact.appendChild(contactItems);
    content.appendChild(contact);

}

export {contactCreator};