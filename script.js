const parallax =document.querySelectorAll(".display");

window.addEventListener("scroll", function(){
    parallax.forEach(element =>{
        // Calculate letter-spacing and opacity based on scroll position
        const scrollPosition = window.pageYOffset;
        const initialOffset = element.offsetTop;
        const adjustedScrollPosition = Math.max(0, scrollPosition - initialOffset);
        
        const letterSpacing = adjustedScrollPosition * 0.02;
        const opacity = Math.min(1, adjustedScrollPosition / 250);
        element.style.letterSpacing = `${letterSpacing}px`;
        const h2Element =element.querySelector('h2');
        h2Element.style.opacity = 1-opacity;
    });
});