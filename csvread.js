const reader = new FileReader();
const file = 'assets/csv/SigmaXX_0.1.csv'

reader.onload = function () {

    document.getElementById('out').innerHTML = reader.result;
    
};
reader.readAsBinaryString(file);
