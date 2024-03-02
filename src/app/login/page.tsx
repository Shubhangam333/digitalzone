import { LoginForm } from "@/components/layout-components/LoginForm";

export default function Register() {
  return (
    <section className="flex flex-col justify-center gap-4 items-center  min-h-screen">
      <h1 className="text-2xl text-primary">Login</h1>
      <LoginForm />
    </section>
  );
}
