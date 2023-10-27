import Background from "@/components/Common/Background";
import Header from "@/components/Common/Header";
import TestSample from "@/components/TestProgresspage/TestSample";
import styled from "styled-components";

function TestProgressPage() {
  return (
    <Background>
      <Header />
      <FlexCenter>
        <TestSample />
      </FlexCenter>
    </Background>
  );
}

export default TestProgressPage;

const FlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
