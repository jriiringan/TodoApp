const cleanCollection = (myArr, prop) =>  {
  if(typeof myArr == 'undefined' || myArr == undefined || myArr.length == 0) return [];
  myArr.filter((v,i,a)=>a.findIndex(t=>(t[prop] === v[prop]))===i);
  return myArr;
}

export {cleanCollection};