// FUNCTION PARALLAX

window.addEventListener("scroll", function() {
    const parallax = document.querySelector("#parallax");
    let offset = window.pageYOffset;
    console.log('Offset: ' + offset);
    console.log('offset * 0.7' + offset);
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

// FUNCTION LOGO HOVER

// function thingshover() {
//     // var logoHTML = document.querySelector("#logoHTML");
//     // var logoCSS = document.querySelector("#logoCSS");
//     // var logoPython = document.querySelector("#logoPython");
//     // var logoPHP = document.querySelector("#logoPHP");
//     // var logoMySql = document.querySelector("#logoMySql");
//     // var logoJavaScript = document.querySelector("#logoJavaScript");
//     // var logoVuejs = document.querySelector("#logoVuejs");
//     // var logoSymfony = document.querySelector("#logoSymfony");
//     // var logoTailwind = document.querySelector("#logoTailwind");
//     // var logoMaterialize = document.querySelector("#logoMaterialize");
//     // var logoBootstrap = document.querySelector("#logoBoostrap");
//     // var logoWordpress = document.querySelector("#logoWordpress");
//     var h2Hover = document.querySelector("h2")
    
//     h2Hover.addEventListener("mouseover", function( event ) {
//         event.style.color = "orange";
//     });

// }

