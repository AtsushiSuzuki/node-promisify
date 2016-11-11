export interface EventEmitter {
  on(event: string, listener: Function): this;
  once(event: string, listener: Function): this;
  removeListener(event: string, listener: Function): this;
}

export type EventDefinition = [
  EventEmitter,
  {[event: string]: Function}
];


/**
 * returns a promise to wait until specified event fires. with single event argument.
 */
export function wait(ee: EventEmitter, event: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    ee.once(event, (...args: any[]) => {
      resolve(args[0]);
    });
  });
}

/**
 * returns a promise to wait until specified event fires. with multiple event arguments.
 */
export function waitn(ee: EventEmitter, event: string): Promise<any[]> {
  return new Promise<any>((resolve, reject) => {
    ee.once(event, (...args: any[]) => {
      resolve(args);
    });
  });
}

/**
 * returns a promise to wait until any of specified events fire.
 */
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
