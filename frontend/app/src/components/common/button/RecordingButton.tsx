import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RecordingButtonProps {
  isRecording?: boolean;
  onClick: () => void;
  leftIcon: ReactNode;
  children: ReactNode;
}

const RecordingButton = ({
  isRecording = false,
  onClick,
  children,
  leftIcon,
}: RecordingButtonProps) => {
  console.log(isRecording);
  return (
    <Button
      bg={isRecording ? "#e53e3e" : "#0a192f"}
      color="white"
      size="lg"
      onClick={onClick}
      leftIcon={leftIcon}
      _hover={{ bg: isRecording ? "#c53030" : "#071426" }}
      _active={{ bg: isRecording ? "#e53e3e" : "#0a192f" }}
    >
      {children}
    </Button>
  );
};

export default RecordingButton;
