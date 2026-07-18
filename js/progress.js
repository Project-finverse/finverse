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
/* ==========================================================
   Rank System
========================================================== */

function getRank(xp){

    if(xp>=1000) return "👑 Finance Master";

    if(xp>=600) return "💎 Finance Strategist";

    if(xp>=300) return "📈 Smart Investor";

    if(xp>=100) return "🚀 Finance Explorer";

    return "🌱 Finance Beginner";

}



/* ==========================================================
   Update Rank
========================================================== */

function updateRank(){

    const rank=document.getElementById("currentRank");

    if(rank){

        rank.textContent=getRank(progressData.xp);

    }

}



/* ==========================================================
   XP Progress Bar
========================================================== */

function updateXPBar(){

    const bar=document.querySelector(".progress-bar");

    if(!bar) return;

    const percent=

    (progressData.xp%100);

    bar.style.width=

    percent+"%";

}



/* ==========================================================
   Achievement System
========================================================== */

function unlockAchievements(){

    const achievements=[];

    if(progressData.xp>=100){

        achievements.push("🚀 First 100 XP");

    }

    if(progressData.latestQuiz===3){

        achievements.push("🏆 Perfect Quiz");

    }

    if(progressData.streak>=7){

        achievements.push("🔥 7-Day Streak");

    }

    progressData.achievements=achievements;

}



/* ==========================================================
   Display Achievements
========================================================== */

function renderAchievements(){

    const list=

    document.getElementById("achievementList");

    if(!list) return;

    list.innerHTML="";

    progressData.achievements.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        list.appendChild(li);

    });

}
/* ==========================================================
   Initialize Dashboard
========================================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

updateProgressDashboard();

updateQuizCard();

updateRank();

updateXPBar();

unlockAchievements();

renderAchievements();
loadCharts();
});
/* ==========================================================
   Charts
========================================================== */

function loadCharts(){

const xpCanvas=document.getElementById("xpChart");

const moduleCanvas=document.getElementById("moduleChart");

if(!xpCanvas || !moduleCanvas){

return;

}

new Chart(xpCanvas,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"XP",

data:[15,40,35,60,75,90,progressData.xp],

borderWidth:3,

tension:.4,

fill:true

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

}

}

});

new Chart(moduleCanvas,{

type:"doughnut",

data:{

labels:[

"Completed",

"Remaining"

],

datasets:[{

data:[

progressData.level,

10-progressData.level

]

}]

},

options:{

responsive:true

}

});

}