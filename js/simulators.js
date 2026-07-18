/* ==========================================
   FinVerse Financial Lab
========================================== */

function formatINR(value) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(value);
}

/* ==========================================
   Budget Planner
========================================== */

function calculateBudget() {

    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);

    const result = document.getElementById("budgetResult");

    if (isNaN(income) || isNaN(expenses)) {

        result.textContent = "Please enter valid values.";
        return;

    }

    const savings = income - expenses;

    result.textContent =
        "Estimated Savings: " +
        formatINR(savings);

}

/* ==========================================
   Compound Interest
========================================== */

function calculateCompound() {

    const principal =
        Number(document.getElementById("principal").value);

    const rate =
        Number(document.getElementById("rate").value) / 100;

    const years =
        Number(document.getElementById("years").value);

    const result =
        document.getElementById("compoundResult");

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(years)
    ) {

        result.textContent =
            "Please enter valid values.";

        return;

    }

    const future =
        principal * Math.pow(1 + rate, years);

    result.textContent =
        "Future Value: " +
        formatINR(future);

}

/* ==========================================
   EMI Calculator
========================================== */

function calculateEMI() {

    const loan =
        Number(document.getElementById("loan").value);

    const rate =
        Number(document.getElementById("loanRate").value) /
        1200;

    const years =
        Number(document.getElementById("loanYears").value);

    const result =
        document.getElementById("emiResult");

    if (
        isNaN(loan) ||
        isNaN(rate) ||
        isNaN(years)
    ) {

        result.textContent =
            "Please enter valid values.";

        return;

    }

    const months = years * 12;

    const emi =
        (loan * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);

    result.textContent =
        "Monthly EMI: " +
        formatINR(Math.round(emi));

}

/* ==========================================
   Savings Goal
========================================== */

function calculateGoal() {

    const goal =
        Number(document.getElementById("goalAmount").value);

    const months =
        Number(document.getElementById("goalMonths").value);

    const result =
        document.getElementById("goalResult");

    if (
        isNaN(goal) ||
        isNaN(months)
    ) {

        result.textContent =
            "Please enter valid values.";

        return;

    }

    const monthly =
        goal / months;

    result.textContent =
        "Monthly Saving Required: " +
        formatINR(Math.ceil(monthly));

}

/* ==========================================
   Events
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    document
        .getElementById("budgetBtn")
        .addEventListener(
            "click",
            calculateBudget
        );

    document
        .getElementById("compoundBtn")
        .addEventListener(
            "click",
            calculateCompound
        );

    document
        .getElementById("emiBtn")
        .addEventListener(
            "click",
            calculateEMI
        );

    document
        .getElementById("goalBtn")
        .addEventListener(
            "click",
            calculateGoal
        );

});