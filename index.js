
function nth_most_rate(list, n){
  let count = {};
    dict = Counter(list)
    function Counter(array){
      array.forEach(val => count[val] = (count[val] || 0) + 1);
      return count;
    }
    for(let key in dict){
        if(n == dict[key])
        return `The number is ${key}, as its the ${n} rarest number in the array`
    }
}

let lst = [7, 5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5]

console.log(nth_most_rate(lst, 4));