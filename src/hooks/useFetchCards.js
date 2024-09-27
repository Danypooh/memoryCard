import { useState, useEffect } from "react";

export const useFetchCards = (url) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      const cardData = data.results.map((card, index) => ({
        id: index,
        name: card.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setCards(cardData);
      setLoading(false);
    };

    fetchCardData();
  }, [url]);

  return { cards, loading };
};
