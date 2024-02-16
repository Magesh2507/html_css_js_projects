	const open = document.getElementById('open')
	const close = document.getElementById('close')
	const main = document.querySelector('.main')

	open.addEventListener('click', () => main.classList.add('slide-hide'))
	close.addEventListener('click', () => main.classList.remove('slide-hide'))

	//open.addEventListener('click', () => container.classList.add('show-nav'))
