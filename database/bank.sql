-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2020 at 03:49 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`bank_id`, `bank_name`) VALUES
(1, 'HNB'),
(2, 'COM');

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `branch_id` int(11) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `branch_address` varchar(200) NOT NULL,
  `bank_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`branch_id`, `branch_name`, `branch_address`, `bank_id`) VALUES
(1, 'Kegalle City', 'Kegalle', 1),
(2, 'Kegalle Bazaar', 'Kegalle', 1),
(3, 'Kegalle City', 'Kegalle', 2);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(100) NOT NULL,
  `emp_email` varchar(100) NOT NULL,
  `emp_photo` varchar(500) NOT NULL,
  `emp_address` varchar(100) NOT NULL,
  `emp_branch_id` int(11) NOT NULL,
  `emp_password` varchar(100) NOT NULL,
  `empIsLoggedIn` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`emp_id`, `emp_name`, `emp_email`, `emp_photo`, `emp_address`, `emp_branch_id`, `emp_password`, `empIsLoggedIn`) VALUES
(1, 'Kasun', 'dilkasun071@gmail.com', 'https://www.flickr.com/photos/81898310@N07/32206308630', 'Kegalle', 1, '123', 0),
(2, 'Dilshan', 'test@test.com', 'https://unsplash.com/photos/aK3qEYH_nO0', 'Kegalle', 2, '123', 0),
(3, 'Yasika', 'yasika@test.com', 'https://unsplash.com/photos/PxonFkkUxq8', 'Kegalle', 3, '123', 0),
(4, 'madunath', 'madunath@test.com', 'https://unsplash.com/photos/LzjFp3JjKbU', 'Kegalle', 2, '123', 0),
(11, 'Kasun', 'kasun', 'kasun', 'kasun', 1, 'kasun', 0),
(12, 'kasun', 'kasun', 'kasun', 'kasun', 1, 'kasun', 0),
(13, 'kasun', 'kasun', 'kasun', 'kasun', 1, 'kasun', 0),
(20, 'kasun', 'software@gmail.com', '1000', '123', 1, '$2a$12$26xydHXVkgFpBLdBFUVnKO40Lf8vx91X0X8sSSCPn5x1DdZlFZzaG', 0),
(31, 'kasun', 'test@test.com', 'test', 'kegalle', 1, '$2a$12$hJomFBTVN/jx3ysF1Gh2iutezqZNYUFmF32X1KWUoTN9MW1BCfyl2', 0),
(34, 'dishan', 'd@d.com', 'd1', 'kegalle', 1, '$2a$12$l/tv2uxxApjg8qPZ7o94V.2pywWq0n5Yjqz4zs0hlG7JobxGsS9wu', 0),
(40, 'Kasun', 'k@k.com', 'dspajdwafk]w', 'kegalle', 1, '$2a$12$osclpXEWBBKj6TPyLJIw8e/6jNn1f.R14K5IVw0PiXSmfjgzRTwpi', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`branch_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`emp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
