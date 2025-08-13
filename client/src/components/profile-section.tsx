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
    <div className="mb-6" data-testid="section-profile">
      <div className="balance-card rounded-xl p-4 text-white shadow-3d">
        <div className="flex items-center justify-between space-x-3">
          {/* Profile Avatar & Name */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-casino-gold to-casino-orange rounded-full flex items-center justify-center gold-glow">
              <User className="text-lg text-casino-deep-brown" data-testid="icon-user-avatar" />
            </div>
            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold" data-testid="text-user-name">
                {user.name}
              </h3>
              <p className="text-casino-gold text-sm font-medium" data-testid="text-user-status">
                {user.isVip ? "VIP" : "Member"}
              </p>
            </div>
          </div>

          {/* Balance Display */}
          <div className="text-center flex-1 min-w-0">
            <p className="text-casino-gold text-xs font-medium">Balance</p>
            <p className="text-xl sm:text-2xl font-bold text-white truncate" data-testid="text-balance">
              ₹{user.balance.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 flex-shrink-0">
            <button
              className="button-3d px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
              onClick={onDeposit}
              data-testid="button-deposit"
            >
              <Plus className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Deposit</span>
            </button>
            <button
              className="button-3d px-3 py-2 rounded-lg font-semibold transition-all duration-300 text-sm"
              onClick={onWithdraw}
              data-testid="button-withdraw"
            >
              <Minus className="w-4 h-4 sm:mr-1" />
              <span className="hidden sm:inline">Withdraw</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
