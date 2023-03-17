let obj = {
  name: "ball",
  size: 12,
  weight: 8,
};

function hasProperty(obj, propName) {
  return propName in obj;
}

console.log(hasProperty(obj, "name"))
console.log(hasProperty(obj, "color"))