import './App.css';
import GraficoNumerico from './Components/GraficoNumerico';
import GraficoTexto from './Components/GraficoTexto';

function App() {

  const meuObjeto = [
    {
    conclusion: "VITORIA",
    dateTimeFinish: "07/12/2023 15:40:05",
    dateTimeStart: "07/12/2023 15:39:47",
    energy_spend: 7,
    performance: 3,
    quant_blocks: 0,
    quant_star: 3,
    quant_steps: 7,
    elixir:5,
    reason_lose: "",
    muralhas:1
    },
    {
    conclusion: "VITORIA",
    dateTimeFinish: "07/12/2023 15:47:29",
    dateTimeStart: "07/12/2023 15:47:15",
    energy_spend: 7,
    performance: 3,
    quant_blocks: 2,
    quant_star: 3,
    quant_steps: 7,
    elixir:1,
    reason_lose: "",
    muralhas:5
    },
    {
    conclusion: "DERROTA",
    dateTimeFinish: "07/12/2024 16:06:53",
    dateTimeStart: "07/12/2023 16:06:41",
    energy_spend: 2,
    performance: 0,
    quant_blocks: 1,
    quant_star: 0,
    quant_steps: 2,
    elixir:7,
    reason_lose: "Caixa",
    muralhas:10
    },
    {
    conclusion: "VITORIA",
    dateTimeFinish: "07/12/2023 19:31:09",
    dateTimeStart: "07/12/2023 19:31:01",
    energy_spend: 7,
    performance: 3,
    quant_blocks: 1,
    quant_star: 3,
    quant_steps: 7,
    elixir:3,
    reason_lose:"" ,
    muralhas:10
    },
    {
      conclusion: "DERROTA",
      dateTimeFinish: "07/12/2023 19:31:09",
      dateTimeStart: "07/12/2023 19:31:01",
      energy_spend: 7,
      performance: 3,
      quant_blocks: 1,
      quant_star: 3,
      quant_steps: 7,
      elixir:3,
      reason_lose:"Armadilha",
      muralhas:10
      } ,
      {
        conclusion: "DERROTA",
        dateTimeFinish: "07/12/2023 19:31:09",
        dateTimeStart: "07/12/2023 19:31:01",
        energy_spend: 7,
        performance: 2,
        quant_blocks: 1,
        quant_star: 3,
        quant_steps: 7,
        elixir:3,
        reason_lose:"Armadilha",
        muralhas:10
        } 
      
  ];

  function contemFormatoData(texto) {
    const regexData = /\b\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}\b/;
    return regexData.test(texto);
  }

  const transformarParaData = (objeto) => {
    const dadosString = [];
    const dadosNumerico = [];
  
    for (const chave in objeto[0]) {
      const subarray = objeto.map((item) => ({
        label: chave,
        value: item[chave],
      }));
  
      const todosNumeros = subarray.every((item) => typeof item.value === 'number');
  
      if (todosNumeros) {
        dadosNumerico.push(subarray);
      } else {
        if(!contemFormatoData(subarray[0].value)){
          dadosString.push(subarray);
        }
      }
    }
  
    return { dadosString, dadosNumerico };
  };
  
  const { dadosString, dadosNumerico } = transformarParaData(meuObjeto);
  
  return (
    <div>
      <h2>Dados Inteiros:</h2>     
      <GraficoNumerico data={dadosNumerico}/>
      <h2>Dados String:</h2>     
      <GraficoTexto data={dadosString}/>
    </div>
    );
}

export default App;