-- tables
-- Table: 

CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE IF NOT EXISTS Employees (
    "employeeID" serial NOT NULL,
    "email" varchar(100) NOT NULL,
    "password" varchar(100) NOT NULL,
    "firstName" varchar(50) NOT NULL,
    "lastName" varchar(50) NOT NULL,

    CONSTRAINT Employees_pk 
        PRIMARY KEY ("employeeID")
);

CREATE TABLE IF NOT EXISTS Customers (
    "customerID" serial  NOT NULL,
    "locationID" int NOT NULL,
    "firstName" varchar(50) NOT NULL,
    "lastName" varchar(50) NOT NULL,
    "email" varchar(50) NOT NULL,
    "phone" varchar(50) NOT NULL,

    CONSTRAINT Customers_pk 
        PRIMARY KEY ("customerID")
);

-- Table: Location
CREATE TABLE IF NOT EXISTS Locations (
    "locationID" serial  NOT NULL,
    "country" varchar(25)  NOT NULL,
    "state" char(2)  NULL,
    "city" varchar(25)  NOT NULL,
    "street" varchar(25)  NOT NULL,
    "zipCode" int  NOT NULL,

    CONSTRAINT Locations_pk 
        PRIMARY KEY ("locationID")
);

-- Table: Order
CREATE TABLE IF NOT EXISTS Orders (
    "orderID" serial  NOT NULL,
    "customerID" int  NOT NULL,
    "employeeID" int NOT NULL,
    "packageType" varchar(20)  NOT NULL,
    "packageWeight" float  NOT NULL,
    "packageDescription" varchar(100)  NULL,
    "dispatchTime" timestamp  NOT NULL,
    "originLocationID" int NOT NULL,
    "destinationLocationID" int NOT NULL,
    
    CONSTRAINT Order_pk 
        PRIMARY KEY ("orderID"),
    
    CONSTRAINT Locations_origin_fk
        FOREIGN KEY ("originLocationID") 
        REFERENCES Locations ("locationID"),
    
    CONSTRAINT Locations_dest_fk
        FOREIGN KEY ("destinationLocationID")
        REFERENCES Locations ("locationID"),
    
    CONSTRAINT Customers_fk
        FOREIGN KEY ("customerID")
        REFERENCES Customers ("customerID"),

    CONSTRAINT Employees_fk
        FOREIGN KEY ("employeeID")
        REFERENCES Employees ("employeeID")
);

-- Table: PackageStatus
CREATE TABLE IF NOT EXISTS OrderStatus (
    "orderID" int  NOT NULL,
    "locationID" int  NOT NULL,
    "estimateArrivalTime" timestamp  NOT NULL,
    "nextLocationID" int  NULL,
    "delivered" boolean DEFAULT false,
    
    CONSTRAINT PackageStatus_pk 
        PRIMARY KEY ("orderID"),

    CONSTRAINT Orders_fk
        FOREIGN KEY ("orderID")
        REFERENCES Orders ("orderID"),
    
    CONSTRAINT Locations_fk
        FOREIGN KEY ("locationID")
        REFERENCES Locations ("locationID"),

    CONSTRAINT Locations_fk_next
        FOREIGN KEY ("nextLocationID")
        REFERENCES Locations ("locationID") 
);

-- Table: Warehouses
CREATE TABLE IF NOT EXISTS Warehouses (
    "warehouseID" serial  NOT NULL,
    "warehouseName" varchar(100) NOT NULL,
    "locationID" int  NOT NULL,

    CONSTRAINT Warehouses_pk 
        PRIMARY KEY ("warehouseID"),
    
    CONSTRAINT Locations_fk
        FOREIGN KEY ("locationID")
        REFERENCES Locations ("locationID")
);
