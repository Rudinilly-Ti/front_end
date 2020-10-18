import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  div h1 {
    font-size: 25px;
  }
  div h2 {
    font-size: 15px;
  }
`;