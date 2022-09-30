//////////////////////////////////Variables of navbar on click
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

//////////////////////////////////Variables for position of navbar on scroll
const navbar = document.getElementById("navbar");
let prevScrollPos = window.pageXOffset

//////////////////////////////////Variables for showing items on scroll 
const scrollItems = document.getElementsByClassName("forScroll")

//////////////////////////////////variable for darkmode
let newColorScheme;
let date;

window.addEventListener("load",()=>{
  date = new Date().getHours();
  newColorScheme  = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" :"light"
  if(date >= 18 || date<=6) {
    newColorScheme === "light" &&  alert("If the light is frustrating ;turn on your dark mode!")
  }
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  newColorScheme = event.matches ? "dark" : "light";
  // console.log(newColorScheme);
});

////////////////////////////////// opening navbar on click!
btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})


//////////////////////////////////show Items on scroll to bottom
const showItemsOnScroll = () =>{
  for(let i =0 ;i<scrollItems.length ;i++){
    let windowHeight = window.innerHeight;
    let elementTop = scrollItems[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if(elementTop < windowHeight - elementVisible){
      scrollItems[i].classList.add("showOnScroll")
    }
  }
  
}
showItemsOnScroll()

//////////////////////////////////show navbar on scroll to top
window.addEventListener("scroll",()=>{
  showItemsOnScroll()
  const currentScrollPos = pageYOffset;
  if(prevScrollPos >currentScrollPos){
    navbar.style.top="0px"
  }else{
    navbar.style.top="-92px"
  }
  prevScrollPos=currentScrollPos
})



