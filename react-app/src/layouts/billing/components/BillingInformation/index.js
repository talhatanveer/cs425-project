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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import OrderData from 'constants/orders';

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation({
  orders = [],
  title
}) {

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {
            orders.map(({
              orderID,
              packageDescription,
              packageType,
              destinationCountry,
              destinationCity,
              destinationState,
              destinationStreet,
              destinationZipCode,
              originCountry,
              originCity,
              originState,
              originStreet,
              originZipCode,
              senderFirstName,
              senderLastName,
              delivered
            }, idx) => (
              <Bill 
                senderName={`${senderFirstName} ${senderLastName}`}
                destinationAddress={`${destinationStreet}, ${destinationCity}, ${destinationState}, ${destinationZipCode}, ${destinationCountry}`}
                originAddress={`${originStreet}, ${originCity}, ${originState}, ${originZipCode}, ${originCountry}`}
                delivered={delivered}
                packageType={packageType}
                packageDescription={packageDescription}
                orderID={orderID}
              />
            ))
          }
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
