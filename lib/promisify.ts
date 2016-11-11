export function call(fn: Function, ...args: any[]): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    fn(...args, (err: Error, ...results: any[]) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);
    });
  });
}
export function promisify(fn: Function): (...args: any[]) => Promise<any> {
  return (...args: any[]): Promise<any> => {
    return (<any>call)(fn, ...args);
  };
}
export function calln(fn: Function, ...args: any[]): Promise<any[]> {
  return new Promise<any>((resolve, reject) => {
    fn(...args, (err: Error, ...results: any[]) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
}
export function promisifyn(fn: Function): (...args: any[]) => Promise<any[]> {
  return (...args: any[]) => {
    return calln(fn, ...args);
  };
}

export function call0(fn: (callback: (err: Error|null|undefined) => any) => any): Promise<void>;
export function call0<T1>(fn: (arg1: T1, callback: (err: Error|null|undefined) => any) => any, arg1: T1): Promise<void>;
export function call0<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2): Promise<void>;
export function call0<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2, arg3: T3): Promise<void>;
export function call0<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<void>;
export function call0<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<void>;
export function call0<T1, T2, T3, T4, T5, T6>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Promise<void>;
export function call0<T1, T2, T3, T4, T5, T6, T7>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Promise<void>;
export function call0(fn: Function, ...args: any[]): Promise<any[]> {
  return call(fn, ...args);
}
export function promisify0(fn: (callback: (err: Error|null|undefined) => any) => any): () => Promise<void>;
export function promisify0<T1>(fn: (arg1: T1, callback: (err: Error|null|undefined) => any) => any): (arg1: T1) => Promise<void>;
export function promisify0<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2) => Promise<void>;
export function promisify0<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
export function promisify0<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
export function promisify0<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
export function promisify0<T1, T2, T3, T4, T5, T6>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>;
export function promisify0<T1, T2, T3, T4, T5, T6, T7>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<void>;
export function promisify0(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisify(fn);
}

export function call1<R1>(fn: (callback: (err: Error|null|undefined, res1: R1) => any) => any): Promise<R1>;
export function call1<T1, R1>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1): Promise<R1>;
export function call1<T1, T2, R1>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2): Promise<R1>;
export function call1<T1, T2, T3, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2, arg3: T3): Promise<R1>;
export function call1<T1, T2, T3, T4, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<R1>;
export function call1<T1, T2, T3, T4, T5, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<R1>;
export function call1<T1, T2, T3, T4, T5, T6, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Promise<R1>;
export function call1<T1, T2, T3, T4, T5, T6, T7, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Promise<R1>;
export function call1(fn: Function, ...args: any[]): Promise<any[]> {
  return call(fn, ...args);
}
export function promisify1<R1>(fn: (callback: (err: Error|null|undefined, res1: R1) => any) => any): () => Promise<R1>;
export function promisify1<T1, R1>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1) => Promise<R1>;
export function promisify1<T1, T2, R1>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2) => Promise<R1>;
export function promisify1<T1, T2, T3, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2, arg3: T3) => Promise<R1>;
export function promisify1<T1, T2, T3, T4, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R1>;
export function promisify1<T1, T2, T3, T4, T5, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R1>;
export function promisify1<T1, T2, T3, T4, T5, T6, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<R1>;
export function promisify1<T1, T2, T3, T4, T5, T6, T7, R1>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<R1>;
export function promisify1(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisify(fn);
}

export function call2<R1, R2>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): Promise<[R1, R2]>;
export function call2<T1, R1, R2>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1): Promise<[R1, R2]>;
export function call2<T1, T2, R1, R2>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2): Promise<[R1, R2]>;
export function call2<T1, T2, T3, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2, arg3: T3): Promise<[R1, R2]>;
export function call2<T1, T2, T3, T4, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<[R1, R2]>;
export function call2<T1, T2, T3, T4, T5, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<[R1, R2]>;
export function call2<T1, T2, T3, T4, T5, T6, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Promise<[R1, R2]>;
export function call2<T1, T2, T3, T4, T5, T6, T7, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Promise<[R1, R2]>;
export function call2(fn: Function, ...args: any[]): Promise<any[]> {
  return calln(fn, ...args);
}
export function promisify2<R1, R2>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): () => Promise<[R1, R2]>;
export function promisify2<T1, R1, R2>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1) => Promise<[R1, R2]>;
export function promisify2<T1, T2, R1, R2>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2) => Promise<[R1, R2]>;
export function promisify2<T1, T2, T3, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2, arg3: T3) => Promise<[R1, R2]>;
export function promisify2<T1, T2, T3, T4, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<[R1, R2]>;
export function promisify2<T1, T2, T3, T4, T5, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<[R1, R2]>;
export function promisify2<T1, T2, T3, T4, T5, T6, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<[R1, R2]>;
export function promisify2<T1, T2, T3, T4, T5, T6, T7, R1, R2>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<[R1, R2]>;
export function promisify2(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisifyn(fn);
}

export function call3<R1, R2, R3>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): Promise<[R1, R2, R3]>;
export function call3<T1, R1, R2, R3>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1): Promise<[R1, R2, R3]>;
export function call3<T1, T2, R1, R2, R3>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2): Promise<[R1, R2, R3]>;
export function call3<T1, T2, T3, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2, arg3: T3): Promise<[R1, R2, R3]>;
export function call3<T1, T2, T3, T4, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<[R1, R2, R3]>;
export function call3<T1, T2, T3, T4, T5, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<[R1, R2, R3]>;
export function call3<T1, T2, T3, T4, T5, T6, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Promise<[R1, R2, R3]>;
export function call3<T1, T2, T3, T4, T5, T6, T7, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Promise<[R1, R2, R3]>;
export function call3(fn: Function, ...args: any[]): Promise<any[]> {
  return calln(fn, ...args);
}
export function promisify3<R1, R2, R3>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): () => Promise<[R1, R2, R3]>;
export function promisify3<T1, R1, R2, R3>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, R1, R2, R3>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, T3, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2, arg3: T3) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, T3, T4, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, T3, T4, T5, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, T3, T4, T5, T6, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<[R1, R2, R3]>;
export function promisify3<T1, T2, T3, T4, T5, T6, T7, R1, R2, R3>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<[R1, R2, R3]>;
export function promisify3(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisifyn(fn);
}

export function call4<R1, R2, R3, R4>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): Promise<[R1, R2, R3, R4]>;
export function call4<T1, R1, R2, R3, R4>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, T3, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2, arg3: T3): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, T3, T4, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, T3, T4, T5, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, T3, T4, T5, T6, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): Promise<[R1, R2, R3, R4]>;
export function call4<T1, T2, T3, T4, T5, T6, T7, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): Promise<[R1, R2, R3, R4]>;
export function call4(fn: Function, ...args: any[]): Promise<any[]> {
  return calln(fn, ...args);
}
export function promisify4<R1, R2, R3, R4>(fn: (callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): () => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, R1, R2, R3, R4>(fn: (arg1: T1, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, T3, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2, arg3: T3) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, T3, T4, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, T3, T4, T5, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, T3, T4, T5, T6, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<[R1, R2, R3, R4]>;
export function promisify4<T1, T2, T3, T4, T5, T6, T7, R1, R2, R3, R4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: Error|null|undefined, res1: R1, res2: R2, res3: R3, res4: R4) => any) => any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Promise<[R1, R2, R3, R4]>;
export function promisify4(fn: Function): (...args: any[]) => Promise<any[]> {
  return promisifyn(fn);
}

