const container = document.querySelector("#container");
;

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
};

function createGrid(size) {
    for(let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("box")
        div.style.backgroundColor = getRandomColor();
        //div.textContent = i + 1;
        div.style.opacity = "0";
        div.style.height = (800 / size) + "px";
        div.style.width = (800 / size) + "px";
        
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = getRandomColor();

            if (div.style.opacity <= 1) {
                div.style.opacity = String(parseFloat(div.style.opacity) + 0.1);
            }
        
        });
        
        container.appendChild(div);
    }
}

function clearGrid() {
    document.querySelectorAll('.box').forEach(el => el.remove());
}

const reset = document.querySelector("button");

reset.addEventListener('click', () => {
    clearGrid();

    let size = prompt("Enter a new size for the grid");

    if (size > 100) {
        size = 100;
    }

    createGrid(size);
});

createGrid(16);