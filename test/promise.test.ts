import * as assert from "assert";


describe("Promise", () => {
  describe(".resolve", () => {
    it("should return resolved promise", async () => {
      const p = Promise.resolve(1);

      const v = await p;
      assert.strictEqual(v, 1);
    });

    it("should resolve promise with another promise", async () => {
      const p = Promise.resolve(Promise.resolve(1));

      const v = await p;
      assert.strictEqual(v, 1);
    });

    it("should reject promise with rejected promise", async () => {
      const p = Promise.resolve(Promise.reject(new Error("some error")));
      
      try {
        const v = await p;
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });
  });

  describe("#ctor", () => {
    it("should return resolved promise", async () => {
      const p = new Promise((resolve, reject) => resolve(1));

      const v = await p;
      assert.strictEqual(v, 1);
    });

    it("should resolve promise with another promise", async () => {
      const p = new Promise((resolve, reject) => resolve(Promise.resolve(1)));

      const v = await p;
      assert.strictEqual(v, 1);
    });

    it("should reject promise with rejected promise", async () => {
      const p = new Promise((resolve, reject) => resolve(Promise.reject(new Error("some error"))));
      
      try {
        const v = await p;
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });
  });

  describe("executor", () => {
    it("should run synchronously", async () => {
      const arr: number[] = [];

      arr.push(1);
      const p = new Promise((resolve, reject) => {
        arr.push(2);
        resolve();
      });
      arr.push(3);

      await p;
      assert.deepStrictEqual(arr, [1, 2, 3]);
    });

    it("should catch exception", async () => {
      const p = new Promise((resolve, reject) => {
        throw new Error("some error");
      });

      try {
        await p;
        assert.ok(false, "expects exception");
      } catch (err) {
        assert.strictEqual(err.message, "some error");
      }
    });
  });
});
