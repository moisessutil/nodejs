// mais de um valor
const x = 10
const y = 'Algum texto'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O número de x é ${x}, contagem`)
console.count(`O número de x é ${x}, contagem`)
console.count(`O número de x é ${x}, contagem`)
console.count(`O número de x é ${x}, contagem`)
console.count(`O número de x é ${x}, contagem`)
console.count(`O número de x é ${x}, contagem`)

// variavel entre string
console.log('O nome dele é %s', y)

// limpar o console
setTimeout(() => {
    console.clear()
}, 3000)