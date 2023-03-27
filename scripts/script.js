
const banner_header = document.querySelector('.banner_text');
const upper_header = document.querySelector('.upper_inner_header');
const lower_header = document.querySelector('.lower_inner_header');
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");


const upper_headerBoxTopInt = upper_header.getBoundingClientRect().top;
const lower_headerBoxTopInt = lower_header.getBoundingClientRect().bottom;
const banner_headerTopInt = banner_header.getBoundingClientRect().top;
const main_BoxTopInt = main.getBoundingClientRect().top;

const observer = new IntersectionObserver(enteries => {   
    enteries.forEach(entry =>{
        if(entry.isIntersecting){        
        
            if(entry.target == banner_header){
                let title = entry.target.querySelectorAll('span.blast');
                title.forEach((letter,index)=>{
                    letter.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                    letter.style["transition-delay"]=300+index*100 +"ms";
                    letter.style["transition-duration"]="800ms";
                    letter.style.opacity = "1";
                });
                observer.unobserve(entry.target);
            }
            if(entry.target.nodeName == "SECTION" && entry.target.className != "banner_section" && entry.target.className != "intro_section" && entry.target.className != "map_section"){
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
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

//---- nav anchor tag click event to scoll smoothly

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.small_menu_list ul>li>a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//---- image modal function ----------
const imageModal =function(imgElement,imgSrc){
    imgElement.forEach((image,index) => {
        image.addEventListener("click",()=>{    
            
            const figure_modal = `<div class="modal_bg" style="visibility:visible"></div>
            <div class="modal_wrap">
                <div class="modal_container">
                    <div class="modal_content">
                        <div class="modal_figure">
                            <button title="Close (Esc)" type="button" class="modal_close" style="display:none">&times</button>
                            <figure>
                            <img class="modal_img" src="${image.getAttribute(imgSrc)}" style="display:none;max-height:${window.innerHeight}px">
                                <figcaption>
                                    <div class="modal_bottom_bar" style="display:none">
                                        <div class="modal_title">${image.getAttribute("alt")}</div>
                                        <div class="modal_counter">${index+1}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        
                    </div>
                    <div class="modal_preloader">Loading...</div>
                </div>
            </div>`;
            
            document.querySelector("html").style.overflow="hidden";
            document.querySelector("body").insertAdjacentHTML('beforeend',figure_modal);
            document.querySelector("img.modal_img").addEventListener("load",()=>{            
                document.querySelector(".modal_preloader").style.display = "none";
                document.querySelector("img.modal_img").style.display = "block";
                document.querySelector(".modal_bottom_bar").style.display = "block";
                document.querySelector("button.modal_close").style.display = "block";
                document.querySelector(".modal_wrap").style.overflow = "hidden auto";
                
                
            });
            
            document.querySelector("button.modal_close").addEventListener("click",()=>{        
                document.querySelector(".modal_bg").remove();
                document.querySelector(".modal_wrap").remove();
                document.querySelector("html").style.removeProperty('overflow');
             
            })
    
            document.querySelector(".modal_wrap").addEventListener("click",()=>{    
                document.querySelector(".modal_bg").remove();
                document.querySelector(".modal_wrap").remove();
                document.querySelector("html").style.removeProperty('overflow');
            
            })
          
        })
    })
}

imageModal(document.querySelectorAll(".gallery_img img"),"large-src");


