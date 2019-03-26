// Yc: xoay 1 arr sang phai theo 1 so buoc k
// ST1: Xet k . neu k > arr.length thi cac element trong arr di dc nhieu hon 1 vong va ket qua cung tg duong voi k - arr.length
// ST2: tao mang moi res. cac element trong res se la cac element cua arr nhung index + k.

function cirleArray(arr, k) {
  let res = [];
// st1 :
  if (k >= arr.length) {
    k = k - arr.length;
  }
// st2 :
  for (let i = 0; i < arr.length; i += 1) {
    if (i+k < arr.length) {
      res[i+k] = arr[i]
    } else {
      res[i+k - arr.length] = arr[i];
    }
  }
  return res;
}
cirleArray([3, 8, 9, 7, 6], 3);