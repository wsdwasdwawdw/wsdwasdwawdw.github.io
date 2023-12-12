const Username = document.querySelector(".UN");
const Password = document.querySelector(".PW");
const newUsername = document.querySelector(".NUN");
const newPassword = document.querySelector(".NPW");
const confirmPassword = document.querySelector(".NCPW");

//const usernameArray = JSON.parse(sessionStorage.getItem("username"));

let account = [] ? JSON.parse(localStorage.getItem("account")): [];
console.log(account);
function signUp(){

    if(newPassword.value === confirmPassword.value){
        account.push({
            username: newUsername.value,
            password: newPassword.value
        });
    
    
        newUsername.value = "";
        newPassword.value = "";
        confirmPassword.value = "";

        localStorage.setItem("account", JSON.stringify(account));
    
        console.log(account);
        
        
    }else{
        alert("not match");
    }

}

function login_btn(){
    
    account.forEach((value) => {
        console.log(value);
        if((value.username === Username.value) && (value.password === Password.value)){
            alert("Account found!!");
            window.open("grapes.html");
        }
    });
}
