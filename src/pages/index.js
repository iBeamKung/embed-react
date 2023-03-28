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
                                    type: "scattermapbox",
                                    lon: data.map((item) => item.Lng),
                                    lat: data.map((item) => item.Lat),
                                    mode: "markers",
                                    marker: { color: "fuchsia", size: 10 },
                                },
                                ]}
                                useResizeHandler
                                layout={{
                                    autosize: true,
                                    margin: {
                                        l: 0,
                                        r: 0,
                                        b: 0,
                                        t: 0,
                                        pad: 4
                                      },
                                      dragmode: 'zoom',
                                      mapbox: { style: "open-street-map", center: { lat: 13.82, lon: 100.488 }, zoom: 12 }
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