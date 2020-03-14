/**
 * @author Juveria-Manzar
 * @email juveriamanzar29@gmail.com
 * @create date 2020-03-15 02:01:10
 * @modify date 2020-03-15 02:01:10
 * @desc chalk:to customize the output of console
 *      axios:sending an http request(simpler way),it returns a promise
 *      commander:enables us to handle command line arg in efficient way
 */

const chalk = require('chalk')
const axios = require('axios')


axios.get('typeanyurl')
    .then(results => {
        console.log(results)
    })
    .catch(error => {
        console.log(chalk.red.inverse('an error has occured'))
    })

console.log(chalk.red('an error has occured'))
console.log(chalk.red.inverse('an error has occured'))