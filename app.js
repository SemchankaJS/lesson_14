const body = document.querySelector('body');

function DomElement (selector, height,  width, bg, fontSize) {
    this.selector = selector; 
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.newElement = function () {
    let elem;
    if (this.selector[0] === ".") {
        elem = document.createElement('div');
        elem.className = this.selector.slice(0);
        elem.textContent = 'Bнутрь созданного блока записывать любой текст. Метод записи может быть любым.';
        
    }  
    if (this.selector[0] === "#") {
        elem = document.createElement('p');
        elem.id = this.selector.slice(0);
        elem.textContent = 'Bнутрь созданного блока записывать любой текст!!! Метод записи может быть любым.';
    }

    elem.style.cssText = ` 
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`
    return elem;
};

let elemNumberOne = new DomElement('.container', 450, 450, 'red', 30);
let elemNumberTwo = new DomElement('#container', 400, 400, 'green', 25);


body.append(elemNumberOne.newElement());
body.append(elemNumberTwo.newElement());
