import styled from 'styled-components'

export default styled.section`
  background-color: white;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);
  color: #64a61b;
  display: flex;
  flex-direction: column;
  font-family: 'Muli';
  font-weight: 600;
  height: auto;
  letter-spacing: 1.2px;
  margin: 10px;
  padding: 10px;

  .formTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .openIcon {
    opacity: 0.4;
    transform: rotate(45deg);
    transition: all 0.7s ease;
  }

  .hidden {
    overflow: hidden;
    height: 0;
  }

  .visible {
    transition: all 1s ease;
  }

  .disabled {
    opacity: 0.4;
    /* transition: all 0.5s ease;
  transform: rotate(45deg); */
  }
`
