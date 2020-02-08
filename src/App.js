import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // ENTRADA, RODANDO, FIM
  const [entrada, setEntrada] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(0);
  const [numPalpite, setNumPalpite] = useState(1);

  // valores
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEntrada("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(parseInt(Math.random() * (150 - 0) + 1));
  };

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  if (entrada === "ENTRADA") {
    return (
      <div className="container">
        <div className="box">
          <h1>Jogo da Adivinhação</h1>
          <div className="button-start">
            <button className="button" onClick={iniciarJogo}>
              Iniciar
            </button>
          </div>
        </div>
      </div>
    );
  }

  const acertou = () => {
    setEntrada("FIM");
  };

  if (entrada === "FIM") {
    return (
      <div className="container">
        <div className="box">
          <h1>Jogo concluído!</h1>
          <p>
            Acertei o número {palpite} com {numPalpite} tentativas. Quer jogar
            novamente?
          </p>
          <div className="button-end">
            <button className="button" onClick={iniciarJogo}>
              Jogar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Seu número é o {palpite}?</h1>
        <div className="button-group">
          <button className="button" onClick={menor}>
            Menor
          </button>
          <button className="button" onClick={acertou}>
            Acertou
          </button>
          <button className="button" onClick={maior}>
            Maior
          </button>
        </div>
      </div>
    </div>
  );
}
