const sortHTML = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const sortPython = (a, b) => {
  const nameA = a.method.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
  const nameB = b.method.toUpperCase();
  if (nameA < nameB) {
    return -1; // a should come before b in the sorted order
  }
  if (nameA > nameB) {
    return 1; // a should come after b in the sorted order
  }
  return 0; // names are equal, their order remains unchanged}
};

const sortJS = (a, b) => {
  const nameA = a.method.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
  const nameB = b.method.toUpperCase();
  if (nameA < nameB) {
    return -1; // a should come before b in the sorted order
  }
  if (nameA > nameB) {
    return 1; // a should come after b in the sorted order
  }
  return 0; // names are equal, their order remains unchanged}
};
const sortCSS = (a, b) => {
  const nameA = a.property.toUpperCase();
  const nameB = b.property.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

module.exports = { sortCSS, sortHTML, sortJS, sortPython };
