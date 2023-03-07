const defaultSize = 16;
const defaultContainerSize = 750;
const grid = document.querySelector('.grid');
const defaultColor = "darkcyan"

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
createGrid(defaultSize, defaultColor);