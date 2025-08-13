import { User, History, CreditCard, Settings, Trophy } from "lucide-react";

export default function Mine() {
  const user = {
    name: "Player",
    username: "player123",
    balance: 25450.00,
    totalWinnings: 125000.00,
    gamesPlayed: 234,
    isVip: true,
  };

  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8" data-testid="page-mine">
      {/* Profile Header */}
      <div className="balance-card rounded-2xl p-6 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-casino-gold to-casino-orange rounded-full flex items-center justify-center gold-glow">
            <User className="text-3xl text-casino-deep-brown" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-playfair font-bold mb-2">{user.name}</h2>
            <p className="text-casino-gold">@{user.username}</p>
            <p className="text-sm">{user.isVip ? "VIP Member" : "Member"} • {user.gamesPlayed} games played</p>
          </div>
        </div>
      </div>

      {/* Account Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
          <CreditCard className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Current Balance</h3>
          <p className="text-casino-gold text-2xl font-bold">
            ₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
          <Trophy className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Total Winnings</h3>
          <p className="text-casino-gold text-2xl font-bold">
            ₹{user.totalWinnings.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="game-card rounded-2xl p-6 text-white text-center card-3d">
          <History className="w-12 h-12 text-casino-gold mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Games Played</h3>
          <p className="text-casino-gold text-2xl font-bold">{user.gamesPlayed}</p>
        </div>
      </div>

      {/* Account Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Transaction History */}
        <div className="game-card rounded-2xl p-6 text-white">
          <div className="flex items-center mb-4">
            <History className="w-6 h-6 text-casino-gold mr-3" />
            <h3 className="text-xl font-semibold">Recent Transactions</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-casino-brown">
              <span>Slot Game Win</span>
              <span className="text-green-400">+₹1,250</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-casino-brown">
              <span>Deposit</span>
              <span className="text-green-400">+₹5,000</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-casino-brown">
              <span>Blackjack</span>
              <span className="text-red-400">-₹500</span>
            </div>
          </div>
          <button className="button-3d w-full mt-4 py-2 rounded-lg font-semibold transition-all duration-300">
            View All Transactions
          </button>
        </div>

        {/* Account Settings */}
        <div className="game-card rounded-2xl p-6 text-white">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-casino-gold mr-3" />
            <h3 className="text-xl font-semibold">Account Settings</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left py-3 px-4 bg-casino-dark-brown rounded-lg hover:bg-casino-brown transition-colors">
              Change Password
            </button>
            <button className="w-full text-left py-3 px-4 bg-casino-dark-brown rounded-lg hover:bg-casino-brown transition-colors">
              Payment Methods
            </button>
            <button className="w-full text-left py-3 px-4 bg-casino-dark-brown rounded-lg hover:bg-casino-brown transition-colors">
              Notifications
            </button>
            <button className="w-full text-left py-3 px-4 bg-casino-dark-brown rounded-lg hover:bg-casino-brown transition-colors">
              Privacy Settings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
