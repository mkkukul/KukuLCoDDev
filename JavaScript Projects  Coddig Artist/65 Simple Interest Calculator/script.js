let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;
    let simpleInterest =
        duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
    let amount = p + simpleInterest;
    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
