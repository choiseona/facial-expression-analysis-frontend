import Header from "../../components/Common/Header";
import BackgroundVideo from "../../components/Homepage/BackgroundVideo";
import ProgramIntroduction from "../../components/Homepage/ProgramIntroduction";
import ProgramStartButton from "../../components/Homepage/ProgramStartButton";
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <Header />
      <BackgroundVideo />

      <Layout>
        <Layout2>
          <Layout3>
            <ProgramIntroduction />
          </Layout3>
          <Layout4>
            <ProgramStartButton />
          </Layout4>
        </Layout2>
      </Layout>
    </>
  );
}

export default HomePage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Layout2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 40%;
  margin-right: 5%;
`;
const Layout3 = styled.div`
  display: flex;
  justify-content: end;
`;

const Layout4 = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: end;
`;
