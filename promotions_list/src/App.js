import React, { useEffect, useState } from "react"

import { TabPanel, TabContext, TabList } from '@mui/lab'
import Box from '@mui/material/Box'
import PermIdentity from '@mui/icons-material/PermIdentity'
import WorkOutline from '@mui/icons-material/WorkOutline'
import Tab from '@mui/material/Tab'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { Draggable } from "react-drag-reorder"
import Header from "./components/header"
import AllPromotions from "./components/allPromotions"
import NewCustomerPromotions from "./components/newCustomerPromotions"
import Footer from "./components/footer"


function App() {

  const [tabValue, settabValue] = useState(0)

  const handleChange = (event, newValue) => {
    settabValue(newValue)
  }

  return (
    <>
      <Header />
      <Grid
        container
        columnSpacing={1}
        alignContent="center"
        justifyContent="center"
        marginTop="70px"
      >
        <TabContext value={tabValue}>
          <Grid container justifyContent="center">

            <TabList onChange={handleChange}>
              <Tab value={0} icon={<WorkOutline />} label="All Promotions" />
              <Tab value={1} icon={<PermIdentity />} label="New Customer" />
            </TabList>
          </Grid>
          <Grid container justifyContent="center" xs={12}>
            <TabPanel value={0}>
              <AllPromotions />
            </TabPanel>
            <TabPanel value={1}>
              <NewCustomerPromotions />
            </TabPanel>
          </Grid>


        </TabContext>
      </Grid>
      <Footer />
    </>
  );

}

export default App;