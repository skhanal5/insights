import PageContainer from "../components/PageContainer";
import Login from "../components/LoginSidebar";
export default function LoginPage() {
  return (
    <>
      <PageContainer child={<Login></Login>}>
      </PageContainer>
    </>
  );
}
