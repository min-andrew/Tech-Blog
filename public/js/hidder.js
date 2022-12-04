const loginhider = document.querySelector("#loginhidderbtn");
const signhider = document.querySelector("#signuphidderbtn");
const logincard = document.querySelector(".logincard");
const signcard = document.querySelector(".signcard");

function hidder() {
    if (loginhider.value === "login") {
        logincard.style.display = "none";
        signcard.style.display = "flex";
        loginhider.setAttribute("value", "sign");
    } else if (signhider.value === "sign") {
        signcard.style.display = "none";
        logincard.style.display = "flex";
        loginhider.setAttribute("value", "login");
    }
};

loginhider.addEventListener('click', hidder);
signhider.addEventListener('click', hidder);