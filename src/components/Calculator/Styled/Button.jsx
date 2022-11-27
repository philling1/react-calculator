import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  /* Expanded form example */
  ${ function({ gridSpan }) {
    if(gridSpan){
      return `grid-column: span ${gridSpan};`
    }

  }}

  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}

  ${({ operation }) => operation && `background-color: gray;`}

  ${({ control }) => control && `background-color: skyblue;`}

  ${({ equals }) => equals && `border-bottom-right-radius: 10px; background-color: gray;`}

  ${({ period }) => period && `border-bottom-left-radius: 10px; background-color: skyblue;`}

`