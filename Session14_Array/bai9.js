// bài 9
let arr = [];
function todoList() {
  let select = "";
  do {
    select = prompt(`please choose :
            C : Create new
            R : Read
            U : Update
            D : Delete
            E : Exit `).toUpperCase();
  } while (
    select != "C" &&
    select != "R" &&
    select != "U" &&
    select != "D" &&
    select != "E"
  );
  switch (select) {
    case "C": {
      let element = prompt("Enter new element :");
      arr.push(element);
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i} : ${arr[i]}`);
      }
      break;
    }
    case "R": {
      if (arr.length <= 0) {
        console.log("Array null");
      } else {
        for (let i = 0; i < arr.length; i++) {
          console.log(`${i} : ${arr[i]}`);
        }
      }
      break;
    }
    case "U": {
      let choose;
      do {
        choose = +prompt(`1 : Update phần tử tại 1 vị trí
                                  2 : Thêm 1 phần tử tại 1 vị trí `);
      } while (choose != 1 && choose != 2);
      if (choose == 1) {
        let newElement = prompt("Enter value want update :");
        let index;
        do {
          index = +prompt("Enter index want update :");
        } while (Number.isNaN(index) || index < 0 || index >= arr.length);
        arr.splice(index, 1, newElement);
        for (let i = 0; i < arr.length; i++) {
          console.log(`${i} : ${arr[i]}`);
        }
      } else {
        let newElement = prompt("Enter new element :");
        let index;
        do {
          index = +prompt("Enter index want update :");
        } while (Number.isNaN(index) || index < 0 || index >= arr.length);
        arr.slice(index, 0, newElement);
        for (let i = 0; i < arr.length; i++) {
          console.log(`${i} : ${arr[i]}`);
        }
      }
      break;
    }
    case "D": {
      let index;
      do {
        index = +prompt("Enter index want delete :");
      } while (Number.isNaN(index) || index < 0 || index >= arr.length);
      arr.slice(index, 1);
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i} : ${arr[i]}`);
      }
      break;
    }
    default: {
      console.log("Goodbye !!!");
      return;
    }
  }
  todoList();
}

todoList();
