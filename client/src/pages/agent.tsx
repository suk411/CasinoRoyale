import { Users, TrendingUp, DollarSign, Award } from "lucide-react";

export default function Agent() {
  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8" data-testid="page-agent">
      <div className="text-center py-16">
        <Users className="w-16 h-16 text-casino-gold mb-6 mx-auto" />
        <h2 className="text-3xl font-playfair font-bold text-casino-gold mb-4">
          Agent Program
        </h2>
        <p className="text-white text-lg mb-8">
          Join our exclusive agent network and earn commissions!
        </p>

        {/* Agent Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <TrendingUp className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">High Commissions</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">Up to 40%</p>
            <p className="text-sm">Earn on every player you refer</p>
          </div>

          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <DollarSign className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Weekly Payouts</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">Guaranteed</p>
            <p className="text-sm">Regular and reliable payments</p>
          </div>

          <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
            <Award className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Support</h3>
            <p className="text-casino-gold text-2xl font-bold mb-2">24/7</p>
            <p className="text-sm">Dedicated agent support team</p>
          </div>
        </div>

        {/* CTA */}
        <div className="balance-card rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Start?</h3>
          <p className="mb-6">Join thousands of successful agents earning with Royal Casino</p>
          <button className="button-3d px-8 py-3 rounded-lg font-semibold transition-all duration-300 mr-4">
            Apply Now
          </button>
          <button className="bg-transparent border-2 border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-deep-brown px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
