const { rot13 } = require("../src/main") ;


test('"test" should return "grfg"', () => {
    expect(rot13("test")).toBe("grfg")
})


test('"Test" should return "Grfg"', () => {
    expect(rot13("Test")).toBe("Grfg")
}) 