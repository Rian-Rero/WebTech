import {
  Body,
  Imagem,
  Coluna2,
  Nome,
  Texto,
  Coluna,
  DivGeral,
  Dados,
  Caixa,
  Canais,
  Imagem2,
} from "./style";
import LogoBranca from "../../Icons/LogoBranca.png";

import { useNavigate } from "react-router-dom";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Carrossel from "../../Components/Carrosel";

function Ouvidoria() {
  const navigate = useNavigate();

  return (
    <Body>
      <DivGeral>
        <Coluna>
          <Imagem>
            <img src={LogoBranca} alt="Logo WebTech" />
          </Imagem>
          <Caixa>
            <Texto>
              Para relatar problemas de acesso ou de funcionamento, entre em
              contato através de um de nossos canais de atendimento
            </Texto>
          </Caixa>
        </Coluna>

        <Coluna2>
          <Imagem2>
            <Carrossel />
          </Imagem2>

          <Dados>
            <Canais>Canais de Atendimento</Canais>
            <Nome>
              <BsFillTelephoneOutboundFill />
              Ponto RH: (31)XXXX-XXXX
            </Nome>

            <Nome>
              <BsFillTelephoneOutboundFill />
              Central: (31)XXXX-XXXX
            </Nome>

            <Nome>
              <BsFillTelephoneOutboundFill />
              0800: 0800-XXX-XXXX
            </Nome>
          </Dados>
        </Coluna2>
      </DivGeral>
    </Body>
  );
}

export default Ouvidoria;
