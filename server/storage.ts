import { type User, type InsertUser, type Game, type Banner, type InsertGame, type InsertBanner } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllGames(): Promise<Game[]>;
  getGamesByCategory(category: string): Promise<Game[]>;
  getAllBanners(): Promise<Banner[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private games: Map<string, Game>;
  private banners: Map<string, Banner>;

  constructor() {
    this.users = new Map();
    this.games = new Map();
    this.banners = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize sample games
    const sampleGames: Game[] = [
      {
        id: "1",
        name: "Royal Slots",
        category: "slots",
        icon: "fas fa-coins",
        minBet: 10,
        maxBet: 5000,
        rating: 5,
        players: 1247,
        isActive: true,
      },
      {
        id: "2",
        name: "Blackjack Pro",
        category: "table",
        icon: "fas fa-spade",
        minBet: 50,
        maxBet: 10000,
        rating: 4,
        players: 893,
        isActive: true,
      },
      {
        id: "3",
        name: "Live Roulette",
        category: "live",
        icon: "fas fa-circle-dot",
        minBet: 25,
        maxBet: 15000,
        rating: 5,
        players: 645,
        isActive: true,
      },
      {
        id: "4",
        name: "Mega Jackpot",
        category: "jackpot",
        icon: "fas fa-trophy",
        minBet: 100,
        maxBet: 20000,
        rating: 5,
        players: 2156,
        isActive: true,
      },
      {
        id: "5",
        name: "Poker Master",
        category: "table",
        icon: "fas fa-diamond",
        minBet: 20,
        maxBet: 8000,
        rating: 4,
        players: 567,
        isActive: true,
      },
      {
        id: "6",
        name: "Lucky 7 Slots",
        category: "slots",
        icon: "fas fa-star",
        minBet: 5,
        maxBet: 2500,
        rating: 4,
        players: 892,
        isActive: true,
      },
      {
        id: "7",
        name: "Baccarat Elite",
        category: "live",
        icon: "fas fa-crown",
        minBet: 100,
        maxBet: 25000,
        rating: 5,
        players: 334,
        isActive: true,
      },
      {
        id: "8",
        name: "Fortune Wheel",
        category: "jackpot",
        icon: "fas fa-dharmachakra",
        minBet: 50,
        maxBet: 12000,
        rating: 4,
        players: 756,
        isActive: true,
      },
    ];

    // Initialize sample banners
    const sampleBanners: Banner[] = [
      {
        id: "1",
        title: "Welcome Bonus",
        description: "Get 100% match bonus up to ₹50,000",
        cta: "Claim Now",
        icon: "fas fa-gift",
        gradientFrom: "#DC143C",
        gradientTo: "#8B4513",
        isActive: true,
        order: 1,
      },
      {
        id: "2",
        title: "VIP Tournament",
        description: "Join exclusive tournament with ₹1,00,000 prize pool",
        cta: "Enter Now",
        icon: "fas fa-trophy",
        gradientFrom: "#8B4513",
        gradientTo: "#2F1B14",
        isActive: true,
        order: 2,
      },
      {
        id: "3",
        title: "Daily Cashback",
        description: "Get up to 15% cashback on all games",
        cta: "Play Now",
        icon: "fas fa-coins",
        gradientFrom: "#2F1B14",
        gradientTo: "#DC143C",
        isActive: true,
        order: 3,
      },
    ];

    // Populate games
    sampleGames.forEach(game => {
      this.games.set(game.id, game);
    });

    // Populate banners
    sampleBanners.forEach(banner => {
      this.banners.set(banner.id, banner);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      balance: "0.00",
      isVip: false,
      avatar: null,
    };
    this.users.set(id, user);
    return user;
  }

  async getAllGames(): Promise<Game[]> {
    return Array.from(this.games.values()).filter(game => game.isActive);
  }

  async getGamesByCategory(category: string): Promise<Game[]> {
    return Array.from(this.games.values()).filter(
      game => game.isActive && game.category === category
    );
  }

  async getAllBanners(): Promise<Banner[]> {
    return Array.from(this.banners.values())
      .filter(banner => banner.isActive)
      .sort((a, b) => a.order - b.order);
  }
}

export const storage = new MemStorage();
