let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');

up.addEventListener("click", () => {
      if (lastInputDirection.y !== 0) return
      inputDirection = { x: 0, y: -1 }
      return
})

down.addEventListener("click", ()=>{
    if (lastInputDirection.y !== 0) return
    inputDirection = { x: 0, y: 1 }
    return
})

left.addEventListener("click", ()=>{
    if (lastInputDirection.x !== 0) return
    inputDirection = { x: -1, y: 0 }
    return
})

right.addEventListener("click", ()=>{
    if (lastInputDirection.x !== 0) return
    inputDirection = { x: 1, y: 0 }
    return
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}