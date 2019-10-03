const main = () => {
	if (document.querySelector('h1.hello-world')) {
		document.querySelector('h1.hello-world').textContent = 'Hello, World!';
		document.querySelector('body').style.background = 'blue';
	}
};

document.addEventListener('DOMContentLoaded', main);
