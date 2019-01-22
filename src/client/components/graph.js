import React from 'react';
import { LineChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,BarChart,AreaChart,ReferenceLine,ResponsiveContainer,Label} from 'recharts';
import { inherits } from 'util';

export const LineGraph=(props)=>{
    return(
<div className="center" style={{overflowX:'scroll'}}>
<ResponsiveContainer width="100%" height="100%" style={{overflowX:'scroll'}}>
<LineChart data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp} label={props.temp}/>
<YAxis label={props.yAxis}/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
{props.fields.map(el=><Line type="monotone" dataKey={el} stroke="#8884d8" activeDot={{r: 8}}/>)}
</LineChart>
</ResponsiveContainer>
</div>
    )
};

export const BarGraph=(props)=>{
    return(
<div className="center" style={{overflowX:'scroll'}}>
<ResponsiveContainer width="100%" height="100%" style={{overflowX:'scroll'}}>
<BarChart width={600} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp} label={props.temp}/>
<YAxis label={props.yAxis}/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
{props.fields.map(el=><Bar  dataKey={el} fill="#8884d8"/>)}
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
</BarChart>
</ResponsiveContainer>
</div>
    )
};

export const AreaGraph=(props)=>{
    return(
<div className="center" style={{overflowX:'scroll'}}>
<ResponsiveContainer width="100%" height="100%" style={{overflowX:'scroll'}}>
<AreaChart width={600} height={300} data={props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
<XAxis dataKey={props.temp} label={props.temp}/>
<YAxis label={props.yAxis}/>
<CartesianGrid strokeDasharray="3 3"/>
<Tooltip/>
<Legend />
{props.fields.map(el=><Area type="monotone" dataKey={el} stroke="#8884d8" activeDot={{r: 8}}/>)}
<ReferenceLine y={props.upper} label="Max" stroke="red"/>
<ReferenceLine y={props.lower} label="Min" stroke="blue"/>
</AreaChart>
</ResponsiveContainer>
</div>)
};