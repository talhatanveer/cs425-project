--- Queries we used in our backend api

SELECT 
    s1."totalCustomers",
    s2."pendingOrders",
    s3."completedOrders",
    s4."totalEmployees",
    (s3."completedOrders" + s2."pendingOrders") AS "totalOrders"
FROM
    (
        SELECT 
            COUNT(*) AS "totalCustomers"
        FROM Customers
    ) AS s1,
    (
        SELECT
            COUNT(*) AS "pendingOrders"
        FROM Orders
        WHERE delivered=false
    ) AS s2,
    (
        SELECT
            COUNT(*) AS "completedOrders"
        FROM Orders
        WHERE delivered=true
    ) AS s3,
    (
        SELECT
            COUNT(*) AS "totalEmployees"
        FROM Employees
    ) As s4
;

SELECT 
    Orders."orderID", Orders."packageWeight", Orders."packageType",
    Orders."packageDescription", Orders."employeeID", Orders."customerID", 
    Orders."originLocationID", Orders."destinationLocationID", 
    Customers."firstName" AS "senderFirstName", Customers."lastName" AS "senderLastName", 
    o."country" AS "originCountry", o."state" AS "originState", 
    o."city" AS "originCity", o."street" AS "originStreet", 
    o."zipCode" AS "originZipCode", 
    d."country" AS "destinationCountry", d."state" AS "destinationState", 
    d."city" AS "destinationCity", d."street" AS "destinationStreet", 
    d."zipCode" AS "destinationZipCode", 
    Orders."delivered" 
FROM Orders 
JOIN Customers ON 
    Customers."customerID" = Orders."customerID" 
LEFT JOIN Locations as o ON 
    o."locationID" = Orders."originLocationID" 
LEFT JOIN Locations as d ON 
    d."locationID" = Orders."destinationLocationID" 
WHERE 
    Orders.delivered=false

--- the rest were pretty standard select / update queries so we have omitted them here
--- in order to avoid redundant / trivial stuff