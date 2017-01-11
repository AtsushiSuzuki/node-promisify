const maxArgs = 8;
const maxResults = 4;


console.log(`export function call(fn: Function, ...args: any[]): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    fn(...args, (err: Error, ...results: any[]) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);
    });
  });
}`);
console.log(`export function promisify(fn: Function): (...args: any[]) => Promise<any> {
  return (...args: any[]): Promise<any> => {
    return (<any>call)(fn, ...args);
  };
}`);
console.log(`export function calln(fn: Function, ...args: any[]): Promise<any[]> {
  return new Promise<any>((resolve, reject) => {
    fn(...args, (err: Error, ...results: any[]) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}`);
console.log(`export function promisifyn(fn: Function): (...args: any[]) => Promise<any[]> {
  return (...args: any[]) => {
    return calln(fn, ...args);
  };
}`);
console.log();

for (let j = 0; j <= 1; j++) {
  for (let i = 0; i < maxArgs; i++) {
    console.log(declare(`call${j}`, i, j, false));
  }
  console.log(`export function call${j}(fn: Function, ...args: any[]): Promise<void> {
  return call(fn, ...args);
}`);
  for (let i = 0; i < maxArgs; i++) {
    console.log(declare(`promisify${j}`, i, j, true));
  }
  console.log(`export function promisify${j}(fn: Function): (...args: any[]) => Promise<void> {
  return promisify(fn);
}`);
  console.log();
}

for (let j = 2; j <= maxResults; j++) {
  for (let i = 0; i < maxArgs; i++) {
    console.log(declare(`call${j}`, i, j, false));
  }
  console.log(`export function call${j}(fn: Function, ...args: any[]): Promise<any[]> {
  return calln(fn, ...args);
}`);
  for (let i = 0; i < maxArgs; i++) {
    console.log(declare(`promisify${j}`, i, j, true));
  }
  console.log(`export function promisify${j}(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisifyn(fn);
}`);
  console.log();
}


function declare(name: string, args: number, results: number, promisify: boolean) {
  const typeParams = (0 < args + results)
    ? "<" + [...range(args).map((i) => `T${i}`), ...range(results).map((j) => `R${j}`)].join(", ") + ">"
    : "";
  const callbackType = "(" + ["err: Error|null|undefined", ...range(results).map((j) => `res${j}: R${j}`)].join(", ") + ") => any";
  const functionType = "(" + [...range(args).map((i) => `arg${i}: T${i}`), `callback: ${callbackType}`].join(", ") + ") => any";
  const promiseType = (results === 0)
    ? `Promise<void>`
    : (results === 1)
    ? `Promise<R1>`
    : "Promise<[" + range(results).map((j) => `R${j}`).join(", ") + "]>";
  const params = (promisify)
    ? `fn: ${functionType}`
    : [`fn: ${functionType}`, ...range(args).map((i) => `arg${i}: T${i}`)].join(", ");
  const resultType = (promisify)
    ? "(" + range(args).map((i) => `arg${i}: T${i}`).join(", ") + ") => " + promiseType
    : promiseType;
  return `export function ${name}${typeParams}(${params}): ${resultType};`;
}

function range(n: number): number[] {
  const results: number[] = [];
  for (let i = 1; i <= n; i++) {
    results.push(i);
  }
  return results;
}
