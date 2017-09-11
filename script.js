var container = document.querySelector('.box')
for (var i = 0; i < 16; i++) {
  // create new div element
  var row = document.createElement('div')
  for (var j = 0; j < 16; j++) {
    var newDiv = document.createElement('div')
    // newDiv.textContent = j
    newDiv.setAttribute('class', 'grid')
    row.appendChild(newDiv)
  }

  container.appendChild(row)
}

var grid = document.getElementsByClassName('grid')
// for (var i = 0; i < grid.length; i++) {
//   grid[i].addEventListener('mouseover', function () {
//     grid[i].setAttribute('class', 'grid hovered')
//   })
// }
