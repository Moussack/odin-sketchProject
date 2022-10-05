/* ---------------------------------------DOM QUERY-------------------------------------- */
const container = document.querySelector('.container');
const range = document.querySelector('.range');
const output = document.querySelector('.output');
const gridButtons = document.querySelectorAll('.gridBtn');
const gridButtonOne = document.querySelector('#gridBtnOne');
const gridButtonTwo = document.querySelector('#gridBtnTwo');
const gridButtonThree = document.querySelector('#gridBtnThree');
const gridButtonFour = document.querySelector('#gridBtnFour');
const gridLine = document.querySelector('#gridLine');
const gridResetBtn = document.querySelector('#gridReset');

//console.dir(gridLine);
//console.log(gridResetBtn);

/* ---------------------------------------FUNCTIONS-------------------------------------- */
// func to add and display grid to the DOM
function addGrid(size) {
   // create the grid template
   container.style.cssText = `
      grid-template-columns: repeat(${size}, 1fr); 
      grid-template-rows: repeat(${size}, 1fr);
   `;
   // insert & create the div element to the grid
   for (let i = 0; i < size * size; i++) {
      container.insertAdjacentElement('afterbegin', document.createElement('div'));
   }
   // add class 'square' to all divs in the grid
   const containerDivs = document.querySelectorAll('.container div');
   containerDivs.forEach((div) => div.classList.add('square'));

   // return the size
   return size;
}

// func to remove grid
function removeGrid() {
   Array.from(container.children).forEach((child) => child.remove());
}

// func to determined the max grid size
function maxGridSize(theSize) {
   let sizesCollection = [];
   for (let i = 1; i <= theSize; i++) {
      sizesCollection.push(i);
   }
   return sizesCollection;
}

// func to display the grid size
function displayGridSize(value) {
   output.textContent = `${value}x${value}`;
}

// func to disable the button
function disableButton(buttonId) {
   if (buttonId === 'gridBtnOne') {
      gridButtonOne.disabled = true;
      gridButtonTwo.disabled = false;
      gridButtonThree.disabled = false;
      gridButtonFour.disabled = false;
   }
   if (buttonId === 'gridBtnTwo') {
      gridButtonOne.disabled = false;
      gridButtonTwo.disabled = true;
      gridButtonThree.disabled = false;
      gridButtonFour.disabled = false;
   }
   if (buttonId === 'gridBtnThree') {
      gridButtonOne.disabled = false;
      gridButtonTwo.disabled = false;
      gridButtonThree.disabled = true;
      gridButtonFour.disabled = false;
   }
   if (buttonId === 'gridBtnFour') {
      gridButtonOne.disabled = false;
      gridButtonTwo.disabled = false;
      gridButtonThree.disabled = false;
      gridButtonFour.disabled = true;
   }
}

// Color Picker Instance
let pickers = new ColorPicker({
   dom: document.getElementById('picker1'),
   value: '#0F0',
});

// func to return the color value from the color picker
function colorValue(e) {
   let color = pickers.getValue();
   console.log(color);
   return color;
}

/* ---------------------------------------APP LOGIC-------------------------------------- */
// Set & display default grid size to the DOM
range.value = addGrid(16); // addGrid func returns the size and can be inputed to the range as it's value
displayGridSize(range.value); // displaying the grid size based on the grid size

// add eventlistener to the color picker
pickers.addEventListener('change', colorValue);

// add eventlistener to the GRIDSIZE button
gridButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
      if (button.id === 'gridBtnOne') {
         removeGrid();
         range.value = addGrid(20);
         // button is disabled after adding the grid for perfomance reason
         disableButton('gridBtnOne');
         displayGridSize(range.value);
      }
      if (button.id === 'gridBtnTwo') {
         removeGrid();
         range.value = addGrid(40);
         disableButton('gridBtnTwo');
         displayGridSize(range.value);
      }
      if (button.id === 'gridBtnThree') {
         removeGrid();
         range.value = addGrid(60);
         disableButton('gridBtnThree');
         displayGridSize(range.value);
      }
      if (button.id === 'gridBtnFour') {
         removeGrid();
         range.value = addGrid(80);
         disableButton('gridBtnFour');
         displayGridSize(range.value);
      }
   });
});

// add eventlistener to the SLIDER input
range.addEventListener('input', () => {
   let sizes = maxGridSize(80);
   output.textContent = `${range.value}x${range.value}`;
   sizes.forEach((size) => {
      if (range.value == size) {
         removeGrid();
         addGrid(size);
      }
   });

   if (range.value > 1) {
      gridButtonOne.disabled = false;
      gridButtonTwo.disabled = false;
      gridButtonThree.disabled = false;
      gridButtonFour.disabled = false;
   }

   if (range.value == 20) {
      gridButtonOne.disabled = true;
   }
   if (range.value == 40) {
      gridButtonTwo.disabled = true;
   }
   if (range.value == 60) {
      gridButtonThree.disabled = true;
   }
   if (range.value == 80) {
      gridButtonFour.disabled = true;
   }
});

// add eventlistener to the LINE button to toggle the grid line
gridLine.addEventListener('click', () => {
   container.classList.toggle('line');
});

// Hover on the container logic
container.addEventListener('mouseover', (e) => {
   //e.target.classList.add('red');
   if (e.target.className === 'square') {
      e.target.style.backgroundColor = colorValue();
   }
});

// Reset color logic
gridResetBtn.addEventListener('click', (e) => {
   Array.from(container.children).forEach((child) => {
      child.style.backgroundColor = '';
   });
});

// inside event listener
/*  if (range.value == 1) {
      removeGrid();
      addGrid(1);
   }

   if (range.value == 2) {
      removeGrid();
      addGrid(2);
   }

   if (range.value == 3) {
      removeGrid();
      addGrid(3);
   }

   if (range.value == 4) {
      removeGrid();
      addGrid(4);
   }

   if (range.value == 5) {
      removeGrid();
      addGrid(5);
   }

   if (range.value == 6) {
      removeGrid();
      addGrid(6);
   }

   if (range.value == 7) {
      removeGrid();
      addGrid(7);
   }

   if (range.value == 8) {
      removeGrid();
      addGrid(8);
   }

   if (range.value == 9) {
      removeGrid();
      addGrid(9);
   }

   if (range.value == 10) {
      removeGrid();
      addGrid(10);
   }

   if (range.value == 11) {
      removeGrid();
      addGrid(11);
   }

   if (+range.value == 12) {
      removeGrid();
      addGrid(12);
   }

   if (+range.value == 13) {
      removeGrid();
      addGrid(13);
   } */

//Array.from(container.children).forEach((child) => child.remove());
// container.insertAdjacentElement('beforeend', document.createElement('div'));
// container.insertAdjacentElement('beforeend', document.createElement('div'));
// container.insertAdjacentElement('beforeend', document.createElement('div'));
// container.insertAdjacentElement('beforeend', document.createElement('div'));
