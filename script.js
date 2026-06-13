/* =========================
   SCROLL ANIMATIONS
========================= */

const hiddenElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});


/* =========================
   LUXURY BUTTON
========================= */

const exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){

    exploreBtn.addEventListener("click", () => {

        const villas = document.getElementById("villas");

        villas.scrollIntoView({
            behavior:"smooth"
        });

    });

}


/* =========================
   HEADER EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(0,0,0,0.95)";

        header.style.boxShadow =
        "0 5px 20px rgba(255,215,0,0.15)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,0.85)";

        header.style.boxShadow =
        "none";

    }

});


/* =========================
   GALLERY HOVER EFFECT
========================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1)";

    });

});


/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
        form.querySelector('input[type="text"]').value;

        if(name.trim() === ""){

            alert("Please enter your name.");

            return;
        }

        alert(
        "Thank you " +
        name +
        "! Your luxury request has been received."
        );

        form.reset();

    });

}


/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener("load", () => {

    console.log(
    "Royal Luxury Website Loaded Successfully"
    );

});
