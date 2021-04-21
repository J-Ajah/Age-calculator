

// Calculates the age difference 

var age_result = document.querySelector('#age-output');
const btnYearSubmit = document.querySelector('#calc');

let displayYears=()=>{

    //clears the previous text
    age_result.innerText = ""


    let dateInputValue = document.querySelector('#birthDate1').value;
    let dateInputValue2 = document.querySelector('#birthDate2').value;


    //Calculates for the date in  days 
    let date_diff = (date1, date2)=>{
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        
         console.log(Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24)))
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }

    let dateInDays = date_diff(dateInputValue, dateInputValue2);
  

    //Returns a list that has a number of days, month and years
    const convertDays = d => {
        let months = 0;
        let years = 0;
        let days = 0;
        let weeks = 0;
     if(d < 0){
        //  alert("Please Enter a valid age");
         age_result.innerText = 'Please enter a valid age range';
         age_result.style.color ="red";
            return
     }
        while(d){
           if(d >= 365){
              years++;
              d -= 365;
           }else if(d >= 30){
              months++;
              d -= 30;
           }else if(d >= 7){
              weeks++;
              d -= 7;
           }else{
              days++;
              d--;
           }
        };
        return {
           years, months, weeks, days
        };
     };

     let years = convertDays(dateInDays).years;
     let months = convertDays(dateInDays).months;
     let weeks = convertDays(dateInDays).weeks;
     let days = convertDays(dateInDays).days;

    let result = `Hi, you are ${years} years, ${months} months, ${weeks} weeks and ${days} days old`;


    if(years < 0 || months < 0 || weeks < 0 || days < 0){
        age_result.innerText = 'Please enter a valid age range';
    }else if(dateInputValue !== '' && dateInputValue2 !== ''){
        age_result.style.color ="black";
        age_result.innerHTML = result;
    }

    // if(dateInputValue > dateInputValue2){
       
    // }
    console.log("")
}

btnYearSubmit.addEventListener('click', displayYears);




// Calculates the year the year a person was born

let findYear = document.querySelector('#findYear');
findYear.addEventListener('click',()=>{
    let number = document.querySelector('#number').value;

    if((number !== "") && (number >=0)){
        let parsedNumber = parseInt(number);
        let currentYear = new Date().getFullYear();
        let output = document.querySelector('.output');
        let display = document.createElement('div');
        display.className = "result"
        output.appendChild(display);
        let yearOfBirth = currentYear - parsedNumber;
        output.innerHTML = `Your birth year is ${yearOfBirth}`;
        age_result.innerHTML = "";
    }else if (number < 0){
        let output = document.querySelector('.output');
        output.innerHTML = `Enter a valid age`;
    }else{
        return;
    }
})










