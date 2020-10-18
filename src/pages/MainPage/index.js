import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import api from '../../server/api';
import { Container, Projetos } from './styles';

function MainPage() {
  const [projetos, setProjetos ] = useState([]);
  useEffect(() => {
  getProject();
  }, [])

  const getProject = async () => {
    const response = await api.get('/')
    const dados = await response.data
    await setProjetos(dados)
  }

  const deletProject = async ({id}) => {
    const response = await api.delete(`/deleteProject/${id}`)
    getProject()
  }

  return (
    <Container data-testid='form-field'>
      {projetos.map( item => (
          <Projetos  key={item.id}>
            <Link to={`/projeto/${item.id}`}>
            <h1>{item.nome}</h1>
            </Link>
            <span>{item.responsavel}</span>
            <span>{item.cliente}</span>
            <Button variant="outlined" color="secondary" onClick={() => deletProject({ id: item.id})} >
              Excluir
            </Button>
          </Projetos>
      ))}
      
    </Container>
  );
}

export default MainPage;