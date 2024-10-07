function removeFirstTwo(list) {
    const [a, b,...arg] = list;
    return arg;
  }
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(removeFirstTwo(arr));
  