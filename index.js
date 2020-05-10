
let grid = document.querySelector('#grid-container');
let resetBtn = document.querySelector('#reset-btn');


let dimension = 16;

const createGrid = function() {
    grid.style.cssText = `grid-template-rows: repeat(${dimension}, 1fr`;
    grid.style.cssText = `grid-template-columns: repeat(${dimension}, 1fr`;

    for(let i=0;i < dimension**2 ; i++){
        const square = document.createElement('div');
        square.setAttribute('style','border: .5px solid black; height: 100%; width:100%');
        
        square.addEventListener('mouseover', () => {   
            // highlight the mouseover target
            square.setAttribute('style', 'background-color: black')
        })
        grid.appendChild(square);
    }
}
createGrid();

const resetGrid = function(){
        let first = grid.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = grid.firstElementChild; 
        } 
        dimension = prompt('enter number')
        createGrid();
}


resetBtn.addEventListener('click', () =>{
    resetGrid();
})
