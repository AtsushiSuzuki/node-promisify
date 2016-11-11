import * as assert from "assert";
import {EventEmitter} from "events";
import * as p from "../lib";


describe("lib/promisify", () => {
  describe("fn", () => {
    it("should convert function with callback to promisified function", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done();
        }, 1);
      }

      await p.fn(f)();
    });

    it("promisified function should pass its arguments", async () => {
      function f(a: any, b: any, done: Function) {
        assert.strictEqual(a, 1);
        assert.strictEqual(b, 2);
        setTimeout(() => {
          done();
        }, 1);
      }

      await p.fn(f)(1, 2);
    });

    it("promisified function should return promise with callback value", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done(null, 1);
        }, 1);
      }

      const v = await p.fn(f)();
      assert.strictEqual(v, 1);
    });

    it("promisified function should handle callback error", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done(new Error("some error"));
        }, 1);
      }

      try {
        await p.fn(f)();
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });

    it("promisified function should handle thrown error", async () => {
      function f(done: Function) {
        throw new Error("some error");
      }

      try {
        await p.fn(f)();
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });
  });

  describe("fnn", () => {
    it("should convert function with callback to promisified function", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done();
        }, 1);
      }

      await p.fnn(f)();
    });

    it("promisified function should pass its arguments", async () => {
      function f(a: any, b: any, done: Function) {
        assert.strictEqual(a, 1);
        assert.strictEqual(b, 2);
        setTimeout(() => {
          done();
        }, 1);
      }

      await p.fnn(f)(1, 2);
    });

    it("promisified function should return promise with callback value", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done(null, 1);
        }, 1);
      }

      const v = await p.fnn(f)();
      assert.deepStrictEqual(v, [1]);
    });

    it("promisified function should return promise with multiple callback value", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done(null, 1, 2);
        }, 1);
      }

      const v = await p.fnn(f)();
      assert.deepStrictEqual(v, [1, 2]);
    });

    it("promisified function should handle callback error", async () => {
      function f(done: Function) {
        setTimeout(() => {
          done(new Error("some error"));
        }, 1);
      }

      try {
        await p.fnn(f)();
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });

    it("promisified function should handle thrown error", async () => {
      function f(done: Function) {
        throw new Error("some error");
      }

      try {
        await p.fnn(f)();
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });
  });

  describe("call", () => {
    it("should work", async () => {
      function f(a: any, b: any, done: Function) {
        assert.strictEqual(a, 1);
        assert.strictEqual(b, 2);
        setTimeout(() => {
          done(null, 3);
        }, 1);
      }

      const v = await p.call(f, 1, 2);
      assert.strictEqual(v, 3);
    });
  });

  describe("calln", () => {
    it("should work", async () => {
      function f(a: any, b: any, done: Function) {
        assert.strictEqual(a, 1);
        assert.strictEqual(b, 2);
        setTimeout(() => {
          done(null, 3, 4);
        }, 1);
      }

      const v = await p.calln(f, 1, 2);
      assert.deepStrictEqual(v, [3, 4]);
    });
  });

  describe("wait", () => {
    it("should wait for single event", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event"), 1);

      await p.wait(ee, "event");
      assert.strictEqual(ee.listenerCount("event"), 0);
    });

    it("should handle event arguments", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event", 1), 1);

      const v = await p.wait(ee, "event");
      assert.strictEqual(v, 1);
    });
  });

  describe("waitn", () => {
    it("should wait for single event", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event"), 1);

      await p.waitn(ee, "event");
      assert.strictEqual(ee.listenerCount("event"), 0);
    });

    it("should handle event arguments", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event", 1), 1);

      const v = await p.waitn(ee, "event");
      assert.deepStrictEqual(v, [1]);
    });

    it("should handle multiple event arguments", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event", 1, 2), 1);

      const v = await p.waitn(ee, "event");
      assert.deepStrictEqual(v, [1, 2]);
    });
  });

  describe("waitAny", () => {
    it("should wait for single event", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event"), 1);

      await p.waitAny([ee, {
        "event": () => {},
      }]);
      assert.strictEqual(ee.listenerCount("event"), 0);
    });

    it("should handle event arguments", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event", 1), 1);

      const v = await p.waitAny([ee, {
        "event": (arg: any) => arg,
      }]);
      assert.strictEqual(v, 1);
    });

    it("should work with event translation", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("error", new Error("some error")), 1);

      const promise = p.waitAny([ee, {
        "error": (err: Error) => Promise.reject(err),
      }]);
      try {
        await promise;
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      };
    });

    it("should wait for multiple events", async () => {
      const ee = new EventEmitter();
      setTimeout(() => ee.emit("event2"), 1);

      const v = await p.waitAny([ee, {
        "event1": () => "event1",
        "event2": () => "event2",
      }]);
      assert.strictEqual(v, "event2");
      assert.strictEqual(ee.listenerCount("event1"), 0);
      assert.strictEqual(ee.listenerCount("event2"), 0);
    });

    it("should wait for multiple emitters", async () => {
      const ee1 = new EventEmitter();
      const ee2 = new EventEmitter();
      setTimeout(() => ee2.emit("event"), 1);

      const v = await p.waitAny([ee1, {
        "event": () => "ee1",
      }], [ee2, {
        "event": () => "ee2",
      }]);
      assert.strictEqual(v, "ee2");
      assert.strictEqual(ee1.listenerCount("event"), 0);
      assert.strictEqual(ee2.listenerCount("event"), 0);
    });
  });
});
