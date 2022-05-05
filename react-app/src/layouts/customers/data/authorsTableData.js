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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";

export default function data(customers = []) {

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Customer", accessor: "author", width: "45%", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Phone", accessor: "phone", align: "center" },
      { Header: "Created", accessor: "created", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    
    rows: customers.map(({firstName, lastName, email, phone, createdAt}) => {
      return {
        author: (
          <Author 
            image={team2} 
            name={`${firstName} ${lastName}`}
            email={email} 
          />
        ),
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        email: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {email}
          </MDTypography>
        ),
        phone: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {phone}
          </MDTypography>
        ),
        created: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {(new Date(createdAt)).toLocaleString()}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
            Delete
          </MDTypography>
        ),
      }
    })
  };
}
