import sum from "../sum";

test("test for sum", ()=>{

    const result = sum(3,4);

    // assertion
    expect(result).toBe(7);
});