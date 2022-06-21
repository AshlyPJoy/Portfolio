// $(document).ready(function(){
    
//     $("#contactForm").validate({
        
//         rules:{
//             name:{
//                 required:true,
//                 minlength:4,
                
               
//             },
//             email:{
//                 required:true,
//                 email:true
//             },
//             subject:{
//                 required:true,
//                 minlength:4
                
//             },
//             message:{
//                 required:true,
                
                
//             },
//             number:{
//                 required:true,
//                 minlenth:10
//             }

//         },
//         message:{
//             name:{
//                 required:"Enter your name",
                

//             },
//             email:{
//                 required:"Email is Mandatory",
//                 email:"Please enter valid email"
                        
//             },
//             subject:{
//                 required:"Please enter Subject"
//             },
//             message:{
//                 required:"please leave a Message"
//             }
//         }
//     })
// })
// $(function () {
//     $('#name').keydown(function (e) {
//         if (e.shiftKey || e.ctrlKey || e.altKey) {
//             e.preventDefault();
//         } else {
//             var key = e.keyCode;
//             if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//                 e.preventDefault();
//             }
//         }
//     });
// });

const form = document.querySelector("form[name='contact-for']");
const nameInput = document.querySelector("input[name='Name']");
const emailInput = document.querySelector("input[name='Email']");
const phoneInput = document.querySelector("input[name='Number']");
const messageInput = document.querySelector("textarea[name='Message']");

nameInput.isValid = () => isValidName(nameInput.value);
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};
const isValidName = (name) => {
    const re = /^[a-zA-Z]+$/im;
    return re.test(String(name).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("fade");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("fade");
    }
  });
};
form.addEventListener("submit", (e) => {
      e.preventDefault();
      shouldValidate = true;
      validateInputs();
      if (isFormValid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycby9Vlbfxx2tQejtsIBoSu3m_EJiG4gTpSOgELuoejXWBbm_H5K5yXAtUFJ1CFSRn5wb/exec",
            data: $("#contactForm").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                location.reload();
            
            },
            error: function (err) {
                alert("Something Error")

            }
        })
      }
    });
    
    inputFields.forEach((input) => input.addEventListener("input", validateInputs));