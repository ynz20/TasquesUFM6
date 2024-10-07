const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  
  function makeList(arr) {
    const listItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    return listItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);