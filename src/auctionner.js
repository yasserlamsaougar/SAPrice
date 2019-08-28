const _ = require('lodash')
const Bidder = require('./bidder')
const Auctionner = {
    /**
     * Takes a list of bidders and returns the winner of the auction
     * @param {Array<Object>} listOfBuyers the list of bidders
     * @param {Number} initialValue the object's value
     * @returns {Object} an object with two keys result, error
     */
    findWinner(listOfBidders, objectValue) {
        if(!listOfBidders.length) {
            return {
                result: null,
                error: `No buyers for the object with value ${objectValue}`
            }
        }
        let filteredBids = _(listOfBidders).flatMap(
            bidder => bidder.bids.map(bid => new Bidder(bidder.id, bid))
        ).filter(
            bidder => bidder.bid >= objectValue
        ).value()
        if(!filteredBids.length) {
            return {
                result: null,
                error: `No bidder bid above the object's value ${objectValue}`
            }
        }
        winner = _.maxBy(filteredBids, 'bid')
        nonWinner = _(filteredBids).filter(bidder => bidder.id !== winner.id).maxBy('bid') || {
            bid: -1
        }
        return {
            result: {
                id: winner.id,
                price: Math.max(nonWinner.bid, objectValue)
            },
            error: null
        }


    }

} 


module.exports = Auctionner;