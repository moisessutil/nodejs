const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem de programação preferida ', (language) => {
    if (language === 'HTML' || language === 'CSS') {
        console.log('Isso não é linguagem de programação')
    } else {
        console.log(`A minha linguagem preferida é ${language}`)
    }
    readline.close()
})