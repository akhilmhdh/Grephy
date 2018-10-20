import React from 'react';
import { LineChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,BarChart,AreaChart,ReferenceLine} from 'recharts';

export const LineGraph=(props)=>{
    return(
<LineChart width={600} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp}/>
<YAxis/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
{props.fields.map(el=><Line type="monotone" dataKey={el} stroke="#8884d8" activeDot={{r: 8}}/>)}
</LineChart>
    )
};

export const BarGraph=(props)=>{
    return(
<BarChart width={600} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp}/>
<YAxis/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
{props.fields.map(el=><Bar  dataKey={el} fill="#8884d8"/>)}
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
</BarChart>
    )
};

export const AreaGraph=(props)=>{
    return(
<AreaChart width={600} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp}/>
<YAxis/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
{props.fields.map(el=><Area type="monotone" dataKey={el} stroke="#8884d8" activeDot={{r: 8}}/>)}
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
</AreaChart>
    )
};