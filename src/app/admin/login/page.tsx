import LoginForm from "../../components/LoginForm";
import Providers from "../utils/providers";
Providers;
export default function Login() {
  return (
    <Providers>
      <main className="flex-grow flex justify-center items-center mt-32 mb-16">
        <LoginForm />
      </main>
    </Providers>
  );
}
