import React from "react";
import Chart from "react-apexcharts";

const Displaydisease = () => {
  const [recovered, setRecovered] = React.useState({});
  console.log(recovered);

  React.useEffect(() => {
    fetch(`https://disease.sh/v3/covid-19/all`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setRecovered(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const RefreshAPI = () => {
    fetch(`https://disease.sh/v3/covid-19/all`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setRecovered(response);
      })
      .catch((error) => console.log(error));
  };

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Total Population",
        "Today Recovered",
        "Total Recovered",
        "Total Deaths",
      ],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [
        recovered.population,
        recovered.todayRecovered,
        recovered.recovered,
        recovered.deaths,
      ],
    },
  ];

  return (
    <div>
      <h3>Recovered</h3>
      <p>Today Recovered : {recovered.recovered}</p>
      <p>Total Recovered : {recovered.todayRecovered}</p>
      <p>Total Death : {recovered.deaths}</p>
      <button onClick={RefreshAPI}> REFRESH </button>
      <div className="mixed-chart">
        <Chart options={options} series={series} type="bar" width="500" />
      </div>
    </div>
  );
};

export default Displaydisease;
