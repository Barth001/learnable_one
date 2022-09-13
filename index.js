
let Counter = (array) => {
  var count = {};
  array.forEach(val => count[val] = (count[val] || 0) + 1);
  return count;
}

function nth_most_rate(list, n){
    dict = Counter(list)
    for(let key in dict){
        if(n == dict[key])
        return `The answer is ${key}, as ${n} is the rarest number`
    }
}

let lst = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5]

console.log(nth_most_rate(lst, 2));