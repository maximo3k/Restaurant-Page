import imgPadThai from './images/Pad Thai.jpg';
import imgSingha from './images/singha-beer.jpg';
import imgThaiRestaurant from './images/home_image.jpg';
import imgMangoStickyRice from './images/mango_sticky_rice.jpg';
import imgRestaurantOutside from './images/thai-restaurant.jpg';


const textObj = {
    title: 'ChohkDee Thai Palace',
    titleDescription: 'We have the most authentic Thai food in town',
    titleImage: imgThaiRestaurant,
    address: `<h2>Address</h2>
                <p>4945 Green Avenue</p>
                <p>San Francisco</p>
                <p>California 94107</p>
                `,
    phone: '510-788-8241',
    imgRestaurantOutside: imgRestaurantOutside,
}

const menuObj = {
    '0': {
        name: 'Pad Thai',
        description: "Pad thai, phat thai, or phad thai, is a stir-fried rice noodle dish commonly served as a street food and at most restaurants in Thailand as part of the country's cuisine. It is typically made with rice noodles, shrimp, peanuts, a scrambled egg, and bean sprouts, among other vegetables.",
        price: '8.00',
        currency: '$',
        image: imgPadThai,
    },
    '1': {
        name: 'Singha Beer',
        description: 'Singha is a pale lager beer with 5% alcohol content manufactured in Thailand by the Singha Corporation Co. Ltd., a subsidiary of its parent company, Boon Rawd Brewery. Singha was first brewed in 1933 and is considered the original Thai beer.',
        price: '2.00',
        currency: '$',
        image: imgSingha,
    },
    '2': {
        name: 'Mango Sticky Rice',
        description: 'Mango sticky rice is a traditional Southeast Asian and South Asian dessert made with glutinous rice, fresh mango and coconut milk, and eaten with a spoon or the hands.',
        price: '5.00',
        currency: '$',
        image: imgMangoStickyRice, 
    }  
};

export {textObj, menuObj};