-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2015 at 01:43 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kh-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartproducts`
--

CREATE TABLE IF NOT EXISTS `cartproducts` (
`PID` int(6) NOT NULL,
  `PTitle` varchar(255) DEFAULT NULL,
  `PName` varchar(100) DEFAULT NULL,
  `PDesc` longtext,
  `PImage` varchar(255) DEFAULT NULL,
  `PPrice` decimal(10,2) DEFAULT '0.00'
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartproducts`
--

INSERT INTO `cartproducts` (`PID`, `PTitle`, `PName`, `PDesc`, `PImage`, `PPrice`) VALUES
(1, 'Pink Sheep Key Ring - makes sound when pressed', 'Pink Key Ring', 'A cute KIWI,must for those soft people out there, Pink Kiwi - Mix of Pink and Cream, makes sound when pressed.', '1.jpg', '35.00'),
(2, 'Rugby Kiwi- Brown with New Zealand cap', 'Rugby Kiwi', 'New Zealand Rugby Kiwi- Brown color , with New Zealand cap and scarf, a great KIWI souvenir', '2.jpg', '12.35'),
(3, 'NZ Sheep- White with black bow tie', 'NZ Sheep', 'New Zealand Ru Sheep - White color with black bow tie', '3.jpg', '10.95'),
(4, 'Sheep Key Ring - white with green bow tie', 'Sheep Key Ring', 'Sheep Key Ring - white with green bow tie', '4.jpg', '21.00'),
(13, 'red wine', 'wine', 'quality red wine', '13.jpg', '24.50');

-- --------------------------------------------------------

--
-- Table structure for table `orderedproducts`
--

