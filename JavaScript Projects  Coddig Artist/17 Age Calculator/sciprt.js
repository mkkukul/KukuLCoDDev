const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate =  today.getDate();
    
    leapChecker(currentYear);
    if(
        birthDetails.year >  currentYear ||  
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear )
    ) {
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }
    birthYear = currentYear - birthDetails.year;
    if(currentMonth >= birthDetails.month){
        birthMonth= currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth --;
        let days = months[currentMonth-2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthDate<0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthYear,birthMonth,birthDate);
}
function displayResult(bDAte,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDAte;
}
fun