// Мы создадим класс, который будет выполнять
// основные операции и логировать результаты в консоль.

// Код Калькулятора

class Calculator {
    constructor(initialValue = 0) {
        this.memory = initialValue;
        this.history = [];
        this.logOperation('Установить', initialValue);
    }

    logOperation(operation, result) {
        const memoryStatus = this.memory === null ? '[нет]' : this.memory;
        const operationLog = `Память: [${memoryStatus}]. Операция: [${operation}]. Результат: [${result}]`;
        console.log(operationLog);
        this.history.push(operationLog);
    }

    set(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        this.memory = value;
        this.logOperation('Установить', value);
    }

    clear() {
        this.memory = null;
        this.logOperation('Очистить', '[нет]');
    }

    plus(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory + value;
        this.logOperation(`+${value}`, result);
        this.memory = result;
        return result;
    }

    minus(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory - value;
        this.logOperation(`-${value}`, result);
        this.memory = result;
        return result;
    }

    multiply(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = this.memory * value;
        this.logOperation(`*${value}`, result);
        this.memory = result;
        return result;
    }

    divide(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        if (value === 0) {
            throw new Error('Деление на ноль невозможно');
        }
        const result = this.memory / value;
        this.logOperation(`/${value}`, result);
        this.memory = result;
        return result;
    }

    pow(value) {
        if (typeof value !== 'number') {
            throw new Error('Аргумент должен быть числом');
        }
        const result = Math.pow(this.memory, value);
        this.logOperation(`^${value}`, result);
        this.memory = result;
        return result;
    }

    getHistory() {
        return this.history;
    }
}

// Пример использования калькулятора
const calc = new Calculator(10); // Установили 10
calc.plus(5); // (10) + 5
calc.multiply(3); // (15) * 3
calc.divide(45); // (45) : 45
calc.clear(); // (1) Очистка
calc.set(3); // Установили 3
calc.pow(2); // (3) ^ 2
calc.minus(4); // (9) - 4
calc.clear(); // (5) Очистка


