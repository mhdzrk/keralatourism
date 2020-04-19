let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let name = document.getElementById("name");
let dob = document.getElementById("dob");
let phone = document.getElementById("phone");
let ml = document.getElementById("ml");
let fl = document.getElementById("fl");
let other = document.getElementById("other");

function fvalidate()
{
    
    let regexp=/^([A-Za-z0-9/.-]+)@([A-Za-z0-9/-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let num=/^([0-9]{10,10})$/;
    
    

    if((regexp.test(email.value)) && (num.test(phone.value)))
    {
        return validate();
    }
    else{
        alert("invalid email or phone number or password");
        return false;
    }
}



function validate(){
    
    
    if (email.value.trim()==""||pwd.value.trim()==""||name.value.trim()==""||dob.value.trim()==""||phone.value.trim()=="")
    {
        alert("all columns are mandatory");
        return false;

    }
    else if ((ml.checked==false) && (fl.checked==false) && (other.checked==false))
    {
        alert("please select gender");
        return false;

    }
    
    
    
    else
    {

        return true;
    }
}



