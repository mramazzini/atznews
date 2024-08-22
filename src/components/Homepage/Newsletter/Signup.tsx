const Signup = () => {
  return (
    <form>
      <fieldset className="form-control w-80">
        <div className="join">
          <input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered join-item"
          />
          <button className="btn btn-accent join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Signup;
