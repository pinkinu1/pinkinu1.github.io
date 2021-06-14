import grid from './grid.js';

const number = {
    numbers: [],
    getElements: function() {
        const numberElements = document.getElementsByClassName("number");

        for (let numberElement of numberElements) {
            this.numbers.push(numberElement);
        }
    },
    spawn: function() {
        const emptyCellIndex = grid.randomEmptyCellIndex();

        if(emptyCellIndex === false) {
            return false;
        }

        const numberElement = document.createElement("div");
        const numberValue = 2;

        numberElement.innerText = numberValue;
        numberElement.dataset.value = numberValue;
        numberElement.classList.add("number");

        numberElement.style.top = `${grid.cells[emptyCellIndex].top}px`;
        numberElement.style.left = `${grid.cells[emptyCellIndex].left}px`;

        grid.cells[emptyCellIndex].number = numberElement;

        grid.gridElement.append(numberElement);

        return true;
    },
    moveTo: function(fromCell, toCell) {
        const number = fromCell.number;

        if(toCell.number === null) {
            // target cell is empty fill with number
            number.style.top = `${toCell.top}px`;
            number.style.left = `${toCell.left}px`;
            
            
            toCell.number = number;
            fromCell.number = null;
        } else if (number.dataset.value === toCell.number.dataset.value) {
            // target cell has same number
            // merge both cell

            number.style.top = `${toCell.top}px`;
            number.style.left = `${toCell.left}px`;
            number.style.opacity = '0';

            // remove number DOM element after transition
            setTimeout(() => {
                grid.gridElement.removeChild(number);
            }, 500);

            // double target cell's number
            const newNumberValue = toCell.number.dataset.value * 2;

            toCell.number.dataset.value = newNumberValue;
            toCell.number.innerText = newNumberValue;
            if (newNumberValue == 4) {
                toCell.number.classList.add("two")
            } else if (newNumberValue == 8) {
                toCell.number.classList.add("three")
            } else if (newNumberValue == 16) {
                toCell.number.classList.add("four")
            } else if (newNumberValue == 32) {
                toCell.number.classList.add("five")
            } else if (newNumberValue == 64) {
                toCell.number.classList.add("six")
            } else if (newNumberValue == 128) {
                toCell.number.classList.add("seven")
            } else if (newNumberValue == 256) {
                toCell.number.classList.add("eight")
            } else if (newNumberValue == 512) {
                toCell.number.classList.add("nine")
            } else if (newNumberValue == 1024) {
                toCell.number.classList.add("ten")
            } else if (newNumberValue == 2048) {
                toCell.number.classList.add("more")
                window.location.href = "https://forms.gle/nUCV5nnZSYdmGSBo9"
            }
            fromCell.number = null;
        }
    }
}

export default number;
