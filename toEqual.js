function test(description,fn)
{
    console.log(description)
    fn();
}


function _toEqual(inp, ex)
{
    let flag = true;

    const inpLength = Object.keys(inp).length;
    const exLength = Object.keys(ex).length;

    if (inpLength!==exLength) {
        return false;
    }
    if (Array.isArray(inp) !== Array.isArray(ex))
    {
        return false;
    }
    for (let key in ex)
    {
        if (typeof ex[key]==="object" && typeof inp[key]==="object") {
            flag = _toEqual(inp[key], ex[key]);
            if (!flag) { break;}
        }
        else if (inp[key]!==ex[key])
        {
            return false;
        }
    }
    return flag;
}
function expect(input)
{
    function toEqual(expect)
    {
        const isEqual = _toEqual(input, expect);
        if (isEqual)
        {
            console.log("Test case Passed");
        }
        else
        {
            console.log("Test case failed");
        }
    }

    return { toEqual};
}


console.log("should these test case passsed");
test("condition {}==={} test should pass", () => {
    expect({}).toEqual({})
});

test("condition []===[] test should pass", () => {
    expect([]).toEqual([]);
});

test("condition { a: 1, b: 2 }==={ a: 1, b: 2 } test should pass", () => {
    expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
});

test("condition [1, 2, 3]===[1, 2, 3] test should pass", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
});

test("condition { a: 1, b: { c: 1, d: 2 } }==={ a: 1, b: { c: 1, d: 2 } } test should pass", () => {
    expect({ a: 1, b: { c: 1, d: 2 } }).toEqual({ a: 1, b: { c: 1, d: 2 } });
});


test("condition [ 1, 2, [ 1, 2 ] ] === [ 1, 2, [ 1, 2 ] ]  test should pass", () => {
    expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
});

console.log("these test cases should failed");

test("condition { a: 1, b: { c: 1, d: 2 }}  === { a: 1, b: { e: 1, d: 2 }}   test should failed", () => {
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} ) 
});

test("condition [1, 2, [1, 3]] === [1, 2, [1, 3]] test should failed", () => {
    expect([1, 2, [1, 3]]).toEqual([1, 2, [1, 2]]);
});














