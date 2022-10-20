//Given unsorted integer Array, find a pair with the given Sum in it. Example: Number:
//[5,3,2,4,8,10], Goal: 12. Output: {8,4}, {10,2};


function pair(ans,ind,ar,n,k) {
    if (ind >= n) {
        if (ans.length === 2) {
            let sum = ans[0] + ans[1];
            if (sum ===k) {
              console.log(ans.join(" "));
            }
        }
        
        return;
    }
    ans.push(ar[ind]);
    pair(ans, ind + 1, ar, n,k);
    ans.pop();
    pair(ans, ind + 1, ar, n,k);
}
let ar = [5, 3, 2, 4, 8, 10];
let goal = 12;
pair([], 0, ar, ar.length, goal);

//Given set of positive integers, check if it can be divided into two subsets with equal
//sum. Example: Input: {3,1,1,2,2,1}, Output: {1,1,1,2}, {3,2}

function subsets(N, arr) {
  var left = 0;
  var right = N - 1;
  var sumLeft = 0;
  var sumRight = 0;
  var count = 0;
  while (left < right) {
    sumLeft += arr[left];
    sumRight += arr[right];
    left++;
    right--;
    if (sumLeft === sumRight) {
      count++;
      break;
    }
  }
    if (count > 0) {
        // console.log("Yes")
        let ansL = [];
        let ansR = [];
        for (let i = 0; i <= count+1; i++){
            ansL.push(arr[i]);
        }
         for (let i = count+2; i <N; i++) {
           ansR.push(arr[i]);
        }
        console.log(ansL,ansR)
    }
  else console.log("No It Can't be divided into two subset with equal sum");
}
let arr = [3, 1, 1, 2, 2, 1];

subsets(arr.length, arr);





//Puzzles ;
//Ans 2=> Minimum 999 Rats neede To find poisoned wine in One hour
