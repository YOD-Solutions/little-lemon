
const menu_section = document.querySelector('#menu');

const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry =>{
        if(entry.isIntersecting){
            menu_section.classList.add("animate");
            menu_section.style.animation = 'slide-in 2s ease-out';    
        } else{
            menu_section.classList.remove("animate");
    
        }
    });
});

observer.observe(menu_section);