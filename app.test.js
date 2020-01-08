jest.mock('./scripts/waterformular')

describe("gui", () => {
    it("should forward result of add from input to output", () => {
        document.body.innerHTML =
        `<div>
            <input id="alter" />
            <input id="gewicht" />
            <div id="wasserbedarf" />
        </div>`;

        require('./app.js')

        const waterformular = require('./scripts/waterformular').waterformular;
        //     Überschreibt Funktion
        waterformular.mockReturnValue(42)

        //     Eigenes Event 
        const keyUp = new Event("keyup")
        const age = document.getElementById("alter")
        const weight = document.getElementById("gewicht")


        age.value = 35
        weight.value = 70

        weight.dispatchEvent(keyUp)

        // Überprüfen ob Fkt aufgerufen wird
        expect(waterformular.mock.calls[0][0]).toEqual(age.value)
       
        expect(waterformular.mock.calls[0][1]).toEqual(weight.value)

        expect(document.getElementById("wasserbedarf").innerHTML).toEqual(String(waterformular(weight.value,age.value)))

    })
})