function parseCount(parse) {
  let number = Number.parseInt(parse, 10);
  if (isNaN(number)) {
    throw new Error("Невалидное значение")
  }
  return number;
}

// console.log(parseCount("012"))

function validateCount(valid) {
  try {
    return parseCount(valid);
  } catch (Error) {
      return Error;
    }
}

console.log(validateCount("10"))

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || c + b < a) {
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
  } catch (error) {
    return new Object ({
      getPerimeter() {
        return "Ошибка! Треугольник не существует"
      },
      getArea() {
        return "Ошибка! Треугольник не существует"
      },
    })
  }
}
