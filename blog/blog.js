const blogCover = document.querySelectorAll('.blog__cover')
const blogCovers = document.querySelector('.blog__covers')
const blogReturnBtn = document.querySelector('.blog__return__button')
let i = 1;
let y = 200;
let sr1 = ScrollReveal({
    duration: 2000,
    distance: "80px",
})
for (cover of blogCover) {
    sr1.reveal(cover, {delay: y})
    y += 200;
}
blogCover.forEach(c => c.id = 'blog' + i++)
blogCover.forEach(c => c.addEventListener('click', function() {
    openBlog(c.id)
}))
function openBlog(id){
    let blog = document.getElementById(id)
    for (cover of blogCover) {
        cover.style.display = "none"
    }
    blogReturnBtn.style.display = "flex"
    blogCovers.classList.add('blog__clicked')
    blog.style.display = 'block'
    blog.querySelector('.blog__page2').classList.add('blog__page2__clicked')
    blog.querySelector('.blog__page1').classList.add('blog__page1__clicked')
    blog.querySelector('.blog__page1').innerHTML = generateText(10)
    blog.querySelector('.blog__page2').querySelector('.blog__cover__title').style.display = 'none'
    blog.querySelector('.blog__page2').querySelector('.blog__cover__logo').style.display = 'none'
    blog.querySelector('.blog__page2').querySelector('.blog__cover__issue').style.display = 'none'
    blog.querySelector('.blog__page2').querySelector('.blog__cover__notice').style.display = 'block'
    blog.querySelector('.blog__date').style.display = 'none'
    blog.querySelector('.blog__tags').style.display = 'none'
}


blogReturnBtn.addEventListener('click', function() {
    for (cover of blogCover) {
        cover.querySelector('.blog__page1').classList.remove('blog__page1__clicked')
        cover.querySelector('.blog__page2').classList.remove('blog__page2__clicked')
        cover.querySelector('.blog__page2').querySelector('.blog__cover__title').style.display = 'block'
        cover.querySelector('.blog__page2').querySelector('.blog__cover__logo').style.display = 'block'
        cover.querySelector('.blog__page2').querySelector('.blog__cover__issue').style.display = 'block'
        cover.querySelector('.blog__page2').querySelector('.blog__cover__notice').style.display = 'none'
        cover.querySelector('.blog__page1').innerHTML = generateText(0)
        cover.querySelector('.blog__date').style.display = 'block'
        cover.querySelector('.blog__tags').style.display = 'block'
    }
    for (cover of blogCover) {
        cover.style.display = "block"
    }
    blogReturnBtn.style.display = "none"
    blogCovers.classList.remove('blog__clicked')
})


function generateText(n) {
    templateText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci maximus viverra lobortis. Aliquam tincidunt quam tortor, eu viverra velit dictum in. Nulla vel tempor tellus. Aenean faucibus augue ultricies nunc lobortis, quis iaculis ipsum eleifend. Fusce posuere semper finibus. Nunc et hendrerit massa. Duis rhoncus suscipit libero vel viverra. Duis id eros quis tellus vehicula maximus. Aliquam aliquam blandit odio eget malesuada. Donec ullamcorper et risus quis egestas."
    finalText = ""
    for (x = 0; x < n; x++) {
        finalText += templateText
    }
    return finalText
}