//Homework1
console.log("Find Prime Number")
function primeNumber(...numbers) { 
    let number
    for (let i = 0; i < numbers.length; i++) {
        number=0
        for (let j =1 ; j <= numbers[i]; j++){
            if (numbers[i]%j==0) {
                number++  
                 
            }
        }  
         if (number==2) {
            console.log(numbers[i])
         }
    }
}
primeNumber(2,4,5,8,9,25,46,89)

//Homework2
function friendsNumber(number1, number2) {
    let total1=0
    let total2=0
    
    for (let i = 0; i < number1; i++) {
        if (number1 % i==0) {
          total1=total1+i  
        }
        
    }

console.log(total2)
for (let j = 0; j < number2; j++) {
    if (number2 % j==0) {
        total2=total2+j  
      }
}
if ((number1 == total2) && (number2 == total1)) {
    console.log("Arkadaş sayılardır." + number1 + "ve" + number2)
  }
  else {
    console.log("Arkadaş sayı değillerdir." + number1 + " ve " + number2)
  }

friendsNumber(30, 60)
friendsNumber(220, 284)
}

function perfectNumbers() {
    let total = 0
    for (let i = 1; i < 1000; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total = total + j
            }

            if (total == i) {
                console.log(i)

            }
        }
    }
}
console.log(perfectNumbers());

function primeNumbers() {
    let count = 0
    for (let i = 1; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if(count == 0) {
            console.log(i)
        } 
    }
}
console.log(primeNumbers());