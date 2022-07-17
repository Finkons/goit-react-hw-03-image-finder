import styled from "@emotion/styled";


export const LoadMoreBtn = styled.button`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(14,0,246,0.5) 0%, rgba(0,237,234,0.5) 49%, rgba(255,252,0,0.5) 100%);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #000000;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 1px 4px 2px -2px rgba(0, 0, 0, 0.2),
    1px 3px 3px 1px rgba(0, 0, 0, 0.14), 1px 2px 6px 1px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(14,0,246,1) 0%, rgba(0,237,234,0.9416141456582633) 49%, rgba(255,252,0,1) 100%);
  }
`;