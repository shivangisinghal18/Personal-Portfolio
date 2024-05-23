let bar = document.querySelectorAll(".bar span")
let percentages = document.querySelectorAll(".progress h3 span")

let progress = document.querySelectorAll(".progress")

Array.from(progress).forEach(Element=>{

   let percentage_values = Element.children[0].children[0].innerHTML;
   let span_box = Element.lastElementChild.children[0]

   span_box.style.width = percentage_values
})

let column_skills = document.querySelectorAll('.skills_box')
let education_content = document.querySelectorAll('.education_display')


let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')


let menu_icon = document.querySelector("#menu_icon")
let navbar = document.querySelector(".navbar")
let cross = document.querySelector(".cross")

 menu_icon.addEventListener("click",e=>{
     cross.style.display = "block"
     menu_icon.style.display = "none"
     navbar.classList.add("activated")
})

cross.addEventListener("click",e=>{
   navbar.classList.remove("activated")
   menu_icon.style.display = "block"
   cross.style.display = "none"
})

let body = document.querySelector('body')
window.addEventListener('resize',e=>{

   if(body.offsetWidth>535){
      menu_icon.style.display = "none"
   }

   else{
      menu_icon.style.display = "block"
   }
})


let header = document.querySelector('header')




window.onscroll=()=>{

   sections.forEach(sec=>{
      let top = window.scrollY;
      let upper = sec.offsetTop-100;
      height = sec.offsetHeight;
      let id  = sec.getAttribute('id')

      if(top>upper && top<upper+height){
         navlinks.forEach(element=>{     
         element.classList.remove('active')
         let nav_item = document.querySelector('header nav a[href*=' + id + ']')
         nav_item.classList.add('active')
         sec.classList.add('show-animate')
      })
      }

   })

    let body = document.querySelector('body')

   let header = document.querySelector('header')
   header.classList.toggle('sticky', window.scrollY > 100)

   navbar.classList.remove("activated")
   cross.style.display = "none"

   if(body.offsetWidth<=535){
      menu_icon.style.display = "block"
   }
}

let abt_btn = document.querySelector(".about-btn")
let read_boxes = document.querySelector(".read_boxes")
let read_p = document.querySelectorAll(".about-heading p")

flag = 0;

abt_btn.addEventListener("click",e=>{

   if(flag==0){
      abt_btn.children[0].innerHTML = "Read less"
      flag = 1;
   }

   else{
      abt_btn.children[0].innerHTML = "Read More"
      flag = 0;
   }
   
   read_boxes.classList.toggle("hide")

   read_p.forEach(element=>{
      element.classList.toggle("hide")
   })
})


