// Importing necessary types from React for type checking
import { SetStateAction } from 'react';
// Importing the styled-components library for styling
import styled from 'styled-components';
// Styling for the burger icon and animation
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
  // Styling for each line of the burger icon
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: white;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }
  // Styling for the first line, which rotates to form an X in the open state
  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  // Styling for the second line, which fades out and moves to the right in the open state
  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
  }
  // Styling for the third line, which rotates to form an X in the open state
  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
// Type definition for the props passed to the Burger component
type propsType = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};
// Burger component
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