import { getInputDirection } from "./input.js"

export const snake_speed = 5
const snakeBody = [{x:11,y:11}]
let newSegments = 0

export function update(){
  addSeg()
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

export function hitSnake(position, {ignoreHead = false}={}){
  return snakeBody.some((seg,index)=>{  
    if(ignoreHead && index === 0) return false
    return equalPositions(seg,position)
  })
}

function equalPositions(p1, p2){
  return    p1.x === p2.x && p1.y === p2.y
}

function addSeg(){
  for(let i = 0; i<newSegments; i++){
    snakeBody.push({...snakeBody[snakeBody.length -1]})
  }

  newSegments = 0
}

export function getSnakeHead(){
  return snakeBody[0]
}

export function hitSelf(){
  return hitSnake(snakeBody[0],{ignoreHead: true})
}