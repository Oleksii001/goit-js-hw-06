const categoryList = document.querySelector('#categories');
const categoryItems = categoryList.children;

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItem = category.querySelectorAll('li');

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItem.length}`);
});