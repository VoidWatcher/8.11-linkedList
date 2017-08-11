function linkedList(str, val) {
  str = str.split(`->`);
  let index = str.indexOf(val.toString());
  while (index != -1) {
    str.splice(index, 1);
    index = str.indexOf(val.toString());
  }
  str = str.join(`->`);
  return str;
}

console.log(linkedList(`1->2->3->3->4->5->3`, 3));