
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  userType VARCHAR(20),
  fundraisingFor VARCHAR(20),
  raisedFundsFor VARCHAR(20),
  idProof VARCHAR(20),
  idProofImage LONGBLOB
);
CREATE USER 'your_mysql_username'@'localhost' IDENTIFIED BY 'your_mysql_password';
GRANT ALL PRIVILEGES ON weCareForU.* TO 'your_mysql_username'@'localhost';
FLUSH PRIVILEGES;
