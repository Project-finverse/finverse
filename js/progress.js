/* ==========================================================
   FinVerse Progress Dashboard
========================================================== */

const progressData = {

    xp: Number(localStorage.getItem("finverseXP")) || 0,

    level: Number(localStorage.getItem("finverseLevel")) || 1,

    streak: Number(localStorage.getItem("finverseStreak")) || 1,

    latestQuiz:

        Number(localStorage.getItem("latestQuizScore")) || 0,

    achievements:

        JSON.parse(

            localStorage.getItem("achievements")

        ) || []

};



/* ==========================================================
   Update Dashboard
========================================================== */

function updateProgressDashboard(){

    updateValue(".xp-value", progressData.xp);

    updateValue(".level-value", progressData.level);

    updateValue(".streak-value", progressData.streak);

}



/* ==========================================================
   Utility
========================================================== */

function updateValue(selector,value){

    document

    .querySelectorAll(selector)

    .forEach(el=>{

        el.textContent=value;

    });

}



/* ==========================================================
   Latest Quiz
========================================================== */

function updateQuizCard(){

    const score=

    document.getElementById("latestQuiz");

    if(score){

        score.textContent=

        `${progressData.latestQuiz}/3`;

    }

}