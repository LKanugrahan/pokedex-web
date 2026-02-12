import { render, screen } from "@testing-library/react";
import { PokemonCard } from "@/components/PokemonCard";
import { Pokemon } from "@/types/pokemon";

const mockPokemon: Pokemon = {
  _id: "1",
  id: 25,
  name: "pikachu",
  sprites: {
    front_default: "https://example.com/pikachu.png",
    back_default: "https://example.com/pikachu-back.png",
    front_shiny: "https://example.com/pikachu-shiny.png",
  },
  height: 4,
  weight: 60,
  types: ["electric"],
  moves: [],
  species_url: "https://example.com/species/25",
};

describe("PokemonCard", () => {
  it("renders pokemon name correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText("pikachu")).toBeInTheDocument();
  });

  it("renders pokemon ID correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText("#025")).toBeInTheDocument();
  });

  it("renders pokemon type correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText("electric")).toBeInTheDocument();
  });

  it("has correct link to detail page", () => {
    const { container } = render(<PokemonCard pokemon={mockPokemon} />);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/pokemon/pikachu");
  });
});
