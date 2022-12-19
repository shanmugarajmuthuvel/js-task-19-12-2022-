
var sum = 0;
var number = prompt('Enter a three-digit positive integer: ');
var temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum =sum+ (remainder * remainder * remainder);
    temp = parseInt(temp / 10);
}
if (sum == number) {
    document.write(`${number} is an Armstrong number`);
}
else {
    document.write(`${number} is not an Armstrong number.`);
}