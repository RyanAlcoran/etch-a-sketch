const grid = document.querySelector('.grid');

for (var i = 0; i < 16; i++) {
	const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
	for (j = 0; j < 16; j++) {
		const cell = document.createElement('div');
        cell.classList.add('cell');
	    row.appendChild(cell);
	}
}