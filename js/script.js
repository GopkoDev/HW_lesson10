'use strict';
// HOMEWORK 10
// 1
const booksCollection = document.querySelectorAll('.books'),
    booksItems = document.querySelectorAll('.book');

booksItems[0].remove();
booksItems[1].remove();
booksItems[2].remove();
booksItems[3].remove();
booksItems[4].remove();
booksItems[5].remove();

booksCollection[0].append(booksItems[1]);
booksCollection[0].append(booksItems[0]);
booksCollection[0].append(booksItems[4]);
booksCollection[0].append(booksItems[3]);
booksCollection[0].append(booksItems[5]);
booksCollection[0].append(booksItems[2]);

//2
const bgImg = document.querySelector('body');
bgImg.style.background = 'url(/image/adv.jpg)'


// 3 
booksItems[4].querySelector('a').textContent = 'Книга 3. this и Протопипы Объектов '

//4
document.querySelector('.adv').remove()

//5
const book2 = document.querySelectorAll('ul')[1];
const book2Elem = book2.querySelectorAll('li')
book2Elem[10].before(book2Elem[2]);
book2Elem[4].before(book2Elem[6]);
book2Elem[6].after(book2Elem[8]);

const book5 = document.querySelectorAll('ul')[4];
const book5Elem = book5.querySelectorAll('li')
book5Elem[1].after(book5Elem[9]);
book5Elem[9].after(book5Elem[3]);
book5Elem[3].after(book5Elem[4]);
book5Elem[7].after(book5Elem[5]);

//6
const book6NewElem = document.createElement('li')
book6NewElem.textContent = 'Глава 8: За пределами ES6'
const book6 = document.querySelectorAll('ul')[5];
const book6Elem = book6.querySelectorAll('li')
book6Elem[8].after(book6NewElem);