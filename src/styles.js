import styled from 'styled-components'

export const DropDownWrapper = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin: 1em;
`
export const StyledSelect = styled.select`
    max-width: 10%;
    height: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
`
export const StyledOption = styled.option`
    color: ${(props) => (props.selected ? "lightgrey": 'black')}
`
export const StyledLabel = styled.label`
    margin-bottom: 1rem;
`
export const StyledButton = styled.input`
    max-width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: solid 2px blue;
    padding: 0.5rem;
    border-radius: 1rem;
`