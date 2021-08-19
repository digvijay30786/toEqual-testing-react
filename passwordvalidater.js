function test(description, fn)
{
    console.log(description);
    fn();
}




function expect(input)
{
    var specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var Upperchar = /[A-Z]/;
    var num = /[0-9]/;
    var lowerchar = /[a-z]/;

    function _Validater(pass)
    {
        let status = { status:true,err:""};
        if (!specialChar.test(pass))
        {
            status.status = false;
            status.err = "Special Charcter is missing in your password"
        }

        if(!Upperchar.test(pass))
        {
            status.status = false;
            status.err = "Capital Letter is missing in your password"
        }

        if(!num.test(pass))
        {
            status.status = false;
            status.err = "Number is missing in your password"
        }

        if(!lowerchar.test(pass))
        {
            status.status = false;
            status.err = "Small Letter is missing in your password"
        }


        if (pass.length < 6)
        {
            status.status = false;
            status.err = "length must be 6 char";
        }
        

        return status;
    }

    function isValide(expect)
    {
        const ispassValidate = _Validater(input);
        if (ispassValidate.status === expect)
        {
            console.log("Test Case Passed");
        }
        else
        {
            console.log("Test case Failed");
            console.log("Error : ",ispassValidate.err);
        }
    }

    return { isValide };
}


test("Password Validater", () => {
    expect("Masai123$@").isValide(true);
});



test("Password Validater", () => {
    expect("Masai123").isValide(true);
});



test("Password Validater", () => {
    expect("Masai$@").isValide(true);
})



test("Password Validater", () => {
    expect("M123$@").isValide(true);
})

test("Password Validater", () => {
    expect("asai123$@").isValide(true);
})

test("Password Validater", () => {
    expect("Ma1$").isValide(true);
})