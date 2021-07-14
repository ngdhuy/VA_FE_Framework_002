// Async ... Await => ES8

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

const getName = (object) => {
    return object.name
}

const showData = async () => {
    const jsonData = await loadData('data.json')
    const objName = await getName(JSON.parse(jsonData)[1])
    console.log(objName)
}

showData()