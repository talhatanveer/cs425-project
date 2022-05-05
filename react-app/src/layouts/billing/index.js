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
import { useState } from 'react';
import {Grid, Button} from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import BillingInformation from "layouts/billing/components/BillingInformation";

import { LIST_ORDERS } from 'queries/orders';
import { useQuery } from '@apollo/client';

import CreateOrder from "modals/CreateOrder";

function Billing() {

  const [modal, setModal] = useState(null);

  const pendingOrders = useQuery(LIST_ORDERS, { variables: { delivered: false }})?.data || {};
  const completedOrders = useQuery(LIST_ORDERS, { variables: { delivered: true }})?.data || {};

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
        <MDBox mt={10} mb={5}>
            <Grid>
              <BillingInformation 
                title="Pending Orders"
                orders={pendingOrders?.orders || []}
              />
              <br />
              <br />
              <BillingInformation 
                title="Completed Orders"
                orders={completedOrders?.orders || []}
              />
            </Grid>
        </MDBox>
        <Button onClick={() => setModal('add')}>
          Create New Order
        </Button>
      <Footer />

      <CreateOrder 
        open={modal === 'add'}
        onClose={() => setModal(null)}
      />
    </DashboardLayout>
  );
}

export default Billing;
