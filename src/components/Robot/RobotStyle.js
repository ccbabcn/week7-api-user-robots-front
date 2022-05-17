import styled from "styled-components";

export const RobotStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  .robot {
    color: #f7f3e3;
    width: 18rem;
    background: #201a23;
    li {
      color: #201a23;
      background: #f7f3e3;
    }
    img {
      object-fit: cover;
      object-position: top;
    }
  }
`;
