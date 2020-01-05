jest.mock('./scripts/waterformular.js')

describe("App", () => {
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
        const alter = document.getElementById("alter")
        const gewicht = document.getElementById("gewicht")


        alter.value = "35"
        gewicht.value = "70"

        gewicht.dispatchEvent(keyUp)



        //Überprüfen ob Fkt aufgerufen wird
        // expect(fetchCurrentUser).toBeCalledWith(alter.value, gewicht.value);

        expect(document.getElementById("wasserbedarf").value).toEqual(waterformular(gewicht,alter))
        console.log(document.getElementById("wasserbedarf").value)
        const chund = waterformular(70, 35)
        console.log(chund)

    })
})