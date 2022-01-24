import styled from "styled-components";

export const HeadingWrapper = styled.div<HeadingWrapperProps>`
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 12rem;
  padding-bottom: 8rem;
  color: ${({ theme }) => theme.colors.Gray};
`;
