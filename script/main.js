window.addEventListener('load', () => {
    let loader = document.querySelector('.loader-container');
    loader.classList.add('loader-finish');
})

let navigation = document.querySelector('header');

let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScrollPost = window.pageYOffset;

    if(prevScrollpos > currentScrollPost) {
        navigation.style.top = "0px"
    } else {
        navigation.style.top = "-150px"
    }
    prevScrollpos = currentScrollPost;
})

let changeNav = () => {
    if(window.pageYOffset > 30) {
        navigation.classList.add('go');
    } else {
        navigation.classList.remove('go');
    }
}

window.addEventListener('scroll', changeNav);


