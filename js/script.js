const defaultSize = 16;
const defaultContainerSize = 700;
const grid = document.querySelector('.grid');
const defaultColor = "darkcyan"

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener("click", reset);

function createGrid(size, color){
	let cellSize = getCellSize(size);
	for (var i = 0; i < size; i++) {
	const row = document.createElement('div');
	//row.style.width = defaultContainerSize.toString() + "px";
	row.classList.add('row');
    grid.appendChild(row);
		for (j = 0; j < size; j++) {
	        const cell = document.createElement('div');
			cell.classList.add('cell');
			cell.style.width = cellSize.toString() + "px";
			cell.style.height = cellSize.toString() + "px";
			cell.addEventListener("mouseover", (event) => {
				event.target.style.backgroundColor = color;
			});
		    row.appendChild(cell);
		};
	};	
}

function getCellSize(size){
	return defaultContainerSize / size;
}

function reset() {
	while(grid.firstChild){
		grid.removeChild(grid.lastChild);
	}
	createGrid(defaultSize, defaultColor);
}
createGrid(defaultSize, defaultColor);