function addMenuItem(menuItems, foodTitle, text){
    const item = document.createElement('div');
    item.classList.add('item');
    menuItems.appendChild(item);

    const title = document.createElement('div');
    title.classList.add('foodTitle');
    title.textContent = foodTitle;
    item.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('foodDescription');
    description.textContent = text;
    item.appendChild(description);
}

function generateMenupage(){
    const content = document.querySelector('#content');
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'The Menu';
    content.appendChild(menuTitle);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');
    content.appendChild(menuItems);

    addMenuItem(menuItems, 'Continental Breakfast', 'All that breakfast Stuff combined into one.');
    addMenuItem(menuItems, 'Bistro Burger', 'Our permanent quintessentially gourmet burger.');
    addMenuItem(menuItems, 'Bleu Ribbon Burger', 'You like tons of good stuff placed on a burger?  Good.');

}

export { generateMenupage };