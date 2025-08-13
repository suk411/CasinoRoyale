import { User, Plus, Minus } from "lucide-react";

interface ProfileSectionProps {
  user: {
    name: string;
    balance: number;
    isVip: boolean;
  };
  onDeposit: () => void;
  onWithdraw: () => void;
}

export default function ProfileSection({ user, onDeposit, onWithdraw }: ProfileSectionProps) {
  return (
    <div className="mb-8" data-testid="section-profile">
      <div className="balance-card rounded-2xl p-6 text-white shadow-3d">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Profile Avatar */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-casino-gold to-casino-orange rounded-full flex items-center justify-center gold-glow">
              <User className="text-2xl text-casino-deep-brown" data-testid="icon-user-avatar" />
            </div>
            <div>
              <h3 className="text-xl font-semibold" data-testid="text-user-name">
                Welcome, {user.name}!
              </h3>
              <p className="text-casino-gold font-medium" data-testid="text-user-status">
                {user.isVip ? "VIP Member" : "Member"}
              </p>
            </div>
          </div>

          {/* Balance Display */}
          <div className="text-center">
            <p className="text-casino-gold text-sm font-medium">Available Balance</p>
            <p className="text-3xl font-bold text-white" data-testid="text-balance">
              ₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              className="button-3d px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={onDeposit}
              data-testid="button-deposit"
            >
              <Plus className="w-4 h-4 mr-2" />
              Deposit
            </button>
            <button
              className="button-3d px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              onClick={onWithdraw}
              data-testid="button-withdraw"
            >
              <Minus className="w-4 h-4 mr-2" />
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
