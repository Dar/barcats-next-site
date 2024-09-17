import RegisterForm from "@/app/components/RegisterForm";
import Providers from "../utils/providers";

export default function Register() {
  return (
    <Providers>
      <main className="flex-grow flex justify-center items-center mt-32 mb-16">
        <RegisterForm />
      </main>
    </Providers>
  );
}
