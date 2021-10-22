function parseCount(parseString) {
    let number = Number.parseInt(parseString, 10);

    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }

    return number;
}

function validateCount(parseString) {
    try {
        return parseCount(parseString);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}