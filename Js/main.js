var preloader = document.getElementById('loader');

function spinner() {
    setTimeout (() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none' ;
    }, 4000);
    
}