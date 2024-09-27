function Card({ id, name, image, onCardPick }) {
  return (
    <div className="col-6 col-md-3 mb-3">
      <div className="card shadow-lg" onClick={() => onCardPick(id)}>
        <img src={image} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
}

export { Card };
