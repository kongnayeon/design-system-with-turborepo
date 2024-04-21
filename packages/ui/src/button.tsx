import { ReactNode } from "react";
import '../index.css';
import {css} from '../styled-system/css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const styles = css({
  backgroundColor: '#11ff00',
  borderRadius: '100px',
  fontSize: '13px',
  padding: '10px 15px'
})
 

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={styles}
    >
      {children}
    </button>
  );
};
