/* ==========================================================
   FINVERSE FINANCIAL LAB
   Premium Simulator Engine
========================================================== */

"use strict";

/* ==========================================================
   Helpers
========================================================== */

const $ = (id) => document.getElementById(id);

function formatINR(value) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(value);
}

function animateValue(element, target, prefix = "₹") {

    if (!element) return;

    let current = 0;

    const increment = target / 40;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        if (prefix === "₹") {

            element.textContent = formatINR(current);

        } else {

            element.textContent = Math.round(current) + prefix;

        }

    }, 15);

}

/* ==========================================================
   Dashboard
========================================================== */

const dashboard = {

    savings: 0,

    wealth: 0,

    debt: 0,

    health: 92

};

function updateDashboard() {

    animateValue(

        $("dashboardSavings"),

        dashboard.savings

    );

    animateValue(

        $("dashboardWealth"),

        dashboard.wealth

    );

    animateValue(

        $("dashboardDebt"),

        dashboard.debt

    );

    if ($("healthScore")) {

        $("healthScore").textContent = dashboard.health;

    }

}

/* ==========================================================
   AI Coach
========================================================== */

function coach(message) {

    const box = $("coachMessage");

    if (!box) return;

    box.style.opacity = "0";

    setTimeout(() => {

        box.textContent = message;

        box.style.opacity = "1";

    }, 250);

}

/* ==========================================================
   Achievements
========================================================== */

function unlock(id) {

    const badge = $(id);

    if (!badge) return;

    badge.classList.remove("locked");

    badge.classList.add("unlocked");

}

/* ==========================================================
   Progress Bar
========================================================== */

function updateProgress(percent) {

    const bar = $("budgetProgress");

    if (!bar) return;

    bar.style.width = percent + "%";

}

/* ==========================================================
   Budget Planner
========================================================== */

function calculateBudget() {
    /* ==========================================================
   Compound Interest Calculator
========================================================== */

let compoundChart = null;

function calculateCompound() {

    const principal = Number($("principal").value);

    const rate = Number($("rate").value);

    const years = Number($("years").value);

    if (
        principal <= 0 ||
        rate <= 0 ||
        years <= 0
    ) {

        $("compoundResult").textContent =
            "Enter valid values";

        return;
    }

    const r = rate / 100;

    const future =
        principal *
        Math.pow(1 + r, years);

    $("compoundResult").textContent =
        formatINR(future);

    dashboard.wealth = future;

    updateDashboard();

    unlock("badgeInvestor");

    coach(
        "Compound interest rewards patience. Starting early can dramatically increase long-term wealth."
    );

    const labels = [];
    const values = [];

    for (let i = 0; i <= years; i++) {

        labels.push("Year " + i);

        values.push(
            principal *
            Math.pow(1 + r, i)
        );

    }

    const ctx =
        $("compoundChart").getContext("2d");

    if (compoundChart) {

        compoundChart.destroy();

    }

    compoundChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [

                {

                    label: "Investment Growth",

                    data: values,

                    borderColor: "#4FD1FF",

                    borderWidth: 3,

                    fill: true,

                    backgroundColor:
                        "rgba(79,209,255,.15)",

                    tension: .35,

                    pointRadius: 0

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "#94A3B8"

                    },

                    grid: {

                        color: "rgba(255,255,255,.05)"

                    }

                },

                y: {

                    ticks: {

                        color: "#94A3B8"

                    },

                    grid: {

                        color: "rgba(255,255,255,.05)"

                    }

                }

            }

        }

    });

    saveSimulationData();

}

/* ==========================================================
   EMI Calculator
========================================================== */

let emiChart = null;

function calculateEMI() {

    const loan = Number($("loan").value);

    const annualRate = Number($("loanRate").value);

    const years = Number($("loanYears").value);

    if (

        loan <= 0 ||

        annualRate <= 0 ||

        years <= 0

    ) {

        $("emiResult").textContent =
            "Enter valid values";

        return;

    }

    const monthlyRate =
        annualRate / 1200;

    const months =
        years * 12;

    const emi =
        (loan *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment =
        emi * months;

    const interest =
        totalPayment - loan;

    $("emiResult").textContent =
        formatINR(emi);

    dashboard.debt = loan;

    updateDashboard();

    unlock("badgeLoan");

    coach(
        "Lower interest rates and shorter loan durations reduce the total interest paid."
    );

    const ctx =
        $("emiChart").getContext("2d");

    if (emiChart) {

        emiChart.destroy();

    }

    emiChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [

                "Principal",

                "Interest"

            ],

            datasets: [

                {

                    data: [

                        loan,

                        interest

                    ],

                    backgroundColor: [

                        "#4FD1FF",

                        "#7C5CFF"

                    ],

                    borderWidth: 0

                }

            ]

        },

        options: {

            plugins: {

                legend: {

                    labels: {

                        color: "#F8FAFC"

                    }

                }

            }

        }

    });

    saveSimulationData();

}

