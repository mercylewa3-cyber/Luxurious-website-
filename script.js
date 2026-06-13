const hiddenElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((element) => {
    observer.observe(element);
});


const button = document.getElementById("exploreBtn");

button.addEventListener("click", () => {
    alert("Welcome to Royal Luxury!");
});
