const search = document.querySelector('.search')
const btn = document.querySelector('.btn')

	let count = 0;
btn.addEventListener('click', update) 
	
function update() {
 //or search.classList.toggle('enable') single line code
	count++
	if(count % 2 == 0){
		search.classList.remove('enabl')
		btn.classList.remove('enabl')
	}
	else{
		search.classList.add('enabl')
		btn.classList.add('enabl')
	}
}