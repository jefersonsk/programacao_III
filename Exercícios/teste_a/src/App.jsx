import { useState } from "react";

function JogoVinteUm ({tentativas, verso, listaCartas}) {
  const [pontuacao, setPontuacao] = useState(0);
  const [limiteTentativas, setLimiteTentativas] = useState(tentativas);
  const [fimJogo, setFimJogo] = useState(false);
  const [statusCarta, setStatusCarta] = useState([]);
}