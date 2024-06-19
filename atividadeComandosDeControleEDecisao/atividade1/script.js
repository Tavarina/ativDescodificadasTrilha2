document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mediaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert('Por favor, insira números válidos.');
            return;
        }
    
        const media = (num1 + num2 + num3) / 3;
        document.getElementById('resultado').textContent = `A média dos números é: ${media.toFixed(2)}`;
    });
});
function limparMedia() {
    document.getElementById('resultado').innerHTML = '';
    
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
}