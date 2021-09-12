function tuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}
function getKey<T extends object, K extends keyof T>(o: T, name: K) {
  return o[name];
}
export { 
  tuplify, 
  getKey 
};
