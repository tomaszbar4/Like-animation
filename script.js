const image = document.querySelector('.landscape img')
const heart = document.querySelector('.heart')
const body = document.querySelector('body')
const likesCount = document.getElementById('likes-count')

let likeCounter = 0;

image.addEventListener('dblclick', (e) => {

    const top = e.offsetY
    const left = e.offsetX

    console.log(left, top)

    heart.style.top = top + 'px'
    heart.style.left = left + 'px'

    heart.classList.add('show')
    setTimeout(hideHeart, 500)
    likeCounter++;
    likesCount.innerHTML = likeCounter;


})
function hideHeart() {
    heart.classList.remove('show')
}