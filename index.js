const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const msg = document.querySelector(".message");
function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
    // console.log("hii");
    birthDateMessage(sum);
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum =0;
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
function birthDateMessage(sum){
    if(sum%luckyNumber.value===0){
        msg.innerText="your birthday is lucky🎉🎊";
    }else{
        msg.innerText="your birthday is unlucky😞💔";
    }
}
checkNumberButton.addEventListener("click",checkBirthDateIsLucky)