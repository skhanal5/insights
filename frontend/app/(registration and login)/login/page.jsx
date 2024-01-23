import PageContainer from "../components/PageContainer";
import LoginForm from "../components/LoginForm";
export default function LoginPage() {
  return (
    <>
      <PageContainer child={<LoginForm></LoginForm>}>
      </PageContainer>
    </>
  );
}