CREATE TABLE IF NOT EXISTS `orderedproducts` (
`OrdProdID` int(11) NOT NULL,
  `OrderID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `ProductPrice` float NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderedproducts`
--

INSERT INTO `orderedproducts` (`OrdProdID`, `OrderID`, `ProductID`, `ProductPrice`, `Quantity`) VALUES
(1, 1, 2, 12.35, 2),
(2, 1, 3, 10.95, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
`OrderID` int(11) NOT NULL,
  `UserName` varchar(105) NOT NULL,
  `UserEmail` varchar(105) DEFAULT NULL,
  `UserPhone` varchar(21) DEFAULT NULL,
  `UserHnoSt` varchar(255) NOT NULL,
  `UserSuburb` varchar(105) DEFAULT NULL,
  `UserCity` varchar(105) NOT NULL,
  `UserCountry` varchar(105) NOT NULL,
  `UserShipHnoSt` varchar(255) DEFAULT NULL,
  `UserShipSuburb` varchar(105) DEFAULT NULL,
  `UserShipCity` varchar(105) DEFAULT NULL,
  `UserShipCountry` varchar(105) DEFAULT NULL,
  `ReceiptNumber` varchar(40) NOT NULL,
  `TotalValue` float NOT NULL,
  `OrderDate` datetime NOT NULL,
  `OrderStatus` binary(1) NOT NULL,
  `OrderDispatchDate` date NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `UserName`, `UserEmail`, `UserPhone`, `UserHnoSt`, `UserSuburb`, `UserCity`, `UserCountry`, `UserShipHnoSt`, `UserShipSuburb`, `UserShipCity`, `UserShipCountry`, `ReceiptNumber`, `TotalValue`, `OrderDate`, `OrderStatus`, `OrderDispatchDate`) VALUES
(1, 'test', 'example@example.com', 'phone', 'hno_street', 'suburb', 'city', 'New Zealand', 'ship_hno_street', 'ship_suburb', 'ship_city', 'New Zealand', 'OR123MGS01', 35.65, '2011-06-10 09:36:25', 0x30, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
`PgID` smallint(6) NOT NULL,
  `PageID` varchar(15) NOT NULL,
  `PageTitle` varchar(40) NOT NULL,
  `PageHeading` varchar(30) NOT NULL,
  `PageKeywords` varchar(255) NOT NULL,
  `PageDescription` varchar(255) NOT NULL,
  `PageContent` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`PgID`, `PageID`, `PageTitle`, `PageHeading`, `PageKeywords`, `PageDescription`, `PageContent`) VALUES
(1, 'home', 'My Gift Shop Home "xx''s"', 'Welcome "xx''s"', 'gifts, stuffed toys, kids', 'We sell gifts for kids such as stuffed toys, etc.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisi sed erat pretium vehicula. Praesent porta augue tincidunt magna iaculis quis volutpat ipsum suscipit. Nulla euismod, arcu eu varius sollicitudin, nulla odio fringilla nisl, eget mollis lectus diam et urna. Sed auctor nisl nec purus dapibus nec mollis ante sollicitudin. Proin mollis rutrum mattis. Donec molestie tortor at turpis rhoncus tempus. Cras vel turpis leo. Aenean lacinia dapibus consectetur. Praesent tristique scelerisque risus, ut commodo quam aliquet sed. Vestibulum aliquet neque vitae diam lacinia sit amet accumsan odio venenatis. Fusce eleifend, mauris at vehicula sodales, metus neque vestibulum nunc, nec convallis elit sem id mi. Morbi nec sapien quam. Phasellus dignissim nisl et urna laoreet eu lobortis odio iaculis. Etiam consectetur enim felis, vitae dapibus elit. Ut egestas, sapien in condimentum ornare, nisi orci interdum justo, vel volutpat nisi sem eget nulla. Sed vel mauris nec libero porta laoreet in et arcu. "xx''s"'),
(2, 'gallery', 'MGS Product Gallery', 'Product Gallery', 'My Gift Shop products, stuffed toys, kids', 'We sell gifts for kids such as stuffed toys, etc.', 'This if the content of the gallery page.'),
(3, 'productView', 'MGS Product Page', '', 'gifts, stuffed toys, kids', 'We sell gifts for kids such as stuffed toys, etc.', ''),
(4, 'viewCart', 'MGS Cart Page', 'Your Cart', 'gifts, stuffed toys, kids, cart', 'We sell gifts for kids such as stuffed toys, etc.', ''),
(5, 'checkout', 'MGS Checkout Page', 'Checkout', 'gifts, stuffed toys, kids, checkout', 'We sell gifts for kids such as stuffed toys, etc.', ''),
(6, 'login', 'MGS Admin Page', 'Admin Login', '', '', ''),
(7, 'addProduct', 'MGS Admin Page', 'Add Product Form', '', '', ''),
(8, 'editProduct', 'MGS Admin Page', 'Edit Product', '', '', ''),
(9, 'deleteProduct', 'MGS Admin Page', 'Delete Product', '', '', ''),
(10, 'caseStudies', 'Case Studies', 'Case Studies', 'Case Studies', 'Case Studies', 'Case Studies'),
(11, 'blogPost', 'blog', 'blog', 'blog', 'blog', 'blog'),
(12, 'contact', 'wat', 'Contact', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`UserID` int(11) NOT NULL,
  `UserName` varchar(20) NOT NULL,
  `UserPass` varchar(40) NOT NULL,
  `UserPriv` enum('user','admin') NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `UserName`, `UserPass`, `UserPriv`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'admin'),
(2, 'test', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartproducts`
--
ALTER TABLE `cartproducts`
 ADD PRIMARY KEY (`PID`), ADD KEY `PTitle` (`PTitle`);

--
-- Indexes for table `orderedproducts`
--
ALTER TABLE `orderedproducts`
 ADD PRIMARY KEY (`OrdProdID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
 ADD PRIMARY KEY (`OrderID`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
 ADD PRIMARY KEY (`PgID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartproducts`
--
ALTER TABLE `cartproducts`
MODIFY `PID` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `orderedproducts`
--
ALTER TABLE `orderedproducts`
MODIFY `OrdProdID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
MODIFY `OrderID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
MODIFY `PgID` smallint(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
