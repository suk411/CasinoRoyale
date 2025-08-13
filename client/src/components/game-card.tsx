import { Play, Star } from "lucide-react";

interface Game {
  id: string;
  name: string;
  category: string;
  icon: string;
  minBet: number;
  maxBet: number;
  rating: number;
  players: number;
}

interface GameCardProps {
  game: Game;
  onPlay: (gameId: string) => void;
}

export default function GameCard({ game, onPlay }: GameCardProps) {
  const getGameIcon = (icon: string) => {
    switch (icon) {
      case "fas fa-coins":
        return "🪙";
      case "fas fa-spade":
        return "♠️";
      case "fas fa-circle-dot":
        return "🎯";
      case "fas fa-trophy":
        return "🏆";
      case "fas fa-diamond":
        return "💎";
      case "fas fa-star":
        return "⭐";
      case "fas fa-crown":
        return "👑";
      case "fas fa-dharmachakra":
        return "🎡";
      default:
        return "🎰";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-casino-gold fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div
      className="game-card card-3d rounded-2xl overflow-hidden p-4 group cursor-pointer"
      onClick={() => onPlay(game.id)}
      data-testid={`game-card-${game.id}`}
    >
      {/* Game Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-casino-brown to-casino-dark-brown rounded-xl mb-4 flex items-center justify-center">
        <div className="text-6xl" data-testid={`game-icon-${game.id}`}>
          {getGameIcon(game.icon)}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
          <button 
            className="button-3d w-16 h-16 rounded-full flex items-center justify-center"
            data-testid={`button-play-${game.id}`}
          >
            <Play className="text-xl ml-1" />
          </button>
        </div>
      </div>

      {/* Game Info */}
      <div className="text-white">
        <h3 className="text-lg font-semibold mb-2" data-testid={`text-game-name-${game.id}`}>
          {game.name}
        </h3>
        <div className="flex items-center justify-between text-sm text-casino-gold mb-2">
          <span data-testid={`text-min-bet-${game.id}`}>Min: ₹{game.minBet.toLocaleString()}</span>
          <span data-testid={`text-max-bet-${game.id}`}>Max: ₹{game.maxBet.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center" data-testid={`rating-${game.id}`}>
            {renderStars(game.rating)}
          </div>
          <span className="text-gray-300" data-testid={`text-players-${game.id}`}>
            ({game.players.toLocaleString()} playing)
          </span>
        </div>
      </div>
    </div>
  );
}
