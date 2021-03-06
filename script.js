function generateGrid (pixels) {
  var container = document.querySelector('.grid')
  // faster than container.innerHTML = ''
  while (container.firstChild) container.removeChild(container.firstChild)
  for (var i = 0; i < pixels; i++) {
    var row = document.createElement('div')
    for (var j = 0; j < pixels; j++) {
      var dimen = (400 / pixels).toFixed(4)
      row.setAttribute('style', 'height:' + dimen + 'px; ')
      var newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'grid-square')
      newDiv.setAttribute('style', 'width:' + dimen + 'px; ' + 'height:' + dimen + 'px; ')
      row.appendChild(newDiv)
    }
    container.appendChild(row)
  }
  createHover()

  var clearButton = document.getElementById('clear-pixel')
  clearButton.addEventListener('click', clearGrid)

  var setPixelButton = document.getElementById('set-pixel')
  setPixelButton.addEventListener('click', getPixel)
}

function clearGrid () {
  var pixelSize = document.querySelector('.grid').childElementCount
  generateGrid(pixelSize)
}

function getPixel () {
  var pixel = prompt('enter grid size:')
  generateGrid(pixel)
}

function hoverEffect () {
  this.classList.add('hovered')
  this.classList.add('vivify')
  this.classList.add('pulsate')
}

function createHover () {
  var grid = document.getElementsByClassName('grid-square')
  for (var i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', hoverEffect)
  }
}
