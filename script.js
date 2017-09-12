function generateGrid (pixels) {
  var container = document.querySelector('.grid')
  for (var i = 0; i < pixels; i++) {
    var row = document.createElement('div')
    for (var j = 0; j < pixels; j++) {
      var newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'grid-square')
      row.appendChild(newDiv)
    }
    container.appendChild(row)
  }
  createHover()
}

var setPixelButton = document.getElementById('set-pixel')
setPixelButton.addEventListener('click', function () {
  alert('clicked')
  generateGrid(10)
})

function hoverEffect () {
  this.classList.add('hovered')
}

function createHover () {
  var grid = document.getElementsByClassName('grid-square')
  for (var i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', hoverEffect)
  }
}
