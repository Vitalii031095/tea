const button = document.querySelector('.open-nav');
const list = document.querySelector('.header__list');
const exc = document.querySelector('.exc');

const menuOpen = ()=> {
	list.classList.toggle('header__list__open')
}

button.addEventListener('click', menuOpen);

exc.addEventListener('click', ()=>{
	list.classList.remove('header__list__open')
} )
