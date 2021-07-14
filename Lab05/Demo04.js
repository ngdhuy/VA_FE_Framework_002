'use strict'

console.clear()

// import file system library
const fs = require('fs')

const loadData = (fileName) => {
    return new Promise((resolve, rejects) => {
        fs.readFile(fileName, (error, data) => {
            if (error != null) {
                console.log(error)
                return rejects("Cannot access file " + fileName)
            } else
                return resolve(data)
        })
    })
}

loadData('data.json')
    .then(data => {
        console.log(JSON.parse(data))
    })
    .catch(error => {
        console.log(error)
    })