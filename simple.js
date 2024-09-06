function calculateSize() {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    const bmi = weight / (height * height / 10000);

    if (bmi < 18.5) {
        const result = "Your cloth size is XS or S.";
        document.getElementById('result').innerHTML = result;
    } else if (bmi < 25) {
        const result = "Your cloth size is M or L.";
        document.getElementById('result').innerHTML = result;
    } else if (bmi < 30) {
        const result = "Your cloth size is XL or XXL.";
        document.getElementById('result').innerHTML = result;
    } else {
        const result = "Your cloth size is 3XL or 4XL.";
        document.getElementById('result').innerHTML = result;
    }
}
