function generateGrid (pixels) {
  var container = document.querySelector('.grid')
  // faster than container.innerHTML = ''
  while (container.firstChild) container.removeChild(container.firstChild)
  for (var i = 0; i < pixels; i++) {
    var row = document.createElement('div')
    for (var j = 0; j < pixels; j++) {
      var dimen = (400 / pixels)
      var newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'grid-square')
      newDiv.setAttribute('style', 'width:' + dimen + 'px;' + 'height:' + dimen + 'px;')
      row.appendChild(newDiv)
    }
    container.appendChild(row)
  }
  createHover()
}

var setPixelButton = document.getElementById('set-pixel')
setPixelButton.addEventListener('click', getPixel)

function getPixel () {
  var pixel = prompt('enter grid size:')
  generateGrid(pixel)
}

function hoverEffect () {
  this.classList.add('hovered')
}

function createHover () {
  var grid = document.getElementsByClassName('grid-square')
  for (var i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', hoverEffect)
  }
}
