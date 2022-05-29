import styled from "styled-components"

export const BaseNavi = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.color ?? "gray"};
  min-width: 20vw;
`
