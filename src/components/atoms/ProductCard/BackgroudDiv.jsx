'use client'
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background: ${(props) => `url(${props.src1})`};
  background-size: cover;
  background-repeat: no;
  &:hover {
    background: ${(props) => `url(${props.src2})`};
    background-size: cover;
  }
`;

export default BackgroundDiv;