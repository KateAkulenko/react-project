import { SetStateAction } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: white;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }
  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }
  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
type propsType = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};
const Burger = ({ open, setOpen }: propsType) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen((prev) => !prev)}
      key={open.toString()}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export default Burger;