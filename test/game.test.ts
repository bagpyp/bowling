
const { score } = require("../build/game")

test("validate a no-score game", () => {
    expect(score("-- ".repeat(10))).toBe(0)
})
