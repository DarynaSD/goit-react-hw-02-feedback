import { styled } from 'styled-components';

export const StyledSection = styled('srction') ({
    display: 'block',
    margin: 50,

    color: '#311D28',
})

export const StyledBtnList = styled('ul')({
    display: 'flex',
    gap: 20,

    listStyle: 'none',
    textDecoration: 'none',
    margin: 0,
    padding: 0,
})

export const StyledButton = styled('buttton')(({ variant }) => {
    //let btnvariant = variant;
    return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 44,
    padding: '0 24px',

    borderRadius: 15,
    boxShadow: '0px 5px 10px 0px rgba(66, 57, 46, 0.16)',
    }
})