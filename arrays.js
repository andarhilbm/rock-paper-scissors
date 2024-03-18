//1. Display in the console the numbers from 1 to 20

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// ------------------------------------------------------------------------------------

//2. Display in the console the odd numbers from 1 to 20

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
//   }

// ------------------------------------------------------------------------------------

// 3.compute the sum of the elements of an array and display it in the console

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// let sum = sumArray(arr);
// console.log("Sum:", sum);

// ------------------------------------------------------------------------------------

// 4.Compute the maximum of the elements of an array and display it in the console 

// function findMax(arr) {
//   if (arr.length === 0) {
//       console.log("Array is empty. Cannot find the maximum.");
//       return;
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i];
//       }
//   }

//   console.log("Maximum element:", max);
// }

// let array = [3, 7, 2, 8, 5];
// findMax(array);

// ------------------------------------------------------------------------------------

// 5.compute how many times a certain element appears in an array

// function countOccurrences(arr, target) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//           count++;
//       }
//   }

//   return count;
// }


// let myArray = [1, 2, 3, 4, 2, 2, 5, 2];
// let targetElement = 2;

// let occurrences = countOccurrences(myArray, targetElement);
// console.log(`The element ${targetElement} appears ${occurrences} times in the array.`);

// ------------------------------------------------------------------------------------

// 6. Challange 

// function decimalToBinary(decimalNumber) {
//   // Using toString() with base 2 converts the decimal to binary
//   return decimalNumber.toString(2);
// }

// // Example Usage:
// let decimalNumber = 5;
// let binaryRepresentation = decimalToBinary(decimalNumber);

// console.log(`Decimal: ${decimalNumber}`);
// console.log(`Binary: ${binaryRepresentation}`);

// ------------------------------------------------------------------------------------

// 7. Rock, Paper, Scrissors

let playerScoreValue = 0;
let aiScoreValue = 0;

let winState = document.querySelector(".winner-message");
let selectItems = document.querySelector('.select-items');
let aiHand = document.querySelector(".ai");

let hand = ["✊", "🖐️", "✌️"];

function populateDropdown(array) {
  array.forEach(function(optionValue) {
    let option = document.createElement('div');
    option.textContent = optionValue;
    option.classList.add('custom-option');
    selectItems.appendChild(option);
  });
}

populateDropdown(hand);

let selectSelected = document.querySelector('.select-selected');
let selectItemsOptions = document.querySelectorAll('.select-items .custom-option');

selectSelected.addEventListener('click', function() {
    if (selectItems.style.display === 'block') {
        selectItems.style.display = 'none';
      } else {
        selectItems.style.display = 'block';
      }
});

selectItemsOptions.forEach(option => {
  option.addEventListener('click', function() {
    selectItemsOptions.forEach(item => item.classList.remove('selected'));
    this.classList.add('selected');
    selectSelected.textContent = this.textContent;
    selectItems.style.display = 'none';

    let playerOne = this.textContent;
    let ai = hand[Math.floor(Math.random() * hand.length)];
    aiHand.textContent = ai;

    function determineWinner(playerOne, ai) {
      if (
        (playerOne === "✊" && ai === "✌️") ||
        (playerOne === "🖐️" && ai === "✊") ||
        (playerOne === "✌️" && ai === "🖐️")
      ) {
        return { result: "You Won!", color: "green" };
      } else if (playerOne === ai) {
        return { result: "It's a Tie!", color: "lightgray" };
      } else {
        return { result: "AI Won!", color: "red" };
      }
    }

    let gameResult = determineWinner(playerOne, ai);
    winState.textContent = gameResult.result;
    winState.style.color = gameResult.color;

    if (gameResult.result === "You Won!") {
      playerScoreValue++;
    } else if (gameResult.result === "AI Won!") {
      aiScoreValue++;
    }

    let playerScore = document.querySelector(".player-score");
    let aiScore = document.querySelector(".ai-score");

    playerScore.textContent = playerScoreValue;
    aiScore.textContent = aiScoreValue;
  });
});
