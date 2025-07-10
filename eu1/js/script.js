document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    
    calcularBtn.addEventListener('click', function() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        
        if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para peso e altura.';
            resultadoDiv.style.backgroundColor = '#ffebee';
            resultadoDiv.style.color = '#c62828';
            return;
        }
        
        const imc = calcularIMC(peso, altura);
        const classificacao = classificarIMC(imc);
        
        resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(1)} - ${classificacao}`;
        
        // Muda a cor de acordo com a classificação
        if (imc < 18.5) {
            resultadoDiv.style.backgroundColor = '#fff3e0';
            resultadoDiv.style.color = '#e65100';
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultadoDiv.style.backgroundColor = '#e8f5e9';
            resultadoDiv.style.color = '#2e7d32';
        } else {
            resultadoDiv.style.backgroundColor = '#ffebee';
            resultadoDiv.style.color = '#c62828';
        }
    });
    
    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }
    
    function classificarIMC(imc) {
        if (imc < 16) return 'Magreza grave';
        if (imc < 17) return 'Magreza moderada';
        if (imc < 18.5) return 'Magreza leve';
        if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
        if (imc < 35) return 'Obesidade Grau I';
        if (imc < 40) return 'Obesidade Grau II';
        return 'Obesidade Grau III';
    }
});