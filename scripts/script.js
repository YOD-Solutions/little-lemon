
const sections = document.querySelectorAll("section");
const banner_header = document.querySelector('.banner_text');
const upper_header = document.querySelector('.upper_inner_header');
const lower_header = document.querySelector('.lower_inner_header');
const main = document.querySelector("main");

const upper_headerBoxTopInt = upper_header.getBoundingClientRect().top;
const lower_headerBoxTopInt = lower_header.getBoundingClientRect().bottom;
const banner_headerTopInt = banner_header.getBoundingClientRect().top;
const main_BoxTopInt = main.getBoundingClientRect().top;

const observer = new IntersectionObserver(enteries => {   
    enteries.forEach(entry =>{
        if(entry.isIntersecting){        
        
            if(entry.target.nodeName == "SECTION"){
                entry.target.style.visibility="visible";                    
                entry.target.style['animation-duration']='1000ms'; 
                entry.target.style['animation-delay']='300ms'; 
                entry.target.style['animation-name']='fadeInUp';                  
                entry.target.classList.add("animated");
                    
            }

            if(entry.target == banner_header){
                let title = entry.target.querySelectorAll('span.blast');
                title.forEach((letter,index)=>{
                    letter.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                    letter.style["transition-delay"]=300+index*100 +"ms";
                    letter.style["transition-duration"]="800ms";
                    letter.style.opacity = "1";
                })
            }
            
            function animateOnScroll(){ 

                let headerBoxTop = 0;
                let currentPos = 0; 
                let windowHeight = window.innerHeight; 
                
                if(entry.target == main){
                    let small_screen = document.querySelector('.small_screen_header');
                    let large_screen = document.querySelector('.large_screen_header');
                    let main_BoxTop = main.getBoundingClientRect().top;                 
                    if(main_BoxTop < -83){
                        small_screen.classList.add("show");
                        large_screen.classList.add("show");
                    }else if(main_BoxTop < -100){
                        large_screen.classList.add("show");
                    }else{
                        small_screen.classList.remove("show");
                        large_screen.classList.remove("show");
                    }
                    
                }               
                if(entry.target == upper_header){
                    headerBoxTop = entry.target.getBoundingClientRect().top;
                    currentPos = 400*(upper_headerBoxTopInt - headerBoxTop -10)/(upper_headerBoxTopInt-10);
                    if(currentPos>=0 && currentPos <= 400){                    
                        entry.target.style.transform = 'translate3d(-'+ currentPos +'px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)';                   
                    } 
                }                 
                if(entry.target == lower_header){
                    headerBoxTop = entry.target.getBoundingClientRect().bottom;      
                    currentPos = 400*(lower_headerBoxTopInt - headerBoxTop -10)/(lower_headerBoxTopInt-10);
                    if(currentPos>=0 && currentPos <= 400){                    
                        entry.target.style.transform =  'translate3d('+ currentPos +'px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)'; 
                    } 
                }
                
           
                
            }
            
            window.addEventListener('scroll',animateOnScroll);
           
        } else{
            window.removeEventListener('scroll',animateOnScroll);        
        }
    });
});

observer.observe(banner_header);
observer.observe(upper_header);
observer.observe(lower_header);
observer.observe(main);
sections.forEach(section=>{
    observer.observe(section);
})


//---- Small Screen Menu toggle click event---------

const menuToggle = document.querySelector(".menu_toggle");
const overlayBackground = document.querySelector("#overlay_background");
const smallMenuList = document.querySelector(".small_menu_list");
const smallScreenHeader = document.querySelector(".small_screen_header");
const menuAnchor = document.querySelectorAll(".small_menu_list li a");
const smallMenuClose = document.querySelector('#close_small_menu');


menuToggle.addEventListener("click",() =>{
    document.querySelector("body").classList.toggle("toggle_menu");
    document.querySelector("body").classList.toggle("restore");
});

overlayBackground.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("toggle_menu");
    document.querySelector("body").classList.toggle("restore");
});

smallMenuClose.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("toggle_menu");
    document.querySelector("body").classList.toggle("restore");
})
menuAnchor.forEach(anchor =>{
    anchor.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("toggle_menu");    
    anchor.parentElement.classList.add("active");

    const siblings = n => [...n.parentElement.children].filter(c=>c.nodeType == 1 && c!=n);    
    siblings(anchor.parentElement).forEach(li=>{
        li.classList.remove("active");
    })
   
});
});

 //-------- preloader remove ------------
/*
 window.addEventListener("load", function(){
    setTimeout(()=> {        
     let fadeTarget = document.querySelector('.page-loader');
     fadeTarget.style.transition = "opacity 1s ease";    
     let fadeEffect = setInterval(function () {
         if (!fadeTarget.style.opacity) {
             fadeTarget.style.opacity = 1;
         }
         if (fadeTarget.style.opacity > 0) {
             fadeTarget.style.opacity -= 0.25;
         } else {
             clearInterval(fadeEffect);
         }
     }, 200);
     },1000);
     
    
});

*/




