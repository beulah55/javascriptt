let colorCodes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'A', 'B', 'C', 'D', 'E', 'F'
];

const changeColor = () => {
    let display = document.getElementById("display");
    let color = document.getElementById("color");

    let randomColor = '#';

    for (let i = 0; i < 6; i++) {
        let randomNo = Math.floor(Math.random() * 16);
        randomColor += colorCodes[randomNo];
    }

    color.innerHTML = randomColor;
    display.style.backgroundColor = randomColor;
}