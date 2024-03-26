function generateContactpage(){
    //Prepares page for new content and styling
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const classList = content.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
    content.classList.add('contact');    

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contactWrapper');
    content.appendChild(contactWrapper);

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contactHeader');
    contactHeader.textContent = 'Contact us for any questions about our restaurant and to make reservations. If you just had a bad day, feel free to contact us for that too.'
    contactWrapper.appendChild(contactHeader);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    contactWrapper.appendChild(contactInfo);

    const phone = document.createElement('div');
    phone.classList.add('contactItem');
    phone.textContent = 'Phone Number: (777)-777-7777';
    contactInfo.appendChild(phone);

    const email = document.createElement('div');
    email.classList.add('contactItem');
    email.textContent = 'Email: jackbakes@jbake-llc.com'
    contactInfo.appendChild(email);
}

export { generateContactpage };