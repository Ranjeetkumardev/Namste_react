import { sum } from "../sum";

test("sum function should be calculate sum of two no ", () => {
  const result = sum(3, 4);

  //Asertion
  expect(result).toBe(7);
});
