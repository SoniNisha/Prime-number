var array1 = document.getElementById('array1');
var array2 = document.getElementById('array2');
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
Array.prototype.checkprime = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] <= 1) {
            return false
        }
        else {
            for (let i = 2; i < this[i] / 2; i++) {
                if (this[i] % i == 0) {
                    return false
                }
            }
            return true
        }
    }
}

const arr1 = [2, 3, 5]
array1.innerText = arr1;
result1.innerText = arr1.checkprime();
console.log(arr1.checkprime())

const arr2 = [14, 15, 8, 9]
array2.innerText = arr2;
result2.innerText = arr2.checkprime();
console.log(arr2.checkprime())