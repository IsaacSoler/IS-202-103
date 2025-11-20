//file input that initiates request to server
// i imported the entire node modules becuase it wasnt working before, this is the only way i could get it to work
const fileInput = document.getElementById("fileInput");
const button = document.getElementById("processFileBtn");
const output = document.getElementById("fileOutput");

button.addEventListener("click", function()
    {
    const file = fileInput.files[0];
    const reader = new FileReader();    

    //async so the site can wait for server response(it was freezing earlier without it)(not sure if thats an error or not but this fixed it)
    reader.onload = async function (event) 
    {
        const text = event.target.result;

        //sender
        const response = await fetch("/analyze", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sentence: text })
        });
        //wait for server response
        const data = await response.json();
        output.textContent = `Vowels: ${data.vowels}, Consonants: ${data.consonants}`;
    };
    //read file as text
    reader.readAsText(file);
});


//bmi calculator
function BMICalculator(weight, heightFeet, heightInches) {
    const totalHeightInches = (heightFeet * 12) + heightInches;
    const bmi = (weight / (totalHeightInches * totalHeightInches)) * 703;
    return bmi.toFixed(2);
}
//event listeners for bmi calc
document.getElementById("BMIButton").addEventListener("click", function()
    {
    const weight = parseFloat(document.getElementById("weightAmount").value);
    const feet = parseFloat(document.getElementById("heightAmountFeet").value);
    const inches = parseFloat(document.getElementById("heightAmountInches").value);
    const result = BMICalculator(weight, feet, inches);
    document.getElementById("BMIOutput").textContent = `Your BMI is: ${result}`;
    });