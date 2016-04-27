/*Cliente: ced(c), nombre, apellido, telefono, correo, direccion.
Ticket: codigo(c), fecha, ced(cliente), asiento (asiento)
Asiento: codigo(c), estatus, zona(zona)
Zona: codigo (c), nombre, cant asientos, estadio(estadio)
Estadio: codigo(c), nombre
Juego: codigo(c), equipo a, equipo b, fecha del juego, hora, estadio(estadio)
*/
DROP Database IF EXISTS reserva_estadio;

CREATE Database reserva_estadio;

CREATE TABLE `reserva_estadio`.`cliente`  (
  `cedula` int(8) NOT NULL,
  `nombre` varchar NOT NULL,
  `apellido` varchar NOT NULL,
  `telefono` int(8) NOT NULL,
  `correo` varchar NOT NULL,
  `direccion` varchar NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE `reserva_estadio`.`ticket`{
	`codigo` varchar NOT NULL,
	`fecha`	varchar NOT NULL,
	`cedula` varchar NOT NULL,
	`asiento` varchar NOT NULL,
	PRIMARY KEY(`codigo`)
} ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE `reserva_estadio`.`asiento`{
	`codigo` varchar NOT NULL,
	`estatus` varchar NOT NULL,
	`zona` varchar NOT NULL,
	PRIMARY KEY(`codigo`)
} ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE `reserva_estadio`.`zona`{
	`codigo` varchar NOT NULL,
	`nombre`	varchar NOT NULL,
	`cantidad_asiento` int NOT NULL,
	`estadio` varchar NOT NULL,
	PRIMARY KEY(`codigo`)
} ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE `reserva_estadio`.`estadio`{
	`codigo` varchar NOT NULL,
	`nombre` varchar NOT NULL,
	PRIMARY KEY(`codigo`)
} ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE `reserva_estadio`.`juego`{
	`codigo` varchar NOT NULL,
	`equipo_a` varchar NOT NULL,
	`equipo_b` varchar NOT NULL,
	`fecha`	varchar NOT NULL,
	`hora` varchar NOT NULL,
	`estadio` varchar NOT NULL,
	PRIMARY KEY(`codigo`)
} ENGINE=InnoDB  DEFAULT CHARSET=latin1;