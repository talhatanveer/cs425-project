import { gql } from "@apollo/client";

export const LIST_ORDERS = gql`
    query ListOrders ($delivered: Boolean) {
        orders (
            delivered: $delivered
        ) {
            orderID
            customerID
            employeeID
            destinationLocationID
            originLocationID
            packageWeight
            packageDescription
            packageType
            destinationCountry
            destinationCity
            destinationState
            destinationStreet
            destinationZipCode
            originCountry
            originCity
            originState
            originStreet
            originZipCode
            senderFirstName
            senderLastName
            delivered
        }
    }
`;

export const CREATE_ORDER = gql`
    mutation CreateOrder (
        $customerID: ID!
        $employeeID: ID!
        $packageType: String!
        $packageWeight: Float!
        $packageDescription: String!
        $destinationLocationID: ID!
        $originLocationID: ID!
    ) {
        createOrder (
            input: {
                customerID: $customerID
                employeeID: $employeeID
                packageType: $packageType
                packageWeight: $packageWeight
                packageDescription: $packageDescription
                destinationLocationID: $destinationLocationID
                originLocationID: $originLocationID
            }
        ) {
            success
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation UpdateOrder ($orderID: ID!, $delivered: Boolean!) {
        updateOrderStatus (
            orderID: $orderID
            delivered: $delivered
        ) {
            success
        }
    }
`;