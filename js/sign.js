function signInAppear(){
    document.getElementById("signUp").style.display = "none";
    document.getElementById("signInSent").style.display = "none";
    document.getElementById("signIn").style.display = "block";
    document.getElementById("signIn").style.transition = "3s";
    document.getElementById("signUpSent").style.display = "block";
}
function signUpAppear(){
    document.getElementById("signIn").style.display = "none";
    document.getElementById("signUpSent").style.display = "none";
    document.getElementById("signUp").style.display = "block";
    document.getElementById("signUp").style.transition = "3s";
    document.getElementById("signInSent").style.display = "block";
}