window.onload = () => {

   

}
    // module.exports={
     let button = document.getElementById("berechnen")
        button.addEventListener("click", () => {

            printError("")
            document.getElementById("grundumsatz").innerHTML = ""
            document.getElementById("leistungsumsatz").innerHTML = ""

                              
            let gender = document.querySelector('input[name="geschlecht"]:checked').value
            let weight = document.getElementById("gewicht").value
            let age = document.getElementById("alter").value
            let height = document.getElementById("groesse").value
            let result

            function getPal (){
            let activity = document.getElementById("aktivitaetslevel")
            let i = activity.selectedIndex
            let pal = activity.options[i].value
            return pal
            }

            function printError (warning){
                document.getElementById("fehler").innerHTML = warning;
            }


            // if (!weight || !height || age < 16 || age > 99 || size < 140 || size > 300 || weight < 35) {
                    
            //         //    document.getElementById("fehler").innerHTML = "Ungültige Werte! Überprüfe deine Angaben"
            //         printError("Ungültige Werte! Überprüfe deine Angaben")
            //     }
                
            if (!weight || !height || !age){
                printError("Sie haben nicht alle erforderlichen Felder ausgefüllt")
            }
            else if (age < 16 || age > 99) {
                printError("Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen")
                }
                else if(height < 140 || height > 300) {
                printError("Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen")
                 }

                 else if (weight < 35) {
                 printError("Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen")
                 }

                    else {
                        if (gender == "male"){
            
                result = 66.5 + ( 13.7 * weight ) + ( 5 * height ) - ( 6.8 * age )
                palresult = result * getPal()
                }
                else {
                result = 655.1 + ( 9.6 * weight ) + ( 1.8 * height ) - ( 4.7 * age )
                palresult = result * getPal()
                }

                document.getElementById("grundumsatz").innerHTML = Math.round(result)
                document.getElementById("leistungsumsatz").innerHTML = Math.round(palresult)

                    }
            })
            
        //     console.log("Funktion wird aufgerufen")
        //     function harris (weight, size, age) {
        //     weight = document.querySelector("#gewicht").value

        //     console.log(weight)

        //     if (!weight || !size) {
        //         throw new Error ("valueError")
        //     }

        //     // Es wird geprüft, ob der Nutzer das Mindestalter nicht unterschreitet
        //     if (age < 16 || age > 99) {
        //         throw new Error ("You have to be between 16 and 99 years old to use this calculator")
        //     }

        //     // Es wird geprüft, ob der Nutzer die Mindestgröße nicht unterschreitet oder die Maximalgröße überschreitet
        //     if (size < 140 || size > 300) {
        //         throw new Error ("You can only enter values between 140cm and 300cm to use this calculator")
        //     }

        //     // Es wird geprüft, ob der Nutzer das Mindestgewicht nicht unterschreitet
        //     if (weight < 35) {
        //         throw new Error ("You have to weigh at least 35kg to use this calculator")
        //     }

        //     else {
        //     const formula = Math.round(66.47 + (13.7 * weight) + (5 * size) - (6.8 * age))
        //     return formula
            

        //     }}
        //     console.log(weight)

        // })

        // console.log(weight)




      //  }

    // const harris = (x) => {
    //     x = 30;
    //     return x;
    // };
    
    // module.exports = functions;

    //const harrisW
