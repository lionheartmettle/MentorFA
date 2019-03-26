// bai toan cho ta 1 day arr ko empty
// yc : tim so chi xuat hien 1 lan
// giai quyet giong bai toan loc arr -> unique element
// St1: dua element -> key of obj voi value la so lan xuat hien
// St2: kiem tra value cua tung key trong obj. Neu value%2 == 1 thi return Number(key);
function solution(arr) {
  let obj = {};
  //st1 :
  for (let e of arr) {
    if (obj[e]) {
      obj[e] += 1;
    } else {
      obj[e] = 1;
    }
  }
  // St2 : 
  for (let k in obj) {
    if (obj[k]%2 == 1) {
      return Number(k);
    }
    
  }
  return -1;
}
solution([1,2,2,1,5])