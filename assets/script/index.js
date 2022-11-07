function onEvent(event, selector, callback) {

    return selector.addEventListener(event, callback);

}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);

}


const temp = select('.number-one');
const output = select('.output ');
const result = select('.get-result');
const butn2 = select('.myclass');



function isNumber(str) {
    let input = str.trim();
    
    if (  input.length > 0 && !isNaN(input))
    return true;
    
    return false;
}
onEvent('click', result, function () {
    
    let a = temp.value;
    if (isNumber(a)) {
        if (butn2.checked) {
            let res = (1.8 * temp.value) + 32;
            output.value = res.toFixed(2);
        } else {
            let res1 = (temp.value - 32) / 1.8;
            output.value = res1.toFixed(2);
        }
    }
    else {
        output.value = 'Chawal na mar';

    }

});


