import { sum } from "../sum"

test("sum function should calculate the sum of the two numbers", () => {
  
    const result = sum(3,4);

    expect(result).toBe(7);
    expect(result).not.toBe(8);

});