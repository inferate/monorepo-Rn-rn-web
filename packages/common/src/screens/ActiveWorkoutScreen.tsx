import React from "react";
import { Container, Title } from "../styled/DefaultLayout/DefaultLayoutTitle";

interface IActiveWorkoutScreen {}
export const ActiveWorkoutScreen: React.FC<IActiveWorkoutScreen> = () => {
  return (
    <Container>
      <Title>This is your current WK </Title>
    </Container>
  );
};
