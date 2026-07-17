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