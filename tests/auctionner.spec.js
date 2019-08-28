const auctionner = require("../src/auctionner");

test("an empty list of buyers has no winner", () => {
  const {bidders, objectValue} = require('./data/test_1');  
  const {result, error} = auctionner.findWinner(bidders, objectValue);
  expect(result).toBeNull()
  expect(error).toEqual(`No buyers for the object with value ${objectValue}`)
});

test("a list of buyers with no bids has no winner", () => {
    const {bidders, objectValue} = require('./data/test_2');  
    const {result, error} = auctionner.findWinner(bidders, objectValue);
    expect(result).toBeNull()
    expect(error).toEqual(`No bidder bid above the object's value ${objectValue}`)
});

test("a list of buyers with bids inferior to item value has no winner", () => {
    const {bidders, objectValue} = require('./data/test_3');  
    const {result, error} = auctionner.findWinner(bidders, objectValue);
    expect(result).toBeNull()
    expect(error).toEqual(`No bidder bid above the object's value ${objectValue}`)
});

test("E has the highest bid and A has the next highest bid value so E wins and pays 130", () => {
    const {bidders, objectValue} = require('./data/test_4');  
    const {result, error} = auctionner.findWinner(bidders, objectValue);
    expect(error).toBeNull()
    expect(result).toEqual({
        id: 'E',
        price: 130
    })
});

test("E has the highest bid and A has the next highest bid value which is inferior to object's so E wins and pays 100", () => {
    const {bidders, objectValue} = require('./data/test_5');  
    const {result, error} = auctionner.findWinner(bidders, objectValue);
    expect(error).toBeNull()
    expect(result).toEqual({
        id: 'E',
        price: 100
    })
});

test("Multiple potential winners, should take the first one to bid and pays the highest bid price", () => {
    const {bidders, objectValue} = require('./data/test_6');  
    const {result, error} = auctionner.findWinner(bidders, objectValue);
    expect(error).toBeNull()
    expect(result).toEqual({
        id: 'E',
        price: 140
    })
});
