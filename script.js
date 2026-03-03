document.addEventListener("DOMContentLoaded", function(){

    /* ===== FADE ANIMATION ===== */
    const faders = document.querySelectorAll(".fade");

    if(faders.length){
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        },{threshold:0.2});

        faders.forEach(f=>observer.observe(f));
    }

    /* ===== SERVICE CARDS ===== */
    const serviceCards = document.querySelectorAll('.service-card');

    if(serviceCards.length){
        const serviceObserver = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }
            });
        },{threshold:0.2});

        serviceCards.forEach(card=>{
            serviceObserver.observe(card);
        });
    }

    /* ===== HAMBURGER ===== */
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if(hamburger && nav){
        hamburger.addEventListener("click", ()=>{
            nav.classList.toggle("active");
        });
    }

    /* ===== THEME TOGGLE ===== */
    const themeToggle = document.getElementById("themeToggle");

    if(themeToggle){
        themeToggle.addEventListener("click", ()=>{
            document.body.classList.toggle("light-theme");

            if(document.body.classList.contains("light-theme")){
                themeToggle.textContent = "☀️";
            } else {
                themeToggle.textContent = "🌙";
            }
        });
    }

});
