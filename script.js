const allImages = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
    "https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1508007226633-b7de6a10cb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3082&q=80"
]



let indexNumber=0;
const changeImage=()=>{
    const image = document.querySelector('img')
    image.setAttribute("src",allImages[indexNumber])
    if(indexNumber === allImages.length-1){
        indexNumber = 0;
    }else{
        indexNumber++
    }
}

changeImage();

const addBgColor=()=>{
    const container = document.querySelector(".container")
    container.classList.toggle("blue-bg")

    const buttonBg = document.querySelector(".bg-button")

    if(buttonBg.innerText === 'Add Bg'){
        buttonBg.innerText = 'Remove Bg'
    }else{
        buttonBg.innerText = 'Add Bg'
    }
}


const toggleStyle=()=>{
    const image = document.querySelector('img');
    image.classList.toggle('better-img')

    const allButtons = document.querySelectorAll('button')
    
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.toggle('better-buttons')
    }

    const buttonStyle = document.querySelector(".style-button")

    if(buttonStyle.innerText === 'Switch to Better Style'){
        buttonStyle.innerText = 'Basic Style'
    }else{
        buttonStyle.innerText = 'Switch to Better Style'
    }
}