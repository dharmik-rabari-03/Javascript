//method 1 (using method)

let name = "121";

function Check() {
  let nameInLowercase = name.toLowerCase();
  let reverseName = name.split("").reverse().join("");

  if (nameInLowercase === reverseName) {
    console.log(name, "is palindrome");
  } else {
    console.log(name, "is not palindrome");
  }
}

Check();

//without method

let name2 = "dharmik";

function Check2() {
  let NameInLowercase = name2.toLowerCase();
  let reverse = "";

  for (let i = NameInLowercase.length - 1; i >= 0; i--) {
    reverse += NameInLowercase[i];
  }

  if (reverse === NameInLowercase) {
    console.log(name2, "is palindrome");
  } else {
    console.log(name2, "is not  palindrome");
  }
}
Check2();
