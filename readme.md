promisify
=========

Convert node.js style function into function that returns promise.

# Usage
```sh
$ npm i --save @atsushi_suzuki/promisify
```

```typescript
import * as fs from "fs";
import * as p from "@atsushi_suzuki/promisify";

(async function () {
  const readFile = p.fn(fs.readFile);
  const data = await readFile("package.json", "utf-8");

  console.log(data);
})();
```

# API

## function fn(f: Function): (...args: any[]) => Promise<any>
promisify node.js style function with single result.

usage:
```typescript
const data = await p.fn(fs.readFile)("package.json", "utf-8");
```

## function fnn(f: Function): (...args: any[]) => Promise<any[]>
promisify node.js style function with multiple results.

usage:
```typescript
const [bytesRead, buffer] = await p.fnn(fs.read)(fd, buf, offset, length, pos);
```

## function call(f: Function, ...args: any[]): Promise<any>
call node.js style function with single result.

usage:
```typescript
const data = await p.call(fs.readFile, "package.json", "utf-8");
```

## function calln(f: Function, ...args: any[]): Promise<any[]>
call node.js style function with multiple results.

usage:
```typescript
const [bytesRead, buffer] = await p.calln(fs.read, fd, buf, offset, length, pos);
```

## function wait(ee: EventEmitter, event: string): Promise<any>
returns a promise to wait until specified event fires. with single event argument.

usage:
```typescript
const data = await p.wait(rs, "data");
```

## function waitn(ee: EventEmitter, event: string): Promise<any[]>
returns a promise to wait until specified event fires. with multiple event arguments.

usage:
```typescript
const [code, signal] = await p.waitn(proc, "exit");
```

## function waitAny(...defs: EventDefinition[]): Promise<any>
returns a promise to wait until any of specified events fire.

```typescript
type EventDefinition = [
  EventEmitter,
  {[event: string]: Function}
];
```

usage:
```typescript
const data = await p.waitAny([conn, {
  "data": (data) => data,
  "close": () => Promise.reject(new Error("unexpected close")),
  "error": (err) => Promise.reject(err),
}]);
```
