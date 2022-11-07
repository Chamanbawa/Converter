## This is a Basic simple Temperature converter which converts Celsius to Fahrenheit or from Fahrenheit to Celsius.
### We are using HMTL, CSS, and JavaScript in this converter.

A simple point-and-click game made with JavaScript.

### You can reach at the converter page by clicking on link given below.

Want to Convert your Temperature? click [here](https://chamanbawa.github.io/converter/) to Convert.

Here You will get explaination of JavaScript Code, How does it worked in this Converter.
Given below is it's basic validation which will check the input provided by the user is really a number or not (input may be empty spaces or alphabets, which cannot be converted.)

```JavaScript

function isNumber(str) {
    let input = str.trim();
    
    if (  input.length > 0 && !isNaN(input))
    return true;
    
    return false;
} 
```


```JavaScript
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
        output.value = '';

    }

});

```
 

