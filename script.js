// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
	if (index >= totalSlides) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = totalSlides - 1;
	} else {
		slideIndex = index;
	}

	const slideWidth = slides[0].clientWidth;
	const carouselSlide = document.querySelector('.carousel-slide');
	carouselSlide.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

	dots.forEach((dot) => dot.classList.remove('active'));
	dots[slideIndex].classList.add('active');
}

function moveSlide(n) {
	showSlide(slideIndex + n);
}

function currentSlide(n) {
	showSlide(n - 1);
}

let autoSlide = setInterval(() => moveSlide(1), 5000);

function resetInterval() {
	clearInterval(autoSlide);
	autoSlide = setInterval(() => moveSlide(1), 5000);
}

document.querySelector('.prev').addEventListener('click', () => {
	moveSlide(-1);
	resetInterval();
});

document.querySelector('.next').addEventListener('click', () => {
	moveSlide(1);
	resetInterval();
});

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide(index + 1);
		resetInterval();
	});
});

showSlide(slideIndex);
