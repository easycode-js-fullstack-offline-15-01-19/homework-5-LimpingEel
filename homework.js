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
console.log(document.querySelector('ul').previousSibling)
console.log(document.querySelector('ul').nextSibling)

// #4
console.log(document.getElementsByTagName('li').length)

// #5