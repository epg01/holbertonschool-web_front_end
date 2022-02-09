function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
        /* different approach for same thing */
        /*
        let style = document.createElement('style');
        style.innerHTML = 'html, body {' +
            'font-size:' + size + ';' +
            'font-weight:' + weight + ';' +
            'text-transform:' + transform + ';' +
            'background-color:' + background + ';' +
            'color:' + color + ';}'
        document.head.appendChild(style); */
    }
}
function main() {
    let spooky = (changeMode(9, 'bold', 'uppercase', 'pink', 'green'));
    let darkMode = (changeMode(12, 'bold', 'capitalize', 'black', 'white'));
    let screamMode = (changeMode(12, 'normal', 'lowercase', 'white', 'black'));

    const p = document.createElement('p');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

    p.innerHTML = 'Welcome Holberton!';
    btn1.innerHTML = 'Spooky';
    btn2.innerHTML = 'Dark mode';
    btn3.innerHTML = 'Scream mode';

    document.body.appendChild(p);
    document.body.appendChild(btn1); 
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
    
    btn1.onclick = spooky;
    btn2.onclick = darkMode;
    btn3.onclick = screamMode;
}