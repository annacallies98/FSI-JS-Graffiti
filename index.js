let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
header.style.color = 'pink'
console.log(header)


let dogImages = document.querySelectorAll('.dog-image')
console.log(dogImages)
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'pink'
footer.style.borderRadius = '80px'