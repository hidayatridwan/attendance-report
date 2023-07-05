"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Page = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [session]);

  const submitHandler = async () => {
    const res = await signIn("credentials", {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
      redirect: false,
    });

    if (res.error) {
      alert(res.error);
    }
  };

  return (
    <div className="login">
      <main className="login__container">
        <div>
          <h1 className="login__title">Login</h1>
          <p className="login__subtitle">
            Please login to get report attendance
          </p>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="login__input"
          ref={usernameInputRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="login__input"
          ref={passwordInputRef}
        />
        <button type="button" className="login__button" onClick={submitHandler}>
          Login
        </button>
      </main>
    </div>
  );
};

export default Page;
