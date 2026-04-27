const container = document.querySelector("#container");
;

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
};


for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("box")
    div.style.backgroundColor = getRandomColor();
    div.textContent = i + 1;
    

    
    container.appendChild(div);
}