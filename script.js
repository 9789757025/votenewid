document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });

const form = document.querySelector('#form')
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const fullname = document.querySelector('#fullname');
const fathername = document.querySelector('#fathername');
const dob = document.querySelector('#dob');
const gender = document.querySelector('#gender');
const address = document.querySelector('#address');
const mobile = document.querySelector('#mobile');
const email = document.querySelector('#email');
const aadhar = document.querySelector('#aadhar');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateInputs();
})

function validateInputs(){
    const usernameval = username.value.trim()
    const passwordval= password.value.trim();
    const cpasswordval = cpassword.value.trim();
    const fullnameval = fullname.value.trim();
    const fathernameval = fathername.value.trim();
    const dobVal = dob.value.trim();
    const genderVal = gender.value.trim();
    const addressVal = address.value.trim();
    const mobileVal = mobile.value.trim();
    const emailVal = email.value.trim();
    const aadharVal = aadhar.value.trim();

    if(usernameVal ===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(passwordVal ===''){
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        setError(password,'Password must be atleat 8 characters long')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal ===''){
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'Confirm Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    if(fullnameVal ===''){
        setError(fullname,'Enter your name')
    }
    else{
        setSuccess(fullname)
    }
    if(fathernameVal ===''){
        setError(fathername,'Enter your father name')
    }
    else{
        setSuccess(fathername)
    }
    if(dobVal ===''){
        setError(dob,'Enter your dob')
    }
    else{
        setSuccess(dob)
    }
    if(genderVal ===''){
        setError(gender,'Please select gender')
    }
    else{
        setSuccess(gender)
    }
    if(addressVal ===''){
        setError(address,'Enter your address')
    }
    else{
        setSuccess(address)
    }
    if(mobileVal ===''){
        setError(mobile,'Enter your mobile')
    }
    else if(mobileVal){
        setError(mobile,'Enter valid mobile')
        
    }
    else{
        setSuccess(mobile)
    }
 


    
    
    
    
    
    if(emailVal ===''){
        setError(email,'Email is required')
    }

    else if(!validateEmail(emailVal)){
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
        




}
//element - password, msg-pwd is regd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


const validatemobile = (mobile) => {
    return String(mobile)
    var phoneNumRegex = /^\+?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/;
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };