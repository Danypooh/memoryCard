function Card({ id, name, image, onCardPick }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg" onClick={() => onCardPick(id)}>
        <img src={image} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
}

export { Card };
