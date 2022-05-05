/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";

export default function data(locations = []) {

  return {
    columns: [
      { Header: "Country", accessor: "country", align: "left" },
      { Header: "State", accessor: "state", align: "center" },
      { Header: "City", accessor: "city", align: "center" },
      { Header: "Zip Code", accessor: "zipCode", align: "center" },
      { Header: "Street", accessor: "street", align: "center" },
    ],
    
    rows: locations.map(({country, state, city, zipCode, street}) => {
      return {
        country: (
          <MDTypography variant="caption" color="text">
            <b>{country}</b>
          </MDTypography>
        ),
        state: (
          <MDTypography variant="caption" color="text">
            {state}
          </MDTypography>
        ),
        city: (
          <MDTypography variant="caption" color="text">
            {city}
          </MDTypography>
        ),
        street: (
          <MDTypography variant="caption" color="text">
            {street}
          </MDTypography>
        ),
        zipCode: (
          <MDTypography variant="caption" color="text">
            {zipCode}
          </MDTypography>
        )
      }
    })
  };
}
