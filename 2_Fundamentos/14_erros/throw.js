const x = '10'

// checar se é um número
if (!Number.isInteger(x)) {
    throw new Error ('O valor não é um número')
}

console.log('Continuando o código...')