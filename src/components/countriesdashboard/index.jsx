import { useEffect, useState } from "react";
import SearchBar from "../../@reusablecomponents/SearchBar";
import CountryCard from "./CountryCard";
import { Grid } from "@mui/material";

const CountryDashboard = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    setSearchInput(searchVal);
    const filterCountries = countries.filter((item) =>
      item?.common?.includes(searchVal),
    );
    console.log(filterCountries);
    setFilteredCountries(filterCountries);
  };
  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries",
      );
      const jsonResponse = await response?.json();
      setCountries(jsonResponse || []);
      setFilteredCountries(jsonResponse || []);
    } catch (error) {
      setCountries([]);
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await fetchCountries();
    })();
  }, []);

  return (
    <section className={"country-dashboard"}>
      <SearchBar
        handleSearch={handleSearch}
        searchInput={searchInput}
        placeholder={"Search for Countries..."}
      />
      <Grid
        container
        spacing={2}
        rowSpacing={2}
        columnSpacing={2}
        className={"countries-container"}
      >
        {filteredCountries?.map((country) => (
          <CountryCard country={country} key={country?.common} />
        ))}
      </Grid>
    </section>
  );
};

export default CountryDashboard;
