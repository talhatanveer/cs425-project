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

import { useState } from 'react';

import {
  Grid, 
  Card,
  Button
} from "@mui/material";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import authorsTableData from "./data/authorsTableData";

import { useQuery } from '@apollo/client';

import { LIST_LOCATIONS } from 'queries/locations';

import AddLocation from "modals/AddLocation";

function Locations() {
  const { data = {} } = useQuery(LIST_LOCATIONS) || {};
  const { columns, rows } = authorsTableData(data?.locations || []);

  const [modal, setModal] = useState(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Locations
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>

            <Button onClick={() => setModal('add')}>
              Add Location
            </Button>
          </Grid>
        </MDBox>
      <Footer />

      <AddLocation 
        open={modal === 'add'}
        onClose={() => setModal(null)}
      />
    </DashboardLayout>
  );
}

export default Locations;
