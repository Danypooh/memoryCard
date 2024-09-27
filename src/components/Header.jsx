function Header({ title, body }) {
  return (
    <div id="header-container" className="container-fluid">
      <div className="card text-center shadow-lg">
        <div className="card-header bg-dark text-white">
          <h1 className="display-4">{title}</h1>
        </div>
        <div className="card-body">
          <p className="lead">{body}</p>
        </div>
      </div>
    </div>
  );
}

export { Header };
