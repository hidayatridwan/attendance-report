const Page = () => {
  return (
    <div className="login">
      <main className="login__container">
        <div>
          <h1 className="login__title">Login</h1>
          <p className="login__subtitle">
            Please login to get report attendance
          </p>
        </div>
        <input type="text" placeholder="Username" className="login__input" />
        <input
          type="password"
          placeholder="Password"
          className="login__input"
        />
        <button type="button" className="login__button">
          Login
        </button>
      </main>
    </div>
  );
};

export default Page;
