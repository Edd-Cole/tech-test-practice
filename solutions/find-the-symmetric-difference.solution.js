function sym(...args) {
    const obj = {};
    const arr = [];
    for(let i = 0; i <= 1; i++) {
      args[i].sort((a,b) => a-b);
      for(let j = 0; j <= args[i].length; j++) {
        if(args[i][j] === args[i][j-1]) continue;
        obj[args[i][j]] ? obj[args[i][j]]++ : obj[args[i][j]] = 1;
      }
    }
    for(let item in obj) {
      if(obj[item] === 1)
        arr.push(+item);
    }
    if(args.length > 2) {
      return sym(arr, ...args.slice(2))
    }
    return arr;
}

module.exports = sym;