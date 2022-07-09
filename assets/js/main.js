/*==================== Color Mode ====================*/
// try implementing changing var method
const colorModeBtn = document.querySelectorAll('.color__mode__btn')
let currentMode = 1
function changeColorMode(){
    const bodyTheme = document.getElementById('body-pd')
    if (currentMode == 1){
        currentMode = 2
        bodyTheme.classList.add('darkMode')
    }
    else{
        currentMode = 1
        bodyTheme.classList.remove('darkMode')
    }
}

colorModeBtn.forEach(c => c.addEventListener('click', changeColorMode))


/*==================== ACHIEVMENT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('achievment__active')
        })
        target.classList.add('achievment__active')

        tabs.forEach(tab =>{
            tab.classList.remove('achievment__active')
        })
        tab.classList.add('achievment__active')
    })
})

/*==================== Learnings ====================*/
let x = 0;
const learningContents = document.querySelectorAll('.learning__contents')

selector();
function selector() {
    learningContents.forEach(learningContent => {
        learningContent.classList.remove('learning__active')
    })
    for (i = 0; i < learningContents.length; i++){
        if(i == x){
            learningContents[i].className = 'learning__contents learning__active'
        }
    }
    if(x == learningContents.length - 1){
        x = 0;
    }
    else{
        x++;
    }
    
 }
setInterval(selector, 5000);

/*==================== PROJECT ====================*/


const showProjectModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-project-modal')
        })
    }
}
showProjectModal('open-project-modal','project-modal-container')

const closeProjectBtn = document.querySelectorAll('.close-project-modal')

function closeProjectModal(){
    const modalContainer = document.getElementById('project-modal-container')
    modalContainer.classList.remove('show-project-modal')
}
closeProjectBtn.forEach(c => c.addEventListener('click', closeProjectModal))

/*==================== TESTIMONIAL ====================*/





/*==================== NAV ====================*/
const mediaQ = window.matchMedia("(min-width: 600px)")
document.onscroll = function() {
    if (mediaQ.matches){
        if (window.innerHeight + window.scrollY == document.body.clientHeight) {
            document.getElementById('nav').style.transform='translateX(-5rem)'
        }else{
            document.getElementById('nav').style.transform='translateX(0rem)'
        }
    }
    else {
        if (window.innerHeight + window.scrollY == document.body.clientHeight) {
            document.getElementById('nav').style.transform='translateY(5rem)'
        }else{
            document.getElementById('nav').style.transform='translateY(0rem)'
        }
    }
    
}
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== EXPAND BODY =====*/ 
const showMenu = (toggleId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle){
      toggle.addEventListener('mouseover', ()=>{
        bodypadding.classList.add('body__padding')
      })
    }
    if(toggle){
        toggle.addEventListener('mouseout', ()=>{
          bodypadding.classList.remove('body__padding')
        })
      }
  }
showMenu('nav', 'body-pd')

/*==================== FOOTER ====================*/


const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal','sources-modal-container')


const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('sources-modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))