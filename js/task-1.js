const categoriesElement = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categoriesElement.length}`);
categoriesElement.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elementsItem = category.querySelectorAll('ul li').length;
    console.log(`Category ${title}`);
    console.log(`Elements ${elementsItem}`);
});