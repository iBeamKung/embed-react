import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Tempmap = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            setLoading(true);
            const response = await axios.get('https://embed-lab-api.up.railway.app/data');
            setData(response.data);
            console.log(response.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    //var scl = [[0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],[0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],[0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']];

    return (
        <div class="box">
            <p class="title is-3"><i class="fa-solid fa-temperature-three-quarters has-text-danger"></i> Temp </p>
            {
            loading ? <>Loading..</> : 
                <Plot
                    data={[
                    {
                        type: "scattermapbox", //scattergeo scattermapbox
                        mode: "markers",
                        lon: data.map((item) => item.Lng),
                        lat: data.map((item) => item.Lat),
                        text:  data.map((item) => item.Temp),
                        marker: { 
                            color: data.map((item) => item.Temp),
                            size: 10,
                            opacity: 0.8,
                            colorbar: {
                                title: 'Temp',
                                thickness: 15,
                                orientation: 'h',
                                y: 0.0,
                            },
                        },
                        hoverinfo: data.map((item) => item.Temp),
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
                        mapbox: { style: "open-street-map", center: { lat: 13.82, lon: 100.488 }, zoom: 12 },
                    }}
                    style={{width: "100%"}}
                />
            }
        </div>
    );
};
  
export default Tempmap;