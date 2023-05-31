import React, { useEffect, useState } from "react";
import moment from "moment";
import api from "../../services/api";
import RingLoader from "react-spinners/RingLoader";
import { Space } from "antd";
import {
  Botao,
  Div2,
  TabelaContainer,
  StyledTable,
  TabelaWrapper,
} from "./style";
import useAuthStore from "../../stores/auth";

function Tabelaaa() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosOrganizados, setUsuariosOrganizados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const setToken = useAuthStore((state) => state.setToken);
  const idUsuario = useAuthStore((state) => state.usuario?._id);

  useEffect(() => {
    getSessoes();

    const interval = setInterval(() => {
      getSessoes();
    }, 60000); // 1 minuto em milissegundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getSessoes = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/sessoes");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    organizandoUsuarios();
  }, [usuarios]);

  function organizandoUsuarios() {
    const usuariosOrganizados = usuarios.map((usuario, index) => {
      const chegada = moment(usuario.createdAt);
      const agora = moment();
      const diffMinutes = agora.diff(chegada, "minutes");
      const horas = Math.floor(diffMinutes / 60);
      const minutos = diffMinutes % 60;

      if (index === 0) {
        return {
          nome: "",
          cargo: "",
          chegada: "",
          tempo: "",
          key: usuario._id,
          isPrimeiraLinha: true,
        };
      }

      return {
        nome: usuario.id_usuario.nome,
        cargo: usuario.id_usuario.cargo,
        chegada: chegada.format("DD/MM  H:mm"),
        tempo: `${horas} horas ${minutos} minutos`,
        key: usuario._id,
      };
    });

    setUsuariosOrganizados(usuariosOrganizados);
  }

  const handleExcluirSessao = async () => {
    try {
      await api.delete(`/sessoes/${idUsuario}`);
      getSessoes();
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  const handleCriarSessao = async () => {
    try {
      await api.post("/sessoes", { id_usuario: idUsuario });
      getSessoes();
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  if (carregando) {
    return (
      <Div2>
        <RingLoader
          color={"#36d7b7"}
          loading={carregando}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Div2>
    );
  }

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
    },
    {
      title: "Chegada",
      dataIndex: "chegada",
      key: "chegada",
    },
    {
      title: "Tempo",
      dataIndex: "tempo",
      key: "tempo",
    },
    {
      title: "Ações",
      key: "action",
      render: (text, record) => {
        if (record.isPrimeiraLinha) {
          return (
            <Space size="middle">
              <Botao onClick={() => handleExcluirSessao()}>Sair</Botao>
              <Botao onClick={() => handleCriarSessao()}>Logar</Botao>
            </Space>
          );
        }
        return null; // Não renderiza nada para outras linhas
      },
    },
  ];

  return (
    <TabelaWrapper>
      <TabelaContainer>
        <StyledTable
          columns={columns}
          dataSource={usuariosOrganizados}
          rowClassName={(record, index) =>
            index === 0 ? "custom-row primeira-linha" : "custom-row"
          }
          pagination={false}
          scroll={{ x: true }}
        />
      </TabelaContainer>
    </TabelaWrapper>
  );
}

export default Tabelaaa;
