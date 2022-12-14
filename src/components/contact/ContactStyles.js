import styled from "styled-components";

export const ContactContainer = styled.main`
  height: 85vh;
  width: 100vw;
  background-color: var(--main-color-navy);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContactDisplay = styled.div`
  width: 70%;
  height: 80%;
  background-color: aliceblue;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ContactTitle = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: var(--page-title);
    color: var(--main-color-navy);
    font-size: 25px;
    letter-spacing: 7px;
  }

  @media (max-width: 768px) {
    border-bottom: 1px dotted var(--main-color-navy);
    h3 {
      text-align: center;
      font-size: 20px;
    }
  }
`;

export const FormContainer = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 6;
  text-align: center;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  width: auto;
  height: 100%;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  button {
    padding: 5px 40px;
  }
`;
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  label {
    width: 10%;
    font-family: var(--page-title);
    display: flex;
    justify-content: start;
    align-items: start;
    @media (max-width: 768px) {
      display: none;
    }
  }
  input {
    width: 50%;
    border-radius: 10px;
    border: 1px solid var(--main-color-navy);
    padding: 10px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  textarea {
    width: 90%;
    border-radius: 10px;
    border: 1px solid var(--main-color-navy);
    padding: 10px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ContactLinks = styled.div`
  width: 50%;
  height: 100%;
`;
