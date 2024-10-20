import { css } from '@emotion/css';

const buttonStyles = css`
    background-color: var(--primary);
    color: var(--text-color);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-hover);
    }
  `;

export const Button = ({ label, onClick }) => {
  const button = document.createElement('button');
  button.className = buttonStyles;
  button.innerHTML = label;
  button.onclick = onClick;
  return button;
};
