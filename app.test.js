jest.mock('./scripts/waterformular.js')

describe("gui", () => {
    it("should forward result of add from input to output", () => {
        document.body.innerHTML =
        `<div>
            <input id="alter" />
            <input id="gewicht" />
            <div id="wasserbedarf" />
        </div>`;

        require('./app.js')

        const waterformular = require('./scripts/waterformular.js').waterformular;
        //     Überschreibt Funktion
        //     waterformular.mockReturnValueOnce(42)

        //Eigenes Event 
        const keyUp = new Event("keyup")
        const age = document.getElementById("alter")
        const weight = document.getElementById("gewicht")


        age.value = 35
        weight.value = 70

        weight.dispatchEvent(keyUp)

        console.log(waterformular(70, 35))


        //Überprüfen ob Fkt aufgerufen wird
        // expect(fetchCurrentUser).toBeCalledWith(alter.value, gewicht.value);

        expect(document.getElementById("wasserbedarf").value).toEqual(waterformular(weight.value,age.value))
        console.log(document.getElementById("wasserbedarf").value)
        console.log(weight.value)
        // console.log(chund)

    })
})