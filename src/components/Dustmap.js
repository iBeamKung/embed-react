import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Dustmap = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let Dustmax = 0;
    /*
    let DustBlue = 0;
    let DustGreen = 0;
    let DustYellow = 0;
    let DustOrange = 0;
    let DustRed = 0;
    */
    /*
    function getColor(dust_value)
    {
        if(dust_value < 26) { return "#3BCCFF"; }
        else if(dust_value < 51) { return "#92D050"; }
        else if(dust_value < 101) { return "#FFFF00"; }
        else if(dust_value < 201) { return "#FFA200"; }
        else { return "#FF3B3B"; }
    }
    */
    async function getData() {
        try {
            setLoading(true);
            const response = await axios.get('/test-data.json');
            console.log(response.data);
            
            response.data.forEach((item) => {
                //console.log(item.Dust);
                Dustmax = Dustmax + 1;
            });
            
            //console.log(Dustmax,DustBlue,DustGreen,DustYellow,DustOrange,DustRed);
            
            setData(response.data);
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

    return (
        <div class="box">
            <p class="title is-3"><i class="fa-solid fa-head-side-mask has-text-success"></i> Dust </p>
            {
            loading ? <>Loading..</> : 
                <Plot
                    data={[
                    {
                        type: "scattermapbox", //scattergeo scattermapbox
                        mode: "markers",
                        lon: data.map((item) => item.Lng),
                        lat: data.map((item) => item.Lat),
                        text: data.map((item) => "Dust: " + item.Dust + " ppm"),
                        marker: { 
                            color: data.map((item) => {
                                if(item.Dust < 26) { return "#3BCCFF"; }
                                else if(item.Dust < 51) { return "#92D050"; }
                                else if(item.Dust < 101) { return "#FFFF00"; }
                                else if(item.Dust < 201) { return "#FFA200"; }
                                else { return "#FF3B3B"; }
                            }),
                            size: 10,
                            opacity: 0.8,
                        },
                        hoverinfo: data.map((item) => item.Dust),
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
            <div class="block"></div>
            <div class="level">
                <div class="level-item has-text-centered">
                    <div>
                    <p class="title">Value</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">0 - 25 ppm</p>
                    <p class="title" style={{color: '#3BCCFF'}}><i class="fa-solid fa-circle"></i></p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">26 - 50 ppm</p>
                    <p class="title" style={{color: '#92D050'}}><i class="fa-solid fa-circle"></i></p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">51 - 100 ppm</p>
                    <p class="title" style={{color: '#FFFF00'}}><i class="fa-solid fa-circle"></i></p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading">101 - 200 ppm</p>
                    <p class="title" style={{color: '#FFA200'}}><i class="fa-solid fa-circle"></i></p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                    <p class="heading"> &gt; 201 ppm</p>
                    <p class="title" style={{color: '#FF3B3B'}}><i class="fa-solid fa-circle"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Dustmap;