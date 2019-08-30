import { observer } from "mobx-react-lite";
import React from "react";
import { Navigation2, NavigationStoreContext } from "../stores/NavigationStore";
import { theme } from "../styled";
import { CustomButton } from "../styled/DefaultButton/DefaultButton";
import { Container, Title } from "../styled/DefaultLayout/DefaultLayoutTitle";

interface IWokroutHistory {}

export const WorkoutHistoryScreen: React.FC<IWokroutHistory> = observer(() => {
  const navigationStore = React.useContext(NavigationStoreContext);
  return (
    <Container>
      <Title>This is your WK History</Title>
      <CustomButton
        backgroundColor={theme.buttonStyles.main}
        color={theme.textStyle.primary}
        title={"WK"}
        onPress={() => {
          navigationStore.path = Navigation2.ActiveWorkoutScreen;
        }}
      />
    </Container>
  );
});
