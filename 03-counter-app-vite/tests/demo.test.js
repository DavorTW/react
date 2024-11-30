describe('Pruebas en <DemoComponent></DemoComponent>', () => {
    test('Esta prueba no debe de fallar', () => {
        //1. inicializacion (Arrange)
        const message1 = 'Hola Mundo';
    
        //2. estimulo (Act)
        const message2 = message1.trim();
    
        //3. observar el comportamiento (Assert)
        expect( message1 ).toBe( message2 );
    });
});


