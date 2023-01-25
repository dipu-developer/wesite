burgar = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


// for adding the nav three line 

burgar.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class')
    navList.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')

})
