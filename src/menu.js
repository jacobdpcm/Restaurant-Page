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
    //Prepares page for new content and styling
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const classList = content.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
    content.classList.add('menu');

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menuWrapper');
    content.appendChild(menuWrapper);
    
    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = 'The Menu';
    menuWrapper.appendChild(menuTitle);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');
    menuWrapper.appendChild(menuItems);

    addMenuItem(menuItems, 'Continental Breakfast', 'All that breakfast stuff combined into one.');
    addMenuItem(menuItems, 'Bistro Burger', 'Our permanent quintessentially gourmet burger.');
    addMenuItem(menuItems, 'Bleu Ribbon Burger', 'You like tons of good stuff placed on a burger?  Good.');
    addMenuItem(menuItems, 'Public Sub', 'Great value sub in the public domain.');
    addMenuItem(menuItems, 'Birria Tacos', 'Classic Birria in those tacos.');
    addMenuItem(menuItems, 'Crab Legs', 'No crab head in sight.');
    addMenuItem(menuItems, 'Lobster Shrimp Bisque', 'No need to settle for one or the other. We have solved the forbidden combination.');
    addMenuItem(menuItems, 'Baked Alaska', 'If there was a picture of the dish here you\'d be curious enough to get one.');
    addMenuItem(menuItems, 'Pretzel, The Concrete', 'It takes 17 years to procure the ingredients to make one cup of this.');

}

export { generateMenupage };