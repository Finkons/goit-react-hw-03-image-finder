import styled from "@emotion/styled";

export const Wrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  z-index: 200;
  background: #355c7d
  background: -webkit-linear-gradient(circle, rgba(254,124,10,1) 11%, rgba(12,0,255,1) 100%));
  background: radial-gradient(circle, rgba(254,124,10,1) 11%, rgba(12,0,255,1) 100%);
  box-shadow: 2px 4px 6px -1px rgba(12,0,0,0.4),
    2px 6px 7px 2px rgba(20,0,0,0.2), 4px 6px 17px 6px rgba(254,124,10,0.2);
`;

export const Form = styled.form`
  border-radius: 20px;
  padding-left: 24px;
  display: flex;
  width: 50px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  overflow: hidden;
`;

export const Button = styled.button`
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(14,0,246,1) 0%, rgba(0,237,234,0.9) 49%, rgba(255,252,0,1) 100%);
  border-radius: 20px;
  display: inline-block;
  width: 78px;
  height: 48px;
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
  opacity: 1;
}
`;



export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;