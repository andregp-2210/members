import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
  --primary-color:#0056b3;
  --light-primary-color:#0a58ca;
  --dark-primary-color:#0b5ed7;
  --success-color:#28A746;
  --danger-color:#dc3545;
  --light-danger-color:#b02a37;
  --dark-danger-color:#bb2d3b;
  --warning-color:#ffc107;
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    box-sizing:border-box;
  }
  .disabled{
    color:#a9a9a9;
  }
  button{
    color:#fff;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  button:hover{
    cursor: pointer;
  }
  button.primary{
    background-color:var(--primary-color);
    border-color: var(--light-primary-color);
  }
  button.primary:hover{
    background-color:var(--dark-primary-color);
    border-color: var(--light-primary-color);
  }
  button.primary:focus{
    background-color: var(--dark-primary-color);
    border-color: var(--light-primary-color);
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
  button.danger{
    background-color:var(--danger-color);
    border-color: var(--dark-danger-color);
  }
  button.danger:hover{
    border-color: var(--light-danger-color);;
  }
  button.danger:focus{
    background-color:var(--dark-danger-color);
    border-color: var(--light-danger-color);
    box-shadow: 0 0 0 0.25rem rgb(225 83 97 / 50%);
  }
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
