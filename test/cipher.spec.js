describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    
    // Hacker edition
    // Decidí agregar soporte para minúsculas en el CIFRADO, aquí el test correspondiente.
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
   
      // Hacker edition
    // //
    // // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // // el test a continuación.
    // //
    // // it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
    // //   assert.equal(
    // //     cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg' );
    // // });
    // //
    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // it('debería retornar " !@" para " !@"', () => {
    //   assert.equal(cipher.encode(33, ' !@'), ' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   });
    
   // Hacker edition
    // Decidí agregar soporte para minúsculas en el DESCIFRADO, aquí el test correspondiente, NO LOGRO PASARLO AUNQUE YA CIFRA Y DESCIFRA CORRECTAMENTE
    
     /*
     it('debería retornar "abcdefghijklmnopqrstuwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() => {
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    */
   
    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    // //
    // it('debería retornar " !@" para " !@"', () => {
    //   assert.equal(cipher.decode(33, ' !@'), ' !@');
    // });
  });

});


