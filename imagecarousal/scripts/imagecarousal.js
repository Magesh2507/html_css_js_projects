const pic = document.querySelector('.pic')
const pics = document.querySelectorAll('.pics')
const prev = document.getElementById('pre')
const next = document.getElementById('next')

	let count = 0;
	next.addEventListener('click', good)
	prev.addEventListener('click', pre)
	const myInterval = setInterval(good, 2000)

function good(){
	count++
	pics.forEach((picse,idx) => {
	
		if(count < pics.length) {

			if(count == idx){
				deSelect()
			picse.classList.add('active')
			}
			
		}

		else{
			count--
			clearInterval(myInterval)
			const rev = setInterval(pre, 2000)
		}
	})
}


function deSelect(){
	pics.forEach((picse,idx) => {
		picse.classList.remove('active')
	})
}

function pre(){
	count--

	pics.forEach((picse,idx) => {

		if(count >= 0) {

			if(count == idx){
				deSelect()
			picse.classList.add('active')
			}

			else{
			picse.classList.remove('active')
			}
		}

		else{
			count++
			clearInterval(myInterval)
		}
	})
}

