import { useQuery } from "@tanstack/react-query";
import { Gift, Percent } from "lucide-react";

export default function Promo() {
  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8" data-testid="page-promo">
      <div className="text-center py-16">
        <Gift className="w-16 h-16 text-casino-gold mb-6 mx-auto" />
        <h2 className="text-3xl font-playfair font-bold text-casino-gold mb-4">
          Exciting Promotions
        </h2>
        <p className="text-white text-lg mb-8">
          Discover amazing bonuses and rewards waiting for you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Bonus Promo */}
          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <Percent className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Welcome Bonus</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">100% Match</p>
            <p className="text-sm mb-4">Up to ₹50,000 on your first deposit</p>
            <button className="button-3d px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              Claim Now
            </button>
          </div>

          {/* Daily Cashback */}
          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <div className="text-4xl text-casino-gold mb-4">🪙</div>
            <h3 className="text-xl font-semibold mb-2">Daily Cashback</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">Up to 15%</p>
            <p className="text-sm mb-4">Get cashback on all games daily</p>
            <button className="button-3d px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* VIP Tournament */}
          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <div className="text-4xl text-casino-gold mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">VIP Tournament</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">₹1,00,000</p>
            <p className="text-sm mb-4">Exclusive tournament prize pool</p>
            <button className="button-3d px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
