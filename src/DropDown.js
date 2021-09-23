import React from 'react'
import { DropDownWrapper, StyledButton, StyledLabel, StyledOption, StyledSelect } from './styles'

export const DropDown = (props) => {
    return (
        <DropDownWrapper action={props.action}>
            <StyledLabel htmlFor="services">
                {props.formLabel}
            </StyledLabel>
            <StyledSelect id="services" name="services">
                {props.children}
            </StyledSelect>
            <StyledButton type='submit' value={props.buttonText}/>
        </DropDownWrapper>
    )
}

export const Option = (props) => {
    return (
        <StyledOption selected={props.selected}>
            {props.value}
        </StyledOption>
    )
}
