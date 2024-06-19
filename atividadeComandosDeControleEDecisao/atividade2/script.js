document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('idadeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const idade = parseInt(document.getElementById('idade').value);
        
        if (isNaN(idade) || idade < 0) {
            alert('Por favor, insira uma idade válida.');
            return;
        }
    
        if (idade < 18) {
            alert('Você é menor de idade.');
        } else {
            alert('Você não é menor de idade.');
        }
    });
});
