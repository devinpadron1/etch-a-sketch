// Number of grid squares
const gridSquares = 16; 

// Selects container div
const containerDiv = document.querySelector("container");

// Creates new div elements
for (let i = 0; i < gridSquares; i++) {
    const newDiv = document.createElement('div');

    // Adds new div element to continer element
    containerDiv.appendChild(newDiv); 
}

// Assign class to elements
newDiv.setAttribute('class', 'gridElement');
