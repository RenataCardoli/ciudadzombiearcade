var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
if (this.direccion === "v")
  {
    this.y += this.velocidad;
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.velocidad *= -1;
    }
  }
  else if (this.direccion === "h")
  {
    this.x += this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
  }

  ZombieConductor.prototype.atacar = function(jugador)
  {
    jugador.perdeVida(Jugador.vidas);
  }
}