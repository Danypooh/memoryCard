function Header({ title, body }) {
  return (
    <>
      <div id="header-container" class="container mt-5">
        <div class="card text-center shadow-lg">
          <div class="card-header bg-dark text-white">
            <h1 class="display-4">{title}</h1>
          </div>
          <div class="card-body">
            <p class="lead">{body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
