domCreateZom()

function domCreateZom(){
    window.addEventListener("resize", menu);
    window.addEventListener("DOMContentLoaded", menu);
}

function menu(){
    const width = window.innerWidth;
    const divmenu = document.querySelector('#divmenu');
    while (divmenu.firstChild) {
        divmenu.removeChild(divmenu.firstChild);
    }
    if (width >= 950 && divmenu.childElementCount < 6){
        var spans = Array.from({length: 6}, function(){
            return document.createElement('span');
        });
        spans[0].textContent = "HOW IT WORKS"
        spans[1].textContent = "WORKFLOWS ▼"
        spans[2].textContent = "DOWNLOAD"
        spans[3].textContent = "BLOG"
        spans[4].textContent = "SUPPORT"
        spans[5].textContent = "SHOP"

        /*for (let i = 0; i < spans.length; i++) {
            divmenu.appendChild(spans[i]);
        }*/

        divmenu.append(...spans);
    }
    else if(width <= 951) {
        var svg = document.createElementNS("http://www.w3.org/2000/svg","svg")
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("width","2em");
        svg.setAttribute("viewBox", "0 0 24 24");
        var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path"); // Creando path con el espacio de nombres SVG
        pathElement.setAttribute("d", "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z");
        svg.appendChild(pathElement);
        divmenu.appendChild(svg);
    }
}