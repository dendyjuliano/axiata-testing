function caseOne(count) {
  console.log("===== THIS CASE ONE ====");
  for (let row = 1; row <= count; row++) {
    let resRow = "";
    for (let col = 1; col <= count; col++) {
      if (col == row) {
        resRow += `${row} | `;
      } else if (count - row + 1 == col) {
        resRow += `${col} | `;
      } else {
        resRow += `_,_ | `;
      }
    }
    console.log(resRow);
  }
}

function caseTwo(count) {
  console.log("===== THIS CASE TWO ====");
  for (let row = 1; row <= count; row++) {
    let resRow = "";
    for (let col = 1; col <= count; col++) {
      if (col == row) {
        resRow += `${row},${col} | `;
      } else if (count - row + 1 == col) {
        resRow += `${row},${col} | `;
      } else {
        resRow += `_,_ | `;
      }
    }
    console.log(resRow);
  }
}

caseOne(9);
caseTwo(9);
