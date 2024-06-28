const processarFormulario = require('./função');

// Teste simples de preenchimento de formulário
test('Deve processar corretamente os dados do formulário', () => {
    const nome = 'Gabriel Porto';
    const email = 'gabriel@email.com';

    const resultado = processarFormulario(nome, email);

    expect(resultado).toEqual({
        nome: 'Gabriel Porto',
        email: 'gabriel@email.com'
    });
});
