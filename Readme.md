# Introduction 

Solution to a second price auction exercice in javascript

# Usage

npm install

npm test

the tests/data contains the test inputs

The program can also be used in the following way: 

node main.js **[input_path]**

# Example 

This is an example of an object's auction: 

```js
{
    bidders: [
        {
            id: 'A',
            bids: [110, 130]
        },
        {
            id: 'B',
            bids: []
        },
        {
            id: 'C',
            bids: [125]
        },
        {
            id: 'D',
            bids: [105, 115, 90]
        },
        {
            id: 'E',
            bids: [132, 135, 140]
        }
    ],
    objectValue: 100
}
```

The output is :
```js
{
	result: {
		id: 'E',
		price: 130
	},
	error: null
}
```