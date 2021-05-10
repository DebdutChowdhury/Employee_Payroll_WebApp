function validate(){
    const phonenumber = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;
    let phnumReg = /^[0-99]{2}[0-9]{10}/;
    let psw43Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let phPat = new RegExp(phnumReg);
    let phPass = new RegExp(psw43Reg);
    let resultph = phPat.test(phonenumber);
    let resultpass = phPass.test(password);
    if(phonenumber != "" && password != ""){
        if(resultph == true && resultpass == true){
            alert("Login Successful!");
            return true;   
        }
        else{
            alert("phonenumber or Password is Invalid!");
        }
    }
    else{
        alert("Enter phonenumber and Password!");
    }
    
}















// function validate(){
//     var phonenumber = document.getElementById("phonenumber").value;
//     var password = document.getElementById("password").value;
//     if(phonenumber != "" && password != ""){
//         if(phonenumber == "123456" && password == "admin"){
//             alert("Login Successful!");
//             return false;   
//         }
//         else{
//             alert("phonenumber or Password is Invalid!");
//         }
//     }
//     else{
//         alert("Enter phonenumber and Password!");
//     }
// }

function toggle(){
    let pwd = document.getElementById("password");
    if (pwd.type == "password"){
        pwd.type = "text";
    }
    else{
        pwd.type = "password";
    }
}