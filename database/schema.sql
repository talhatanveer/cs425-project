-- tables
-- Table: Customer
CREATE TABLE IF NOT EXISTS Employees (
    employeeID int NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Customer (
    customerID int  NOT NULL,
    email varchar(50)  NOT NULL,
    password varchar(50)  NOT NULL,
    name varchar(50)  NOT NULL,
    age int  NOT NULL,
    CONSTRAINT Customer_pk PRIMARY KEY (customerID)
);

-- Table: Location
CREATE TABLE IF NOT EXISTS Location (
    locationID int  NOT NULL,
    country varchar(25)  NOT NULL,
    state char(2)  NULL,
    city varchar(25)  NOT NULL,
    street varchar(25)  NOT NULL,
    zipCode int  NOT NULL,
    CONSTRAINT Location_pk PRIMARY KEY (locationID)
);

-- Table: Order
CREATE TABLE IF NOT EXISTS Orders (
    orderID int  NOT NULL,
    customerID int  NOT NULL,
    employeeID int NOT NULL,
    packageType varchar(20)  NOT NULL,
    packageWeight float  NOT NULL,
    packageDescription varchar(100)  NULL,
    dispatchTime timestamp  NOT NULL,
    originLocationID int NOT NULL,
    destinationLocationID int NOT NULL,
    
    CONSTRAINT Order_pk PRIMARY KEY (orderID)
);

-- Table: PackageStatus
CREATE TABLE IF NOT EXISTS PackageStatus (
    orderID int  NOT NULL,
    time timestamp  NOT NULL,
    locationID int  NOT NULL,
    nextLocationID int  NULL,
    destination int  NOT NULL,
    CONSTRAINT PackageStatus_pk PRIMARY KEY (orderID)
);

-- Table: Warehouses
CREATE TABLE IF NOT EXISTS Warehouses (
    warehouseID int  NOT NULL,
    locationID int  NOT NULL,
    CONSTRAINT Warehouses_pk PRIMARY KEY (warehouseID)
);

-- sequences
-- Sequence: Customer_seq
CREATE SEQUENCE Customer_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: Location_seq
CREATE SEQUENCE Location_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: Order_seq
CREATE SEQUENCE Order_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: PackageStatus_seq
CREATE SEQUENCE PackageStatus_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- Sequence: Warehouses_seq
CREATE SEQUENCE Warehouses_seq
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      START WITH 1
      NO CYCLE
;

-- End of file.

