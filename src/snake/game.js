import {snake_speed, update as updateSnake, draw as drawSnake, getSnakeHead, hitSelf} from './snake.js'

import {update as updateFood, draw as drawFood} from "./food.js"

import {hitWall} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('snake-game-board')

function main(currentTime){
  if(gameOver){
    if(confirm('You lost. Press ok to restart')){
      window.location = '/'
    }
    return 
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
  if(secondsSinceLastRender < 1/snake_speed) return
  lastRenderTime = currentTime
  
  update()
  draw()
}

window.requestAnimationFrame(main)

function update(){
  updateSnake()
  updateFood()
  checkDeath()
}

function draw(){
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath(){
  gameOver = hitWall(getSnakeHead()) || hitSelf()
}