
-- EMPLOYEE DATA
INSERT INTO Employees ("firstName", "lastName", email, password)
VALUES
('Talha', 'Tanveer', 'talha@gmail.com', 'talha1234'),
('Shazain', 'Lasi', 'shazain@gmail.com', 'shazo1234'),
('Jack', 'Dorsey', 'jack@gmail.com', 'jack1234');

-- CUSTOMER DATA
INSERT INTO Customers ("firstName", "lastName", "email", "phone")
VALUES
('Defunct', 'Mushroom', 'defuncto@gmail.com', '34254672999'),
('Dwindling', 'Canoe', 'dwindler@yahoo.com', '94254672999'),
('Marry', 'Poppin', 'marrypoppins@hotmail.com', '3254672921'),
('Space', 'Dandy', 'spacedandy@gmail.com', '9881399911');

-- LOCATION DATA
INSERT INTO Locations ("country", "state", "city", "zipCode", "street")
VALUES
('US', 'IL', 'Chicago', 60610, 'S West 32nd'),
('CA', 'ON', 'Ontario', 54888, '5th Blvd Ave'),
('UK', 'MN', 'Bucklewood', 40001, 'Garth Brooks Blvd');

-- ORDER DATA
INSERT INTO Orders 
("customerID", "employeeID", "packageType", "packageWeight", "packageType", "packageDescription", "originLocatioinID", "destinationLocationID")
VALUES
(1, 1, '', 50.4)