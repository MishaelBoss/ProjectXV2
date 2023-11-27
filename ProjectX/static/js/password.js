function checking(){
    var password = document.querySelector('#password');
    if ( password.getAttribute('type') == 'password'){
        password.setAttribute('type', 'text');
    }
    else{
        password.setAttribute('type', 'password');
    }
}