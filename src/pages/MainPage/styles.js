import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Projetos = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px;
  margin: 20px;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 18px;
    text-decoration:none;
  }

  span{
    font-size: 15px;
  }
`;