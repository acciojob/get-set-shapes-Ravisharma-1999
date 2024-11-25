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

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Should output: 50

const square = new Square(4);
console.log(`Square Area: ${square.getArea()}`); // Should output: 16
console.log(`Square Perimeter: ${square.getPerimeter()}`); // Should output: 16
