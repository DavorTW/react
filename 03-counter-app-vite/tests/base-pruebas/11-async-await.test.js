import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => {
  

    test('getImagen debe retornar un URL de la imagen', async() => {
      
        const url = await getImagen();
        // console.log(url);
        expect(typeof url).toBe('string');

    })
    // test('getImagen debe retornar un error si no hay API key', async() => {
      
    //     const resp = await getImagen();
    //     // console.log(url);
    //     expect(resp).toBe('No se encontro la imagen');

    // })
    
})
