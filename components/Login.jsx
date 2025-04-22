function Login() {
  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
