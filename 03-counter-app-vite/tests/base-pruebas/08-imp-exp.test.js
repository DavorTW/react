import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe('Pruebas en 08-imp-exp', () => {
  
    test('getHeroeById debe retornar un heroe por ID', () => {
      
        const id = 1;
        const hero = getHeroeById(id);
        expect( hero ). toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe retornar undefined si el id no existe', () => {
      
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {
        const owner = 'DC';
        const ownerArray = getHeroesByOwner(owner);
        expect(ownerArray).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect(ownerArray).toEqual( heroes.filter( hero => hero.owner === owner));
        expect(ownerArray).toHaveLength(3);
    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {
      const owner = 'Marvel';
      const ownerArray = getHeroesByOwner(owner);
      expect(ownerArray).toEqual([
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
      ]);
      expect(ownerArray).toEqual(heroes.filter( hero => hero.owner === owner));
      expect(ownerArray).toHaveLength(2);
    });
    
    
    
})
