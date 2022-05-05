import { gql } from '@apollo/client';

export const ADD_LOCATION = gql`
    mutation AddLocation (
        $country: String!
        $state: String!
        $street: String!
        $city: String!
        $zipCode: String!
    ) {
        addLocation (
            input: {
                country: $country
                state: $state
                street: $street
                city: $city
                zipCode: $zipCode
            }
        ) {
            location {
                locationID
            }
        }
    }
`;

export const LIST_LOCATIONS = gql`
    query {
        locations {
            locationID
            country
            state
            city
            street
            zipCode
        }
    }
`;
