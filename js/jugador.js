var Jugador = {
  /* el sprite contiene la ruta de la imagen*/
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  
  mover: function (movX, movY) {
    this.x += movX, 
    this.y += movY
  },

  perdeVida: function (CantVida){
    this.vidas -= CantVida;
  }
}
