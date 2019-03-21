// tu so thap phan khi chuyen sang so nhi phan
// thi day chu so 0 lien tiep nam giua 2 so 1 dai nhat la ?
// thao tac tren binary xuoi hay nguoc deu giong nhau
// s1: chuyen 1 so thap phan sang day nhi phan nguoc duoi dang array
// s2: luu vi tri cua 1 vao 1 arr res
// lay hieu cua cac element trong res roi tra ve kq lon nhat
var n = 1147483640;

// st1
function converNumberToBinary(n) {
  let arr = [];
  let rs = n;
  do {
    arr.push(rs%2);
    rs = Math.floor(rs/2);
  } while (rs !== 0);
  return arr;
}
console.log(converNumberToBinary(n));
// st2
function countZero(arr) {
  let count = 0;
  let res = [];
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 1) {
      res.push(i);
    }
  }
  if (res.length > 1) {
    count = res[1] - res[0] - 1;
    for(let i = 1; i < res.length - 1; i += 1) {
      if (res[i+1] - res[i] - 1 > count) {
        count = res[i+1] - res[i] - 1;
      }
    }
  } else {
    return 0;
  }
  return count;
}
countZero(converNumberToBinary(n));