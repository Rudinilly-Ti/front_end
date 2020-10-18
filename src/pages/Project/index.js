import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title } from './styles';
import CollapsibleTable from '../../components/Bloc';
import NewBloc from '../../components/NewBloc';
import UpdateProject from '../../components/UpdateProject';
import api from '../../server/api';
function Project() {
  const { id } = useParams()

  const [blocos, setBlocos] = React.useState([]);
  const [projeto, setProjeto] = React.useState([]);

  React.useEffect(() => {
    getProject();
    getData();
  }, [])
  

  const getProject = async () => {
    const response = await api.get(`/showOne/${id}`);
    await setProjeto(response.data);
  }

  const getData = async () => {
    const response = await api.get(`/showBlocks/${id}`);
    await setBlocos(response.data);
  }

  return (
    <Container data-testid='form-field'>
      <Title>
        <div>
          <h1>{projeto.nome}</h1>
          <h2>{projeto.descricao}</h2>
          <h1>Responsável: {projeto.responsavel}</h1>
          <h1>Cliente: {projeto.cliente}</h1>
        </div>
        <UpdateProject data={projeto} reset={getProject}/>
        <NewBloc data={getData}/>
      </Title>
      {blocos.map( bloco => (
        <CollapsibleTable reset={getData} data={bloco}/>
      ))}
    </Container>
  );
}

export default Project;