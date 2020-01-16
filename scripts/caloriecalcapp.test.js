jest.mock('./harris')

describe("gui", () => {
    it("should forward result of harris from input to output", () => {
        document.body.innerHTML =
            `<div>
            <input id="geschlecht" />
            <input id="alter" />
            <input id="groesse" />
            <input id="gewicht" />
            <input id="pal" />
            <div id="grundumsatz" />
            <div id="leistungsumsatz" />
        </div>`;

        require('./caloriecalcapp')

        const harris = require('./harris').harris;


        //     Überschreibt Funktion
        harris.mockReturnValue(42)


        //     Eigenes Event 
        const keyUp = new Event("keyup")


        const gender = document.getElementById("geschlecht")
        const height = document.getElementById("groesse")
        const age = document.getElementById("alter")
        const weight = document.getElementById("gewicht")
        const pal = document.getElementById("pal")


        gender.value = "male"
        height.value = 180
        age.value = 35
        weight.value = 70
        pal.value = "liegend"

        pal.dispatchEvent(keyUp)


        // Überprüfen ob Fkt aufgerufen wird

        expect(harris.mock.calls[0][0]).toEqual(weight.value)

        expect(harris.mock.calls[0][1]).toEqual(height.value)

        expect(harris.mock.calls[0][2]).toEqual(age.value)

        expect(harris.mock.calls[0][3]).toEqual(pal.value)

        expect(harris.mock.calls[0][4]).toEqual(gender.value)



        expect(document.getElementById("grundumsatz").innerHTML).toEqual(String(harris(weight.value, height.value, age.value, pal.value, gender.value)))

    })
})
