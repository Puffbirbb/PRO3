import { add } from "./logik.js";
import { assert } from "chai";

describe("add", () => {
  it("should add two numbers", () => {
    assert.equal(add(1, 2), 3);
  });
});
