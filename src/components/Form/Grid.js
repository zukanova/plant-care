import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-rows: 40px 40px 70px;
  grid-gap: 4px;

  .textInput {
    align-self: center;
    border: 1px solid #64a61b;
    border-left: 0;
    border-radius: 7px;
    border-right: 0;
    border-top: 0;
    color: #64a61b;
    font-family: 'Muli';
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 2;
    padding: 8px;
  }

  input:focus {
    outline: 1px solid gainsboro;
    transform: rotate (45deg);
  }

  ::placeholder {
    color: F5F5F5;
  }
`
