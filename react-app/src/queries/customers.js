import { gql } from '@apollo/client';

export const LIST_CUSTOMERS = gql`
    query ListCustomers {
        customers {
            customerID,
            firstName,
            lastName,
            email,
            phone,
            createdAt
        }
    }
`;

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer (
        $firstName: String!
        $lastName: String!
        $email: String!
        $phone: String!
    ) {
        createCustomer (
            input: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                phone: $phone
            }
        ) {
            customer {
                customerID
            }
        }
    }
`;