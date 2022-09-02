// Change Navbar style on scroll
// /*imp__Point*/
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 50)  //50px
 

})


// Hide or Show Toggling Method
const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq-icon i');
        console.log(icon);
        if (icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

const navbar = document.querySelector('.navbar');
const menuBar = document.querySelector('#menuBar');
const closeBar = document.querySelector('#closeBar');
menuBar.addEventListener('click',function(){
    navbar.style.display = 'flex';
    menuBar.style.display ='none'
    closeBar.style.display = 'inline-block'
})

closeBar.addEventListener("click",()=>{
    navbar.style.display = 'none';
    menuBar.style.display = 'inline-block'
    closeBar.style.display = 'none'

})


// Login and Signup
let blur = document.querySelector('#blur')
let formlog = document.querySelector('.formlog')

const loginMain = document.querySelector('#enter')

// localStorage.setItem('LoginDetails' , loginMain);
// localStorage.setItem('FormDetails', formlog);


loginMain.addEventListener('click',()=>{
    console.log(loginMain);
    blur.style.filter = 'blur(5px)';
    formlog.style.display = 'inline-block'
    // const cont_log = document.createElement('div')
    // cont_log
})
// filter: blur(5);

const singup = document.querySelector('#signuphome')
// console.log(singup);
singup.addEventListener('click', ()=>{
    location.replace("./signup.html")
})

// let loginHome = document.querySelector('')




// Validation Form :
const validate = document.querySelector('#loginHome')
const navbarOne = document.querySelector('.navbar')
validate.addEventListener('click',()=>{
    let username = document.querySelector('#username1').value;
    console.log(username);
    let password = document.querySelector('#password2').value;
    console.log(password);
    const Firstuser = "admin@gmail.com";
    const FirstPass = "admin";
    if (username === Firstuser && password === FirstPass){
        // alert('Successfull');
        formlog.style.display = 'none'
        blur.style.filter = 'blur(0)';
        loginMain.style.display ='none';
        const spantag = document.createElement('span');
        spantag.setAttribute("id","userOne")
        spantag.innerHTML = `${username} <i class="uil uil-user-md"></i>`
        navbarOne.appendChild(spantag);
        console.log(spantag);
        let user = document.getElementById('userOne');
        user.addEventListener('click',()=>{
            location.replace("./dashboard.html")
        })
    }else{
        alert('Failed to Login');       //Make Proper UI/UX for Failed
    }
})




// ===========================SIGNUP PAGE=========================

// const signuppage = document.querySelector('#signuppage')
// console.log(signuppage);
// signuppage.addEventListener('click', () => {
//     location.replace("./index.html")
//     formlog.style.display = 'inline-block'
// })

// const done = document.querySelector('#done')
// console.log(done);
// done.addEventListener('click', () => {
//     location.replace("./index.html")
// })

    const signuppage = document.querySelector('#signuppage')
        console.log(signuppage);
    signuppage.addEventListener('click', () => {
        location.replace("./index.html")
        // formlog.style.display = 'inline-block'
    })

    // const done = document.querySelector('#done')
    // console.log(done);
    // done.addEventListener('click', ()=>{
    //     location.replace("./index.html")
    // })


