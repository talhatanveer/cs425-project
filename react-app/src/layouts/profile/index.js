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
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";

import { useQuery } from "@apollo/client";
import { GET_EMPLOYEE } from "queries/employees";

function Overview() {

  const { data = {} } = useQuery(GET_EMPLOYEE, {
    variables: {
      employeeID: localStorage.getItem('employeeId')
    }
  }) || {};

  const { firstName, lastName, email } = data?.employee || {};

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid spacing={1}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title=""
                info={{
                  fullName: `${firstName} ${lastName}`,
                  email: `${email}`,
                  location: "USA",
                }}
                social={[]}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
