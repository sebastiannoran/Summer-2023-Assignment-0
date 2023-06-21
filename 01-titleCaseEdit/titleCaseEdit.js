function titleCaseEdit(title) {
  // Insert code here;
  let holder = title.split(" ");

  for (let i = 0; i < holder.length; i++) {
    holder[i] = holder[i].charAt(0).toUpperCase() + holder[i].slice(1);
  }
  const newString = holder.join(" ");
  return newString;
}

// Do not edit this line;
module.exports = titleCaseEdit;