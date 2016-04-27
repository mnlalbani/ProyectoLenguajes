-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2016 at 07:26 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE IF NOT EXISTS `ticket` (
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
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`ticketid`, `equipo_1`, `equipo_2`, `hora`, `lugar`, `valor`, `zonaElegida`, `asientoElegido`, `cedula`, `nombre`, `apellido`, `telefono`, `correo`, `confirmado`) VALUES
('', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, '', '', 544564, 'asdasd', 'asd', 123412, 'asdasd@g.com', ''),
('grada5', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'grada', '5', 2312, 'asdas', 'dasdas', 12312, 'sdaasd@co.com', ''),
('grada6', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'grada', '6', 23423, 'asdasd', 'dasda', 1231231, 'sdfsdsd@sdfs.com', ''),
('grada8', 'Aguilas del Zulia', 'Cardenales de Lara', '06:00pm', 'Luis Aparicio El Grande', 200, 'grada', '8', 23423, 'asdasd', 'asdas', 234234, 'asdasd@gmail.cvom', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
