//Create a random string

function stringGen(len = 24) {
  let alphanumeric =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let code = new Array();

  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * alphanumeric.length);
    code.push(alphanumeric.charAt(index));
  }
  code = code.join("");
  return code;
}

console.log(stringGen(16));
