import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
`

export const Title = styled.h2``

export const Forms = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 10px;
  grid-row-gap: 12px;

  label {
    display: inline-flex;
    justify-content: space-between;
    align-items: baseline;
  }

  input[type='text'],
  input[type='number'],
  select {
    height: 30px;
    width: 100%;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 6px;
    font-size: 16px;
    line-height: 20px;
    color: rgb(153, 153, 153);
    margin-left: 12px;

    &::focus {
      border: 1px solid #64e2ce;
    }
  }

  input[type='submit'] {
    border-radius: 25px;
    text-align: center;
    padding: 12px 0px;
    background-color: #64e2ce;
    font-size: 14px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    border: 0px;
    margin-top: 20px;
    width: 100%;

    &:disabled {
      background-color: #64e2ce80;
    }
  }
`
