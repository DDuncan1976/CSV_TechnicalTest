function CSVFileReader() {    

    // Get the file details from file picker
    var fileinput = document.getElementById("File_Picker");

    //File selection check
    console.log(fileinput.files);    

    // Read the csv file content as text
    var reader = new FileReader();
    reader.onload = function () {
        console.log(reader.result)
        document.getElementById("CSV_FileContent").innerHTML = reader.result;     
        var myStringArray = document.getElementById("CSV_FileContent").innerHTML;
        console.log(myStringArray);

        // Check array type and length
        console.log(typeof myStringArray); 
        console.log(myStringArray.length); 

        // Create Integer Array to accept String Array Values
        var myIntArray = myStringArray.split(',').map(function (arrayitem) {
            return parseInt(arrayitem, myStringArray.length)
        });
        
        //Obtain the Maximum Value/Leader of the Integer Array
        var numberOccurences = {};
        var currentNumber;
        var maxNumber = myIntArray[0];

        for (var i = 0; i < myIntArray.length; i++) {
            currentNumber = myIntArray[i];

            if (numberOccurences[currentNumber] !== undefined) {
                numberOccurences[currentNumber]++;
            }
            else {
                numberOccurences[currentNumber] = 1;
            }

            if (numberOccurences[currentNumber] > numberOccurences[maxNumber]) {
                maxNumber = currentNumber;
            }

            if (numberOccurences[maxNumber] > myIntArray.length / 2) {
                console.log(maxNumber);
                document.getElementById("CSV_LeaderResults").innerHTML = "The Leader is: " + maxNumber + " (Value: 1)";
            }
            else {
                document.getElementById("CSV_LeaderResults").innerHTML = "No Leader Found! (Value: -1)";
            }
            
        }     
    }
    reader.readAsText(fileinput.files[0]);};

// Resets the file selection results displayed
function ResetSelectionDisplay() {
    document.getElementById("CSV_FileContent").innerHTML = "";
    document.getElementById("CSV_IntegerArrayResults").innerHTML = "";
    document.getElementById("CSV_LeaderResults").innerHTML = "";
}
