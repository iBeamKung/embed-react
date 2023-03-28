import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/test-data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
        <div class="block"></div>
        <div class="container">
            <div class="columns">
                <div class="column mx-5">
                    <div class="box">
                        <p class="title is-1">Embedded System Design Lab</p>
                        <p class="subtitle is-4">010123120 2/2565</p>
                        <div class="box">
                            <Plot
                                data={[
                                {
                                    x: data.map((item) => item.longitude),
                                    y: data.map((item) => item.latitude),
                                    mode: "markers",
                                    type: "scatter",
                                    marker: { color: "red" },
                                },
                                ]}
                                useResizeHandler
                                layout={{
                                    title: "Bangkok, Thailand",
                                    xaxis: { title: "Longitude" },
                                    yaxis: { title: "Latitude" },
                                    autosize: true
                                }}
                                style={{width: "100%"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
  
export default Home;