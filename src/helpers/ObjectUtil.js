export function removeEmptyValue(obj = {}) {
  const newObj = { ...obj };
  for (let prop in newObj) {
    if (newObj[prop] === null || newObj[prop] === "") {
      delete newObj[prop];
    }
  }

  return newObj;
}

export function emptyStringToNull(obj = {}) {
  const newObj = { ...obj };
  for (let prop in newObj) {
    if (newObj[prop] === "") {
      newObj[prop] = null;
    }
  }

  return newObj;
}
