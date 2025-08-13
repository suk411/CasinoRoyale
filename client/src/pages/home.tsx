import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import ProfileSection from "@/components/profile-section";
import BannerSlider from "@/components/banner-slider";
import GameCard from "@/components/game-card";
import type { Game, Banner } from "@shared/schema";

const gameCategories = [
  { id: "all", name: "All Games" },
  { id: "slots", name: "Slots" },
  { id: "table", name: "Table Games" },
  { id: "live", name: "Live Casino" },
  { id: "jackpot", name: "Jackpot" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  // Mock user data - replace with actual API call
  const user = {
    name: "Player",
    balance: 25450.00,
    isVip: true,
  };

  const { data: games = [], isLoading: gamesLoading } = useQuery<Game[]>({
    queryKey: ["/api/games"],
  });

  const { data: banners = [], isLoading: bannersLoading } = useQuery<Banner[]>({
    queryKey: ["/api/banners"],
  });

  const filteredGames = selectedCategory === "all" 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const handleDeposit = () => {
    toast({
      title: "Deposit",
      description: "Deposit functionality will be implemented soon.",
    });
  };

  const handleWithdraw = () => {
    toast({
      title: "Withdraw", 
      description: "Withdraw functionality will be implemented soon.",
    });
  };

  const handlePlayGame = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    toast({
      title: "Starting Game",
      description: `Loading ${game?.name}...`,
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8" data-testid="page-home">
      {/* Profile & Balance Section */}
      <ProfileSection
        user={user}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
      />

      {/* Banner Slider */}
      {bannersLoading ? (
        <div className="mb-8 h-64 md:h-80 bg-casino-dark-brown rounded-2xl animate-pulse" />
      ) : (
        <BannerSlider banners={banners} />
      )}

      {/* Game Categories */}
      <div className="mb-6">
        <h2 className="text-2xl font-playfair font-bold text-casino-gold mb-6" data-testid="heading-featured-games">
          Featured Games
        </h2>
        <div className="flex flex-wrap gap-4 mb-6" data-testid="game-categories">
          {gameCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-3d hover:shadow-3d-hover ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-casino-gold to-casino-orange text-casino-deep-brown"
                  : "bg-gradient-to-r from-casino-dark-brown to-casino-brown text-casino-gold hover:from-casino-brown hover:to-casino-dark-brown"
              }`}
              data-testid={`button-category-${category.id}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="games-grid">
        {gamesLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-80 bg-casino-dark-brown rounded-2xl animate-pulse"
              data-testid={`game-skeleton-${index}`}
            />
          ))
        ) : filteredGames.length === 0 ? (
          <div className="col-span-full text-center py-16" data-testid="no-games-message">
            <div className="text-6xl mb-4">🎰</div>
            <h3 className="text-xl font-semibold text-casino-gold mb-2">No Games Found</h3>
            <p className="text-white">No games available in this category.</p>
          </div>
        ) : (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={handlePlayGame}
            />
          ))
        )}
      </div>
    </main>
  );
}
