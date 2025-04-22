function Register() {
  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Register</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
