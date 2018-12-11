import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
  margin-top: 7px;

  .columnRight {
    display: grid;
    grid-gap: 7px;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }

  button {
    background: #64a61b;
    border: 0px;
    border-radius: 2px;
    height: 23px;
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.2);
    font-family: 'Muli';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: white;
    width: 95%;
  }

  button:hover {
    background: #487713;
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.5);
  }

  [type='file'] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type='file'] + label {
    border-radius: 2px;
    justify-content: center;

    border: 1px solid gainsboro;
    color: #64a61b;
    display: inline-block;
    font-family: 'Muli';
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 9px;
    padding: 5px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;
    width: 95%;

    &:hover {
      border: 1px solid #64a61b;
    }

    /* .sectionTop {
    padding-bottom: 20px;
  } */
  }
`
