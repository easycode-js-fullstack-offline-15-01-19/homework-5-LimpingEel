// -------------------------- Home work --------------------------
// -------------------------- Никита Дорошенко Андреевич --------------------------

// DOM. Задачи.

// // #1
// console.log(document.head)

// // #2
// console.log(document.body)

// // #3
// console.log(document.body.childNodes)

// // #4
// const div = document.getElementById('first').childNodes;
// console.log(div)

// const firstDiv = document.getElementById('first');

// firstDiv.removeChild(firstDiv.firstChild);
// firstDiv.removeChild(firstDiv.lastChild);

// console.log(firstDiv.childNodes)

// DOM. Задачи.

// #1
// function isParent(parent, child) {
// 	if (parent === child.closest('div')) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// #2
// let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
// console.log(links);

// #3
// console.log(document.querySelector('ul').previousSibling)
// console.log(document.querySelector('ul').nextSibling)

// #4
// console.log(document.getElementsByTagName('li').length)

// Свойства. Задачи.

// #1
// const text = document.querySelector('p')

// console.log(text.textContent)

// #2
// function dom(node) {
// 	let about = {
// 		type: node.nodeType,
// 		sumNode: node.childNodes.length
// 	}

// 	return about
// }

// #3
// let arr = [];
// arr.push(document.querySelector('li').textContent)
// arr.push(document.querySelector('li').nextSibling.nextSibling.textContent)
// arr.push(document.querySelector('ul').lastChild.previousSibling.previousSibling.previousSibling.textContent)
// arr.push(document.querySelector('ul').lastChild.previousSibling.textContent)
// console.log(arr)

// #4
// let text = document.querySelector('p');
// text.innerHTML = `-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-`
// console.log(text)

// Свойства. Задачи.

// #1
// let ul = document.querySelector('ul');
// ul.classList.add("list") 
// console.log(ul.className)

// #2
// let link = document.querySelector('span').nextSibling.nextSibling.setAttribute('id', 'link');
// console.log(document.getElementById('link'))

// #3
// let clas = document.querySelector('ul').firstChild.nextSibling.classList.add("item")
// let a = document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling.classList.add("item");
// console.log(document.querySelector('li').nextSibling.nextSibling.nextSibling.nextSibling)

// #4
// document.querySelector('a').classList.add("custom-link")
// document.querySelector('li').firstChild.classList.add("custom-link")
// document.querySelector('li').nextSibling.nextSibling.firstChild.classList.add("custom-link")
// document.querySelector('ul').lastChild.previousSibling.firstChild.classList.add("custom-link")
// document.querySelector('ul').lastChild.previousSibling.previousSibling.previousSibling.firstChild.classList.add("custom-link")
// document.querySelector('span').nextSibling.nextSibling.classList.add("custom-link")
// console.log(document.querySelector('span').nextSibling.nextSibling)

// Свойства. Задачи.

// #1
// let li = document.createElement('li');
// document.querySelector('ul').appendChild(li)
// document.querySelector('ul').lastChild.insertAdjacentHTML('beforeend', 'item ' + document.getElementsByTagName('li').length)
// let li2 = document.createElement('li');
// document.querySelector('ul').appendChild(li2)
// document.querySelector('ul').lastChild.insertAdjacentHTML('beforeend', 'item ' + document.getElementsByTagName('li').length)
// document.querySelector('ul').lastChild.classList.add("new-item")
// document.querySelector('ul').lastChild.previousSibling.classList.add("new-item")
// console.log(document.querySelector('ul').lastChild.previousSibling)

// #2
// let strong = document.createElement('strong');
// document.querySelector('li').firstChild.appendChild(strong);
// let strong1 = document.createElement('strong');
// document.querySelector('li').nextSibling.nextSibling.firstChild.appendChild(strong1);
// let strong2 = document.createElement('strong');
// document.querySelector('ul').lastChild.previousSibling.firstChild.appendChild(strong2);
// let strong3 = document.createElement('strong');
// document.querySelector('ul').lastChild.previousSibling.previousSibling.previousSibling.firstChild.appendChild(strong3);
// console.log(document.querySelector('ul').lastChild.previousSibling.previousSibling.previousSibling.firstChild)

// #3
// let img = document.createElement('img');
// document.body.insertBefore(img, document.body.firstChild);
// document.body.firstChild.setAttribute('src', 'img/images.jpg');
// document.body.firstChild.setAttribute('alt', 'imagination')
// console.log(document.body.firstChild)

// #4
// document.querySelector('mark').classList.add("green");
// document.querySelector('mark').insertAdjacentText('beforeend', ' green');

// #5
// let link1 = document.querySelector('li');
// let link2 = document.querySelector('li').nextSibling.nextSibling;
// let link4 = document.querySelector('ul').lastChild.previousSibling;
// let link3 = document.querySelector('ul').lastChild.previousSibling.previousSibling.previousSibling;
// link1.insertAdjacentElement('beforebegin', link2);
// link2.insertAdjacentElement('beforebegin', link3);
// link3.insertAdjacentElement('beforebegin', link4);
// console.log(link2)