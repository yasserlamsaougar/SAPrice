const fs = require('fs')
const auctionner = require('./src/auctionner')
const input = process.argv[2]


if(input && fs.existsSync(input)) {
    fs.readFile(input, {
        encoding: 'utf-8'
    },(err, data) => {
        if(err) {
            throw err
        }
        const {bidders, objectValue} = JSON.parse(data)
        const result = auctionner.findWinner(bidders, objectValue)
        console.log(result)
    })
} else {
    console.error(`The input file path is invalid "${input}"`)
}