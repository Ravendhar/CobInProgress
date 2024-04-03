import './cobProgressChart.css';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const CobProgressChart = () => {

    const data = [
        { name: "cob1", value: 100000000000 },
        { name: "cob2", value: 200000000000 },
        { name: "cob3", value: 300000000000 },
        { name: "cob4", value: 400000000000 },
        { name: "cob5", value: 500000000000 },
        { name: "cob6", value: 600000000000 },
        { name: "cob7", value: 700000000000 }        
    ]

    return(
        <div className="cobProgressChart">
            <BarChart width={500} height={300} data={data}
                margin={{ top: 5, right: 30, left: 60, bottom: 5,}} barSize={20}>
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
}

export default CobProgressChart;