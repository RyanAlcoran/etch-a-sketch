const defaultSize = 16;
const grid = document.querySelector('.grid');

for (var i = 0; i < defaultSize; i++) {
	const row = document.createElement('div');
	row.classList.add('row');
    grid.appendChild(row);
	for (j = 0; j < defaultSize; j++) {
        const cell = document.createElement('div');
		cell.classList.add('cell');
		cell.addEventListener("mouseover", (event) => {
	event.target.style.backgroundColor = "darkcyan";
});
	    row.appendChild(cell);
	}
}