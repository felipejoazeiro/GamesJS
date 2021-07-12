import { getInputDirection } from "./input.js"

export const snake_speed = 5
const snakeBody = [{x:11,y:11}]
let newSegments = 0

export function update(){
  const inputDirection = getInputDirection()
  for(let i = snakeBody.length - 2; i>=0; i--){
    snakeBody[i+1] = {...snakeBody[i]}
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y

}

export function draw(gameBoard){
  snakeBody.forEach(seg =>{
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = seg.y
    snakeElement.style.gridColumnStart = seg.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake(a){
  newSegments += a
}

export function hitSnake(){

}