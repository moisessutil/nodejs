const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer
  .prompt([
    { name: 'p1', message: 'Qual o seu nome?' },
    { name: 'p2', message: 'Qual a sua idade?' },
  ])
  .then((respostas) => {
    console.log(chalk.bgYellow.black(respostas.p1))
    console.log(chalk.bgYellow.black(respostas.p2))
  })
  .catch((err) => {
    console.log(err)
  })