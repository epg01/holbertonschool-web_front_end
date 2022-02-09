/* Multiple callbacks */
let stock = {
    macbook: 2,
    iphone: 4
}
function processPayment(itemName) {
    this[itemName] -= 1;
    console.log('Payment is being processed for item ' + itemName);
}
function processError(itemName) {
    console.log('No more ' + itemName + ' in stock');
    console.log('Payment is not being processed');
}
function processOrder(itemName, callbackPayment, callbackError) {
    console.log('Verifying the stock of ' + itemName);
    if (this[itemName] > 0) {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

let payment = processPayment.bind(stock);
let error = processError.bind(stock);
let order = processOrder.bind(stock);

/* this function pops out the prompt */
function prompting() {
    let input = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
    let flag = 0;
    if (input == '' || input == null){
        return;
    }
    input = input.toLowerCase();
    Object.keys(stock).forEach(function (key) {
        if (input === key) {
            order(input, payment, error);
            flag = 1;
        }
    });
    if (flag == 0){
        console.log('Item not found');
    }
}
prompting(); /* execute this function on console to keep purchasing */