const buttan = document.querySelector('.btn')
const conten = document.querySelector('.content')
const navs = document.querySelector('.nav')

buttan.addEventListener('click', update)
	
	function update(){
		conten.classList.toggle('box')
		buttan.classList.toggle('box')
		navs.classList.toggle('box')
}
	