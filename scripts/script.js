
const upper_header = document.querySelector('.upper_inner_header');
const lower_header = document.querySelector('.lower_inner_header');

const upper_headerBoxTopInt = upper_header.getBoundingClientRect().top;
const lower_headerBoxTopInt = lower_header.getBoundingClientRect().bottom;

const intro_upper_observer = new IntersectionObserver(enteries => {   
    enteries.forEach(entry =>{
        if(entry.isIntersecting){          
            function animateOnScroll(){
                const windowHeight = window.innerHeight;              
                let upper_headerBoxTop = upper_header.getBoundingClientRect().top;
           
                let currentPos = 400*(upper_headerBoxTopInt - upper_headerBoxTop -10)/(upper_headerBoxTopInt-10);
                if(currentPos>=0 && currentPos <= 400){                    
                    upper_header.style.transform = 'translate3d(-'+ currentPos +'px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)';                   
                 } 
            }
            
            window.addEventListener('scroll',animateOnScroll);
           
        } else{
            window.removeEventListener('scroll',animateOnScroll);        
        }
    });
});

const intro_lower_observer = new IntersectionObserver(enteries => {   
    enteries.forEach(entry =>{
        if(entry.isIntersecting){          
            function lowerAnimateOnScroll(){          
                let lower_headerBoxTop = lower_header.getBoundingClientRect().bottom;      
                let currentPos = 400*(lower_headerBoxTopInt - lower_headerBoxTop -10)/(lower_headerBoxTopInt-10);
                if(currentPos>=0 && currentPos <= 400){                    
                    lower_header.style.transform =  'translate3d('+ currentPos +'px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)'; 
                 } 
            }
            
            window.addEventListener('scroll',lowerAnimateOnScroll);
           
        } else{
            window.removeEventListener('scroll',lowerAnimateOnScroll);          
        }
    });
});


intro_upper_observer.observe(upper_header);
intro_lower_observer.observe(lower_header);




