import CreateAccount from "../components/RegisterForm";
import PageContainer from "../components/PageContainer";
export default function Home() {

  return (
    <>
    <PageContainer child={<CreateAccount></CreateAccount>}>
    </PageContainer>
    </>
  );
}
