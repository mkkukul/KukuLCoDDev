let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;