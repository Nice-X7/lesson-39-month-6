//1
const numbers = [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]

const exercise_1 = numbers.map((num) => {
    if (num < 0) {
        return num = 0
    }
    else  {
        return num
    }
})

console.log(exercise_1);

//2
const elements = [ 
    { a: 2, b: 12 },
    { a: 0.1, b: 0.1 },
    { a: 0, b: 1 }, 
    { a: 100, b: 1000 }, 
    { a: 4, b: 4 }
];

const exercise_2 = elements.filter((item) => {
    if (item.a === item.b) {
        return false
    } else {
        return item
    }
})

console.log(exercise_2);

// 3
const twin = elements.find((item) => item.a === item.b)
const sum = twin ? twin.a += twin.b : null 

console.log(sum);