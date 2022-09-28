const container = document.querySelector('.container');
const range = document.querySelector('.range');
const output = document.querySelector('.output');

// function to add and display grid to the DOM
function addGrid(size) {
   container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
   for (let i = 0; i < size * size; i++) {
      container.insertAdjacentElement('beforeend', document.createElement('div'));
   }
   const containerDivs = document.querySelectorAll('.container div');
   containerDivs.forEach((div) => div.classList.add('square'));
}

// function to removes grid
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

/* ---------------------------------------LOGIC-------------------------------------- */
// Show default grid size to the DOM
addGrid(15);
if (range.value == 15) output.textContent = `15x15`;
console.log(range.value);

// add eventlisterner to the slider grid size
range.addEventListener('input', () => {
   let sizes = maxGridSize(60);
   output.textContent = `${range.value}x${range.value}`;
   sizes.forEach((size) => {
      if (range.value == size) {
         removeGrid();
         addGrid(size);
      }
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
