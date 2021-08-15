const Home = require("./Home")

// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new Home.default("reply_click()")
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
