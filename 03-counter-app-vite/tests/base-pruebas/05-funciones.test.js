import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', ()=>{
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user = getUser();

    expect( testUser ).toEqual( user );
  })


  test('getUsuario activo debe retornar un objeto', () => {
    const name = 'Davor';
    const testUser = {
        uid: 'ABC567',
        username: name,
    }
    const user = getUsuarioActivo(name);

    expect(user.name).toEqual(testUser.name);
  })
  
})
