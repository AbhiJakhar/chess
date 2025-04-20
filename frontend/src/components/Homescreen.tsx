const Homescreen = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="d-grid gap-2 col-4">
        <button className="btn btn-success" type="button">
          New Game
        </button>
        <button className="btn btn-warning" type="button">
          Resume
        </button>
        <button className="btn btn-primary" type="button">
          Settings
        </button>
      </div>
    </div>
  );
};

export default Homescreen;