/* ==========================================================
   Savings Goal Planner
========================================================== */

let goalChart = null;

function calculateGoal() {
    /* ==========================================================
   SIP Calculator
========================================================== */

let sipChart = null;

function calculateSIP() {

    const monthly = Number($("sipAmount").value);
    const annualRate = Number($("sipRate").value);
    const years = Number($("sipYears").value);

    if (
        monthly <= 0 ||
        annualRate <= 0 ||
        years <= 0
    ) {

        $("sipResult").textContent =
            "Enter valid values";

        return;
    }

    const r = annualRate / 100 / 12;
    const months = years * 12;

    const future =
        monthly *
        ((Math.pow(1 + r, months) - 1) / r) *
        (1 + r);

    $("sipResult").textContent =
        formatINR(future);

    dashboard.wealth =
        Math.max(dashboard.wealth, future);

    updateDashboard();

    coach(
        "Regular SIP investing helps reduce market timing risk and benefits from compounding."
    );

    const labels = [];
    const values = [];

    for (let i = 1; i <= years; i++) {

        const m = i * 12;

        labels.push("Year " + i);

        values.push(
            monthly *
            ((Math.pow(1 + r, m) - 1) / r) *
            (1 + r)
        );

    }

    const ctx = $("sipChart").getContext("2d");

    if (sipChart) {

        sipChart.destroy();

    }

    sipChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [{

                label: "SIP Growth",

                data: values,

                borderColor: "#7C5CFF",

                backgroundColor: "rgba(124,92,255,.15)",

                fill: true,

                tension: .35,

                pointRadius: 0

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

    saveSimulationData();

}

/* ==========================================================
   Inflation Calculator
========================================================== */

function calculateInflation() {

    const today =
        Number($("todayCost").value);

    const rate =
        Number($("inflationRate").value);

    const years =
        Number($("inflationYears").value);

    if (
        today <= 0 ||
        rate <= 0 ||
        years <= 0
    ) {

        $("inflationResult").textContent =
            "Enter valid values";

        return;

    }

    const future =
        today *
        Math.pow(
            1 + rate / 100,
            years
        );

    $("inflationResult").textContent =
        formatINR(future);

    coach(
        "Inflation quietly reduces purchasing power. Investing above inflation is important."
    );

    saveSimulationData();

}

/* ==========================================================
   Net Worth Calculator
========================================================== */

function calculateNetWorth() {

    const assets =
        Number($("assets").value);

    const liabilities =
        Number($("liabilities").value);

    if (
        isNaN(assets) ||
        isNaN(liabilities)
    ) {

        $("netWorthResult").textContent =
            "Enter valid values";

        return;

    }

    const net =
        assets - liabilities;

    $("netWorthResult").textContent =
        formatINR(net);

    dashboard.wealth = net;

    dashboard.debt = liabilities;

    updateDashboard();

    coach(
        "Growing assets faster than liabilities steadily improves your financial health."
    );

    saveSimulationData();

}

/* ==========================================================
   Emergency Fund
========================================================== */

function calculateEmergencyFund() {

    const expense =
        Number($("monthlyExpense").value);

    const months =
        Number($("emergencyMonths").value);

    if (
        expense <= 0 ||
        months <= 0
    ) {

        $("emergencyResult").textContent =
            "Enter valid values";

        return;

    }

    const fund =
        expense * months;

    $("emergencyResult").textContent =
        formatINR(fund);

    coach(
        "An emergency fund protects you from unexpected financial shocks."
    );

    saveSimulationData();

}

/* ==========================================================
   Local Storage
========================================================== */

function saveSimulationData() {

    const ids = [

        "income",
        "expenses",

        "principal",
        "rate",
        "years",

        "loan",
        "loanRate",
        "loanYears",

        "goalAmount",
        "goalMonths",

        "sipAmount",
        "sipRate",
        "sipYears",

        "todayCost",
        "inflationRate",
        "inflationYears",

        "assets",
        "liabilities",

        "monthlyExpense",
        "emergencyMonths"

    ];

    const data = {};

    ids.forEach(id => {

        const el = $(id);

        if (el) {

            data[id] = el.value;

        }

    });

    localStorage.setItem(

        "finverseLab",

        JSON.stringify(data)

    );

}

function restoreSimulationData() {

    const saved =
        JSON.parse(

            localStorage.getItem("finverseLab")

        );

    if (!saved) return;

    Object.keys(saved).forEach(id => {

        if ($(id)) {

            $(id).value = saved[id];

        }

    });

}

    const goal =
        Number($("goalAmount").value);

    const months =
        Number($("goalMonths").value);

    if (

        goal <= 0 ||

        months <= 0

    ) {

        $("goalResult").textContent =
            "Enter valid values";

        return;

    }

    const monthly =
        goal / months;

    $("goalResult").textContent =
        formatINR(monthly);

    unlock("badgeSavings");

    coach(
        "Consistent monthly saving is the easiest way to reach long-term financial goals."
    );

    const progress = [];

    const labels = [];

    for (let i = 1; i <= months; i++) {

        labels.push(i);

        progress.push(monthly * i);

    }

    const ctx =
        $("goalChart").getContext("2d");

    if (goalChart) {

        goalChart.destroy();

    }

    goalChart = new Chart(ctx, {

        type: "line",

        data: {

            labels,

            datasets: [

                {

                    data: progress,

                    borderColor: "#FF5FD2",

                    backgroundColor:
                        "rgba(255,95,210,.15)",

                    fill: true,

                    tension: .35,

                    pointRadius: 0

                }

            ]

        },

        options: {

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "#94A3B8"

                    }

                },

                y: {

                    ticks: {

                        color: "#94A3B8"

                    }

                }

            }

        }

    });

    saveSimulationData();

}

    const income = Number($("income").value);

    const expenses = Number($("expenses").value);

    if (

        income <= 0 ||

        expenses < 0 ||

        isNaN(income) ||

        isNaN(expenses)

    ) {

        $("budgetResult").textContent =

            "Enter valid values";

        return;

    }

    const savings = income - expenses;

    dashboard.savings = savings;

    dashboard.health = Math.max(

        0,

        Math.min(

            100,

            Math.round(

                (savings / income) * 100

            )

        )

    );

    $("budgetResult").textContent =

        formatINR(savings);

    updateProgress(

        Math.max(

            0,

            (savings / income) * 100

        )

    );

    updateDashboard();

    unlock("badgeBudget");

    if (savings > income * 0.30) {

        coach(

            "Excellent! You're saving more than 30% of your income. Keep building long-term wealth."

        );

    } else if (savings > income * 0.20) {

        coach(

            "Great work! Your savings rate is healthy. Consider investing a portion in mutual funds."

        );

    } else {

        coach(

            "Try reducing discretionary expenses to improve your monthly savings."

        );

    }

    saveSimulationData();

}
/* ==========================================================
   Event Listeners
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    restoreSimulationData();

    updateDashboard();

    coach(
        "👋 Welcome to FinVerse Financial Lab. Try any simulator to receive personalized financial insights."
    );

    $("budgetBtn")?.addEventListener(
        "click",
        calculateBudget
    );

    $("compoundBtn")?.addEventListener(
        "click",
        calculateCompound
    );

    $("emiBtn")?.addEventListener(
        "click",
        calculateEMI
    );

    $("goalBtn")?.addEventListener(
        "click",
        calculateGoal
    );

    $("sipBtn")?.addEventListener(
        "click",
        calculateSIP
    );

    $("inflationBtn")?.addEventListener(
        "click",
        calculateInflation
    );

    $("netWorthBtn")?.addEventListener(
        "click",
        calculateNetWorth
    );

    $("emergencyBtn")?.addEventListener(
        "click",
        calculateEmergencyFund
    );

});

/* ==========================================================
   Animated Counter
========================================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".sim-card,.analytics-card,.achievement-card,.dashboard-card,.stat-card"

).forEach(card => {

    observer.observe(card);

});

/* ==========================================================
   Mouse Glow Effect
========================================================== */

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* ==========================================================
   Live Health Score
