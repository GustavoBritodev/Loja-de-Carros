import './App.css'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/locadora')
      .then(res => res.json()).then(dados => setData(dados))
  }, [])
  return (

    //     <div className="App">

    //       <h1>💸LOJINHA DO TIO PANHAS 💸</h1>
    //       <div className='card'>
    //      <div class="container">
    //  <div class="wrapper">
    //  <div class="gif-container"></div>
    //    <div class="banner-image"></div>
    //    <h1>TOME </h1>
    //    <p>💸Preço 💸</p>
    //    <p> Marca    </p>
    //    <p> Modelo: </p>
    //    <p> Quilometragem: rdddddddddddddddddefffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddd </p>
    //    <p>  Preço: </p>

    //   </div>
    //   </div>

    //   <div class="container">
    //  <div class="wrapper">
    //  <div class="gif-container"></div>
    //    <div class="banner-image"></div>
    //    <h1>TOME</h1>
    //    <p>Preço: <br/>
    //      Marca: <br/>
    //      Modelo: <br/>
    //      Quilometragem: <br/>
    //      Preço:<br/>
    //      </p>
    //   </div>
    //   </div>
    //   <div class="container">
    //  <div class="wrapper">
    //    <div class="banner-image"></div>
    //    <h1>TOME</h1>
    //    <p>Preço: <br/>
    //      Marca: <br/>
    //      Modelo: <br/>
    //      Quilometragem: ffsefsefsefsefefffffsefsefsefefsffsefsefsefsefsefsefsefsefsefesfesfff<br/>
    //      Preço: efefsefs<br/>
    //      </p>
    //   </div>
    //   </div>

    //   <div class="container">
    //  <div class="wrapper">
    //    <div class="banner-image"></div>
    //    <h1>TOME</h1>
    //    <p>Preço: <br/>
    //      Marca: <br/>
    //      Modelo: <br/>
    //      Quilometragem: ffsefsefsefsefefffffsefsefsefefsffsefsefsefsefsefsefsefsefsefesfesfff<br/>
    //      Preço: efefsefs<br/>
    //      </p>
    //   </div>
    //   </div>

    //   </div>
    <div>

      <><div class="metralha">
        <h1 class="title">🤡By: Gabriel Bay and Gustavo Brito🤡</h1>
        <div class="gif-metralha"></div>
        </div></>
      <div className="App">
        <div className="card">
          {data.map((d, i) => (

            <div class="container">
              <div class="wrapper">
                <h1 class="titlePatinhas">Lojinha do Tio Patinhas</h1>
                <div class="gif-container"></div>
                <img class="banner-image" src={d.imagem}></img>
                <h1 class="modelo">💸{d.modelo} 💸</h1>
                <div class="paragrafo">
                  <p><span>Preço:</span> {d.preco}</p>
                  <p><span>Marca:</span> {d.marca}</p>
                  <p><span>Descrição:</span> {d.descricao}</p>
                  <p><span>Quilometragem:</span> {d.quilometragem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default App;
