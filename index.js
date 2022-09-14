function nth_most_rate(list, n){
    dict = Counter(list)
    for(let key in dict){
        if(n == dict[key])
        return console.log(`The answer is ${key}, as its the ${n} rarest in the item`)
    }
}
/* This function counts the number of occurance of the individual item
in the array and stored it in object */
let Counter = (array) => {
  var count = {};
  array.forEach(val => (count[val] = (count[val] || 0) + 1));
  return count;
}

let lst = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5]

nth_most_rate(lst, 2);