import { css } from "styled-components";

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const desktop825 = (props: any) => {
  return css`
    @media screen and (max-width: 825px) {
      ${props}
    }
  `;
};

export const tablette768 = (props: any) => {
  return css`
    @media screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const tablette630 = (props: any) => {
  return css`
    @media screen and (max-width: 630px) {
      ${props}
    }
  `;
};

export const tablette560 = (props: any) => {
  return css`
    @media screen and (max-width: 560px) {
      ${props}
    }
  `;
};

export const tablette530 = (props: any) => {
  return css`
    @media screen and (max-width: 530px) {
      ${props}
    }
  `;
};

export const tablette510 = (props: any) => {
  return css`
    @media screen and (max-width: 510px) {
      ${props}
    }
  `;
};

export const tablette500 = (props: any) => {
  return css`
    @media screen and (max-width: 500px) {
      ${props}
    }
  `;
};
