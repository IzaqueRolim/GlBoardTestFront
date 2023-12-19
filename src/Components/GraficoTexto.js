import React from 'react';
import { PieChart, Pie, Cell, Tooltip,Legend,Line } from 'recharts';
import '../App.css'

const GraficoTexto = ({ data }) => {
 
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
        );
    };

    function calcularPorcentagem(dados) {
        const porcentagemGeral = [];

        dados.forEach((element) => {
            let contador = {};
            
            
            element.forEach((item) => {
                contador[item.value] = (contador[item.value] || 0) + 1;
            });
            
            const totalItens = element.length;
            
            let porcentagens = {};
            Object.keys(contador).forEach(function(item) {
                const porcentagem = (contador[item] / totalItens) * 100;
                porcentagens[item] = porcentagem;
            });
            
            const porcentagemTemp = Object.keys(porcentagens).map((por) => ({
                name: por,
                value: porcentagens[por],
            }));

            porcentagemGeral.push(porcentagemTemp);
        });

        return porcentagemGeral;
    }

    const resultado = calcularPorcentagem(data);

    return (
        <div className='containerGrafico'>{
            resultado.map((element, index) => (
                <div key={index}>
                    <h3>Atributo: {data[index][0].label}</h3>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            data={element}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            activeIndex={element.label}
                        >
                        {element.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                        </Pie>
                        <Legend />
                        <Line dataKey="pv" stroke="#8884d8" />
                        <Line dataKey="uv" stroke="#82ca9d" />

                        <Tooltip />
                    </PieChart>
                </div>
            ))
        }
        </div>
    );
};

export default GraficoTexto;
