const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

inner.addEventListener('click', (event) => {
  console.log('Event captured in: Inner');
});

middle.addEventListener('click', (event) => {
  console.log('Event captured in: Middle');
});

outer.addEventListener('click', (event) => {
  console.log('Event captured in: Outer');
});

inner.click(); // Simulate a click on the innermost element
