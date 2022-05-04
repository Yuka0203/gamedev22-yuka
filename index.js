const grid = document.querySelector('.grid')
const scorDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const ballDiameter = 20
const boardWidth = 560
const boardHeight = 300
let xDirection = -2
let yDirection =2

const userStart = [230, 10]
let currentPosition = userStart

const ballStart = [270,40]
let ballCurrentPosition = ballStart

let timerId
let score = 0

//my block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    this.topLeft = [xAxis, yAxis + blockHeight]
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
]
  
//draw my blocks
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appenChild(block)
    console.log(blocks[i].bottomLeft)
  }
}
addBlocks()

//add user
const ball = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawBall()

//move user
function moveUser(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        console.log(currentPosition[0] > 0)
        drawUser()
      }
      break 
    case 'ArrowRight':
      if (current{osition[0] < (oardWidth - blockWidth)) {
        currentPosition[0] += 10
        console.log(currentPosition[0])
        drawUser()
      }
      break
  }
}
document.addEventListener('keydown', moveUser)
                      
//draw User
function drawUser() {
  user.style.left = ballCurrentPosition[0] + 'px'
  user.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBal() {
  ballCurrentPosition[0] += xDirection
  ballCurrentPosition[1] += yDirection
  drawBall()
  checkForCollisions()
}
timeId = setInterval(moveBall, 30)

//chech for collision
function checkForCollisions() {
  //check for block collicion
  for (let i = 0; i < block.length; i++){
    if
      (
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
        ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
    )
      {
      const allBlocks = Array.from(document.querySelectorAll('.block'))
      allBlocks[i].classList.remove('block')
        blocks.splice(i,1)
        changeDirection()
        score++
        scoreDis[play.innerHTML = score
                 if (blocks.length == 0) {
                   scoreDisplay.innerHTML = 'You Win!'
                   clearInterval(timeId)
                   document.removeEventListener('keydown', moveUser)
                 }
      }
  }
  // check for wall this
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
  {
    changeDirection()
  }
  
  // checkfor user collision
  if
    (
      (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
      (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight )
      )
  {
    changeDirection()
  }
  
  //game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timeId)
    scoreDisplay.innerHTML = 'You lose!'
    document.removeEventListener('keydown', moveUser)
  }
}


function changeDirection() {
  if (xDirection === 2 && yDirection ===2) {
    yDirection = -2
  return
}
if (xDirection === 2 && yDirection === -2) {
  xDirection = -2
return
}
if (xDirection === -2 && yDirection === -2) {
  yDirection = 2
  return 
}
if (xDirection === -2 && yDirection === 2) {
  xDirection = 2
  return
  }
}
