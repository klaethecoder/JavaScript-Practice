// Array of assorted colors
const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

//Selections of the main div, h1, and links on the page for DOM manipulation. 
const div = document.querySelector(".boxes")
const h1 = document.querySelector("h1")
const links = document.querySelectorAll('a')

// Function that creates a set number of boxes displayed on the page
function createBoxes(number) {
    let colorIndex = 0;
    // Loops through a set number of times, creates new boxes, assigns color from the array, and pushes it to the main div.
    for (let i = 0; i < number; i++) {
        let box = document.createElement('div');
        box.style = `background-color: ${colors[colorIndex]} `
        box.className = "box";
        console.log(colorIndex)
        div.appendChild(box);
        if (i === colors.length) {
            colorIndex = 0;
        } else { colorIndex++ }
    }

    //Puts an Event Listener on the main div that removes the target (child) element and updates the amount of boxes on the page.
    div.addEventListener('click', function(e) {
        e.target.remove();
        h1.textContent = `There are ${div.querySelectorAll('.box').length} boxes on the page`;
    });
}

for (let i = 0; i < links.length; i++) {
    /* Loops through all of the links on the page and adds an Event Listener on them to put a set amount of boxes on the page and 
     update the amount of boxes on the page */
    links[i].addEventListener('click', function() {
        div.innerHTML = ''
        createBoxes(Number(links[i].textContent))
        h1.textContent = `There are ${div.querySelectorAll('.box').length} boxes on the page`;
        console.log(`There are ${div.querySelectorAll('.box').length} boxes on the page`)
    })
}


// createBoxes(100)