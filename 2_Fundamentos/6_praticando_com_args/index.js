// externo
const minimist = require('minimist')

// interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = args['a']
const b = args['b']

const res = soma(a, b)

console.log(`A soma de ${a} e ${b} da ${res}`)

