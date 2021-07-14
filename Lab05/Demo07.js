console.clear()

const { showData, loadData } = require('./Demo06')
// const func = require('./Demo06')

const main = () => {
    loadData('data.json')
    let arr = [1, 2, 3]
    showData(arr)
}

main()