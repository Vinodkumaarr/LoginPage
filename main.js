const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email"); 
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

const spn = document.getElementById("spn");
function checkInputs()
{
    alert("function is ready");
    const items = document.querySelectorAll(".item");
    for(const item of items)
    {
        //validation for null value inputs
         
         if(items[1].value != "")
            {
               checkemail(); 
            }
            items[1].addEventListener("keyup",()=>{
                checkemail(); 
            });
    
            //check contact number
            if(items[2].value != "")
            {
                checkcontactno();
            }
            items[2].addEventListener("keyup",()=>{
                checkcontactno();
            });
            item.addEventListener("keyup",()=>{
                if(item.value!="")
                {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else{
                    item.classList.add("error");
                    item.parentElement.classList.add("error");    
                }   
            });
    }
}


//create a function for email validation
function checkemail()
{
    const emailregex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;    //regex code  for email validation
    const errortextemail = document.querySelector(".error-text.email");
    if(!email.value.match(emailregex))
    {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if(email.value != "")
        {
            errortextemail.innerHTML = "Enter a valid email address";
        }
        else{
            errortextemail.innerHTML = "E-mail address can't be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
// create function for contact  Number validation
function checkcontactno()
{
const contactregex  = /^([0-9]{10})$/;
const contacterrortext   = document.querySelector(".error-text.contact");
if(!phone.value.match(contactregex))
{
   phone.classList.add("error");
   phone.parentElement.classList.add("error");

   if(phone.value != "")
   {
    contacterrortext.innerHTML = "Enter a valid 10-digit contact number";
   }
   else{
    contacterrortext.innerHTML = "Contact number can't be blank!";
   }
}
else{
    phone.classList.remove("error");
    phone.parentElement.classList.remove("error");

}
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
