const myFunc = (param1 = "test") => {
    return param1;
}

console.log("Default", myFunc())
console.log("Defined", myFunc("Defined"))
