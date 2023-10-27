import styled from "styled-components";

function TestNotifincation() {
  return (
    <Center>
      <TextBox>
        <div>
          <Title>이용 방법</Title>
          <Content>제시되는 화면을 보고 표정을 지어주세요.</Content>
        </div>

        <div>
          <Title>주의 사항</Title>
          <Content>화면에 눈, 코, 입이 모두 나오도록 설정해주세요</Content>
          <Content>
            다음 단계로 넘어가면 이전 단계로 돌아올 수 없습니다.
          </Content>
        </div>
      </TextBox>
    </Center>
  );
}

export default TestNotifincation;

const Center = styled.div`
  background-color: rgba(255, 255, 255, 0.83);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const Title = styled.h1`
  line-height: 2rem;
  font-weight: 600;
`;

const Content = styled.p`
  line-height: 1.5rem;
`;
