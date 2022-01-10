import './tailwind.css';
import './style.scss'

//Images downloaded from the refurbed.de website
import silver from '../assets/189_sil.png'
import spaceGrey from '../assets/189_spa.png'
import iphone from '../assets/iphone.png'
import gold from '../assets/189_gol.png'
import  red from '../assets/189_rot.png'

/**
 * Changes the image displayed on the page.
 *
 * @param {string} image The image.
 * @return {boolean} true if image was successfully changed and false otherwise.
 */
const changeImage = (image) => {
    let selectedImage;
    switch (image) {
        case 'spaceGrey':
            selectedImage = iphone;
            break;
        case 'red':
            selectedImage = red;
            break;
        case 'gold':
            selectedImage = gold;
            break;
        case 'silver':
            selectedImage = silver;
            break;
        default:
            //defaulting to space grey because user input has not been matched
            selectedImage = spaceGrey;
            break;
    }
    try{
        img.src = selectedImage;
        return true;
    }catch (e) {
        console.log(e);
        return false
    }

}

const img = document.getElementById('productImage')
changeImage('spaceGrey');

// Exposing function to the html page by attaching it to the window object
window.changeImage = changeImage;
