/* ==========================================================
   FinVerse Core
   ========================================================== */

const FinVerse = {

    xp: Number(localStorage.getItem("finverseXP")) || 0,

    level: Number(localStorage.getItem("finverseLevel")) || 1,

    streak: Number(localStorage.getItem("finverseStreak")) || 1,

    completedLessons:
        JSON.parse(localStorage.getItem("completedLessons")) || [],

    achievements:
        JSON.parse(localStorage.getItem("achievements")) || []

};



/* ==========================================================
   Save Data
   ========================================================== */

function saveData() {

    localStorage.setItem(

        "finverseXP",

        FinVerse.xp

    );

    localStorage.setItem(

        "finverseLevel",

        FinVerse.level

    );

    localStorage.setItem(

        "finverseStreak",

        FinVerse.streak

    );

    localStorage.setItem(

        "completedLessons",

        JSON.stringify(FinVerse.completedLessons)

    );

    localStorage.setItem(

        "achievements",

        JSON.stringify(FinVerse.achievements)

    );

}



/* ==========================================================
   XP System
   ========================================================== */

function addXP(amount){

    FinVerse.xp += amount;

    if(FinVerse.xp >= FinVerse.level * 100){

        FinVerse.level++;

        showToast(

            "🎉 Level Up! Level " +

            FinVerse.level

        );

    }

    saveData();

    updateDashboard();

}



/* ==========================================================
   Dashboard
   ========================================================== */

function updateDashboard(){

    document.querySelectorAll(".xp-value")

    .forEach(el=>{

        el.textContent =

        FinVerse.xp;

    });

    document.querySelectorAll(".level-value")

    .forEach(el=>{

        el.textContent =

        FinVerse.level;

    });

    document.querySelectorAll(".streak-value")

    .forEach(el=>{

        el.textContent =

        FinVerse.streak;

    });

}
/* ==========================================================
   Toast Notifications
   ========================================================== */

function showToast(message) {

    let toast = document.getElementById("finverse-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "finverse-toast";

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}



/* ==========================================================
   Animated Counters
   ========================================================== */

function animateCounter(element, target) {

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 60));

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = current;

    }, 20);

}



document.querySelectorAll("[data-counter]")

.forEach(counter => {

    animateCounter(

        counter,

        Number(counter.dataset.counter)

    );

});



/* ==========================================================
   Scroll Progress
   ========================================================== */

const progressBar =

document.querySelector(".reading-progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const total =

        document.documentElement.scrollHeight -

        window.innerHeight;

        const percent =

        (window.scrollY / total) * 100;

        progressBar.style.width = percent + "%";

    });

}



/* ==========================================================
   Back To Top Button
   ========================================================== */

let topButton = document.getElementById("backToTop");

if (!topButton) {

    topButton = document.createElement("button");

    topButton.id = "backToTop";

    topButton.innerHTML = "↑";

    document.body.appendChild(topButton);

}

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================================================
   Scroll Reveal Animation
========================================================== */

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},

{

threshold:0.15

}

);

document

.querySelectorAll(

".card,.feature,.section-header,.hero-stats"

)

.forEach(el=>{

revealObserver.observe(el);

});



/* ==========================================================
   Navbar Blur
========================================================== */

const nav=document.querySelector(".nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.classList.add("nav-scrolled");

}

else{

nav.classList.remove("nav-scrolled");

}

});



/* ==========================================================
   Floating Mouse Glow
========================================================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



/* ==========================================================
   Smooth Anchor Scroll
========================================================== */

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

const target=document.querySelector(

anchor.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});