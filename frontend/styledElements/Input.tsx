import { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";
interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  onChange,
}) => {
  const isPasswordInput = type === "password";
  const [isRevealedPassword, setIsRevealedPassword] = useState(false);
  return (
    <div className={styles.container}>
      <input
        type={isRevealedPassword ? "text" : type}
        name={name}
        placeholder={placeholder || " "}
        className={styles.input}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {isPasswordInput && (
        <span className={styles.iconContainer}>
          <FontAwesomeIcon
            onClick={() => setIsRevealedPassword(!isRevealedPassword)}
            className={styles.icon}
            icon={isRevealedPassword ? faEyeSlash : faEye}
          />
        </span>
      )}
    </div>
  );
};

export default Input;
