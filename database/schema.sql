-- tables
-- Table: Customer
CREATE TABLE Customer (
    custID int  NOT NULL,
    email varchar(50)  NOT NULL,
    password varchar(50)  NOT NULL,
    name varchar(50)  NOT NULL,
    age int  NOT NULL,
    CONSTRAINT Customer_pk PRIMARY KEY (custID)
);

-- Table: Location
CREATE TABLE Location (
    locationID int  NOT NULL,
    country varchar(25)  NOT NULL,
    state char(2)  NULL,
    city varchar(25)  NOT NULL,
    street varchar(25)  NOT NULL,
    zipCode int  NOT NULL,
    CONSTRAINT Location_pk PRIMARY KEY (locationID)
);

-- Table: Order
CREATE TABLE Orders (
    custID int  NOT NULL,
    ordID int  NOT NULL,
    packageType varchar(20)  NOT NULL,
    weight int  NOT NULL,
    description varchar(100)  NULL,
    sentTime timestamp  NOT NULL,
    destCountry varchar(25)  NOT NULL,
    destState char(2)  NULL,
    destCity varchar(25)  NOT NULL,
    destStreet varchar(25)  NOT NULL,
    destZipCode int  NOT NULL,
    CONSTRAINT Order_pk PRIMARY KEY (ordID)
);

-- Table: PackageStatus
CREATE TABLE PackageStatus (
    ordID int  NOT NULL,
    time timestamp  NOT NULL,
    locationID int  NOT NULL,
    nextLocationID int  NULL,
    destination int  NOT NULL,
    CONSTRAINT PackageStatus_pk PRIMARY KEY (ordID)
);

-- Table: Warehouses
CREATE TABLE Warehouses (
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

