import bakerFam from './bakerFam.png';

function generateHomepage(){
    //Prepares page for new content and styling
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const classList = content.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
    content.classList.add('home');
    
    const homewrapper = document.createElement('div')
    homewrapper.classList.add('homewrapper');
    content.appendChild(homewrapper);

    const headline = document.createElement('h1');
    headline.textContent = "Jack's Bakery";
    homewrapper.appendChild(headline);

    const bakerimg = document.createElement('img');
    bakerimg.src = bakerFam;
    homewrapper.appendChild(bakerimg);

    const subheadline = document.createElement('h3');
    subheadline.textContent = "Welcome to the Family!";
    homewrapper.appendChild(subheadline);

    const homepara = document.createElement('div');
    homepara.classList.add('homepara');
    homepara.textContent = "The 3-Michelan Star world famous barbecue establishment. No matter how big and successful we get, we will never stop being all about family."
    homewrapper.appendChild(homepara);
}

export { generateHomepage };