document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mesForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numeroMes = parseInt(document.getElementById('numeroMes').value);
        const resultado = document.getElementById('resultado');
        
        if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
            resultado.textContent = 'Número inválido. Por favor, insira um número entre 1 e 12.';
            resultado.style.color = 'red';
            return;
        }

        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        resultado.textContent = `O mês correspondente ao número ${numeroMes} é ${meses[numeroMes - 1]}.`;
        resultado.style.color = 'black';
    });
});
