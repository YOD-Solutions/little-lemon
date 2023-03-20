
const banner_header = document.querySelector('.banner_text');
const upper_header = document.querySelector('.upper_inner_header');
const lower_header = document.querySelector('.lower_inner_header');
const menu = document.querySelector('.menu_container');

const upper_headerBoxTopInt = upper_header.getBoundingClientRect().top;
const lower_headerBoxTopInt = lower_header.getBoundingClientRect().bottom;
const banner_headerTopInt = banner_header.getBoundingClientRect().bottom;
const booking_BoxTopInt = menu.getBoundingClientRect().top;
const booking_BoxBottomInt = menu.getBoundingClientRect().bottom;



const observer = new IntersectionObserver(enteries => {   
    enteries.forEach(entry =>{
        if(entry.isIntersecting){          
            function animateOnScroll(){ 
                let headerBoxTop = 0;
                let currentPos = 0; 
                windowHeight = window.innerHeight;
                if(entry.target == banner_header){
                    headerBoxTop = entry.target.getBoundingClientRect().bottom;
                    let currentPos = headerBoxTop;
                    if(currentPos>=0){                    
                        //banner_header.style.transform =  'translateY(-'+ currentPos +'px)';
                        let opac = Math.min(Math.max(currentPos/(banner_headerTopInt-15), 0), 1);
                        entry.target.style.opacity = opac;
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
                if(entry.target == menu){
                    headerBoxTop = entry.target.getBoundingClientRect().top;                            
                    currentPos =(windowHeight - headerBoxTop)/10;

                    if(windowHeight > headerBoxTop){                    
                        let children = entry.target.children;
                        for(let i=0;i<children.length;i++){                        
                            children[i].querySelector('img').style.transform = 'rotateZ('+ currentPos +'deg)';
                        }
                                    
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









