let computerNum = 0
let playButton = document.getElementById("play-btn")
let resetButton = document.getElementById("reset-btn")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resultAreaImg = document.querySelector(".main-img")
let chance = 5
let chanceArea = document.getElementById("chance-area")
let gameOver = false
let history = []

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value = ""})

function pickRandomNum(){
  computerNum = Math.floor(Math.random()*100)+1
  console.log("정답",computerNum)
}

function play(){
  let userValue = userInput.value

  if(userValue<1 || userValue>100){
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주세요."
    return
  }

  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다."
    return
  }

  if(userValue > computerNum){
    resultAreaImg.src = "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif"
    resultArea.textContent = "Down!"
    console.log("Down!")
  }else if(userValue < computerNum){
    resultAreaImg.src = "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif"
    resultArea.textContent = "Up!"
    console.log("Up!")
  }else {
    resultAreaImg.src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA1MDJfMjc5%2FMDAxNDkzNzAwMjcxNzcz.DI2P6Hexhx40G1MqhdPF-_BqIv6cjpHo5RGOWmJFQW8g.PmSMr0qf16BUZyb_UIyf0-tS6LQdJXneyo0djCIzBZ0g.GIF.twistthetongue%2FexternalFile.gif&type=sc960_832_gif"
    resultArea.textContent = "That's Right!"
    console.log("맞췄습니다!")
    gameOver = true
    chanceArea.textContent = "good job :-)"
    return
  }

  chance --;
  chanceArea.textContent = `남은 기회: ${chance}번`
  console.log("chance",chance)

  if(chance < 1){
    resultAreaImg.src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODA1MjNfMzgg%2FMDAxNTI3MDYzNDEyMzYy.bnfZLK9fqgi8ypw8j6wm00tkjT5d829tH3z3SSU-4I8g.OMsGOqkJsiWPdmournOu5123tfPXTiHFFJVpb4gN3xAg.GIF.rnrja741%2Fc0b740d9870af4c1e38dce0dce5a5e15.GIF&type=sc960_832_gif"
    resultArea.textContent = "Game Over"
    chanceArea.textContent = "술이 들어간다 쭉..쭉쭉..."
    gameOver = true
  }

  if(gameOver == true){
    playButton.disabled = true
  }

  history.push(userValue)
  console.log(history)
}

function reset(){
  userInput.value = ""
  pickRandomNum()
  resultAreaImg.src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjJfMjEg%2FMDAxNjI5NTYxODg5MzEx._tVr3VSgE38cbG-Ayt4nBPy8cNzVkSNZhMiU-tZOpkog.zJb6AFCPSQhPs9CAFtJ8F0s1PTfy43Z6JcZxaaDXrdYg.JPEG.chooddingg%2FPHOTO_0083.JPG&type=a340"
  resultArea.textContent = "죽기 싫다면 맞춰라"
  gameOver = false
  playButton.disabled = false
  chance = 5
  chanceArea.innerHTML = `남은 기회: ${chance}번`
  history = []
}

pickRandomNum()