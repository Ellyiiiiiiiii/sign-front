import SignLayout from "@/components/layout/sign-layout";
import { useAuth } from "@/contexts/my-auth-context";

export default function QuickLogin() {
  const { auth, login } = useAuth();

  return (
    <SignLayout>
      <h2>快速登入頁</h2>
      <h3>目前登入: {auth.name}</h3>
      <hr />
      <button
        onClick={() => login("mail62771@test.com", "123456")}
      >
        登入 謝鈺婷
      </button>
      <hr />
      <button
        onClick={() => login("mail29919@test.com", "123456")}
      >
        登入 鄧冠霖
      </button>
      <hr />
    </SignLayout>
  );
}
