
const banner_header = document.querySelector('.banner_text');
const upper_header = document.querySelector('.upper_inner_header');
const lower_header = document.querySelector('.lower_inner_header');
const menu = document.querySelector('.menu_container');

const upper_headerBoxTopInt = upper_header.getBoundingClientRect().top;
const lower_headerBoxTopInt = lower_header.getBoundingClientRect().bottom;
const banner_headerTopInt = banner_header.getBoundingClientRect().top;
const booking_BoxTopInt = menu.getBoundingClientRect().top;
const booking_BoxBottomInt = menu.getBoundingClientRect().bottom;



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
                })
            }

            function animateOnScroll(){ 
                let headerBoxTop = 0;
                let currentPos = 0; 
                let windowHeight = window.innerHeight;                
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
                if(entry.target == menu){
                    headerBoxTop = entry.target.getBoundingClientRect().top;                            
                    currentPos =(windowHeight - headerBoxTop)/10;

                    if(windowHeight > headerBoxTop){                    
                        let children = entry.target.children;
                        for(let i=0;i<children.length;i++){                        
                            children[i].querySelector('img').style.transform = 'rotateZ('+ currentPos +'deg)';
                        }
                        let parent = entry.target.parentElement;
                        let title = parent.querySelectorAll('span.blast');
                        title.forEach((letter,index) =>{
                            letter.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
                            letter.style["transition-delay"]=300+index*100 +"ms";
                            letter.style["transition-duration"]="800ms";
                            letter.style.opacity = "1";
                        })                               
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
observer.observe(menu);

//---- Small Screen Menu toggle click event---------

const menuToggle = document.querySelector(".menu_toggle");
const overlayBackground = document.querySelector("#overlay_background");
const menuAnchor = document.querySelectorAll(".small_menu_list li a");

menuToggle.addEventListener("click",event =>{
    document.querySelector("body").classList.toggle("toggle_menu");
    document.querySelector("body").classList.toggle("restore");
});

overlayBackground.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("toggle_menu");
    document.querySelector("body").classList.toggle("restore");
});

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









