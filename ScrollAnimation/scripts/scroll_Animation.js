    const divse = document.querySelectorAll('.divs')

     window.addEventListener('scroll', checkboxes)

    checkboxes()

    function checkboxes() { 
    const bottm = window.innerHeight / 5 * 3.5
    divse.forEach(divs =>{
    	const topp = divs.getBoundingClientRect().top
        
        if(topp < bottm){
    		divs.classList.add('show')
    	}
    	else{
    		divs.classList.remove('show')
    	}
    })
    }