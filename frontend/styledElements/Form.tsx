import { ChangeEvent, ReactNode } from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit?(e: ChangeEvent<HTMLFormElement>): void;
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
