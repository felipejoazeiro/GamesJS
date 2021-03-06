import {hitSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let scoreDisplay = document.getElementById('score-snake')
let score = 0

let food = randomGridPosition()
const expansion = 1

export function update(){
    if(hitSnake(food)){
        expandSnake(expansion)
        food = getRandomFood()
        score ++
        scoreDisplay.textContent = score
    }
}
  
export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFood(){
    let newFoodPosition
    while (newFoodPosition == null ||  hitSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}