import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
        bg-gradient-to-r from-cyan-700  to-pink-200  from-purple-200 to-blue-500 to-indigo-500
      "
    
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="200"
          width="200"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
          >
            Sign in to your account
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
