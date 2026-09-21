import { Grid } from "@mui/material";
import React from "react";
import "./styles/countrydashboard.css";

const CountryCard = ({ country }) => {
  return (
    <Grid item size={{ xs: 4, md: 3, lg: 2 }} className={"country-card"}>
      <img src={country?.png} />
      <span>{country?.common}</span>
    </Grid>
  );
};

export default CountryCard;
