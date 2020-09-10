import styled from 'styled-components';

const LoaderStyle = styled.div`
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid #46c7e0; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
  margin: 70px 50% auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default LoaderStyle;
