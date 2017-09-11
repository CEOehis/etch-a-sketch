var container = document.querySelector('.container')
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
