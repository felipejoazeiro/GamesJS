document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('.snake__span')
    const startBtn = document.querySelector('.snake__start')

    const width = 10
    let currentIndex = 0 //first div in our grid
    let appelIndex = 0 
    let currentSnake = [2,1,0]

    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    function control(e){
        switch(e.key){
            case 'ArrowRight':
                direction = 1
                break;
            case 'ArrowUp':
                direction = -width
                break;
            case 'ArrowLeft':
                direction = -1
                break;
            case 'ArrowDown':
                direction = +width
        }
    }
    document.addEventListener('keyup', control)
})