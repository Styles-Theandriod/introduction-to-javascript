let fn = document.querySelector('.fn')
let ln = document.querySelector('.ln')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let confirm_password = document.querySelector('.cp')
let error_msg = document.querySelector('p')
let eye = document.querySelector('.eye')
let Btn = document.querySelector('.Btn')

Btn.addEventListener('click',validate)

function validate(event){
    event.preventDefault()
    // console.log(event);
    
    if(fn.value === '' && ln.value === '' && email.value === '' && password.value === '' && confirm_password.value === '' ){
        // console.log('error just happend');
            error_msg.style.display = 'block'
            error_msg.style.color = 'red'   

        setTimeout(() => {
            error_msg.style.display = 'none'
        }, 3000);
    }else if(password.value !== confirm_password.value){
        error_msg.innerHTML= 'Password does not match'
        error_msg.style.display = 'block'
        error_msg.style.color = 'red'

        setTimeout(() => {
            error_msg.style.display = 'none'
        }, 3000);
    }
    
    else {
        error_msg.innerHTML = 'Submitted Successfully'
        error_msg.style.display = 'block'
        error_msg.style.color = 'green'

        setTimeout(() => {
            error_msg.style.display = 'none'
        }, 3000);
    }
}

eye.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text'
        eye.innerHTML = '😁'
    }else{
        password.type = 'password'
        eye.innerHTML = '😩'
    }
})