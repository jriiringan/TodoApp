const cleanCollection = (myArr, prop) =>  {
    myArr.reduce((prev, t, index, arr) => {
        if (typeof prev[prop] === 'undefined') {
          prev[t[prop]] = [];
        }
        prev[t[prop]].push(t);
        return prev;
      }, {});
}

export {cleanCollection};