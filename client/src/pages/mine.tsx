import { User, Plus, Minus, CreditCard, Wallet, Gift, Users, Download, LogOut, ChevronRight, Info } from "lucide-react";

export default function Mine() {
  const user = {
    name: "Player2963249",
    balance: 2.55,
    vipLevel: 0,
    vipProgress: 25,
    vipTarget: 5000,
    isVip: false,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
  };

  const appVersion = "2.7.34";

  const menuItems = [
    { icon: Info, label: "My Info", color: "text-casino-gold" },
    { icon: Wallet, label: "Balance details", color: "text-casino-gold" },
    { icon: Gift, label: "Gift", color: "text-casino-gold" },
    { icon: Users, label: "About us", color: "text-casino-gold" },
    { icon: Download, label: "Download APP", color: "text-casino-gold" },
    { icon: User, label: appVersion, color: "text-casino-gold", isVersion: true },
  ];

  return (
    <main className="max-w-md mx-auto px-4 py-6 min-h-screen bg-gradient-to-b from-casino-deep-brown to-casino-dark-brown" data-testid="page-mine">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-casino-gold">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <User className="text-2xl text-white" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-white text-lg font-semibold">{user.name}</h2>
              <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-2 py-1 rounded text-xs text-black font-bold">
                VIP{user.vipLevel}
              </div>
            </div>
            <p className="text-casino-gold text-xl font-bold">₹{user.balance.toFixed(2)}</p>
          </div>
        </div>

        {/* Deposit/Withdraw Buttons */}
        <div className="flex space-x-2">
          <button className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors" data-testid="button-deposit">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mb-1">
                <Plus className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-xs">Deposit</span>
            </div>
          </button>
          
          <button className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors" data-testid="button-withdraw">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center mb-1">
                <Minus className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-xs">Withdraw</span>
            </div>
          </button>
        </div>
      </div>

      {/* VIP Progress Card */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full transform translate-x-8 -translate-y-8 opacity-20"></div>
        <div className="relative">
          <h3 className="text-amber-800 text-3xl font-bold mb-2">VIP {user.vipLevel}</h3>
          <p className="text-amber-700 text-sm mb-4">
            Upgrade to VIP {user.vipLevel + 1} with ₹{user.vipTarget} left
          </p>
          <div className="flex justify-end">
            <ChevronRight className="text-amber-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex flex-col items-center p-4 bg-casino-brown rounded-xl hover:bg-casino-dark-brown transition-colors"
            data-testid={`menu-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-casino-gold to-casino-orange rounded-lg flex items-center justify-center mb-3">
              {item.isVersion ? (
                <span className="text-casino-deep-brown font-bold text-xs">V</span>
              ) : (
                <item.icon className="w-6 h-6 text-casino-deep-brown" />
              )}
            </div>
            <span className={`text-sm font-medium ${item.color} text-center`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-casino-gold to-casino-orange px-8 py-3 rounded-xl font-semibold text-casino-deep-brown hover:from-casino-orange hover:to-casino-gold transition-all duration-300 shadow-lg">
          <LogOut className="w-5 h-5 mr-2 inline" />
          Logout
        </button>
      </div>
    </main>
  );
}
