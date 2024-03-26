import './style.css';
import { generateHomepage } from './homepage.js';
import { generateMenupage } from './menu.js';
import { generateContactpage } from './contact.js';

generateHomepage();

const setButtons = (function(){
    const home = document.querySelector('.homeButton');
    home.addEventListener('click', function(){generateHomepage()});

    const menu = document.querySelector('.menuButton');
    menu.addEventListener('click', function(){generateMenupage()});

    const contact = document.querySelector('.contactButton');
    contact.addEventListener('click', function (){generateContactpage()});
})()
