const pics = document.querySelectorAll('.pics');
const prev = document.getElementById('pre');
const nextBtn = document.getElementById('next');
let count = 0;

nextBtn.addEventListener('click', next);
prev.addEventListener('click', pre);

const myInterval = setInterval(next, 3000);

function next() {
	count++;
	showImage();
}

function pre() {
	count--;
	showImage();
}

function showImage() {
	if (count >= pics.length) {
		count = 0;
	} else if (count < 0) {
		count = pics.length - 1;
	}

	deSelect();
	pics[count].classList.add('active');
}

function deSelect() {
	pics.forEach(pic => {
		pic.classList.remove('active');
	});
}

