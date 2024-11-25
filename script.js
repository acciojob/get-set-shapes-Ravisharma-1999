describe('Shape Tests', () => {
    it('calculates area and perimeter correctly', () => {
        cy.visit(baseUrl + "/main.html");

        cy.window().then(win => {
            const Rectangle = win.Rectangle;
            const Square = win.Square;

            cy.stub(win.console, "log").as("consoleLog");

            const rect_w = 7;
            const rect_h = 8;
            const sq_s = 6;

            const rectangle = new Rectangle(rect_w, rect_h);
            const square = new Square(sq_s);

            expect(rectangle.width).to.equal(rect_w);
            expect(rectangle.height).to.equal(rect_h);
            expect(rectangle.getArea()).to.equal(rect_w * rect_h);

            expect(square.width).to.equal(sq_s);
            expect(square.height).to.equal(sq_s);
            expect(square.getArea()).to.equal(sq_s * sq_s);
            expect(square.getPerimeter()).to.equal(sq_s * 4);
        });
    });
});
