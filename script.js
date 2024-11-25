// Rectangle Class
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate and return the area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}

// Square Class (extends Rectangle)
class Square extends Rectangle {
    constructor(side) {
        // Call the parent constructor with side for both width and height
        super(side, side);
    }

    // Method to calculate and return the perimeter of the square
    getPerimeter() {
        return 4 * this.width;  // Since all sides are equal, use width (or height)
    }
}

// Expose the classes to the global window object for Cypress testing
window.Rectangle = Rectangle;
window.Square = Square;
