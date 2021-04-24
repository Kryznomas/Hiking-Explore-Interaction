const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");
const landscapes = document.querySelectorAll(".landscape");
const routes = document.querySelectorAll(".route");
const quotes = document.querySelectorAll(".quote");
const places = document.querySelectorAll(".place");
const initialPlace = document.getElementById("place1");
const initialRoute = document.getElementById("route1");
var arrayLandscapes = [];
var activeLandscapes = [];
var activeRoute = null;
var activePlace = null;
var activeLandscape = null;


window.onload = initialAnimations();
document.getElementById("right").addEventListener("click", slideToLeft);
document.getElementById("left").addEventListener("click", slideToRight);
card1.addEventListener("click", displayLandscape);

for (var i = 0; i < cards.length; i++) {  
    addListeners(cards[i], landscapes[i], routes[i], quotes[i],places[i]);
};

function addListeners(card, landscape, route, quote, place) {

    card.addEventListener("click", function() {
        carouselOut();
        retractRoutes();
        retractPlaces();
        displayLandscape(landscape);
        setTimeout(resetLandscape, 3000);
        displayRoutes(route);
        displayPlaces(place)
        quoteAnimation(quote);
        setTimeout(carouselIn, 5000);
        activeRoute = route;
        activePlace = place;
        activeLandscape = landscape
    });
};
function initialAnimations(){
    carouselIn();
    displayPlaces(initialPlace);
    displayRoutes(initialRoute)
    activePlace = initialPlace;
    activeRoute = initialRoute;
}
function carouselIn() {
    gsap.to(carousel, {
    duration: 1,
    xPercent: -70,
    delay: 4,
    });
};
function carouselOut(){
    gsap.to(carousel, {
        duration: 1,
        xPercent: 70,
        });
};
function slideToRight(){
    gsap.fromTo(carousel, 
        {
            xPercent:-100},
        {
            xPercent: -80,
            duration: 1,
        },
        );
};
function slideToLeft(){
    gsap.fromTo(carousel, 
        {
            xPercent:-80},
        {
            xPercent: -100,
            duration: 1,
        },
        );
};
function displayLandscape(landscape){
    gsap.fromTo(landscape, 
        {
            scale: 0,
            opacity: 0,
        },
        {
        display: "block",
        duration: 2,
        scale: 1,
        opacity: 1,
        delay: 1
    }
)};
function resetLandscape(){
        gsap.set(activeLandscape,
            {
            scale: 0,
            opacity: 0,
            display: "none"
            });
};
function displayRoutes(route){
    gsap.to(route, 
        {
        duration: 2,
        yPercent: -110,
        delay: 1
    }
)};
function displayPlaces(place){
    gsap.to(place,
        {
            display: "flex",
            duration: 0.5,
            delay:2,
            opacity: 1,
            scale: 1,
        })
}
function retractRoutes(){
    
    gsap.fromTo(activeRoute,{
        yPercent: -110
    },
    {
        yPercent: 110,
        duration: 1
    })
};
function retractPlaces(){
    gsap.to(activePlace,
    {
        xPercent: -400,
        duration: 1
    })
}
function quoteAnimation(quote){    
    gsap.to(quote,
        {   
            display: "block",
            scale: 1,
            duration: 2,
            delay:1,
            opacity: 1
            
        });
    gsap.to(quote,
        {
            scale: 0,
            duration: 2,
            delay: 6,
            duration: 0.5,
            opacity: 0
        })
}