export function fn(f: Function): (...args: any[]) => Promise<any> {
  return (...args: any[]) => {
    return new Promise<any>((resolve, reject) => {
      f(...args, (err: Error, ...results: any[]) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  };
}

export function fnn(f: Function): (...args: any[]) => Promise<any[]> {
  return (...args: any[]) => {
    return new Promise<any>((resolve, reject) => {
      f(...args, (err: Error, ...results: any[]) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };
}

export function call(f: Function, ...args: any[]): Promise<any> {
  return fn(f)(...args);
}

export function calln(f: Function, ...args: any[]): Promise<any[]> {
  return fnn(f)(...args);
}

export default fn;


interface EventEmitter {
  on(event: string, listener: Function): this;
  once(event: string, listener: Function): this;
  removeListener(event: string, listener: Function): this;
}

type EventDefinition = [
  EventEmitter,
  {[event: string]: Function}
];

export function wait(ee: EventEmitter, event: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    ee.once(event, (...args: any[]) => {
      resolve(args[0]);
    });
  });
}

export function waitn(ee: EventEmitter, event: string): Promise<any[]> {
  return new Promise<any>((resolve, reject) => {
    ee.once(event, (...args: any[]) => {
      resolve(args);
    });
  });
}

export function waitAny(...defs: EventDefinition[]): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    const listeners: [EventEmitter, string, Function][] = [];
    function clear() {
      for (let [ee, event, listener] of listeners) {
        ee.removeListener(event, listener);
      }
    }

    for (const [ee, events] of defs) {
      for (const event in events) {
        const fn = events[event];
        const listener = (...args: any[]) => {
          clear();
          
          let result: any;
          try {
            result = fn(...args);
          } catch (err) {
            return reject(err);
          }
          resolve(result);
        };

        ee.on(event, listener);
        listeners.push([ee, event, listener]);
      }
    }
  });
}


export function wrap(target: Object, functions: {[name: string]: "fn"|"fnn"|false}) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      const opt = functions[prop];
      if (opt === "fn") {
        return fn(target[prop]);
      } else if (opt === "fnn") {
        return fnn(target[prop]);
      } else {
        return target[prop];
      }
    }
  });
}
