import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip,Rectangle,CartesianGrid,LineChart,Line,AreaChart,Area } from 'recharts';
import "../App.css"

const GraficoNumerico = ({data}) => {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Fase ${label+1} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  
  return (
    <div className='containerGrafico'>{
    data.map((elemento,index)=>(
        <div>
            <h3>Atributo: {elemento[0].label}</h3>
            <LineChart
              width={500}
              height={300}
              data={elemento}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis tick={({ payload, x, y, width, height }) => (
              <g transform={`translate(${x},${y + 10})`}>
                  <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="translate(20)">
                  {`Fase ${payload.value+1}`}
                  </text>
              </g>
              )} />
              <YAxis />
              <Tooltip content={<CustomTooltip />}/>
              <Line type = "monotone" dataKey="value" fill="#8884d8" activeDot={{ r: 8 }} activeBar={<Rectangle fill="pink" stroke="blue" />} />

            </LineChart>
        </div>
    ))
    }
    </div>
  );
};

export default GraficoNumerico;
