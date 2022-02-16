import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    
    render() {
        return(
            <div className='content'>
                {conteudos.map( cont => (
                    <div key={cont.conteudo}>
                    <div>O conteudo e: {cont.conteudo}</div>
                    <div>Bloco: {cont.bloco}</div>
                    <div>Status: {cont.status}</div>
                    </div>
                ))}     
            </div>         
        )
    }
}






export default Content;