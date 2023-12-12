


function closeme(){
      const wrapper = document.querySelector(".wrapper");
      wrapper.classList.add("Hidden");
}

function LoginPopUp(){
     const wrapper = document.querySelector(".wrapper");
     wrapper.classList.remove("Hidden");
}


function login_btn(){
     /* let username = document.getElementById("UN").value;
     let password = document.getElementById("PW").value;

     if ((username === "jason") && (password === "mantilla")){
          window.open("https://www.youtube.com/");
     }
      */
}

function signUp(){
     let firstName = document.querySelector(".required").value;
     const registered = document.querySelector(".Registration");
     const LoggingIn = document.querySelector(".LoggingIn");
     if(firstName = 0){
          console.log("empty");
     }
     else if(firstName != 0){
          
          registered.classList.add("isRegistered");
          LoggingIn.classList.remove("LoginForm"); 

     }
     
}

function Register(){
     
}

function log(){
     const registered = document.querySelector(".Registration");
     const LoggingIn = document.querySelector(".LoggingIn");
     const reg = document.querySelector(".reg");
     const log = document.querySelector(".log");  

     registered.classList.add("isRegistered");
     LoggingIn.classList.remove("LoginForm"); 

     reg.classList.remove("reg-sec");
     log.classList.add("log-sec");

}

function reg(){
     const registered = document.querySelector(".Registration");
     const LoggingIn = document.querySelector(".LoggingIn");
     const log = document.querySelector(".log");
     const reg = document.querySelector(".reg");

     registered.classList.remove("isRegistered");
     LoggingIn.classList.add("LoginForm");
     log.classList.remove("log-sec");
     reg.classList.add("reg-sec");
}