========================================================== */

function refreshHealthScore() {

    let score = 100;

    if (dashboard.debt > dashboard.wealth) {

        score -= 25;

    }

    if (dashboard.savings < 5000) {

        score -= 15;

    }

    if (dashboard.wealth > 500000) {

        score += 10;

    }

    dashboard.health =

        Math.max(

            0,

            Math.min(

                100,

                score

            )

        );

    if ($("healthScore")) {

        $("healthScore").textContent = dashboard.health;

    }

}

setInterval(

    refreshHealthScore,

    1500

);

/* ==========================================================
   XP Integration
========================================================== */

function rewardXP(points = 5) {

    if (typeof addXP === "function") {

        addXP(points);

    }

}

/* ==========================================================
   Auto Reward Buttons
========================================================== */

document.querySelectorAll(

    ".calculate-btn"

).forEach(button => {

    button.addEventListener(

        "click",

        () => rewardXP(5)

    );

});

/* ==========================================================
   Keyboard Support
========================================================== */

document.querySelectorAll(

    "input"

).forEach(input => {

    input.addEventListener(

        "keydown",

        e => {

            if (e.key === "Enter") {

                e.preventDefault();

                input.closest(".sim-card")

                    ?.querySelector(".calculate-btn")

                    ?.click();

            }

        }

    );

});

/* ==========================================================
   Scroll To Top Button
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "scroll-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   End of File
========================================================== */