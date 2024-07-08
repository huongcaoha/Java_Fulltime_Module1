const englishWords = [
  "apple",
  "book",
  "cat",
  "dog",
  "egg",
  "flower",
  "guitar",
  "house",
  "ice",
  "jacket",
  "key",
  "lemon",
  "moon",
  "notebook",
  "orange",
  "pen",
  "queen",
  "rabbit",
  "school",
  "tree",
];

const vietnameseWords = [
  "táo",
  "sách",
  "mèo",
  "chó",
  "trứng",
  "hoa",
  "guitar",
  "nhà",
  "băng",
  "áo khoác",
  "chìa khóa",
  "chanh",
  "mặt trăng",
  "sổ tay",
  "cam",
  "bút",
  "nữ hoàng",
  "thỏ",
  "trường",
  "cây",
];

let language1 = document.querySelector(".language1");
let language2 = document.querySelector(".language2");
let changeLanguage = document.querySelector(".change");
let input = document.querySelector("textarea");
let outPut = document.querySelector(".output");
let button = document.querySelector("button");
changeLanguage.addEventListener("click", function () {
  let tmp = language1.innerText;
  language1.innerText = language2.innerText;
  language2.innerText = tmp;
});
input.addEventListener("input", function () {
  if (language1.textContent === "Tiếng anh") {
    if (englishWords.indexOf(this.value) == -1) {
      outPut.innerText = "ko tìm thấy";
    } else {
      outPut.innerText = vietnameseWords[englishWords.indexOf(this.value)];
    }
  } else if (language1.textContent === "Tiếng việt") {
    if (vietnameseWords.indexOf(this.value) == -1) {
      outPut.innerText = "not found";
    } else {
      outPut.innerText = englishWords[vietnameseWords.indexOf(this.value)];
    }
  }

  //   console.log(input.nodeValue);
});
// // Lấy phần tử textarea
// let textareaElement = document.querySelector("textarea");

// // Lắng nghe sự kiện input (khi người dùng nhập liệu)
// textareaElement.addEventListener("input", function () {
//   let userInput = this.value;
//   console.log(userInput); // In giá trị người dùng nhập vào
// });

// // Lắng nghe sự kiện change (khi người dùng kết thúc nhập liệu)
// textareaElement.addEventListener("change", function () {
//   let userInput = this.value;
//   console.log(userInput); // In giá trị người dùng nhập vào
// });
