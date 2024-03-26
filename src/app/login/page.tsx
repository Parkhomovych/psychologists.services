import LoginForm from "@/app/components/auth/LoginForm";

export default async function page() {
  return (
    <div className="w-[566px] m-auto p-16">
      <h2 className="mb-5 font-medium text-4xl text-black dark:text-gray-50">
        Log In
      </h2>
      <p className="mb-10 font-normal text-base text-white06  dark:text-gray-500">
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <LoginForm />
    </div>
  );
}
