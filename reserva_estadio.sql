-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2016 at 02:13 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `reserva_estadio`
--
CREATE DATABASE IF NOT EXISTS `reserva_estadio` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `reserva_estadio`;

-- --------------------------------------------------------

--
-- Table structure for table `asiento`
--

CREATE TABLE IF NOT EXISTS `asiento` (
  `codigo` int(11) NOT NULL,
  `estatus` int(11) NOT NULL,
  `zona` int(10) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `zona` (`zona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8 NOT NULL,
  `apellido` varchar(20) CHARACTER SET utf8 NOT NULL,
  `telefono` varchar(11) NOT NULL,
  `correo` varchar(50) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`cedula`, `nombre`, `apellido`, `telefono`, `correo`) VALUES
(988, 'iiuyoi', 'uyoiuyoiu', '876987', 'yioy@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `estadio`
--

CREATE TABLE IF NOT EXISTS `estadio` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `juego`
--

CREATE TABLE IF NOT EXISTS `juego` (
  `codigo` int(11) NOT NULL,
  `equipo_1` varchar(20) NOT NULL,
  `equipo_2` varchar(20) NOT NULL,
  `hora` int(11) NOT NULL,
  `estadio` int(20) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `estadio` (`estadio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE IF NOT EXISTS `ticket` (
  `codigo` varchar(20) NOT NULL,
  `cedula` int(11) NOT NULL,
  `asiento` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `cedula` (`cedula`),
  KEY `asiento` (`asiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_prueba`
--

CREATE TABLE IF NOT EXISTS `ticket_prueba` (
  `ticketid` varchar(20) NOT NULL,
  `equipo_1` varchar(30) NOT NULL,
  `equipo_2` varchar(30) NOT NULL,
  `hora` varchar(10) NOT NULL,
  `lugar` varchar(50) NOT NULL,
  `valor` int(10) NOT NULL,
  `zonaElegida` varchar(10) NOT NULL,
  `asientoElegido` varchar(10) NOT NULL,
  `cedula` int(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `telefono` int(11) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `confirmado` varchar(3) NOT NULL,
  PRIMARY KEY (`ticketid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticket_prueba`
--

INSERT INTO `ticket_prueba` (`ticketid`, `equipo_1`, `equipo_2`, `hora`, `lugar`, `valor`, `zonaElegida`, `asientoElegido`, `cedula`, `nombre`, `apellido`, `telefono`, `correo`, `confirmado`) VALUES
('', '', '', '', '', 0, '', '', 0, '', '', 0, '', '1'),
('Agua16', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'a1', '6', 987098, 'Cambiado', 'hjhjhj', 9870, '987oyo@gmail.com', ''),
('Aguc310', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'c3', '10', 987098, 'Cambiado', 'hjhjhj', 9870, '987oyo@gmail.com', ''),
('Agugrada4', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'grada', '4', 20375232, 'Manuel', 'EspaÃ±a', 9203798, 'kjgkgkj@gmail.com', ''),
('Bral106', 'Bravos de Margarita', 'Tigres de Aragua', '06:00pm', 'Stadium Nueva Esparta', 0, 'l10', '6', 8098, 'oioiuopiu', 'oiupoiupoi', 89279, 'KSFSD@GMAIL.COM', '1'),
('grada1', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'grada', '1', 8797, 'uiui', 'tiutyut', 1212, '87985987@gmail.com', '1'),
('grada5', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'grada', '5', 2312, 'asdas', 'dasdas', 12312, 'sdaasd@co.com', ''),
('Leograda4', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, '', '', 9879, 'uiyoiuy', 'rwer', 90986, 'iyoiu@gmail.com', '1'),
('Leograda9', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'grada', '9', 9879, 'uiyoiuy', 'nuevo', 90986, 'iyoiu@gmail.com', '1'),
('Leos115', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 's11', '5', 876087, 'Nuevo', 'nuevooooo', 90986, 'iyoiu@gmail.com', ''),
('Leos53', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 's5', '3', 876087, 'Nuevo', 'nuevooooo', 90986, 'iyoiu@gmail.com', ''),
('Leot28', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 't2', '8', 9879, 'Manuel', 'EspaÃ±a', 90986, 'iyoiu@gmail.com', '1'),
('Leot36', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 't3', '6', 9879, 'uiyoiuy', 'rwer', 90986, 'iyoiu@gmail.com', ''),
('Leozb103', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'zb10', '3', 9879, 'uiyoiuy', 'nuevo', 90986, 'iyoiu@gmail.com', ''),
('Leozb18', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'zb1', '8', 9879, 'hdhdhdh', 'hahahahaha', 90986, 'iyoiu@gmail.com', ''),
('Leozb92', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'zb9', '2', 9879, 'uiyoiuy', 'EspaÃ±a', 90986, 'iyoiu@gmail.com', ''),
('Leozc25', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'zc2', '5', 9879, 'hdhdhdh', 'rwer', 2147483647, 'iyoiu@gmail.com', ''),
('Leozc2910', 'Leones del Caracas', 'Caribes de Oriente', '06:00pm', 'Estadio Universitario de Caracas', 200, 'zc29', '10', 9879, 'uiyoiuy', 'rwer', 90986, 'iyoiu@gmail.com', ''),
('Navla153', 'Navegantes del Magallanes', 'Tiburones de La Guaira', '06:00pm', 'Estadio JosÃ© Bernardo PÃ©rez', 200, 'la15', '3', 9098, 'yuyoi', 'uyuiyiu', 987098, 'iuyiu@gmail.com', '1'),
('Navta89', 'Navegantes del Magallanes', 'Tiburones de La Guaira', '06:00pm', 'Estadio JosÃ© Bernardo PÃ©rez', 200, 'ta8', '9', 970, 'iuoiu', 'oiuoiuio', 7098, 'iouoiu@gmail.com', '1');

-- --------------------------------------------------------

--
-- Table structure for table `zona`
--

CREATE TABLE IF NOT EXISTS `zona` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `nasientos` int(11) NOT NULL,
  `estadio` int(20) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `estadio` (`estadio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asiento`
--
ALTER TABLE `asiento`
  ADD CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`zona`) REFERENCES `zona` (`codigo`);

--
-- Constraints for table `juego`
--
ALTER TABLE `juego`
  ADD CONSTRAINT `juego_ibfk_1` FOREIGN KEY (`estadio`) REFERENCES `estadio` (`codigo`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`asiento`) REFERENCES `asiento` (`codigo`),
  ADD CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`cedula`) REFERENCES `cliente` (`cedula`);

--
-- Constraints for table `zona`
--
ALTER TABLE `zona`
  ADD CONSTRAINT `zona_ibfk_1` FOREIGN KEY (`estadio`) REFERENCES `estadio` (`codigo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
