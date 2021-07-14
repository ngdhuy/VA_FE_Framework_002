// JSON object

'use strict'

console.clear()

// object json
const data = [
    {
        id: 1,
        name: "product 01"
    }, 
    {
        array : [1, 2, 3, 4]
    }, 
    3, 
    4, 
    "Hello world"
]

console.log(data)

console.log("----------------------------------")

for(let i = 0; i < data.length; i++)
    console.log(data[i])

console.log("----------------------------------")

data.forEach(item => {
    console.log(item)       // item = data[i]
})