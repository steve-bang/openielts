export type UserRole = "student" | "teacher" | "admin" | "super_admin";
export type AuthProvider = "email" | "google";
export type SubscriptionStatus = "free" | "premium";

export interface UserProfile {
  fullName: string | null;
  avatarUrl: string | null;
  targetBand: number | null;
  currentBand: number | null;
  nationality: string | null;
  bio: string | null;
  timezone: string;
  languageCode: string;
}

export interface UserSubscription {
  status: SubscriptionStatus;
  expiresAt: string | null;
}

export interface UserStats {
  streak: number;
  lastActiveAt: string;
  totalSubmissions: number;
}

/** Shape of a document in Firestore `users/{uid}` */
export interface UserDocument {
  uid: string;
  email: string;
  role: UserRole;
  provider: AuthProvider;
  emailVerified: boolean;
  isActive: boolean;
  passwordHash?: string;
  profile: UserProfile;
  subscription: UserSubscription;
  stats: UserStats;
  createdAt: string;
  updatedAt: string;
}

/** Subset exposed to the client via session / API responses — no sensitive fields */
export interface PublicUser {
  uid: string;
  email: string;
  role: UserRole;
  profile: UserProfile;
  subscription: UserSubscription;
  stats: UserStats;
}
