
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tree
 * 
 */
export type Tree = $Result.DefaultSelection<Prisma.$TreePayload>
/**
 * Model TreeUpdate
 * 
 */
export type TreeUpdate = $Result.DefaultSelection<Prisma.$TreeUpdatePayload>
/**
 * Model TreeAdoption
 * 
 */
export type TreeAdoption = $Result.DefaultSelection<Prisma.$TreeAdoptionPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model RewardRedemption
 * 
 */
export type RewardRedemption = $Result.DefaultSelection<Prisma.$RewardRedemptionPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model LearningModule
 * 
 */
export type LearningModule = $Result.DefaultSelection<Prisma.$LearningModulePayload>
/**
 * Model GlobalStats
 * 
 */
export type GlobalStats = $Result.DefaultSelection<Prisma.$GlobalStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TreeSource: {
  NURSERY: 'NURSERY',
  HOMEGROWN: 'HOMEGROWN',
  GRAFTED: 'GRAFTED',
  WILD_SEEDLING: 'WILD_SEEDLING'
};

export type TreeSource = (typeof TreeSource)[keyof typeof TreeSource]


export const HealthStatus: {
  EXCELLENT: 'EXCELLENT',
  HEALTHY: 'HEALTHY',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR',
  CRITICAL: 'CRITICAL',
  DEAD: 'DEAD'
};

export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus]


export const BadgeCategory: {
  STARTER: 'STARTER',
  GROWTH: 'GROWTH',
  CARE: 'CARE',
  COMMUNITY: 'COMMUNITY',
  IMPACT: 'IMPACT',
  SPECIAL: 'SPECIAL'
};

export type BadgeCategory = (typeof BadgeCategory)[keyof typeof BadgeCategory]


export const RewardCategory: {
  MERCHANDISE: 'MERCHANDISE',
  DISCOUNTS: 'DISCOUNTS',
  EVENTS: 'EVENTS',
  DIGITAL: 'DIGITAL',
  PHYSICAL: 'PHYSICAL'
};

export type RewardCategory = (typeof RewardCategory)[keyof typeof RewardCategory]


export const RedemptionStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type RedemptionStatus = (typeof RedemptionStatus)[keyof typeof RedemptionStatus]


export const CertificateType: {
  TREE_OWNERSHIP: 'TREE_OWNERSHIP',
  ADOPTION: 'ADOPTION',
  ACHIEVEMENT: 'ACHIEVEMENT',
  PARTICIPATION: 'PARTICIPATION'
};

export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType]


export const NotificationType: {
  TREE_UPDATE_REMINDER: 'TREE_UPDATE_REMINDER',
  ADOPTION_REQUEST: 'ADOPTION_REQUEST',
  BADGE_EARNED: 'BADGE_EARNED',
  POINT_MILESTONE: 'POINT_MILESTONE',
  SYSTEM_UPDATE: 'SYSTEM_UPDATE',
  COMMUNITY_NEWS: 'COMMUNITY_NEWS'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const Difficulty: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type TreeSource = $Enums.TreeSource

export const TreeSource: typeof $Enums.TreeSource

export type HealthStatus = $Enums.HealthStatus

export const HealthStatus: typeof $Enums.HealthStatus

export type BadgeCategory = $Enums.BadgeCategory

export const BadgeCategory: typeof $Enums.BadgeCategory

export type RewardCategory = $Enums.RewardCategory

export const RewardCategory: typeof $Enums.RewardCategory

export type RedemptionStatus = $Enums.RedemptionStatus

export const RedemptionStatus: typeof $Enums.RedemptionStatus

export type CertificateType = $Enums.CertificateType

export const CertificateType: typeof $Enums.CertificateType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tree`: Exposes CRUD operations for the **Tree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trees
    * const trees = await prisma.tree.findMany()
    * ```
    */
  get tree(): Prisma.TreeDelegate<ExtArgs>;

  /**
   * `prisma.treeUpdate`: Exposes CRUD operations for the **TreeUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreeUpdates
    * const treeUpdates = await prisma.treeUpdate.findMany()
    * ```
    */
  get treeUpdate(): Prisma.TreeUpdateDelegate<ExtArgs>;

  /**
   * `prisma.treeAdoption`: Exposes CRUD operations for the **TreeAdoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreeAdoptions
    * const treeAdoptions = await prisma.treeAdoption.findMany()
    * ```
    */
  get treeAdoption(): Prisma.TreeAdoptionDelegate<ExtArgs>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs>;

  /**
   * `prisma.rewardRedemption`: Exposes CRUD operations for the **RewardRedemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RewardRedemptions
    * const rewardRedemptions = await prisma.rewardRedemption.findMany()
    * ```
    */
  get rewardRedemption(): Prisma.RewardRedemptionDelegate<ExtArgs>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.learningModule`: Exposes CRUD operations for the **LearningModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningModules
    * const learningModules = await prisma.learningModule.findMany()
    * ```
    */
  get learningModule(): Prisma.LearningModuleDelegate<ExtArgs>;

  /**
   * `prisma.globalStats`: Exposes CRUD operations for the **GlobalStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalStats
    * const globalStats = await prisma.globalStats.findMany()
    * ```
    */
  get globalStats(): Prisma.GlobalStatsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tree: 'Tree',
    TreeUpdate: 'TreeUpdate',
    TreeAdoption: 'TreeAdoption',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    Reward: 'Reward',
    RewardRedemption: 'RewardRedemption',
    Certificate: 'Certificate',
    Notification: 'Notification',
    LearningModule: 'LearningModule',
    GlobalStats: 'GlobalStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "tree" | "treeUpdate" | "treeAdoption" | "badge" | "userBadge" | "reward" | "rewardRedemption" | "certificate" | "notification" | "learningModule" | "globalStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tree: {
        payload: Prisma.$TreePayload<ExtArgs>
        fields: Prisma.TreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findFirst: {
            args: Prisma.TreeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          findMany: {
            args: Prisma.TreeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          create: {
            args: Prisma.TreeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          createMany: {
            args: Prisma.TreeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>[]
          }
          delete: {
            args: Prisma.TreeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          update: {
            args: Prisma.TreeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          deleteMany: {
            args: Prisma.TreeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreePayload>
          }
          aggregate: {
            args: Prisma.TreeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTree>
          }
          groupBy: {
            args: Prisma.TreeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeCountArgs<ExtArgs>
            result: $Utils.Optional<TreeCountAggregateOutputType> | number
          }
        }
      }
      TreeUpdate: {
        payload: Prisma.$TreeUpdatePayload<ExtArgs>
        fields: Prisma.TreeUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          findFirst: {
            args: Prisma.TreeUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          findMany: {
            args: Prisma.TreeUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>[]
          }
          create: {
            args: Prisma.TreeUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          createMany: {
            args: Prisma.TreeUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>[]
          }
          delete: {
            args: Prisma.TreeUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          update: {
            args: Prisma.TreeUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          deleteMany: {
            args: Prisma.TreeUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreeUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeUpdatePayload>
          }
          aggregate: {
            args: Prisma.TreeUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreeUpdate>
          }
          groupBy: {
            args: Prisma.TreeUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<TreeUpdateCountAggregateOutputType> | number
          }
        }
      }
      TreeAdoption: {
        payload: Prisma.$TreeAdoptionPayload<ExtArgs>
        fields: Prisma.TreeAdoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeAdoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeAdoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          findFirst: {
            args: Prisma.TreeAdoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeAdoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          findMany: {
            args: Prisma.TreeAdoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>[]
          }
          create: {
            args: Prisma.TreeAdoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          createMany: {
            args: Prisma.TreeAdoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeAdoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>[]
          }
          delete: {
            args: Prisma.TreeAdoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          update: {
            args: Prisma.TreeAdoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          deleteMany: {
            args: Prisma.TreeAdoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeAdoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreeAdoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeAdoptionPayload>
          }
          aggregate: {
            args: Prisma.TreeAdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreeAdoption>
          }
          groupBy: {
            args: Prisma.TreeAdoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeAdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeAdoptionCountArgs<ExtArgs>
            result: $Utils.Optional<TreeAdoptionCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      RewardRedemption: {
        payload: Prisma.$RewardRedemptionPayload<ExtArgs>
        fields: Prisma.RewardRedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardRedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findFirst: {
            args: Prisma.RewardRedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardRedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          findMany: {
            args: Prisma.RewardRedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          create: {
            args: Prisma.RewardRedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          createMany: {
            args: Prisma.RewardRedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardRedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>[]
          }
          delete: {
            args: Prisma.RewardRedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          update: {
            args: Prisma.RewardRedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          deleteMany: {
            args: Prisma.RewardRedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardRedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardRedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardRedemptionPayload>
          }
          aggregate: {
            args: Prisma.RewardRedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewardRedemption>
          }
          groupBy: {
            args: Prisma.RewardRedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardRedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<RewardRedemptionCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      LearningModule: {
        payload: Prisma.$LearningModulePayload<ExtArgs>
        fields: Prisma.LearningModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          findFirst: {
            args: Prisma.LearningModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          findMany: {
            args: Prisma.LearningModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>[]
          }
          create: {
            args: Prisma.LearningModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          createMany: {
            args: Prisma.LearningModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>[]
          }
          delete: {
            args: Prisma.LearningModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          update: {
            args: Prisma.LearningModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          deleteMany: {
            args: Prisma.LearningModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LearningModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningModulePayload>
          }
          aggregate: {
            args: Prisma.LearningModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningModule>
          }
          groupBy: {
            args: Prisma.LearningModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningModuleCountArgs<ExtArgs>
            result: $Utils.Optional<LearningModuleCountAggregateOutputType> | number
          }
        }
      }
      GlobalStats: {
        payload: Prisma.$GlobalStatsPayload<ExtArgs>
        fields: Prisma.GlobalStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          findFirst: {
            args: Prisma.GlobalStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          findMany: {
            args: Prisma.GlobalStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>[]
          }
          create: {
            args: Prisma.GlobalStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          createMany: {
            args: Prisma.GlobalStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>[]
          }
          delete: {
            args: Prisma.GlobalStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          update: {
            args: Prisma.GlobalStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          deleteMany: {
            args: Prisma.GlobalStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GlobalStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalStatsPayload>
          }
          aggregate: {
            args: Prisma.GlobalStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalStats>
          }
          groupBy: {
            args: Prisma.GlobalStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalStatsCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trees: number
    adoptions: number
    transfers: number
    updates: number
    badges: number
    rewards: number
    notifications: number
    certificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trees?: boolean | UserCountOutputTypeCountTreesArgs
    adoptions?: boolean | UserCountOutputTypeCountAdoptionsArgs
    transfers?: boolean | UserCountOutputTypeCountTransfersArgs
    updates?: boolean | UserCountOutputTypeCountUpdatesArgs
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
    rewards?: boolean | UserCountOutputTypeCountRewardsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdoptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeAdoptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeAdoptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeUpdateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type TreeCountOutputType
   */

  export type TreeCountOutputType = {
    updates: number
    adoptions: number
    certificates: number
  }

  export type TreeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | TreeCountOutputTypeCountUpdatesArgs
    adoptions?: boolean | TreeCountOutputTypeCountAdoptionsArgs
    certificates?: boolean | TreeCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeCountOutputType
     */
    select?: TreeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeUpdateWhereInput
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountAdoptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeAdoptionWhereInput
  }

  /**
   * TreeCountOutputType without action
   */
  export type TreeCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    userBadges: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgeCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Count Type RewardCountOutputType
   */

  export type RewardCountOutputType = {
    redemptions: number
  }

  export type RewardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | RewardCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardCountOutputType
     */
    select?: RewardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RewardCountOutputType without action
   */
  export type RewardCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    greenPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    greenPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    bio: string | null
    greenPoints: number | null
    isProfilePublic: boolean | null
    emailNotifications: boolean | null
    city: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    bio: string | null
    greenPoints: number | null
    isProfilePublic: boolean | null
    emailNotifications: boolean | null
    city: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    profilePicture: number
    bio: number
    greenPoints: number
    isProfilePublic: number
    emailNotifications: number
    city: number
    country: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    greenPoints?: true
  }

  export type UserSumAggregateInputType = {
    greenPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    bio?: true
    greenPoints?: true
    isProfilePublic?: true
    emailNotifications?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    bio?: true
    greenPoints?: true
    isProfilePublic?: true
    emailNotifications?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    bio?: true
    greenPoints?: true
    isProfilePublic?: true
    emailNotifications?: true
    city?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    profilePicture: string | null
    bio: string | null
    greenPoints: number
    isProfilePublic: boolean
    emailNotifications: boolean
    city: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bio?: boolean
    greenPoints?: boolean
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    trees?: boolean | User$treesArgs<ExtArgs>
    adoptions?: boolean | User$adoptionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    updates?: boolean | User$updatesArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bio?: boolean
    greenPoints?: boolean
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bio?: boolean
    greenPoints?: boolean
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trees?: boolean | User$treesArgs<ExtArgs>
    adoptions?: boolean | User$adoptionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    updates?: boolean | User$updatesArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    rewards?: boolean | User$rewardsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trees: Prisma.$TreePayload<ExtArgs>[]
      adoptions: Prisma.$TreeAdoptionPayload<ExtArgs>[]
      transfers: Prisma.$TreeAdoptionPayload<ExtArgs>[]
      updates: Prisma.$TreeUpdatePayload<ExtArgs>[]
      badges: Prisma.$UserBadgePayload<ExtArgs>[]
      rewards: Prisma.$RewardRedemptionPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      profilePicture: string | null
      bio: string | null
      greenPoints: number
      isProfilePublic: boolean
      emailNotifications: boolean
      city: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trees<T extends User$treesArgs<ExtArgs> = {}>(args?: Subset<T, User$treesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findMany"> | Null>
    adoptions<T extends User$adoptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$adoptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findMany"> | Null>
    transfers<T extends User$transfersArgs<ExtArgs> = {}>(args?: Subset<T, User$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findMany"> | Null>
    updates<T extends User$updatesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findMany"> | Null>
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany"> | Null>
    rewards<T extends User$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly greenPoints: FieldRef<"User", 'Int'>
    readonly isProfilePublic: FieldRef<"User", 'Boolean'>
    readonly emailNotifications: FieldRef<"User", 'Boolean'>
    readonly city: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.trees
   */
  export type User$treesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    where?: TreeWhereInput
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    cursor?: TreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * User.adoptions
   */
  export type User$adoptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    where?: TreeAdoptionWhereInput
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    cursor?: TreeAdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * User.transfers
   */
  export type User$transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    where?: TreeAdoptionWhereInput
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    cursor?: TreeAdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * User.updates
   */
  export type User$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    where?: TreeUpdateWhereInput
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    cursor?: TreeUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeUpdateScalarFieldEnum | TreeUpdateScalarFieldEnum[]
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User.rewards
   */
  export type User$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    cursor?: RewardRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tree
   */

  export type AggregateTree = {
    _count: TreeCountAggregateOutputType | null
    _avg: TreeAvgAggregateOutputType | null
    _sum: TreeSumAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  export type TreeAvgAggregateOutputType = {
    commitmentDuration: number | null
  }

  export type TreeSumAggregateOutputType = {
    commitmentDuration: number | null
  }

  export type TreeMinAggregateOutputType = {
    id: string | null
    qrCode: string | null
    species: string | null
    source: $Enums.TreeSource | null
    commitmentDuration: number | null
    initialHealthStatus: $Enums.HealthStatus | null
    currentHealthStatus: $Enums.HealthStatus | null
    photoUrl: string | null
    plantedAt: Date | null
    isActive: boolean | null
    isAdoptable: boolean | null
    transferReason: string | null
    lastUpdateAt: Date | null
    ownerId: string | null
  }

  export type TreeMaxAggregateOutputType = {
    id: string | null
    qrCode: string | null
    species: string | null
    source: $Enums.TreeSource | null
    commitmentDuration: number | null
    initialHealthStatus: $Enums.HealthStatus | null
    currentHealthStatus: $Enums.HealthStatus | null
    photoUrl: string | null
    plantedAt: Date | null
    isActive: boolean | null
    isAdoptable: boolean | null
    transferReason: string | null
    lastUpdateAt: Date | null
    ownerId: string | null
  }

  export type TreeCountAggregateOutputType = {
    id: number
    qrCode: number
    species: number
    source: number
    commitmentDuration: number
    initialHealthStatus: number
    currentHealthStatus: number
    location: number
    photoUrl: number
    plantedAt: number
    isActive: number
    isAdoptable: number
    transferReason: number
    lastUpdateAt: number
    ownerId: number
    _all: number
  }


  export type TreeAvgAggregateInputType = {
    commitmentDuration?: true
  }

  export type TreeSumAggregateInputType = {
    commitmentDuration?: true
  }

  export type TreeMinAggregateInputType = {
    id?: true
    qrCode?: true
    species?: true
    source?: true
    commitmentDuration?: true
    initialHealthStatus?: true
    currentHealthStatus?: true
    photoUrl?: true
    plantedAt?: true
    isActive?: true
    isAdoptable?: true
    transferReason?: true
    lastUpdateAt?: true
    ownerId?: true
  }

  export type TreeMaxAggregateInputType = {
    id?: true
    qrCode?: true
    species?: true
    source?: true
    commitmentDuration?: true
    initialHealthStatus?: true
    currentHealthStatus?: true
    photoUrl?: true
    plantedAt?: true
    isActive?: true
    isAdoptable?: true
    transferReason?: true
    lastUpdateAt?: true
    ownerId?: true
  }

  export type TreeCountAggregateInputType = {
    id?: true
    qrCode?: true
    species?: true
    source?: true
    commitmentDuration?: true
    initialHealthStatus?: true
    currentHealthStatus?: true
    location?: true
    photoUrl?: true
    plantedAt?: true
    isActive?: true
    isAdoptable?: true
    transferReason?: true
    lastUpdateAt?: true
    ownerId?: true
    _all?: true
  }

  export type TreeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tree to aggregate.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trees
    **/
    _count?: true | TreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeMaxAggregateInputType
  }

  export type GetTreeAggregateType<T extends TreeAggregateArgs> = {
        [P in keyof T & keyof AggregateTree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTree[P]>
      : GetScalarType<T[P], AggregateTree[P]>
  }




  export type TreeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeWhereInput
    orderBy?: TreeOrderByWithAggregationInput | TreeOrderByWithAggregationInput[]
    by: TreeScalarFieldEnum[] | TreeScalarFieldEnum
    having?: TreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeCountAggregateInputType | true
    _avg?: TreeAvgAggregateInputType
    _sum?: TreeSumAggregateInputType
    _min?: TreeMinAggregateInputType
    _max?: TreeMaxAggregateInputType
  }

  export type TreeGroupByOutputType = {
    id: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus: $Enums.HealthStatus
    location: JsonValue
    photoUrl: string
    plantedAt: Date
    isActive: boolean
    isAdoptable: boolean
    transferReason: string | null
    lastUpdateAt: Date | null
    ownerId: string
    _count: TreeCountAggregateOutputType | null
    _avg: TreeAvgAggregateOutputType | null
    _sum: TreeSumAggregateOutputType | null
    _min: TreeMinAggregateOutputType | null
    _max: TreeMaxAggregateOutputType | null
  }

  type GetTreeGroupByPayload<T extends TreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeGroupByOutputType[P]>
            : GetScalarType<T[P], TreeGroupByOutputType[P]>
        }
      >
    >


  export type TreeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qrCode?: boolean
    species?: boolean
    source?: boolean
    commitmentDuration?: boolean
    initialHealthStatus?: boolean
    currentHealthStatus?: boolean
    location?: boolean
    photoUrl?: boolean
    plantedAt?: boolean
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: boolean
    lastUpdateAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Tree$updatesArgs<ExtArgs>
    adoptions?: boolean | Tree$adoptionsArgs<ExtArgs>
    certificates?: boolean | Tree$certificatesArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qrCode?: boolean
    species?: boolean
    source?: boolean
    commitmentDuration?: boolean
    initialHealthStatus?: boolean
    currentHealthStatus?: boolean
    location?: boolean
    photoUrl?: boolean
    plantedAt?: boolean
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: boolean
    lastUpdateAt?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tree"]>

  export type TreeSelectScalar = {
    id?: boolean
    qrCode?: boolean
    species?: boolean
    source?: boolean
    commitmentDuration?: boolean
    initialHealthStatus?: boolean
    currentHealthStatus?: boolean
    location?: boolean
    photoUrl?: boolean
    plantedAt?: boolean
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: boolean
    lastUpdateAt?: boolean
    ownerId?: boolean
  }

  export type TreeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Tree$updatesArgs<ExtArgs>
    adoptions?: boolean | Tree$adoptionsArgs<ExtArgs>
    certificates?: boolean | Tree$certificatesArgs<ExtArgs>
    _count?: boolean | TreeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tree"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      updates: Prisma.$TreeUpdatePayload<ExtArgs>[]
      adoptions: Prisma.$TreeAdoptionPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qrCode: string
      species: string
      source: $Enums.TreeSource
      commitmentDuration: number
      initialHealthStatus: $Enums.HealthStatus
      currentHealthStatus: $Enums.HealthStatus
      location: Prisma.JsonValue
      photoUrl: string
      plantedAt: Date
      isActive: boolean
      isAdoptable: boolean
      transferReason: string | null
      lastUpdateAt: Date | null
      ownerId: string
    }, ExtArgs["result"]["tree"]>
    composites: {}
  }

  type TreeGetPayload<S extends boolean | null | undefined | TreeDefaultArgs> = $Result.GetResult<Prisma.$TreePayload, S>

  type TreeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreeCountAggregateInputType | true
    }

  export interface TreeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tree'], meta: { name: 'Tree' } }
    /**
     * Find zero or one Tree that matches the filter.
     * @param {TreeFindUniqueArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeFindUniqueArgs>(args: SelectSubset<T, TreeFindUniqueArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tree that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreeFindUniqueOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeFindFirstArgs>(args?: SelectSubset<T, TreeFindFirstArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindFirstOrThrowArgs} args - Arguments to find a Tree
     * @example
     * // Get one Tree
     * const tree = await prisma.tree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Trees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trees
     * const trees = await prisma.tree.findMany()
     * 
     * // Get first 10 Trees
     * const trees = await prisma.tree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeWithIdOnly = await prisma.tree.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeFindManyArgs>(args?: SelectSubset<T, TreeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tree.
     * @param {TreeCreateArgs} args - Arguments to create a Tree.
     * @example
     * // Create one Tree
     * const Tree = await prisma.tree.create({
     *   data: {
     *     // ... data to create a Tree
     *   }
     * })
     * 
     */
    create<T extends TreeCreateArgs>(args: SelectSubset<T, TreeCreateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Trees.
     * @param {TreeCreateManyArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeCreateManyArgs>(args?: SelectSubset<T, TreeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trees and returns the data saved in the database.
     * @param {TreeCreateManyAndReturnArgs} args - Arguments to create many Trees.
     * @example
     * // Create many Trees
     * const tree = await prisma.tree.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trees and only return the `id`
     * const treeWithIdOnly = await prisma.tree.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tree.
     * @param {TreeDeleteArgs} args - Arguments to delete one Tree.
     * @example
     * // Delete one Tree
     * const Tree = await prisma.tree.delete({
     *   where: {
     *     // ... filter to delete one Tree
     *   }
     * })
     * 
     */
    delete<T extends TreeDeleteArgs>(args: SelectSubset<T, TreeDeleteArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tree.
     * @param {TreeUpdateArgs} args - Arguments to update one Tree.
     * @example
     * // Update one Tree
     * const tree = await prisma.tree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeUpdateArgs>(args: SelectSubset<T, TreeUpdateArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Trees.
     * @param {TreeDeleteManyArgs} args - Arguments to filter Trees to delete.
     * @example
     * // Delete a few Trees
     * const { count } = await prisma.tree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeDeleteManyArgs>(args?: SelectSubset<T, TreeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trees
     * const tree = await prisma.tree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeUpdateManyArgs>(args: SelectSubset<T, TreeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tree.
     * @param {TreeUpsertArgs} args - Arguments to update or create a Tree.
     * @example
     * // Update or create a Tree
     * const tree = await prisma.tree.upsert({
     *   create: {
     *     // ... data to create a Tree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tree we want to update
     *   }
     * })
     */
    upsert<T extends TreeUpsertArgs>(args: SelectSubset<T, TreeUpsertArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Trees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeCountArgs} args - Arguments to filter Trees to count.
     * @example
     * // Count the number of Trees
     * const count = await prisma.tree.count({
     *   where: {
     *     // ... the filter for the Trees we want to count
     *   }
     * })
    **/
    count<T extends TreeCountArgs>(
      args?: Subset<T, TreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreeAggregateArgs>(args: Subset<T, TreeAggregateArgs>): Prisma.PrismaPromise<GetTreeAggregateType<T>>

    /**
     * Group by Tree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeGroupByArgs['orderBy'] }
        : { orderBy?: TreeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tree model
   */
  readonly fields: TreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    updates<T extends Tree$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Tree$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findMany"> | Null>
    adoptions<T extends Tree$adoptionsArgs<ExtArgs> = {}>(args?: Subset<T, Tree$adoptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findMany"> | Null>
    certificates<T extends Tree$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, Tree$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tree model
   */ 
  interface TreeFieldRefs {
    readonly id: FieldRef<"Tree", 'String'>
    readonly qrCode: FieldRef<"Tree", 'String'>
    readonly species: FieldRef<"Tree", 'String'>
    readonly source: FieldRef<"Tree", 'TreeSource'>
    readonly commitmentDuration: FieldRef<"Tree", 'Int'>
    readonly initialHealthStatus: FieldRef<"Tree", 'HealthStatus'>
    readonly currentHealthStatus: FieldRef<"Tree", 'HealthStatus'>
    readonly location: FieldRef<"Tree", 'Json'>
    readonly photoUrl: FieldRef<"Tree", 'String'>
    readonly plantedAt: FieldRef<"Tree", 'DateTime'>
    readonly isActive: FieldRef<"Tree", 'Boolean'>
    readonly isAdoptable: FieldRef<"Tree", 'Boolean'>
    readonly transferReason: FieldRef<"Tree", 'String'>
    readonly lastUpdateAt: FieldRef<"Tree", 'DateTime'>
    readonly ownerId: FieldRef<"Tree", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tree findUnique
   */
  export type TreeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findUniqueOrThrow
   */
  export type TreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree findFirst
   */
  export type TreeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findFirstOrThrow
   */
  export type TreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Tree to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trees.
     */
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree findMany
   */
  export type TreeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter, which Trees to fetch.
     */
    where?: TreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trees to fetch.
     */
    orderBy?: TreeOrderByWithRelationInput | TreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trees.
     */
    cursor?: TreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trees.
     */
    skip?: number
    distinct?: TreeScalarFieldEnum | TreeScalarFieldEnum[]
  }

  /**
   * Tree create
   */
  export type TreeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tree.
     */
    data: XOR<TreeCreateInput, TreeUncheckedCreateInput>
  }

  /**
   * Tree createMany
   */
  export type TreeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tree createManyAndReturn
   */
  export type TreeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Trees.
     */
    data: TreeCreateManyInput | TreeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tree update
   */
  export type TreeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tree.
     */
    data: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
    /**
     * Choose, which Tree to update.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree updateMany
   */
  export type TreeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trees.
     */
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyInput>
    /**
     * Filter which Trees to update
     */
    where?: TreeWhereInput
  }

  /**
   * Tree upsert
   */
  export type TreeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tree to update in case it exists.
     */
    where: TreeWhereUniqueInput
    /**
     * In case the Tree found by the `where` argument doesn't exist, create a new Tree with this data.
     */
    create: XOR<TreeCreateInput, TreeUncheckedCreateInput>
    /**
     * In case the Tree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeUpdateInput, TreeUncheckedUpdateInput>
  }

  /**
   * Tree delete
   */
  export type TreeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    /**
     * Filter which Tree to delete.
     */
    where: TreeWhereUniqueInput
  }

  /**
   * Tree deleteMany
   */
  export type TreeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trees to delete
     */
    where?: TreeWhereInput
  }

  /**
   * Tree.updates
   */
  export type Tree$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    where?: TreeUpdateWhereInput
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    cursor?: TreeUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeUpdateScalarFieldEnum | TreeUpdateScalarFieldEnum[]
  }

  /**
   * Tree.adoptions
   */
  export type Tree$adoptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    where?: TreeAdoptionWhereInput
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    cursor?: TreeAdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * Tree.certificates
   */
  export type Tree$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Tree without action
   */
  export type TreeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
  }


  /**
   * Model TreeUpdate
   */

  export type AggregateTreeUpdate = {
    _count: TreeUpdateCountAggregateOutputType | null
    _min: TreeUpdateMinAggregateOutputType | null
    _max: TreeUpdateMaxAggregateOutputType | null
  }

  export type TreeUpdateMinAggregateOutputType = {
    id: string | null
    healthStatus: $Enums.HealthStatus | null
    notes: string | null
    photoUrl: string | null
    createdAt: Date | null
    treeId: string | null
    userId: string | null
  }

  export type TreeUpdateMaxAggregateOutputType = {
    id: string | null
    healthStatus: $Enums.HealthStatus | null
    notes: string | null
    photoUrl: string | null
    createdAt: Date | null
    treeId: string | null
    userId: string | null
  }

  export type TreeUpdateCountAggregateOutputType = {
    id: number
    healthStatus: number
    notes: number
    photoUrl: number
    growthMeasurements: number
    gpsLocation: number
    createdAt: number
    treeId: number
    userId: number
    _all: number
  }


  export type TreeUpdateMinAggregateInputType = {
    id?: true
    healthStatus?: true
    notes?: true
    photoUrl?: true
    createdAt?: true
    treeId?: true
    userId?: true
  }

  export type TreeUpdateMaxAggregateInputType = {
    id?: true
    healthStatus?: true
    notes?: true
    photoUrl?: true
    createdAt?: true
    treeId?: true
    userId?: true
  }

  export type TreeUpdateCountAggregateInputType = {
    id?: true
    healthStatus?: true
    notes?: true
    photoUrl?: true
    growthMeasurements?: true
    gpsLocation?: true
    createdAt?: true
    treeId?: true
    userId?: true
    _all?: true
  }

  export type TreeUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeUpdate to aggregate.
     */
    where?: TreeUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeUpdates to fetch.
     */
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreeUpdates
    **/
    _count?: true | TreeUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeUpdateMaxAggregateInputType
  }

  export type GetTreeUpdateAggregateType<T extends TreeUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateTreeUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreeUpdate[P]>
      : GetScalarType<T[P], AggregateTreeUpdate[P]>
  }




  export type TreeUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeUpdateWhereInput
    orderBy?: TreeUpdateOrderByWithAggregationInput | TreeUpdateOrderByWithAggregationInput[]
    by: TreeUpdateScalarFieldEnum[] | TreeUpdateScalarFieldEnum
    having?: TreeUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeUpdateCountAggregateInputType | true
    _min?: TreeUpdateMinAggregateInputType
    _max?: TreeUpdateMaxAggregateInputType
  }

  export type TreeUpdateGroupByOutputType = {
    id: string
    healthStatus: $Enums.HealthStatus
    notes: string | null
    photoUrl: string
    growthMeasurements: JsonValue | null
    gpsLocation: JsonValue | null
    createdAt: Date
    treeId: string
    userId: string
    _count: TreeUpdateCountAggregateOutputType | null
    _min: TreeUpdateMinAggregateOutputType | null
    _max: TreeUpdateMaxAggregateOutputType | null
  }

  type GetTreeUpdateGroupByPayload<T extends TreeUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], TreeUpdateGroupByOutputType[P]>
        }
      >
    >


  export type TreeUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    healthStatus?: boolean
    notes?: boolean
    photoUrl?: boolean
    growthMeasurements?: boolean
    gpsLocation?: boolean
    createdAt?: boolean
    treeId?: boolean
    userId?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeUpdate"]>

  export type TreeUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    healthStatus?: boolean
    notes?: boolean
    photoUrl?: boolean
    growthMeasurements?: boolean
    gpsLocation?: boolean
    createdAt?: boolean
    treeId?: boolean
    userId?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeUpdate"]>

  export type TreeUpdateSelectScalar = {
    id?: boolean
    healthStatus?: boolean
    notes?: boolean
    photoUrl?: boolean
    growthMeasurements?: boolean
    gpsLocation?: boolean
    createdAt?: boolean
    treeId?: boolean
    userId?: boolean
  }

  export type TreeUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreeUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreeUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreeUpdate"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      healthStatus: $Enums.HealthStatus
      notes: string | null
      photoUrl: string
      growthMeasurements: Prisma.JsonValue | null
      gpsLocation: Prisma.JsonValue | null
      createdAt: Date
      treeId: string
      userId: string
    }, ExtArgs["result"]["treeUpdate"]>
    composites: {}
  }

  type TreeUpdateGetPayload<S extends boolean | null | undefined | TreeUpdateDefaultArgs> = $Result.GetResult<Prisma.$TreeUpdatePayload, S>

  type TreeUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreeUpdateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreeUpdateCountAggregateInputType | true
    }

  export interface TreeUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreeUpdate'], meta: { name: 'TreeUpdate' } }
    /**
     * Find zero or one TreeUpdate that matches the filter.
     * @param {TreeUpdateFindUniqueArgs} args - Arguments to find a TreeUpdate
     * @example
     * // Get one TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeUpdateFindUniqueArgs>(args: SelectSubset<T, TreeUpdateFindUniqueArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TreeUpdate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreeUpdateFindUniqueOrThrowArgs} args - Arguments to find a TreeUpdate
     * @example
     * // Get one TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TreeUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateFindFirstArgs} args - Arguments to find a TreeUpdate
     * @example
     * // Get one TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeUpdateFindFirstArgs>(args?: SelectSubset<T, TreeUpdateFindFirstArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TreeUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateFindFirstOrThrowArgs} args - Arguments to find a TreeUpdate
     * @example
     * // Get one TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TreeUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreeUpdates
     * const treeUpdates = await prisma.treeUpdate.findMany()
     * 
     * // Get first 10 TreeUpdates
     * const treeUpdates = await prisma.treeUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeUpdateWithIdOnly = await prisma.treeUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeUpdateFindManyArgs>(args?: SelectSubset<T, TreeUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TreeUpdate.
     * @param {TreeUpdateCreateArgs} args - Arguments to create a TreeUpdate.
     * @example
     * // Create one TreeUpdate
     * const TreeUpdate = await prisma.treeUpdate.create({
     *   data: {
     *     // ... data to create a TreeUpdate
     *   }
     * })
     * 
     */
    create<T extends TreeUpdateCreateArgs>(args: SelectSubset<T, TreeUpdateCreateArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TreeUpdates.
     * @param {TreeUpdateCreateManyArgs} args - Arguments to create many TreeUpdates.
     * @example
     * // Create many TreeUpdates
     * const treeUpdate = await prisma.treeUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeUpdateCreateManyArgs>(args?: SelectSubset<T, TreeUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreeUpdates and returns the data saved in the database.
     * @param {TreeUpdateCreateManyAndReturnArgs} args - Arguments to create many TreeUpdates.
     * @example
     * // Create many TreeUpdates
     * const treeUpdate = await prisma.treeUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreeUpdates and only return the `id`
     * const treeUpdateWithIdOnly = await prisma.treeUpdate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TreeUpdate.
     * @param {TreeUpdateDeleteArgs} args - Arguments to delete one TreeUpdate.
     * @example
     * // Delete one TreeUpdate
     * const TreeUpdate = await prisma.treeUpdate.delete({
     *   where: {
     *     // ... filter to delete one TreeUpdate
     *   }
     * })
     * 
     */
    delete<T extends TreeUpdateDeleteArgs>(args: SelectSubset<T, TreeUpdateDeleteArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TreeUpdate.
     * @param {TreeUpdateUpdateArgs} args - Arguments to update one TreeUpdate.
     * @example
     * // Update one TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeUpdateUpdateArgs>(args: SelectSubset<T, TreeUpdateUpdateArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TreeUpdates.
     * @param {TreeUpdateDeleteManyArgs} args - Arguments to filter TreeUpdates to delete.
     * @example
     * // Delete a few TreeUpdates
     * const { count } = await prisma.treeUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeUpdateDeleteManyArgs>(args?: SelectSubset<T, TreeUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreeUpdates
     * const treeUpdate = await prisma.treeUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeUpdateUpdateManyArgs>(args: SelectSubset<T, TreeUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreeUpdate.
     * @param {TreeUpdateUpsertArgs} args - Arguments to update or create a TreeUpdate.
     * @example
     * // Update or create a TreeUpdate
     * const treeUpdate = await prisma.treeUpdate.upsert({
     *   create: {
     *     // ... data to create a TreeUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreeUpdate we want to update
     *   }
     * })
     */
    upsert<T extends TreeUpdateUpsertArgs>(args: SelectSubset<T, TreeUpdateUpsertArgs<ExtArgs>>): Prisma__TreeUpdateClient<$Result.GetResult<Prisma.$TreeUpdatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TreeUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateCountArgs} args - Arguments to filter TreeUpdates to count.
     * @example
     * // Count the number of TreeUpdates
     * const count = await prisma.treeUpdate.count({
     *   where: {
     *     // ... the filter for the TreeUpdates we want to count
     *   }
     * })
    **/
    count<T extends TreeUpdateCountArgs>(
      args?: Subset<T, TreeUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreeUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreeUpdateAggregateArgs>(args: Subset<T, TreeUpdateAggregateArgs>): Prisma.PrismaPromise<GetTreeUpdateAggregateType<T>>

    /**
     * Group by TreeUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreeUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeUpdateGroupByArgs['orderBy'] }
        : { orderBy?: TreeUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreeUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreeUpdate model
   */
  readonly fields: TreeUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreeUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreeUpdate model
   */ 
  interface TreeUpdateFieldRefs {
    readonly id: FieldRef<"TreeUpdate", 'String'>
    readonly healthStatus: FieldRef<"TreeUpdate", 'HealthStatus'>
    readonly notes: FieldRef<"TreeUpdate", 'String'>
    readonly photoUrl: FieldRef<"TreeUpdate", 'String'>
    readonly growthMeasurements: FieldRef<"TreeUpdate", 'Json'>
    readonly gpsLocation: FieldRef<"TreeUpdate", 'Json'>
    readonly createdAt: FieldRef<"TreeUpdate", 'DateTime'>
    readonly treeId: FieldRef<"TreeUpdate", 'String'>
    readonly userId: FieldRef<"TreeUpdate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TreeUpdate findUnique
   */
  export type TreeUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TreeUpdate to fetch.
     */
    where: TreeUpdateWhereUniqueInput
  }

  /**
   * TreeUpdate findUniqueOrThrow
   */
  export type TreeUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TreeUpdate to fetch.
     */
    where: TreeUpdateWhereUniqueInput
  }

  /**
   * TreeUpdate findFirst
   */
  export type TreeUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TreeUpdate to fetch.
     */
    where?: TreeUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeUpdates to fetch.
     */
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeUpdates.
     */
    cursor?: TreeUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeUpdates.
     */
    distinct?: TreeUpdateScalarFieldEnum | TreeUpdateScalarFieldEnum[]
  }

  /**
   * TreeUpdate findFirstOrThrow
   */
  export type TreeUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TreeUpdate to fetch.
     */
    where?: TreeUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeUpdates to fetch.
     */
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeUpdates.
     */
    cursor?: TreeUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeUpdates.
     */
    distinct?: TreeUpdateScalarFieldEnum | TreeUpdateScalarFieldEnum[]
  }

  /**
   * TreeUpdate findMany
   */
  export type TreeUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter, which TreeUpdates to fetch.
     */
    where?: TreeUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeUpdates to fetch.
     */
    orderBy?: TreeUpdateOrderByWithRelationInput | TreeUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreeUpdates.
     */
    cursor?: TreeUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeUpdates.
     */
    skip?: number
    distinct?: TreeUpdateScalarFieldEnum | TreeUpdateScalarFieldEnum[]
  }

  /**
   * TreeUpdate create
   */
  export type TreeUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a TreeUpdate.
     */
    data: XOR<TreeUpdateCreateInput, TreeUpdateUncheckedCreateInput>
  }

  /**
   * TreeUpdate createMany
   */
  export type TreeUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreeUpdates.
     */
    data: TreeUpdateCreateManyInput | TreeUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreeUpdate createManyAndReturn
   */
  export type TreeUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TreeUpdates.
     */
    data: TreeUpdateCreateManyInput | TreeUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeUpdate update
   */
  export type TreeUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a TreeUpdate.
     */
    data: XOR<TreeUpdateUpdateInput, TreeUpdateUncheckedUpdateInput>
    /**
     * Choose, which TreeUpdate to update.
     */
    where: TreeUpdateWhereUniqueInput
  }

  /**
   * TreeUpdate updateMany
   */
  export type TreeUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreeUpdates.
     */
    data: XOR<TreeUpdateUpdateManyMutationInput, TreeUpdateUncheckedUpdateManyInput>
    /**
     * Filter which TreeUpdates to update
     */
    where?: TreeUpdateWhereInput
  }

  /**
   * TreeUpdate upsert
   */
  export type TreeUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the TreeUpdate to update in case it exists.
     */
    where: TreeUpdateWhereUniqueInput
    /**
     * In case the TreeUpdate found by the `where` argument doesn't exist, create a new TreeUpdate with this data.
     */
    create: XOR<TreeUpdateCreateInput, TreeUpdateUncheckedCreateInput>
    /**
     * In case the TreeUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeUpdateUpdateInput, TreeUpdateUncheckedUpdateInput>
  }

  /**
   * TreeUpdate delete
   */
  export type TreeUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
    /**
     * Filter which TreeUpdate to delete.
     */
    where: TreeUpdateWhereUniqueInput
  }

  /**
   * TreeUpdate deleteMany
   */
  export type TreeUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeUpdates to delete
     */
    where?: TreeUpdateWhereInput
  }

  /**
   * TreeUpdate without action
   */
  export type TreeUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeUpdate
     */
    select?: TreeUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeUpdateInclude<ExtArgs> | null
  }


  /**
   * Model TreeAdoption
   */

  export type AggregateTreeAdoption = {
    _count: TreeAdoptionCountAggregateOutputType | null
    _avg: TreeAdoptionAvgAggregateOutputType | null
    _sum: TreeAdoptionSumAggregateOutputType | null
    _min: TreeAdoptionMinAggregateOutputType | null
    _max: TreeAdoptionMaxAggregateOutputType | null
  }

  export type TreeAdoptionAvgAggregateOutputType = {
    commitmentDuration: number | null
  }

  export type TreeAdoptionSumAggregateOutputType = {
    commitmentDuration: number | null
  }

  export type TreeAdoptionMinAggregateOutputType = {
    id: string | null
    reason: string | null
    commitmentMessage: string | null
    commitmentDuration: number | null
    adoptedAt: Date | null
    treeId: string | null
    previousOwnerId: string | null
    newOwnerId: string | null
  }

  export type TreeAdoptionMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    commitmentMessage: string | null
    commitmentDuration: number | null
    adoptedAt: Date | null
    treeId: string | null
    previousOwnerId: string | null
    newOwnerId: string | null
  }

  export type TreeAdoptionCountAggregateOutputType = {
    id: number
    reason: number
    commitmentMessage: number
    commitmentDuration: number
    adoptedAt: number
    treeId: number
    previousOwnerId: number
    newOwnerId: number
    _all: number
  }


  export type TreeAdoptionAvgAggregateInputType = {
    commitmentDuration?: true
  }

  export type TreeAdoptionSumAggregateInputType = {
    commitmentDuration?: true
  }

  export type TreeAdoptionMinAggregateInputType = {
    id?: true
    reason?: true
    commitmentMessage?: true
    commitmentDuration?: true
    adoptedAt?: true
    treeId?: true
    previousOwnerId?: true
    newOwnerId?: true
  }

  export type TreeAdoptionMaxAggregateInputType = {
    id?: true
    reason?: true
    commitmentMessage?: true
    commitmentDuration?: true
    adoptedAt?: true
    treeId?: true
    previousOwnerId?: true
    newOwnerId?: true
  }

  export type TreeAdoptionCountAggregateInputType = {
    id?: true
    reason?: true
    commitmentMessage?: true
    commitmentDuration?: true
    adoptedAt?: true
    treeId?: true
    previousOwnerId?: true
    newOwnerId?: true
    _all?: true
  }

  export type TreeAdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeAdoption to aggregate.
     */
    where?: TreeAdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeAdoptions to fetch.
     */
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeAdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeAdoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeAdoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreeAdoptions
    **/
    _count?: true | TreeAdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreeAdoptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreeAdoptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeAdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeAdoptionMaxAggregateInputType
  }

  export type GetTreeAdoptionAggregateType<T extends TreeAdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateTreeAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreeAdoption[P]>
      : GetScalarType<T[P], AggregateTreeAdoption[P]>
  }




  export type TreeAdoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeAdoptionWhereInput
    orderBy?: TreeAdoptionOrderByWithAggregationInput | TreeAdoptionOrderByWithAggregationInput[]
    by: TreeAdoptionScalarFieldEnum[] | TreeAdoptionScalarFieldEnum
    having?: TreeAdoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeAdoptionCountAggregateInputType | true
    _avg?: TreeAdoptionAvgAggregateInputType
    _sum?: TreeAdoptionSumAggregateInputType
    _min?: TreeAdoptionMinAggregateInputType
    _max?: TreeAdoptionMaxAggregateInputType
  }

  export type TreeAdoptionGroupByOutputType = {
    id: string
    reason: string | null
    commitmentMessage: string | null
    commitmentDuration: number | null
    adoptedAt: Date
    treeId: string
    previousOwnerId: string
    newOwnerId: string
    _count: TreeAdoptionCountAggregateOutputType | null
    _avg: TreeAdoptionAvgAggregateOutputType | null
    _sum: TreeAdoptionSumAggregateOutputType | null
    _min: TreeAdoptionMinAggregateOutputType | null
    _max: TreeAdoptionMaxAggregateOutputType | null
  }

  type GetTreeAdoptionGroupByPayload<T extends TreeAdoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeAdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeAdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeAdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], TreeAdoptionGroupByOutputType[P]>
        }
      >
    >


  export type TreeAdoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    commitmentMessage?: boolean
    commitmentDuration?: boolean
    adoptedAt?: boolean
    treeId?: boolean
    previousOwnerId?: boolean
    newOwnerId?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    previousOwner?: boolean | UserDefaultArgs<ExtArgs>
    newOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeAdoption"]>

  export type TreeAdoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    commitmentMessage?: boolean
    commitmentDuration?: boolean
    adoptedAt?: boolean
    treeId?: boolean
    previousOwnerId?: boolean
    newOwnerId?: boolean
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    previousOwner?: boolean | UserDefaultArgs<ExtArgs>
    newOwner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeAdoption"]>

  export type TreeAdoptionSelectScalar = {
    id?: boolean
    reason?: boolean
    commitmentMessage?: boolean
    commitmentDuration?: boolean
    adoptedAt?: boolean
    treeId?: boolean
    previousOwnerId?: boolean
    newOwnerId?: boolean
  }

  export type TreeAdoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    previousOwner?: boolean | UserDefaultArgs<ExtArgs>
    newOwner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TreeAdoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tree?: boolean | TreeDefaultArgs<ExtArgs>
    previousOwner?: boolean | UserDefaultArgs<ExtArgs>
    newOwner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreeAdoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreeAdoption"
    objects: {
      tree: Prisma.$TreePayload<ExtArgs>
      previousOwner: Prisma.$UserPayload<ExtArgs>
      newOwner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string | null
      commitmentMessage: string | null
      commitmentDuration: number | null
      adoptedAt: Date
      treeId: string
      previousOwnerId: string
      newOwnerId: string
    }, ExtArgs["result"]["treeAdoption"]>
    composites: {}
  }

  type TreeAdoptionGetPayload<S extends boolean | null | undefined | TreeAdoptionDefaultArgs> = $Result.GetResult<Prisma.$TreeAdoptionPayload, S>

  type TreeAdoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TreeAdoptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TreeAdoptionCountAggregateInputType | true
    }

  export interface TreeAdoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreeAdoption'], meta: { name: 'TreeAdoption' } }
    /**
     * Find zero or one TreeAdoption that matches the filter.
     * @param {TreeAdoptionFindUniqueArgs} args - Arguments to find a TreeAdoption
     * @example
     * // Get one TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeAdoptionFindUniqueArgs>(args: SelectSubset<T, TreeAdoptionFindUniqueArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TreeAdoption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TreeAdoptionFindUniqueOrThrowArgs} args - Arguments to find a TreeAdoption
     * @example
     * // Get one TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeAdoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeAdoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TreeAdoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionFindFirstArgs} args - Arguments to find a TreeAdoption
     * @example
     * // Get one TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeAdoptionFindFirstArgs>(args?: SelectSubset<T, TreeAdoptionFindFirstArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TreeAdoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionFindFirstOrThrowArgs} args - Arguments to find a TreeAdoption
     * @example
     * // Get one TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeAdoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeAdoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TreeAdoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreeAdoptions
     * const treeAdoptions = await prisma.treeAdoption.findMany()
     * 
     * // Get first 10 TreeAdoptions
     * const treeAdoptions = await prisma.treeAdoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeAdoptionWithIdOnly = await prisma.treeAdoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeAdoptionFindManyArgs>(args?: SelectSubset<T, TreeAdoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TreeAdoption.
     * @param {TreeAdoptionCreateArgs} args - Arguments to create a TreeAdoption.
     * @example
     * // Create one TreeAdoption
     * const TreeAdoption = await prisma.treeAdoption.create({
     *   data: {
     *     // ... data to create a TreeAdoption
     *   }
     * })
     * 
     */
    create<T extends TreeAdoptionCreateArgs>(args: SelectSubset<T, TreeAdoptionCreateArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TreeAdoptions.
     * @param {TreeAdoptionCreateManyArgs} args - Arguments to create many TreeAdoptions.
     * @example
     * // Create many TreeAdoptions
     * const treeAdoption = await prisma.treeAdoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeAdoptionCreateManyArgs>(args?: SelectSubset<T, TreeAdoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreeAdoptions and returns the data saved in the database.
     * @param {TreeAdoptionCreateManyAndReturnArgs} args - Arguments to create many TreeAdoptions.
     * @example
     * // Create many TreeAdoptions
     * const treeAdoption = await prisma.treeAdoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreeAdoptions and only return the `id`
     * const treeAdoptionWithIdOnly = await prisma.treeAdoption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeAdoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeAdoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TreeAdoption.
     * @param {TreeAdoptionDeleteArgs} args - Arguments to delete one TreeAdoption.
     * @example
     * // Delete one TreeAdoption
     * const TreeAdoption = await prisma.treeAdoption.delete({
     *   where: {
     *     // ... filter to delete one TreeAdoption
     *   }
     * })
     * 
     */
    delete<T extends TreeAdoptionDeleteArgs>(args: SelectSubset<T, TreeAdoptionDeleteArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TreeAdoption.
     * @param {TreeAdoptionUpdateArgs} args - Arguments to update one TreeAdoption.
     * @example
     * // Update one TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeAdoptionUpdateArgs>(args: SelectSubset<T, TreeAdoptionUpdateArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TreeAdoptions.
     * @param {TreeAdoptionDeleteManyArgs} args - Arguments to filter TreeAdoptions to delete.
     * @example
     * // Delete a few TreeAdoptions
     * const { count } = await prisma.treeAdoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeAdoptionDeleteManyArgs>(args?: SelectSubset<T, TreeAdoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeAdoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreeAdoptions
     * const treeAdoption = await prisma.treeAdoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeAdoptionUpdateManyArgs>(args: SelectSubset<T, TreeAdoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreeAdoption.
     * @param {TreeAdoptionUpsertArgs} args - Arguments to update or create a TreeAdoption.
     * @example
     * // Update or create a TreeAdoption
     * const treeAdoption = await prisma.treeAdoption.upsert({
     *   create: {
     *     // ... data to create a TreeAdoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreeAdoption we want to update
     *   }
     * })
     */
    upsert<T extends TreeAdoptionUpsertArgs>(args: SelectSubset<T, TreeAdoptionUpsertArgs<ExtArgs>>): Prisma__TreeAdoptionClient<$Result.GetResult<Prisma.$TreeAdoptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TreeAdoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionCountArgs} args - Arguments to filter TreeAdoptions to count.
     * @example
     * // Count the number of TreeAdoptions
     * const count = await prisma.treeAdoption.count({
     *   where: {
     *     // ... the filter for the TreeAdoptions we want to count
     *   }
     * })
    **/
    count<T extends TreeAdoptionCountArgs>(
      args?: Subset<T, TreeAdoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeAdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreeAdoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreeAdoptionAggregateArgs>(args: Subset<T, TreeAdoptionAggregateArgs>): Prisma.PrismaPromise<GetTreeAdoptionAggregateType<T>>

    /**
     * Group by TreeAdoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeAdoptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreeAdoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeAdoptionGroupByArgs['orderBy'] }
        : { orderBy?: TreeAdoptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreeAdoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreeAdoption model
   */
  readonly fields: TreeAdoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreeAdoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeAdoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tree<T extends TreeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreeDefaultArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    previousOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    newOwner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreeAdoption model
   */ 
  interface TreeAdoptionFieldRefs {
    readonly id: FieldRef<"TreeAdoption", 'String'>
    readonly reason: FieldRef<"TreeAdoption", 'String'>
    readonly commitmentMessage: FieldRef<"TreeAdoption", 'String'>
    readonly commitmentDuration: FieldRef<"TreeAdoption", 'Int'>
    readonly adoptedAt: FieldRef<"TreeAdoption", 'DateTime'>
    readonly treeId: FieldRef<"TreeAdoption", 'String'>
    readonly previousOwnerId: FieldRef<"TreeAdoption", 'String'>
    readonly newOwnerId: FieldRef<"TreeAdoption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TreeAdoption findUnique
   */
  export type TreeAdoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter, which TreeAdoption to fetch.
     */
    where: TreeAdoptionWhereUniqueInput
  }

  /**
   * TreeAdoption findUniqueOrThrow
   */
  export type TreeAdoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter, which TreeAdoption to fetch.
     */
    where: TreeAdoptionWhereUniqueInput
  }

  /**
   * TreeAdoption findFirst
   */
  export type TreeAdoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter, which TreeAdoption to fetch.
     */
    where?: TreeAdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeAdoptions to fetch.
     */
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeAdoptions.
     */
    cursor?: TreeAdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeAdoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeAdoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeAdoptions.
     */
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * TreeAdoption findFirstOrThrow
   */
  export type TreeAdoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter, which TreeAdoption to fetch.
     */
    where?: TreeAdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeAdoptions to fetch.
     */
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeAdoptions.
     */
    cursor?: TreeAdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeAdoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeAdoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeAdoptions.
     */
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * TreeAdoption findMany
   */
  export type TreeAdoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter, which TreeAdoptions to fetch.
     */
    where?: TreeAdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeAdoptions to fetch.
     */
    orderBy?: TreeAdoptionOrderByWithRelationInput | TreeAdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreeAdoptions.
     */
    cursor?: TreeAdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeAdoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeAdoptions.
     */
    skip?: number
    distinct?: TreeAdoptionScalarFieldEnum | TreeAdoptionScalarFieldEnum[]
  }

  /**
   * TreeAdoption create
   */
  export type TreeAdoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a TreeAdoption.
     */
    data: XOR<TreeAdoptionCreateInput, TreeAdoptionUncheckedCreateInput>
  }

  /**
   * TreeAdoption createMany
   */
  export type TreeAdoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreeAdoptions.
     */
    data: TreeAdoptionCreateManyInput | TreeAdoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreeAdoption createManyAndReturn
   */
  export type TreeAdoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TreeAdoptions.
     */
    data: TreeAdoptionCreateManyInput | TreeAdoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeAdoption update
   */
  export type TreeAdoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a TreeAdoption.
     */
    data: XOR<TreeAdoptionUpdateInput, TreeAdoptionUncheckedUpdateInput>
    /**
     * Choose, which TreeAdoption to update.
     */
    where: TreeAdoptionWhereUniqueInput
  }

  /**
   * TreeAdoption updateMany
   */
  export type TreeAdoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreeAdoptions.
     */
    data: XOR<TreeAdoptionUpdateManyMutationInput, TreeAdoptionUncheckedUpdateManyInput>
    /**
     * Filter which TreeAdoptions to update
     */
    where?: TreeAdoptionWhereInput
  }

  /**
   * TreeAdoption upsert
   */
  export type TreeAdoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the TreeAdoption to update in case it exists.
     */
    where: TreeAdoptionWhereUniqueInput
    /**
     * In case the TreeAdoption found by the `where` argument doesn't exist, create a new TreeAdoption with this data.
     */
    create: XOR<TreeAdoptionCreateInput, TreeAdoptionUncheckedCreateInput>
    /**
     * In case the TreeAdoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeAdoptionUpdateInput, TreeAdoptionUncheckedUpdateInput>
  }

  /**
   * TreeAdoption delete
   */
  export type TreeAdoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
    /**
     * Filter which TreeAdoption to delete.
     */
    where: TreeAdoptionWhereUniqueInput
  }

  /**
   * TreeAdoption deleteMany
   */
  export type TreeAdoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeAdoptions to delete
     */
    where?: TreeAdoptionWhereInput
  }

  /**
   * TreeAdoption without action
   */
  export type TreeAdoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeAdoption
     */
    select?: TreeAdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeAdoptionInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    pointsValue: number | null
  }

  export type BadgeSumAggregateOutputType = {
    pointsValue: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: $Enums.BadgeCategory | null
    pointsValue: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: $Enums.BadgeCategory | null
    pointsValue: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    category: number
    requirement: number
    pointsValue: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    pointsValue?: true
  }

  export type BadgeSumAggregateInputType = {
    pointsValue?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    pointsValue?: true
    isActive?: true
    createdAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    pointsValue?: true
    isActive?: true
    createdAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    requirement?: true
    pointsValue?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonValue
    pointsValue: number
    isActive: boolean
    createdAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    requirement?: boolean
    pointsValue?: boolean
    isActive?: boolean
    createdAt?: boolean
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    requirement?: boolean
    pointsValue?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    requirement?: boolean
    pointsValue?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | Badge$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      userBadges: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      category: $Enums.BadgeCategory
      requirement: Prisma.JsonValue
      pointsValue: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends Badge$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, Badge$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Badge model
   */ 
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly icon: FieldRef<"Badge", 'String'>
    readonly category: FieldRef<"Badge", 'BadgeCategory'>
    readonly requirement: FieldRef<"Badge", 'Json'>
    readonly pointsValue: FieldRef<"Badge", 'Int'>
    readonly isActive: FieldRef<"Badge", 'Boolean'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
  }

  /**
   * Badge.userBadges
   */
  export type Badge$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: string | null
    earnedAt: Date | null
    userId: string | null
    badgeId: string | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: string | null
    earnedAt: Date | null
    userId: string | null
    badgeId: string | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    earnedAt: number
    userId: number
    badgeId: number
    _all: number
  }


  export type UserBadgeMinAggregateInputType = {
    id?: true
    earnedAt?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    earnedAt?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    earnedAt?: true
    userId?: true
    badgeId?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: string
    earnedAt: Date
    userId: string
    badgeId: string
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    earnedAt?: boolean
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    earnedAt?: boolean
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    earnedAt?: boolean
    userId?: boolean
    badgeId?: boolean
  }

  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      earnedAt: Date
      userId: string
      badgeId: string
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBadge model
   */ 
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'String'>
    readonly earnedAt: FieldRef<"UserBadge", 'DateTime'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    pointsCost: number | null
  }

  export type RewardSumAggregateOutputType = {
    pointsCost: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pointsCost: number | null
    category: $Enums.RewardCategory | null
    imageUrl: string | null
    inStock: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RewardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    pointsCost: number | null
    category: $Enums.RewardCategory | null
    imageUrl: string | null
    inStock: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pointsCost: number
    category: number
    imageUrl: number
    inStock: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    pointsCost?: true
  }

  export type RewardSumAggregateInputType = {
    pointsCost?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pointsCost?: true
    category?: true
    imageUrl?: true
    inStock?: true
    isActive?: true
    createdAt?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pointsCost?: true
    category?: true
    imageUrl?: true
    inStock?: true
    isActive?: true
    createdAt?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pointsCost?: true
    category?: true
    imageUrl?: true
    inStock?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl: string | null
    inStock: boolean
    isActive: boolean
    createdAt: Date
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    category?: boolean
    imageUrl?: boolean
    inStock?: boolean
    isActive?: boolean
    createdAt?: boolean
    redemptions?: boolean | Reward$redemptionsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    category?: boolean
    imageUrl?: boolean
    inStock?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pointsCost?: boolean
    category?: boolean
    imageUrl?: boolean
    inStock?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type RewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redemptions?: boolean | Reward$redemptionsArgs<ExtArgs>
    _count?: boolean | RewardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {
      redemptions: Prisma.$RewardRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      pointsCost: number
      category: $Enums.RewardCategory
      imageUrl: string | null
      inStock: boolean
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redemptions<T extends Reward$redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Reward$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reward model
   */ 
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'String'>
    readonly name: FieldRef<"Reward", 'String'>
    readonly description: FieldRef<"Reward", 'String'>
    readonly pointsCost: FieldRef<"Reward", 'Int'>
    readonly category: FieldRef<"Reward", 'RewardCategory'>
    readonly imageUrl: FieldRef<"Reward", 'String'>
    readonly inStock: FieldRef<"Reward", 'Boolean'>
    readonly isActive: FieldRef<"Reward", 'Boolean'>
    readonly createdAt: FieldRef<"Reward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
  }

  /**
   * Reward.redemptions
   */
  export type Reward$redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    cursor?: RewardRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardInclude<ExtArgs> | null
  }


  /**
   * Model RewardRedemption
   */

  export type AggregateRewardRedemption = {
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  export type RewardRedemptionAvgAggregateOutputType = {
    pointsSpent: number | null
  }

  export type RewardRedemptionSumAggregateOutputType = {
    pointsSpent: number | null
  }

  export type RewardRedemptionMinAggregateOutputType = {
    id: string | null
    pointsSpent: number | null
    status: $Enums.RedemptionStatus | null
    redeemedAt: Date | null
    shippedAt: Date | null
    deliveredAt: Date | null
    userId: string | null
    rewardId: string | null
  }

  export type RewardRedemptionMaxAggregateOutputType = {
    id: string | null
    pointsSpent: number | null
    status: $Enums.RedemptionStatus | null
    redeemedAt: Date | null
    shippedAt: Date | null
    deliveredAt: Date | null
    userId: string | null
    rewardId: string | null
  }

  export type RewardRedemptionCountAggregateOutputType = {
    id: number
    pointsSpent: number
    shippingAddress: number
    status: number
    redeemedAt: number
    shippedAt: number
    deliveredAt: number
    userId: number
    rewardId: number
    _all: number
  }


  export type RewardRedemptionAvgAggregateInputType = {
    pointsSpent?: true
  }

  export type RewardRedemptionSumAggregateInputType = {
    pointsSpent?: true
  }

  export type RewardRedemptionMinAggregateInputType = {
    id?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    shippedAt?: true
    deliveredAt?: true
    userId?: true
    rewardId?: true
  }

  export type RewardRedemptionMaxAggregateInputType = {
    id?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    shippedAt?: true
    deliveredAt?: true
    userId?: true
    rewardId?: true
  }

  export type RewardRedemptionCountAggregateInputType = {
    id?: true
    pointsSpent?: true
    shippingAddress?: true
    status?: true
    redeemedAt?: true
    shippedAt?: true
    deliveredAt?: true
    userId?: true
    rewardId?: true
    _all?: true
  }

  export type RewardRedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemption to aggregate.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RewardRedemptions
    **/
    _count?: true | RewardRedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardRedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardRedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardRedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type GetRewardRedemptionAggregateType<T extends RewardRedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateRewardRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewardRedemption[P]>
      : GetScalarType<T[P], AggregateRewardRedemption[P]>
  }




  export type RewardRedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardRedemptionWhereInput
    orderBy?: RewardRedemptionOrderByWithAggregationInput | RewardRedemptionOrderByWithAggregationInput[]
    by: RewardRedemptionScalarFieldEnum[] | RewardRedemptionScalarFieldEnum
    having?: RewardRedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardRedemptionCountAggregateInputType | true
    _avg?: RewardRedemptionAvgAggregateInputType
    _sum?: RewardRedemptionSumAggregateInputType
    _min?: RewardRedemptionMinAggregateInputType
    _max?: RewardRedemptionMaxAggregateInputType
  }

  export type RewardRedemptionGroupByOutputType = {
    id: string
    pointsSpent: number
    shippingAddress: JsonValue | null
    status: $Enums.RedemptionStatus
    redeemedAt: Date
    shippedAt: Date | null
    deliveredAt: Date | null
    userId: string
    rewardId: string
    _count: RewardRedemptionCountAggregateOutputType | null
    _avg: RewardRedemptionAvgAggregateOutputType | null
    _sum: RewardRedemptionSumAggregateOutputType | null
    _min: RewardRedemptionMinAggregateOutputType | null
    _max: RewardRedemptionMaxAggregateOutputType | null
  }

  type GetRewardRedemptionGroupByPayload<T extends RewardRedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardRedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardRedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>
        }
      >
    >


  export type RewardRedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointsSpent?: boolean
    shippingAddress?: boolean
    status?: boolean
    redeemedAt?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    userId?: boolean
    rewardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointsSpent?: boolean
    shippingAddress?: boolean
    status?: boolean
    redeemedAt?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    userId?: boolean
    rewardId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewardRedemption"]>

  export type RewardRedemptionSelectScalar = {
    id?: boolean
    pointsSpent?: boolean
    shippingAddress?: boolean
    status?: boolean
    redeemedAt?: boolean
    shippedAt?: boolean
    deliveredAt?: boolean
    userId?: boolean
    rewardId?: boolean
  }

  export type RewardRedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }
  export type RewardRedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reward?: boolean | RewardDefaultArgs<ExtArgs>
  }

  export type $RewardRedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RewardRedemption"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reward: Prisma.$RewardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pointsSpent: number
      shippingAddress: Prisma.JsonValue | null
      status: $Enums.RedemptionStatus
      redeemedAt: Date
      shippedAt: Date | null
      deliveredAt: Date | null
      userId: string
      rewardId: string
    }, ExtArgs["result"]["rewardRedemption"]>
    composites: {}
  }

  type RewardRedemptionGetPayload<S extends boolean | null | undefined | RewardRedemptionDefaultArgs> = $Result.GetResult<Prisma.$RewardRedemptionPayload, S>

  type RewardRedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RewardRedemptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RewardRedemptionCountAggregateInputType | true
    }

  export interface RewardRedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RewardRedemption'], meta: { name: 'RewardRedemption' } }
    /**
     * Find zero or one RewardRedemption that matches the filter.
     * @param {RewardRedemptionFindUniqueArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardRedemptionFindUniqueArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RewardRedemption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RewardRedemptionFindUniqueOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardRedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RewardRedemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardRedemptionFindFirstArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RewardRedemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindFirstOrThrowArgs} args - Arguments to find a RewardRedemption
     * @example
     * // Get one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardRedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RewardRedemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany()
     * 
     * // Get first 10 RewardRedemptions
     * const rewardRedemptions = await prisma.rewardRedemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardRedemptionFindManyArgs>(args?: SelectSubset<T, RewardRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RewardRedemption.
     * @param {RewardRedemptionCreateArgs} args - Arguments to create a RewardRedemption.
     * @example
     * // Create one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.create({
     *   data: {
     *     // ... data to create a RewardRedemption
     *   }
     * })
     * 
     */
    create<T extends RewardRedemptionCreateArgs>(args: SelectSubset<T, RewardRedemptionCreateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RewardRedemptions.
     * @param {RewardRedemptionCreateManyArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardRedemptionCreateManyArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RewardRedemptions and returns the data saved in the database.
     * @param {RewardRedemptionCreateManyAndReturnArgs} args - Arguments to create many RewardRedemptions.
     * @example
     * // Create many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RewardRedemptions and only return the `id`
     * const rewardRedemptionWithIdOnly = await prisma.rewardRedemption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardRedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RewardRedemption.
     * @param {RewardRedemptionDeleteArgs} args - Arguments to delete one RewardRedemption.
     * @example
     * // Delete one RewardRedemption
     * const RewardRedemption = await prisma.rewardRedemption.delete({
     *   where: {
     *     // ... filter to delete one RewardRedemption
     *   }
     * })
     * 
     */
    delete<T extends RewardRedemptionDeleteArgs>(args: SelectSubset<T, RewardRedemptionDeleteArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RewardRedemption.
     * @param {RewardRedemptionUpdateArgs} args - Arguments to update one RewardRedemption.
     * @example
     * // Update one RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardRedemptionUpdateArgs>(args: SelectSubset<T, RewardRedemptionUpdateArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RewardRedemptions.
     * @param {RewardRedemptionDeleteManyArgs} args - Arguments to filter RewardRedemptions to delete.
     * @example
     * // Delete a few RewardRedemptions
     * const { count } = await prisma.rewardRedemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardRedemptionDeleteManyArgs>(args?: SelectSubset<T, RewardRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RewardRedemptions
     * const rewardRedemption = await prisma.rewardRedemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardRedemptionUpdateManyArgs>(args: SelectSubset<T, RewardRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RewardRedemption.
     * @param {RewardRedemptionUpsertArgs} args - Arguments to update or create a RewardRedemption.
     * @example
     * // Update or create a RewardRedemption
     * const rewardRedemption = await prisma.rewardRedemption.upsert({
     *   create: {
     *     // ... data to create a RewardRedemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RewardRedemption we want to update
     *   }
     * })
     */
    upsert<T extends RewardRedemptionUpsertArgs>(args: SelectSubset<T, RewardRedemptionUpsertArgs<ExtArgs>>): Prisma__RewardRedemptionClient<$Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RewardRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionCountArgs} args - Arguments to filter RewardRedemptions to count.
     * @example
     * // Count the number of RewardRedemptions
     * const count = await prisma.rewardRedemption.count({
     *   where: {
     *     // ... the filter for the RewardRedemptions we want to count
     *   }
     * })
    **/
    count<T extends RewardRedemptionCountArgs>(
      args?: Subset<T, RewardRedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardRedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RewardRedemptionAggregateArgs>(args: Subset<T, RewardRedemptionAggregateArgs>): Prisma.PrismaPromise<GetRewardRedemptionAggregateType<T>>

    /**
     * Group by RewardRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardRedemptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RewardRedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardRedemptionGroupByArgs['orderBy'] }
        : { orderBy?: RewardRedemptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RewardRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RewardRedemption model
   */
  readonly fields: RewardRedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RewardRedemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardRedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reward<T extends RewardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RewardDefaultArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RewardRedemption model
   */ 
  interface RewardRedemptionFieldRefs {
    readonly id: FieldRef<"RewardRedemption", 'String'>
    readonly pointsSpent: FieldRef<"RewardRedemption", 'Int'>
    readonly shippingAddress: FieldRef<"RewardRedemption", 'Json'>
    readonly status: FieldRef<"RewardRedemption", 'RedemptionStatus'>
    readonly redeemedAt: FieldRef<"RewardRedemption", 'DateTime'>
    readonly shippedAt: FieldRef<"RewardRedemption", 'DateTime'>
    readonly deliveredAt: FieldRef<"RewardRedemption", 'DateTime'>
    readonly userId: FieldRef<"RewardRedemption", 'String'>
    readonly rewardId: FieldRef<"RewardRedemption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RewardRedemption findUnique
   */
  export type RewardRedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findUniqueOrThrow
   */
  export type RewardRedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption findFirst
   */
  export type RewardRedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findFirstOrThrow
   */
  export type RewardRedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemption to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RewardRedemptions.
     */
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption findMany
   */
  export type RewardRedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which RewardRedemptions to fetch.
     */
    where?: RewardRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RewardRedemptions to fetch.
     */
    orderBy?: RewardRedemptionOrderByWithRelationInput | RewardRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RewardRedemptions.
     */
    cursor?: RewardRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RewardRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RewardRedemptions.
     */
    skip?: number
    distinct?: RewardRedemptionScalarFieldEnum | RewardRedemptionScalarFieldEnum[]
  }

  /**
   * RewardRedemption create
   */
  export type RewardRedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a RewardRedemption.
     */
    data: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
  }

  /**
   * RewardRedemption createMany
   */
  export type RewardRedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RewardRedemption createManyAndReturn
   */
  export type RewardRedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RewardRedemptions.
     */
    data: RewardRedemptionCreateManyInput | RewardRedemptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RewardRedemption update
   */
  export type RewardRedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a RewardRedemption.
     */
    data: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
    /**
     * Choose, which RewardRedemption to update.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption updateMany
   */
  export type RewardRedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RewardRedemptions.
     */
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which RewardRedemptions to update
     */
    where?: RewardRedemptionWhereInput
  }

  /**
   * RewardRedemption upsert
   */
  export type RewardRedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the RewardRedemption to update in case it exists.
     */
    where: RewardRedemptionWhereUniqueInput
    /**
     * In case the RewardRedemption found by the `where` argument doesn't exist, create a new RewardRedemption with this data.
     */
    create: XOR<RewardRedemptionCreateInput, RewardRedemptionUncheckedCreateInput>
    /**
     * In case the RewardRedemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardRedemptionUpdateInput, RewardRedemptionUncheckedUpdateInput>
  }

  /**
   * RewardRedemption delete
   */
  export type RewardRedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
    /**
     * Filter which RewardRedemption to delete.
     */
    where: RewardRedemptionWhereUniqueInput
  }

  /**
   * RewardRedemption deleteMany
   */
  export type RewardRedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RewardRedemptions to delete
     */
    where?: RewardRedemptionWhereInput
  }

  /**
   * RewardRedemption without action
   */
  export type RewardRedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RewardRedemption
     */
    select?: RewardRedemptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardRedemptionInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    type: $Enums.CertificateType | null
    pdfUrl: string | null
    issuedAt: Date | null
    userId: string | null
    treeId: string | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    type: $Enums.CertificateType | null
    pdfUrl: string | null
    issuedAt: Date | null
    userId: string | null
    treeId: string | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    type: number
    pdfUrl: number
    metadata: number
    issuedAt: number
    userId: number
    treeId: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    type?: true
    pdfUrl?: true
    issuedAt?: true
    userId?: true
    treeId?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    type?: true
    pdfUrl?: true
    issuedAt?: true
    userId?: true
    treeId?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    type?: true
    pdfUrl?: true
    metadata?: true
    issuedAt?: true
    userId?: true
    treeId?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonValue
    issuedAt: Date
    userId: string
    treeId: string | null
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pdfUrl?: boolean
    metadata?: boolean
    issuedAt?: boolean
    userId?: boolean
    treeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tree?: boolean | Certificate$treeArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pdfUrl?: boolean
    metadata?: boolean
    issuedAt?: boolean
    userId?: boolean
    treeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tree?: boolean | Certificate$treeArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    type?: boolean
    pdfUrl?: boolean
    metadata?: boolean
    issuedAt?: boolean
    userId?: boolean
    treeId?: boolean
  }

  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tree?: boolean | Certificate$treeArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tree?: boolean | Certificate$treeArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tree: Prisma.$TreePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.CertificateType
      pdfUrl: string
      metadata: Prisma.JsonValue
      issuedAt: Date
      userId: string
      treeId: string | null
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tree<T extends Certificate$treeArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$treeArgs<ExtArgs>>): Prisma__TreeClient<$Result.GetResult<Prisma.$TreePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */ 
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly type: FieldRef<"Certificate", 'CertificateType'>
    readonly pdfUrl: FieldRef<"Certificate", 'String'>
    readonly metadata: FieldRef<"Certificate", 'Json'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly treeId: FieldRef<"Certificate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
  }

  /**
   * Certificate.tree
   */
  export type Certificate$treeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tree
     */
    select?: TreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeInclude<ExtArgs> | null
    where?: TreeWhereInput
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    data: number
    isRead: number
    createdAt: number
    userId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    data?: true
    isRead?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    title: string
    message: string
    data: JsonValue | null
    isRead: boolean
    createdAt: Date
    userId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    data?: boolean
    isRead?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      title: string
      message: string
      data: Prisma.JsonValue | null
      isRead: boolean
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly data: FieldRef<"Notification", 'Json'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model LearningModule
   */

  export type AggregateLearningModule = {
    _count: LearningModuleCountAggregateOutputType | null
    _avg: LearningModuleAvgAggregateOutputType | null
    _sum: LearningModuleSumAggregateOutputType | null
    _min: LearningModuleMinAggregateOutputType | null
    _max: LearningModuleMaxAggregateOutputType | null
  }

  export type LearningModuleAvgAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type LearningModuleSumAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type LearningModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: number | null
    difficulty: $Enums.Difficulty | null
    thumbnailUrl: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type LearningModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: number | null
    difficulty: $Enums.Difficulty | null
    thumbnailUrl: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type LearningModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    content: number
    duration: number
    difficulty: number
    topics: number
    thumbnailUrl: number
    isActive: number
    order: number
    createdAt: number
    _all: number
  }


  export type LearningModuleAvgAggregateInputType = {
    duration?: true
    order?: true
  }

  export type LearningModuleSumAggregateInputType = {
    duration?: true
    order?: true
  }

  export type LearningModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    difficulty?: true
    thumbnailUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
  }

  export type LearningModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    difficulty?: true
    thumbnailUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
  }

  export type LearningModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    content?: true
    duration?: true
    difficulty?: true
    topics?: true
    thumbnailUrl?: true
    isActive?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type LearningModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningModule to aggregate.
     */
    where?: LearningModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningModules to fetch.
     */
    orderBy?: LearningModuleOrderByWithRelationInput | LearningModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningModules
    **/
    _count?: true | LearningModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningModuleMaxAggregateInputType
  }

  export type GetLearningModuleAggregateType<T extends LearningModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningModule[P]>
      : GetScalarType<T[P], AggregateLearningModule[P]>
  }




  export type LearningModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningModuleWhereInput
    orderBy?: LearningModuleOrderByWithAggregationInput | LearningModuleOrderByWithAggregationInput[]
    by: LearningModuleScalarFieldEnum[] | LearningModuleScalarFieldEnum
    having?: LearningModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningModuleCountAggregateInputType | true
    _avg?: LearningModuleAvgAggregateInputType
    _sum?: LearningModuleSumAggregateInputType
    _min?: LearningModuleMinAggregateInputType
    _max?: LearningModuleMaxAggregateInputType
  }

  export type LearningModuleGroupByOutputType = {
    id: string
    title: string
    description: string
    content: JsonValue
    duration: number
    difficulty: $Enums.Difficulty
    topics: string[]
    thumbnailUrl: string | null
    isActive: boolean
    order: number
    createdAt: Date
    _count: LearningModuleCountAggregateOutputType | null
    _avg: LearningModuleAvgAggregateOutputType | null
    _sum: LearningModuleSumAggregateOutputType | null
    _min: LearningModuleMinAggregateOutputType | null
    _max: LearningModuleMaxAggregateOutputType | null
  }

  type GetLearningModuleGroupByPayload<T extends LearningModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningModuleGroupByOutputType[P]>
            : GetScalarType<T[P], LearningModuleGroupByOutputType[P]>
        }
      >
    >


  export type LearningModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    duration?: boolean
    difficulty?: boolean
    topics?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["learningModule"]>

  export type LearningModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    duration?: boolean
    difficulty?: boolean
    topics?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["learningModule"]>

  export type LearningModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    duration?: boolean
    difficulty?: boolean
    topics?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
  }


  export type $LearningModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningModule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      content: Prisma.JsonValue
      duration: number
      difficulty: $Enums.Difficulty
      topics: string[]
      thumbnailUrl: string | null
      isActive: boolean
      order: number
      createdAt: Date
    }, ExtArgs["result"]["learningModule"]>
    composites: {}
  }

  type LearningModuleGetPayload<S extends boolean | null | undefined | LearningModuleDefaultArgs> = $Result.GetResult<Prisma.$LearningModulePayload, S>

  type LearningModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LearningModuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LearningModuleCountAggregateInputType | true
    }

  export interface LearningModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningModule'], meta: { name: 'LearningModule' } }
    /**
     * Find zero or one LearningModule that matches the filter.
     * @param {LearningModuleFindUniqueArgs} args - Arguments to find a LearningModule
     * @example
     * // Get one LearningModule
     * const learningModule = await prisma.learningModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningModuleFindUniqueArgs>(args: SelectSubset<T, LearningModuleFindUniqueArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LearningModule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LearningModuleFindUniqueOrThrowArgs} args - Arguments to find a LearningModule
     * @example
     * // Get one LearningModule
     * const learningModule = await prisma.learningModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LearningModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleFindFirstArgs} args - Arguments to find a LearningModule
     * @example
     * // Get one LearningModule
     * const learningModule = await prisma.learningModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningModuleFindFirstArgs>(args?: SelectSubset<T, LearningModuleFindFirstArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LearningModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleFindFirstOrThrowArgs} args - Arguments to find a LearningModule
     * @example
     * // Get one LearningModule
     * const learningModule = await prisma.learningModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LearningModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningModules
     * const learningModules = await prisma.learningModule.findMany()
     * 
     * // Get first 10 LearningModules
     * const learningModules = await prisma.learningModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningModuleWithIdOnly = await prisma.learningModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningModuleFindManyArgs>(args?: SelectSubset<T, LearningModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LearningModule.
     * @param {LearningModuleCreateArgs} args - Arguments to create a LearningModule.
     * @example
     * // Create one LearningModule
     * const LearningModule = await prisma.learningModule.create({
     *   data: {
     *     // ... data to create a LearningModule
     *   }
     * })
     * 
     */
    create<T extends LearningModuleCreateArgs>(args: SelectSubset<T, LearningModuleCreateArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LearningModules.
     * @param {LearningModuleCreateManyArgs} args - Arguments to create many LearningModules.
     * @example
     * // Create many LearningModules
     * const learningModule = await prisma.learningModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningModuleCreateManyArgs>(args?: SelectSubset<T, LearningModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningModules and returns the data saved in the database.
     * @param {LearningModuleCreateManyAndReturnArgs} args - Arguments to create many LearningModules.
     * @example
     * // Create many LearningModules
     * const learningModule = await prisma.learningModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningModules and only return the `id`
     * const learningModuleWithIdOnly = await prisma.learningModule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LearningModule.
     * @param {LearningModuleDeleteArgs} args - Arguments to delete one LearningModule.
     * @example
     * // Delete one LearningModule
     * const LearningModule = await prisma.learningModule.delete({
     *   where: {
     *     // ... filter to delete one LearningModule
     *   }
     * })
     * 
     */
    delete<T extends LearningModuleDeleteArgs>(args: SelectSubset<T, LearningModuleDeleteArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LearningModule.
     * @param {LearningModuleUpdateArgs} args - Arguments to update one LearningModule.
     * @example
     * // Update one LearningModule
     * const learningModule = await prisma.learningModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningModuleUpdateArgs>(args: SelectSubset<T, LearningModuleUpdateArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LearningModules.
     * @param {LearningModuleDeleteManyArgs} args - Arguments to filter LearningModules to delete.
     * @example
     * // Delete a few LearningModules
     * const { count } = await prisma.learningModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningModuleDeleteManyArgs>(args?: SelectSubset<T, LearningModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningModules
     * const learningModule = await prisma.learningModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningModuleUpdateManyArgs>(args: SelectSubset<T, LearningModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningModule.
     * @param {LearningModuleUpsertArgs} args - Arguments to update or create a LearningModule.
     * @example
     * // Update or create a LearningModule
     * const learningModule = await prisma.learningModule.upsert({
     *   create: {
     *     // ... data to create a LearningModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningModule we want to update
     *   }
     * })
     */
    upsert<T extends LearningModuleUpsertArgs>(args: SelectSubset<T, LearningModuleUpsertArgs<ExtArgs>>): Prisma__LearningModuleClient<$Result.GetResult<Prisma.$LearningModulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LearningModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleCountArgs} args - Arguments to filter LearningModules to count.
     * @example
     * // Count the number of LearningModules
     * const count = await prisma.learningModule.count({
     *   where: {
     *     // ... the filter for the LearningModules we want to count
     *   }
     * })
    **/
    count<T extends LearningModuleCountArgs>(
      args?: Subset<T, LearningModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningModuleAggregateArgs>(args: Subset<T, LearningModuleAggregateArgs>): Prisma.PrismaPromise<GetLearningModuleAggregateType<T>>

    /**
     * Group by LearningModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningModuleGroupByArgs['orderBy'] }
        : { orderBy?: LearningModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningModule model
   */
  readonly fields: LearningModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LearningModule model
   */ 
  interface LearningModuleFieldRefs {
    readonly id: FieldRef<"LearningModule", 'String'>
    readonly title: FieldRef<"LearningModule", 'String'>
    readonly description: FieldRef<"LearningModule", 'String'>
    readonly content: FieldRef<"LearningModule", 'Json'>
    readonly duration: FieldRef<"LearningModule", 'Int'>
    readonly difficulty: FieldRef<"LearningModule", 'Difficulty'>
    readonly topics: FieldRef<"LearningModule", 'String[]'>
    readonly thumbnailUrl: FieldRef<"LearningModule", 'String'>
    readonly isActive: FieldRef<"LearningModule", 'Boolean'>
    readonly order: FieldRef<"LearningModule", 'Int'>
    readonly createdAt: FieldRef<"LearningModule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningModule findUnique
   */
  export type LearningModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter, which LearningModule to fetch.
     */
    where: LearningModuleWhereUniqueInput
  }

  /**
   * LearningModule findUniqueOrThrow
   */
  export type LearningModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter, which LearningModule to fetch.
     */
    where: LearningModuleWhereUniqueInput
  }

  /**
   * LearningModule findFirst
   */
  export type LearningModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter, which LearningModule to fetch.
     */
    where?: LearningModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningModules to fetch.
     */
    orderBy?: LearningModuleOrderByWithRelationInput | LearningModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningModules.
     */
    cursor?: LearningModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningModules.
     */
    distinct?: LearningModuleScalarFieldEnum | LearningModuleScalarFieldEnum[]
  }

  /**
   * LearningModule findFirstOrThrow
   */
  export type LearningModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter, which LearningModule to fetch.
     */
    where?: LearningModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningModules to fetch.
     */
    orderBy?: LearningModuleOrderByWithRelationInput | LearningModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningModules.
     */
    cursor?: LearningModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningModules.
     */
    distinct?: LearningModuleScalarFieldEnum | LearningModuleScalarFieldEnum[]
  }

  /**
   * LearningModule findMany
   */
  export type LearningModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter, which LearningModules to fetch.
     */
    where?: LearningModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningModules to fetch.
     */
    orderBy?: LearningModuleOrderByWithRelationInput | LearningModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningModules.
     */
    cursor?: LearningModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningModules.
     */
    skip?: number
    distinct?: LearningModuleScalarFieldEnum | LearningModuleScalarFieldEnum[]
  }

  /**
   * LearningModule create
   */
  export type LearningModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * The data needed to create a LearningModule.
     */
    data: XOR<LearningModuleCreateInput, LearningModuleUncheckedCreateInput>
  }

  /**
   * LearningModule createMany
   */
  export type LearningModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningModules.
     */
    data: LearningModuleCreateManyInput | LearningModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningModule createManyAndReturn
   */
  export type LearningModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LearningModules.
     */
    data: LearningModuleCreateManyInput | LearningModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningModule update
   */
  export type LearningModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * The data needed to update a LearningModule.
     */
    data: XOR<LearningModuleUpdateInput, LearningModuleUncheckedUpdateInput>
    /**
     * Choose, which LearningModule to update.
     */
    where: LearningModuleWhereUniqueInput
  }

  /**
   * LearningModule updateMany
   */
  export type LearningModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningModules.
     */
    data: XOR<LearningModuleUpdateManyMutationInput, LearningModuleUncheckedUpdateManyInput>
    /**
     * Filter which LearningModules to update
     */
    where?: LearningModuleWhereInput
  }

  /**
   * LearningModule upsert
   */
  export type LearningModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * The filter to search for the LearningModule to update in case it exists.
     */
    where: LearningModuleWhereUniqueInput
    /**
     * In case the LearningModule found by the `where` argument doesn't exist, create a new LearningModule with this data.
     */
    create: XOR<LearningModuleCreateInput, LearningModuleUncheckedCreateInput>
    /**
     * In case the LearningModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningModuleUpdateInput, LearningModuleUncheckedUpdateInput>
  }

  /**
   * LearningModule delete
   */
  export type LearningModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
    /**
     * Filter which LearningModule to delete.
     */
    where: LearningModuleWhereUniqueInput
  }

  /**
   * LearningModule deleteMany
   */
  export type LearningModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningModules to delete
     */
    where?: LearningModuleWhereInput
  }

  /**
   * LearningModule without action
   */
  export type LearningModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningModule
     */
    select?: LearningModuleSelect<ExtArgs> | null
  }


  /**
   * Model GlobalStats
   */

  export type AggregateGlobalStats = {
    _count: GlobalStatsCountAggregateOutputType | null
    _avg: GlobalStatsAvgAggregateOutputType | null
    _sum: GlobalStatsSumAggregateOutputType | null
    _min: GlobalStatsMinAggregateOutputType | null
    _max: GlobalStatsMaxAggregateOutputType | null
  }

  export type GlobalStatsAvgAggregateOutputType = {
    totalTrees: number | null
    totalUsers: number | null
    totalUpdates: number | null
    totalAdoptions: number | null
    co2OffsetKg: number | null
    countriesActive: number | null
  }

  export type GlobalStatsSumAggregateOutputType = {
    totalTrees: number | null
    totalUsers: number | null
    totalUpdates: number | null
    totalAdoptions: number | null
    co2OffsetKg: number | null
    countriesActive: number | null
  }

  export type GlobalStatsMinAggregateOutputType = {
    id: string | null
    totalTrees: number | null
    totalUsers: number | null
    totalUpdates: number | null
    totalAdoptions: number | null
    co2OffsetKg: number | null
    countriesActive: number | null
    updatedAt: Date | null
  }

  export type GlobalStatsMaxAggregateOutputType = {
    id: string | null
    totalTrees: number | null
    totalUsers: number | null
    totalUpdates: number | null
    totalAdoptions: number | null
    co2OffsetKg: number | null
    countriesActive: number | null
    updatedAt: Date | null
  }

  export type GlobalStatsCountAggregateOutputType = {
    id: number
    totalTrees: number
    totalUsers: number
    totalUpdates: number
    totalAdoptions: number
    co2OffsetKg: number
    countriesActive: number
    updatedAt: number
    _all: number
  }


  export type GlobalStatsAvgAggregateInputType = {
    totalTrees?: true
    totalUsers?: true
    totalUpdates?: true
    totalAdoptions?: true
    co2OffsetKg?: true
    countriesActive?: true
  }

  export type GlobalStatsSumAggregateInputType = {
    totalTrees?: true
    totalUsers?: true
    totalUpdates?: true
    totalAdoptions?: true
    co2OffsetKg?: true
    countriesActive?: true
  }

  export type GlobalStatsMinAggregateInputType = {
    id?: true
    totalTrees?: true
    totalUsers?: true
    totalUpdates?: true
    totalAdoptions?: true
    co2OffsetKg?: true
    countriesActive?: true
    updatedAt?: true
  }

  export type GlobalStatsMaxAggregateInputType = {
    id?: true
    totalTrees?: true
    totalUsers?: true
    totalUpdates?: true
    totalAdoptions?: true
    co2OffsetKg?: true
    countriesActive?: true
    updatedAt?: true
  }

  export type GlobalStatsCountAggregateInputType = {
    id?: true
    totalTrees?: true
    totalUsers?: true
    totalUpdates?: true
    totalAdoptions?: true
    co2OffsetKg?: true
    countriesActive?: true
    updatedAt?: true
    _all?: true
  }

  export type GlobalStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalStats to aggregate.
     */
    where?: GlobalStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStats to fetch.
     */
    orderBy?: GlobalStatsOrderByWithRelationInput | GlobalStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalStats
    **/
    _count?: true | GlobalStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GlobalStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GlobalStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalStatsMaxAggregateInputType
  }

  export type GetGlobalStatsAggregateType<T extends GlobalStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalStats[P]>
      : GetScalarType<T[P], AggregateGlobalStats[P]>
  }




  export type GlobalStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalStatsWhereInput
    orderBy?: GlobalStatsOrderByWithAggregationInput | GlobalStatsOrderByWithAggregationInput[]
    by: GlobalStatsScalarFieldEnum[] | GlobalStatsScalarFieldEnum
    having?: GlobalStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalStatsCountAggregateInputType | true
    _avg?: GlobalStatsAvgAggregateInputType
    _sum?: GlobalStatsSumAggregateInputType
    _min?: GlobalStatsMinAggregateInputType
    _max?: GlobalStatsMaxAggregateInputType
  }

  export type GlobalStatsGroupByOutputType = {
    id: string
    totalTrees: number
    totalUsers: number
    totalUpdates: number
    totalAdoptions: number
    co2OffsetKg: number
    countriesActive: number
    updatedAt: Date
    _count: GlobalStatsCountAggregateOutputType | null
    _avg: GlobalStatsAvgAggregateOutputType | null
    _sum: GlobalStatsSumAggregateOutputType | null
    _min: GlobalStatsMinAggregateOutputType | null
    _max: GlobalStatsMaxAggregateOutputType | null
  }

  type GetGlobalStatsGroupByPayload<T extends GlobalStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalStatsGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalStatsGroupByOutputType[P]>
        }
      >
    >


  export type GlobalStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalTrees?: boolean
    totalUsers?: boolean
    totalUpdates?: boolean
    totalAdoptions?: boolean
    co2OffsetKg?: boolean
    countriesActive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalStats"]>

  export type GlobalStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalTrees?: boolean
    totalUsers?: boolean
    totalUpdates?: boolean
    totalAdoptions?: boolean
    co2OffsetKg?: boolean
    countriesActive?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["globalStats"]>

  export type GlobalStatsSelectScalar = {
    id?: boolean
    totalTrees?: boolean
    totalUsers?: boolean
    totalUpdates?: boolean
    totalAdoptions?: boolean
    co2OffsetKg?: boolean
    countriesActive?: boolean
    updatedAt?: boolean
  }


  export type $GlobalStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalTrees: number
      totalUsers: number
      totalUpdates: number
      totalAdoptions: number
      co2OffsetKg: number
      countriesActive: number
      updatedAt: Date
    }, ExtArgs["result"]["globalStats"]>
    composites: {}
  }

  type GlobalStatsGetPayload<S extends boolean | null | undefined | GlobalStatsDefaultArgs> = $Result.GetResult<Prisma.$GlobalStatsPayload, S>

  type GlobalStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GlobalStatsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GlobalStatsCountAggregateInputType | true
    }

  export interface GlobalStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalStats'], meta: { name: 'GlobalStats' } }
    /**
     * Find zero or one GlobalStats that matches the filter.
     * @param {GlobalStatsFindUniqueArgs} args - Arguments to find a GlobalStats
     * @example
     * // Get one GlobalStats
     * const globalStats = await prisma.globalStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalStatsFindUniqueArgs>(args: SelectSubset<T, GlobalStatsFindUniqueArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GlobalStats that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GlobalStatsFindUniqueOrThrowArgs} args - Arguments to find a GlobalStats
     * @example
     * // Get one GlobalStats
     * const globalStats = await prisma.globalStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GlobalStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsFindFirstArgs} args - Arguments to find a GlobalStats
     * @example
     * // Get one GlobalStats
     * const globalStats = await prisma.globalStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalStatsFindFirstArgs>(args?: SelectSubset<T, GlobalStatsFindFirstArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GlobalStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsFindFirstOrThrowArgs} args - Arguments to find a GlobalStats
     * @example
     * // Get one GlobalStats
     * const globalStats = await prisma.globalStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GlobalStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalStats
     * const globalStats = await prisma.globalStats.findMany()
     * 
     * // Get first 10 GlobalStats
     * const globalStats = await prisma.globalStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalStatsWithIdOnly = await prisma.globalStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalStatsFindManyArgs>(args?: SelectSubset<T, GlobalStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GlobalStats.
     * @param {GlobalStatsCreateArgs} args - Arguments to create a GlobalStats.
     * @example
     * // Create one GlobalStats
     * const GlobalStats = await prisma.globalStats.create({
     *   data: {
     *     // ... data to create a GlobalStats
     *   }
     * })
     * 
     */
    create<T extends GlobalStatsCreateArgs>(args: SelectSubset<T, GlobalStatsCreateArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GlobalStats.
     * @param {GlobalStatsCreateManyArgs} args - Arguments to create many GlobalStats.
     * @example
     * // Create many GlobalStats
     * const globalStats = await prisma.globalStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalStatsCreateManyArgs>(args?: SelectSubset<T, GlobalStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalStats and returns the data saved in the database.
     * @param {GlobalStatsCreateManyAndReturnArgs} args - Arguments to create many GlobalStats.
     * @example
     * // Create many GlobalStats
     * const globalStats = await prisma.globalStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalStats and only return the `id`
     * const globalStatsWithIdOnly = await prisma.globalStats.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GlobalStats.
     * @param {GlobalStatsDeleteArgs} args - Arguments to delete one GlobalStats.
     * @example
     * // Delete one GlobalStats
     * const GlobalStats = await prisma.globalStats.delete({
     *   where: {
     *     // ... filter to delete one GlobalStats
     *   }
     * })
     * 
     */
    delete<T extends GlobalStatsDeleteArgs>(args: SelectSubset<T, GlobalStatsDeleteArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GlobalStats.
     * @param {GlobalStatsUpdateArgs} args - Arguments to update one GlobalStats.
     * @example
     * // Update one GlobalStats
     * const globalStats = await prisma.globalStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalStatsUpdateArgs>(args: SelectSubset<T, GlobalStatsUpdateArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GlobalStats.
     * @param {GlobalStatsDeleteManyArgs} args - Arguments to filter GlobalStats to delete.
     * @example
     * // Delete a few GlobalStats
     * const { count } = await prisma.globalStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalStatsDeleteManyArgs>(args?: SelectSubset<T, GlobalStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalStats
     * const globalStats = await prisma.globalStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalStatsUpdateManyArgs>(args: SelectSubset<T, GlobalStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GlobalStats.
     * @param {GlobalStatsUpsertArgs} args - Arguments to update or create a GlobalStats.
     * @example
     * // Update or create a GlobalStats
     * const globalStats = await prisma.globalStats.upsert({
     *   create: {
     *     // ... data to create a GlobalStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalStats we want to update
     *   }
     * })
     */
    upsert<T extends GlobalStatsUpsertArgs>(args: SelectSubset<T, GlobalStatsUpsertArgs<ExtArgs>>): Prisma__GlobalStatsClient<$Result.GetResult<Prisma.$GlobalStatsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GlobalStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsCountArgs} args - Arguments to filter GlobalStats to count.
     * @example
     * // Count the number of GlobalStats
     * const count = await prisma.globalStats.count({
     *   where: {
     *     // ... the filter for the GlobalStats we want to count
     *   }
     * })
    **/
    count<T extends GlobalStatsCountArgs>(
      args?: Subset<T, GlobalStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GlobalStatsAggregateArgs>(args: Subset<T, GlobalStatsAggregateArgs>): Prisma.PrismaPromise<GetGlobalStatsAggregateType<T>>

    /**
     * Group by GlobalStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GlobalStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalStatsGroupByArgs['orderBy'] }
        : { orderBy?: GlobalStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GlobalStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalStats model
   */
  readonly fields: GlobalStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GlobalStats model
   */ 
  interface GlobalStatsFieldRefs {
    readonly id: FieldRef<"GlobalStats", 'String'>
    readonly totalTrees: FieldRef<"GlobalStats", 'Int'>
    readonly totalUsers: FieldRef<"GlobalStats", 'Int'>
    readonly totalUpdates: FieldRef<"GlobalStats", 'Int'>
    readonly totalAdoptions: FieldRef<"GlobalStats", 'Int'>
    readonly co2OffsetKg: FieldRef<"GlobalStats", 'Float'>
    readonly countriesActive: FieldRef<"GlobalStats", 'Int'>
    readonly updatedAt: FieldRef<"GlobalStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GlobalStats findUnique
   */
  export type GlobalStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalStats to fetch.
     */
    where: GlobalStatsWhereUniqueInput
  }

  /**
   * GlobalStats findUniqueOrThrow
   */
  export type GlobalStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalStats to fetch.
     */
    where: GlobalStatsWhereUniqueInput
  }

  /**
   * GlobalStats findFirst
   */
  export type GlobalStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalStats to fetch.
     */
    where?: GlobalStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStats to fetch.
     */
    orderBy?: GlobalStatsOrderByWithRelationInput | GlobalStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalStats.
     */
    cursor?: GlobalStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalStats.
     */
    distinct?: GlobalStatsScalarFieldEnum | GlobalStatsScalarFieldEnum[]
  }

  /**
   * GlobalStats findFirstOrThrow
   */
  export type GlobalStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalStats to fetch.
     */
    where?: GlobalStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStats to fetch.
     */
    orderBy?: GlobalStatsOrderByWithRelationInput | GlobalStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalStats.
     */
    cursor?: GlobalStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalStats.
     */
    distinct?: GlobalStatsScalarFieldEnum | GlobalStatsScalarFieldEnum[]
  }

  /**
   * GlobalStats findMany
   */
  export type GlobalStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter, which GlobalStats to fetch.
     */
    where?: GlobalStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalStats to fetch.
     */
    orderBy?: GlobalStatsOrderByWithRelationInput | GlobalStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalStats.
     */
    cursor?: GlobalStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalStats.
     */
    skip?: number
    distinct?: GlobalStatsScalarFieldEnum | GlobalStatsScalarFieldEnum[]
  }

  /**
   * GlobalStats create
   */
  export type GlobalStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * The data needed to create a GlobalStats.
     */
    data: XOR<GlobalStatsCreateInput, GlobalStatsUncheckedCreateInput>
  }

  /**
   * GlobalStats createMany
   */
  export type GlobalStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalStats.
     */
    data: GlobalStatsCreateManyInput | GlobalStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalStats createManyAndReturn
   */
  export type GlobalStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GlobalStats.
     */
    data: GlobalStatsCreateManyInput | GlobalStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalStats update
   */
  export type GlobalStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * The data needed to update a GlobalStats.
     */
    data: XOR<GlobalStatsUpdateInput, GlobalStatsUncheckedUpdateInput>
    /**
     * Choose, which GlobalStats to update.
     */
    where: GlobalStatsWhereUniqueInput
  }

  /**
   * GlobalStats updateMany
   */
  export type GlobalStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalStats.
     */
    data: XOR<GlobalStatsUpdateManyMutationInput, GlobalStatsUncheckedUpdateManyInput>
    /**
     * Filter which GlobalStats to update
     */
    where?: GlobalStatsWhereInput
  }

  /**
   * GlobalStats upsert
   */
  export type GlobalStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * The filter to search for the GlobalStats to update in case it exists.
     */
    where: GlobalStatsWhereUniqueInput
    /**
     * In case the GlobalStats found by the `where` argument doesn't exist, create a new GlobalStats with this data.
     */
    create: XOR<GlobalStatsCreateInput, GlobalStatsUncheckedCreateInput>
    /**
     * In case the GlobalStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalStatsUpdateInput, GlobalStatsUncheckedUpdateInput>
  }

  /**
   * GlobalStats delete
   */
  export type GlobalStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
    /**
     * Filter which GlobalStats to delete.
     */
    where: GlobalStatsWhereUniqueInput
  }

  /**
   * GlobalStats deleteMany
   */
  export type GlobalStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalStats to delete
     */
    where?: GlobalStatsWhereInput
  }

  /**
   * GlobalStats without action
   */
  export type GlobalStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalStats
     */
    select?: GlobalStatsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture',
    bio: 'bio',
    greenPoints: 'greenPoints',
    isProfilePublic: 'isProfilePublic',
    emailNotifications: 'emailNotifications',
    city: 'city',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TreeScalarFieldEnum: {
    id: 'id',
    qrCode: 'qrCode',
    species: 'species',
    source: 'source',
    commitmentDuration: 'commitmentDuration',
    initialHealthStatus: 'initialHealthStatus',
    currentHealthStatus: 'currentHealthStatus',
    location: 'location',
    photoUrl: 'photoUrl',
    plantedAt: 'plantedAt',
    isActive: 'isActive',
    isAdoptable: 'isAdoptable',
    transferReason: 'transferReason',
    lastUpdateAt: 'lastUpdateAt',
    ownerId: 'ownerId'
  };

  export type TreeScalarFieldEnum = (typeof TreeScalarFieldEnum)[keyof typeof TreeScalarFieldEnum]


  export const TreeUpdateScalarFieldEnum: {
    id: 'id',
    healthStatus: 'healthStatus',
    notes: 'notes',
    photoUrl: 'photoUrl',
    growthMeasurements: 'growthMeasurements',
    gpsLocation: 'gpsLocation',
    createdAt: 'createdAt',
    treeId: 'treeId',
    userId: 'userId'
  };

  export type TreeUpdateScalarFieldEnum = (typeof TreeUpdateScalarFieldEnum)[keyof typeof TreeUpdateScalarFieldEnum]


  export const TreeAdoptionScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    commitmentMessage: 'commitmentMessage',
    commitmentDuration: 'commitmentDuration',
    adoptedAt: 'adoptedAt',
    treeId: 'treeId',
    previousOwnerId: 'previousOwnerId',
    newOwnerId: 'newOwnerId'
  };

  export type TreeAdoptionScalarFieldEnum = (typeof TreeAdoptionScalarFieldEnum)[keyof typeof TreeAdoptionScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    category: 'category',
    requirement: 'requirement',
    pointsValue: 'pointsValue',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    earnedAt: 'earnedAt',
    userId: 'userId',
    badgeId: 'badgeId'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pointsCost: 'pointsCost',
    category: 'category',
    imageUrl: 'imageUrl',
    inStock: 'inStock',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const RewardRedemptionScalarFieldEnum: {
    id: 'id',
    pointsSpent: 'pointsSpent',
    shippingAddress: 'shippingAddress',
    status: 'status',
    redeemedAt: 'redeemedAt',
    shippedAt: 'shippedAt',
    deliveredAt: 'deliveredAt',
    userId: 'userId',
    rewardId: 'rewardId'
  };

  export type RewardRedemptionScalarFieldEnum = (typeof RewardRedemptionScalarFieldEnum)[keyof typeof RewardRedemptionScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    type: 'type',
    pdfUrl: 'pdfUrl',
    metadata: 'metadata',
    issuedAt: 'issuedAt',
    userId: 'userId',
    treeId: 'treeId'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    data: 'data',
    isRead: 'isRead',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const LearningModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    content: 'content',
    duration: 'duration',
    difficulty: 'difficulty',
    topics: 'topics',
    thumbnailUrl: 'thumbnailUrl',
    isActive: 'isActive',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type LearningModuleScalarFieldEnum = (typeof LearningModuleScalarFieldEnum)[keyof typeof LearningModuleScalarFieldEnum]


  export const GlobalStatsScalarFieldEnum: {
    id: 'id',
    totalTrees: 'totalTrees',
    totalUsers: 'totalUsers',
    totalUpdates: 'totalUpdates',
    totalAdoptions: 'totalAdoptions',
    co2OffsetKg: 'co2OffsetKg',
    countriesActive: 'countriesActive',
    updatedAt: 'updatedAt'
  };

  export type GlobalStatsScalarFieldEnum = (typeof GlobalStatsScalarFieldEnum)[keyof typeof GlobalStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TreeSource'
   */
  export type EnumTreeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreeSource'>
    


  /**
   * Reference to a field of type 'TreeSource[]'
   */
  export type ListEnumTreeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreeSource[]'>
    


  /**
   * Reference to a field of type 'HealthStatus'
   */
  export type EnumHealthStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthStatus'>
    


  /**
   * Reference to a field of type 'HealthStatus[]'
   */
  export type ListEnumHealthStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BadgeCategory'
   */
  export type EnumBadgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeCategory'>
    


  /**
   * Reference to a field of type 'BadgeCategory[]'
   */
  export type ListEnumBadgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeCategory[]'>
    


  /**
   * Reference to a field of type 'RewardCategory'
   */
  export type EnumRewardCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardCategory'>
    


  /**
   * Reference to a field of type 'RewardCategory[]'
   */
  export type ListEnumRewardCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardCategory[]'>
    


  /**
   * Reference to a field of type 'RedemptionStatus'
   */
  export type EnumRedemptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RedemptionStatus'>
    


  /**
   * Reference to a field of type 'RedemptionStatus[]'
   */
  export type ListEnumRedemptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RedemptionStatus[]'>
    


  /**
   * Reference to a field of type 'CertificateType'
   */
  export type EnumCertificateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificateType'>
    


  /**
   * Reference to a field of type 'CertificateType[]'
   */
  export type ListEnumCertificateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificateType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    greenPoints?: IntFilter<"User"> | number
    isProfilePublic?: BoolFilter<"User"> | boolean
    emailNotifications?: BoolFilter<"User"> | boolean
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    trees?: TreeListRelationFilter
    adoptions?: TreeAdoptionListRelationFilter
    transfers?: TreeAdoptionListRelationFilter
    updates?: TreeUpdateListRelationFilter
    badges?: UserBadgeListRelationFilter
    rewards?: RewardRedemptionListRelationFilter
    notifications?: NotificationListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    greenPoints?: SortOrder
    isProfilePublic?: SortOrder
    emailNotifications?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    trees?: TreeOrderByRelationAggregateInput
    adoptions?: TreeAdoptionOrderByRelationAggregateInput
    transfers?: TreeAdoptionOrderByRelationAggregateInput
    updates?: TreeUpdateOrderByRelationAggregateInput
    badges?: UserBadgeOrderByRelationAggregateInput
    rewards?: RewardRedemptionOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    greenPoints?: IntFilter<"User"> | number
    isProfilePublic?: BoolFilter<"User"> | boolean
    emailNotifications?: BoolFilter<"User"> | boolean
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    trees?: TreeListRelationFilter
    adoptions?: TreeAdoptionListRelationFilter
    transfers?: TreeAdoptionListRelationFilter
    updates?: TreeUpdateListRelationFilter
    badges?: UserBadgeListRelationFilter
    rewards?: RewardRedemptionListRelationFilter
    notifications?: NotificationListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    greenPoints?: SortOrder
    isProfilePublic?: SortOrder
    emailNotifications?: SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    greenPoints?: IntWithAggregatesFilter<"User"> | number
    isProfilePublic?: BoolWithAggregatesFilter<"User"> | boolean
    emailNotifications?: BoolWithAggregatesFilter<"User"> | boolean
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TreeWhereInput = {
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    id?: UuidFilter<"Tree"> | string
    qrCode?: StringFilter<"Tree"> | string
    species?: StringFilter<"Tree"> | string
    source?: EnumTreeSourceFilter<"Tree"> | $Enums.TreeSource
    commitmentDuration?: IntFilter<"Tree"> | number
    initialHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    location?: JsonFilter<"Tree">
    photoUrl?: StringFilter<"Tree"> | string
    plantedAt?: DateTimeFilter<"Tree"> | Date | string
    isActive?: BoolFilter<"Tree"> | boolean
    isAdoptable?: BoolFilter<"Tree"> | boolean
    transferReason?: StringNullableFilter<"Tree"> | string | null
    lastUpdateAt?: DateTimeNullableFilter<"Tree"> | Date | string | null
    ownerId?: UuidFilter<"Tree"> | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    updates?: TreeUpdateListRelationFilter
    adoptions?: TreeAdoptionListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type TreeOrderByWithRelationInput = {
    id?: SortOrder
    qrCode?: SortOrder
    species?: SortOrder
    source?: SortOrder
    commitmentDuration?: SortOrder
    initialHealthStatus?: SortOrder
    currentHealthStatus?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    plantedAt?: SortOrder
    isActive?: SortOrder
    isAdoptable?: SortOrder
    transferReason?: SortOrderInput | SortOrder
    lastUpdateAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    updates?: TreeUpdateOrderByRelationAggregateInput
    adoptions?: TreeAdoptionOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type TreeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    AND?: TreeWhereInput | TreeWhereInput[]
    OR?: TreeWhereInput[]
    NOT?: TreeWhereInput | TreeWhereInput[]
    species?: StringFilter<"Tree"> | string
    source?: EnumTreeSourceFilter<"Tree"> | $Enums.TreeSource
    commitmentDuration?: IntFilter<"Tree"> | number
    initialHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    location?: JsonFilter<"Tree">
    photoUrl?: StringFilter<"Tree"> | string
    plantedAt?: DateTimeFilter<"Tree"> | Date | string
    isActive?: BoolFilter<"Tree"> | boolean
    isAdoptable?: BoolFilter<"Tree"> | boolean
    transferReason?: StringNullableFilter<"Tree"> | string | null
    lastUpdateAt?: DateTimeNullableFilter<"Tree"> | Date | string | null
    ownerId?: UuidFilter<"Tree"> | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    updates?: TreeUpdateListRelationFilter
    adoptions?: TreeAdoptionListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "qrCode">

  export type TreeOrderByWithAggregationInput = {
    id?: SortOrder
    qrCode?: SortOrder
    species?: SortOrder
    source?: SortOrder
    commitmentDuration?: SortOrder
    initialHealthStatus?: SortOrder
    currentHealthStatus?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    plantedAt?: SortOrder
    isActive?: SortOrder
    isAdoptable?: SortOrder
    transferReason?: SortOrderInput | SortOrder
    lastUpdateAt?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    _count?: TreeCountOrderByAggregateInput
    _avg?: TreeAvgOrderByAggregateInput
    _max?: TreeMaxOrderByAggregateInput
    _min?: TreeMinOrderByAggregateInput
    _sum?: TreeSumOrderByAggregateInput
  }

  export type TreeScalarWhereWithAggregatesInput = {
    AND?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    OR?: TreeScalarWhereWithAggregatesInput[]
    NOT?: TreeScalarWhereWithAggregatesInput | TreeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tree"> | string
    qrCode?: StringWithAggregatesFilter<"Tree"> | string
    species?: StringWithAggregatesFilter<"Tree"> | string
    source?: EnumTreeSourceWithAggregatesFilter<"Tree"> | $Enums.TreeSource
    commitmentDuration?: IntWithAggregatesFilter<"Tree"> | number
    initialHealthStatus?: EnumHealthStatusWithAggregatesFilter<"Tree"> | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusWithAggregatesFilter<"Tree"> | $Enums.HealthStatus
    location?: JsonWithAggregatesFilter<"Tree">
    photoUrl?: StringWithAggregatesFilter<"Tree"> | string
    plantedAt?: DateTimeWithAggregatesFilter<"Tree"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Tree"> | boolean
    isAdoptable?: BoolWithAggregatesFilter<"Tree"> | boolean
    transferReason?: StringNullableWithAggregatesFilter<"Tree"> | string | null
    lastUpdateAt?: DateTimeNullableWithAggregatesFilter<"Tree"> | Date | string | null
    ownerId?: UuidWithAggregatesFilter<"Tree"> | string
  }

  export type TreeUpdateWhereInput = {
    AND?: TreeUpdateWhereInput | TreeUpdateWhereInput[]
    OR?: TreeUpdateWhereInput[]
    NOT?: TreeUpdateWhereInput | TreeUpdateWhereInput[]
    id?: UuidFilter<"TreeUpdate"> | string
    healthStatus?: EnumHealthStatusFilter<"TreeUpdate"> | $Enums.HealthStatus
    notes?: StringNullableFilter<"TreeUpdate"> | string | null
    photoUrl?: StringFilter<"TreeUpdate"> | string
    growthMeasurements?: JsonNullableFilter<"TreeUpdate">
    gpsLocation?: JsonNullableFilter<"TreeUpdate">
    createdAt?: DateTimeFilter<"TreeUpdate"> | Date | string
    treeId?: UuidFilter<"TreeUpdate"> | string
    userId?: UuidFilter<"TreeUpdate"> | string
    tree?: XOR<TreeRelationFilter, TreeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TreeUpdateOrderByWithRelationInput = {
    id?: SortOrder
    healthStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    photoUrl?: SortOrder
    growthMeasurements?: SortOrderInput | SortOrder
    gpsLocation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    tree?: TreeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TreeUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreeUpdateWhereInput | TreeUpdateWhereInput[]
    OR?: TreeUpdateWhereInput[]
    NOT?: TreeUpdateWhereInput | TreeUpdateWhereInput[]
    healthStatus?: EnumHealthStatusFilter<"TreeUpdate"> | $Enums.HealthStatus
    notes?: StringNullableFilter<"TreeUpdate"> | string | null
    photoUrl?: StringFilter<"TreeUpdate"> | string
    growthMeasurements?: JsonNullableFilter<"TreeUpdate">
    gpsLocation?: JsonNullableFilter<"TreeUpdate">
    createdAt?: DateTimeFilter<"TreeUpdate"> | Date | string
    treeId?: UuidFilter<"TreeUpdate"> | string
    userId?: UuidFilter<"TreeUpdate"> | string
    tree?: XOR<TreeRelationFilter, TreeWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TreeUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    healthStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    photoUrl?: SortOrder
    growthMeasurements?: SortOrderInput | SortOrder
    gpsLocation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
    _count?: TreeUpdateCountOrderByAggregateInput
    _max?: TreeUpdateMaxOrderByAggregateInput
    _min?: TreeUpdateMinOrderByAggregateInput
  }

  export type TreeUpdateScalarWhereWithAggregatesInput = {
    AND?: TreeUpdateScalarWhereWithAggregatesInput | TreeUpdateScalarWhereWithAggregatesInput[]
    OR?: TreeUpdateScalarWhereWithAggregatesInput[]
    NOT?: TreeUpdateScalarWhereWithAggregatesInput | TreeUpdateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TreeUpdate"> | string
    healthStatus?: EnumHealthStatusWithAggregatesFilter<"TreeUpdate"> | $Enums.HealthStatus
    notes?: StringNullableWithAggregatesFilter<"TreeUpdate"> | string | null
    photoUrl?: StringWithAggregatesFilter<"TreeUpdate"> | string
    growthMeasurements?: JsonNullableWithAggregatesFilter<"TreeUpdate">
    gpsLocation?: JsonNullableWithAggregatesFilter<"TreeUpdate">
    createdAt?: DateTimeWithAggregatesFilter<"TreeUpdate"> | Date | string
    treeId?: UuidWithAggregatesFilter<"TreeUpdate"> | string
    userId?: UuidWithAggregatesFilter<"TreeUpdate"> | string
  }

  export type TreeAdoptionWhereInput = {
    AND?: TreeAdoptionWhereInput | TreeAdoptionWhereInput[]
    OR?: TreeAdoptionWhereInput[]
    NOT?: TreeAdoptionWhereInput | TreeAdoptionWhereInput[]
    id?: UuidFilter<"TreeAdoption"> | string
    reason?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentMessage?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentDuration?: IntNullableFilter<"TreeAdoption"> | number | null
    adoptedAt?: DateTimeFilter<"TreeAdoption"> | Date | string
    treeId?: UuidFilter<"TreeAdoption"> | string
    previousOwnerId?: UuidFilter<"TreeAdoption"> | string
    newOwnerId?: UuidFilter<"TreeAdoption"> | string
    tree?: XOR<TreeRelationFilter, TreeWhereInput>
    previousOwner?: XOR<UserRelationFilter, UserWhereInput>
    newOwner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TreeAdoptionOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrderInput | SortOrder
    commitmentMessage?: SortOrderInput | SortOrder
    commitmentDuration?: SortOrderInput | SortOrder
    adoptedAt?: SortOrder
    treeId?: SortOrder
    previousOwnerId?: SortOrder
    newOwnerId?: SortOrder
    tree?: TreeOrderByWithRelationInput
    previousOwner?: UserOrderByWithRelationInput
    newOwner?: UserOrderByWithRelationInput
  }

  export type TreeAdoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreeAdoptionWhereInput | TreeAdoptionWhereInput[]
    OR?: TreeAdoptionWhereInput[]
    NOT?: TreeAdoptionWhereInput | TreeAdoptionWhereInput[]
    reason?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentMessage?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentDuration?: IntNullableFilter<"TreeAdoption"> | number | null
    adoptedAt?: DateTimeFilter<"TreeAdoption"> | Date | string
    treeId?: UuidFilter<"TreeAdoption"> | string
    previousOwnerId?: UuidFilter<"TreeAdoption"> | string
    newOwnerId?: UuidFilter<"TreeAdoption"> | string
    tree?: XOR<TreeRelationFilter, TreeWhereInput>
    previousOwner?: XOR<UserRelationFilter, UserWhereInput>
    newOwner?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TreeAdoptionOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrderInput | SortOrder
    commitmentMessage?: SortOrderInput | SortOrder
    commitmentDuration?: SortOrderInput | SortOrder
    adoptedAt?: SortOrder
    treeId?: SortOrder
    previousOwnerId?: SortOrder
    newOwnerId?: SortOrder
    _count?: TreeAdoptionCountOrderByAggregateInput
    _avg?: TreeAdoptionAvgOrderByAggregateInput
    _max?: TreeAdoptionMaxOrderByAggregateInput
    _min?: TreeAdoptionMinOrderByAggregateInput
    _sum?: TreeAdoptionSumOrderByAggregateInput
  }

  export type TreeAdoptionScalarWhereWithAggregatesInput = {
    AND?: TreeAdoptionScalarWhereWithAggregatesInput | TreeAdoptionScalarWhereWithAggregatesInput[]
    OR?: TreeAdoptionScalarWhereWithAggregatesInput[]
    NOT?: TreeAdoptionScalarWhereWithAggregatesInput | TreeAdoptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TreeAdoption"> | string
    reason?: StringNullableWithAggregatesFilter<"TreeAdoption"> | string | null
    commitmentMessage?: StringNullableWithAggregatesFilter<"TreeAdoption"> | string | null
    commitmentDuration?: IntNullableWithAggregatesFilter<"TreeAdoption"> | number | null
    adoptedAt?: DateTimeWithAggregatesFilter<"TreeAdoption"> | Date | string
    treeId?: UuidWithAggregatesFilter<"TreeAdoption"> | string
    previousOwnerId?: UuidWithAggregatesFilter<"TreeAdoption"> | string
    newOwnerId?: UuidWithAggregatesFilter<"TreeAdoption"> | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: UuidFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    category?: EnumBadgeCategoryFilter<"Badge"> | $Enums.BadgeCategory
    requirement?: JsonFilter<"Badge">
    pointsValue?: IntFilter<"Badge"> | number
    isActive?: BoolFilter<"Badge"> | boolean
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    requirement?: SortOrder
    pointsValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userBadges?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    category?: EnumBadgeCategoryFilter<"Badge"> | $Enums.BadgeCategory
    requirement?: JsonFilter<"Badge">
    pointsValue?: IntFilter<"Badge"> | number
    isActive?: BoolFilter<"Badge"> | boolean
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    userBadges?: UserBadgeListRelationFilter
  }, "id" | "name">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    requirement?: SortOrder
    pointsValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    icon?: StringWithAggregatesFilter<"Badge"> | string
    category?: EnumBadgeCategoryWithAggregatesFilter<"Badge"> | $Enums.BadgeCategory
    requirement?: JsonWithAggregatesFilter<"Badge">
    pointsValue?: IntWithAggregatesFilter<"Badge"> | number
    isActive?: BoolWithAggregatesFilter<"Badge"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: UuidFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    userId?: UuidFilter<"UserBadge"> | string
    badgeId?: UuidFilter<"UserBadge"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    userId?: UuidFilter<"UserBadge"> | string
    badgeId?: UuidFilter<"UserBadge"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    badge?: XOR<BadgeRelationFilter, BadgeWhereInput>
  }, "id" | "userId_badgeId">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserBadge"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
    userId?: UuidWithAggregatesFilter<"UserBadge"> | string
    badgeId?: UuidWithAggregatesFilter<"UserBadge"> | string
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: UuidFilter<"Reward"> | string
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    pointsCost?: IntFilter<"Reward"> | number
    category?: EnumRewardCategoryFilter<"Reward"> | $Enums.RewardCategory
    imageUrl?: StringNullableFilter<"Reward"> | string | null
    inStock?: BoolFilter<"Reward"> | boolean
    isActive?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    redemptions?: RewardRedemptionListRelationFilter
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    inStock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    redemptions?: RewardRedemptionOrderByRelationAggregateInput
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    name?: StringFilter<"Reward"> | string
    description?: StringFilter<"Reward"> | string
    pointsCost?: IntFilter<"Reward"> | number
    category?: EnumRewardCategoryFilter<"Reward"> | $Enums.RewardCategory
    imageUrl?: StringNullableFilter<"Reward"> | string | null
    inStock?: BoolFilter<"Reward"> | boolean
    isActive?: BoolFilter<"Reward"> | boolean
    createdAt?: DateTimeFilter<"Reward"> | Date | string
    redemptions?: RewardRedemptionListRelationFilter
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    inStock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Reward"> | string
    name?: StringWithAggregatesFilter<"Reward"> | string
    description?: StringWithAggregatesFilter<"Reward"> | string
    pointsCost?: IntWithAggregatesFilter<"Reward"> | number
    category?: EnumRewardCategoryWithAggregatesFilter<"Reward"> | $Enums.RewardCategory
    imageUrl?: StringNullableWithAggregatesFilter<"Reward"> | string | null
    inStock?: BoolWithAggregatesFilter<"Reward"> | boolean
    isActive?: BoolWithAggregatesFilter<"Reward"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reward"> | Date | string
  }

  export type RewardRedemptionWhereInput = {
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    id?: UuidFilter<"RewardRedemption"> | string
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    shippingAddress?: JsonNullableFilter<"RewardRedemption">
    status?: EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    shippedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    userId?: UuidFilter<"RewardRedemption"> | string
    rewardId?: UuidFilter<"RewardRedemption"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reward?: XOR<RewardRelationFilter, RewardWhereInput>
  }

  export type RewardRedemptionOrderByWithRelationInput = {
    id?: SortOrder
    pointsSpent?: SortOrder
    shippingAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    user?: UserOrderByWithRelationInput
    reward?: RewardOrderByWithRelationInput
  }

  export type RewardRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    OR?: RewardRedemptionWhereInput[]
    NOT?: RewardRedemptionWhereInput | RewardRedemptionWhereInput[]
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    shippingAddress?: JsonNullableFilter<"RewardRedemption">
    status?: EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    shippedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    userId?: UuidFilter<"RewardRedemption"> | string
    rewardId?: UuidFilter<"RewardRedemption"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reward?: XOR<RewardRelationFilter, RewardWhereInput>
  }, "id">

  export type RewardRedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    pointsSpent?: SortOrder
    shippingAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
    _count?: RewardRedemptionCountOrderByAggregateInput
    _avg?: RewardRedemptionAvgOrderByAggregateInput
    _max?: RewardRedemptionMaxOrderByAggregateInput
    _min?: RewardRedemptionMinOrderByAggregateInput
    _sum?: RewardRedemptionSumOrderByAggregateInput
  }

  export type RewardRedemptionScalarWhereWithAggregatesInput = {
    AND?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    OR?: RewardRedemptionScalarWhereWithAggregatesInput[]
    NOT?: RewardRedemptionScalarWhereWithAggregatesInput | RewardRedemptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RewardRedemption"> | string
    pointsSpent?: IntWithAggregatesFilter<"RewardRedemption"> | number
    shippingAddress?: JsonNullableWithAggregatesFilter<"RewardRedemption">
    status?: EnumRedemptionStatusWithAggregatesFilter<"RewardRedemption"> | $Enums.RedemptionStatus
    redeemedAt?: DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string
    shippedAt?: DateTimeNullableWithAggregatesFilter<"RewardRedemption"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"RewardRedemption"> | Date | string | null
    userId?: UuidWithAggregatesFilter<"RewardRedemption"> | string
    rewardId?: UuidWithAggregatesFilter<"RewardRedemption"> | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: UuidFilter<"Certificate"> | string
    type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType
    pdfUrl?: StringFilter<"Certificate"> | string
    metadata?: JsonFilter<"Certificate">
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    userId?: UuidFilter<"Certificate"> | string
    treeId?: UuidNullableFilter<"Certificate"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    tree?: XOR<TreeNullableRelationFilter, TreeWhereInput> | null
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    metadata?: SortOrder
    issuedAt?: SortOrder
    userId?: SortOrder
    treeId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    tree?: TreeOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType
    pdfUrl?: StringFilter<"Certificate"> | string
    metadata?: JsonFilter<"Certificate">
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    userId?: UuidFilter<"Certificate"> | string
    treeId?: UuidNullableFilter<"Certificate"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    tree?: XOR<TreeNullableRelationFilter, TreeWhereInput> | null
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    metadata?: SortOrder
    issuedAt?: SortOrder
    userId?: SortOrder
    treeId?: SortOrderInput | SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Certificate"> | string
    type?: EnumCertificateTypeWithAggregatesFilter<"Certificate"> | $Enums.CertificateType
    pdfUrl?: StringWithAggregatesFilter<"Certificate"> | string
    metadata?: JsonWithAggregatesFilter<"Certificate">
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    userId?: UuidWithAggregatesFilter<"Certificate"> | string
    treeId?: UuidNullableWithAggregatesFilter<"Certificate"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: UuidFilter<"Notification"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: UuidFilter<"Notification"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    data?: JsonNullableWithAggregatesFilter<"Notification">
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
  }

  export type LearningModuleWhereInput = {
    AND?: LearningModuleWhereInput | LearningModuleWhereInput[]
    OR?: LearningModuleWhereInput[]
    NOT?: LearningModuleWhereInput | LearningModuleWhereInput[]
    id?: UuidFilter<"LearningModule"> | string
    title?: StringFilter<"LearningModule"> | string
    description?: StringFilter<"LearningModule"> | string
    content?: JsonFilter<"LearningModule">
    duration?: IntFilter<"LearningModule"> | number
    difficulty?: EnumDifficultyFilter<"LearningModule"> | $Enums.Difficulty
    topics?: StringNullableListFilter<"LearningModule">
    thumbnailUrl?: StringNullableFilter<"LearningModule"> | string | null
    isActive?: BoolFilter<"LearningModule"> | boolean
    order?: IntFilter<"LearningModule"> | number
    createdAt?: DateTimeFilter<"LearningModule"> | Date | string
  }

  export type LearningModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningModuleWhereInput | LearningModuleWhereInput[]
    OR?: LearningModuleWhereInput[]
    NOT?: LearningModuleWhereInput | LearningModuleWhereInput[]
    title?: StringFilter<"LearningModule"> | string
    description?: StringFilter<"LearningModule"> | string
    content?: JsonFilter<"LearningModule">
    duration?: IntFilter<"LearningModule"> | number
    difficulty?: EnumDifficultyFilter<"LearningModule"> | $Enums.Difficulty
    topics?: StringNullableListFilter<"LearningModule">
    thumbnailUrl?: StringNullableFilter<"LearningModule"> | string | null
    isActive?: BoolFilter<"LearningModule"> | boolean
    order?: IntFilter<"LearningModule"> | number
    createdAt?: DateTimeFilter<"LearningModule"> | Date | string
  }, "id">

  export type LearningModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: LearningModuleCountOrderByAggregateInput
    _avg?: LearningModuleAvgOrderByAggregateInput
    _max?: LearningModuleMaxOrderByAggregateInput
    _min?: LearningModuleMinOrderByAggregateInput
    _sum?: LearningModuleSumOrderByAggregateInput
  }

  export type LearningModuleScalarWhereWithAggregatesInput = {
    AND?: LearningModuleScalarWhereWithAggregatesInput | LearningModuleScalarWhereWithAggregatesInput[]
    OR?: LearningModuleScalarWhereWithAggregatesInput[]
    NOT?: LearningModuleScalarWhereWithAggregatesInput | LearningModuleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LearningModule"> | string
    title?: StringWithAggregatesFilter<"LearningModule"> | string
    description?: StringWithAggregatesFilter<"LearningModule"> | string
    content?: JsonWithAggregatesFilter<"LearningModule">
    duration?: IntWithAggregatesFilter<"LearningModule"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"LearningModule"> | $Enums.Difficulty
    topics?: StringNullableListFilter<"LearningModule">
    thumbnailUrl?: StringNullableWithAggregatesFilter<"LearningModule"> | string | null
    isActive?: BoolWithAggregatesFilter<"LearningModule"> | boolean
    order?: IntWithAggregatesFilter<"LearningModule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LearningModule"> | Date | string
  }

  export type GlobalStatsWhereInput = {
    AND?: GlobalStatsWhereInput | GlobalStatsWhereInput[]
    OR?: GlobalStatsWhereInput[]
    NOT?: GlobalStatsWhereInput | GlobalStatsWhereInput[]
    id?: UuidFilter<"GlobalStats"> | string
    totalTrees?: IntFilter<"GlobalStats"> | number
    totalUsers?: IntFilter<"GlobalStats"> | number
    totalUpdates?: IntFilter<"GlobalStats"> | number
    totalAdoptions?: IntFilter<"GlobalStats"> | number
    co2OffsetKg?: FloatFilter<"GlobalStats"> | number
    countriesActive?: IntFilter<"GlobalStats"> | number
    updatedAt?: DateTimeFilter<"GlobalStats"> | Date | string
  }

  export type GlobalStatsOrderByWithRelationInput = {
    id?: SortOrder
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalStatsWhereInput | GlobalStatsWhereInput[]
    OR?: GlobalStatsWhereInput[]
    NOT?: GlobalStatsWhereInput | GlobalStatsWhereInput[]
    totalTrees?: IntFilter<"GlobalStats"> | number
    totalUsers?: IntFilter<"GlobalStats"> | number
    totalUpdates?: IntFilter<"GlobalStats"> | number
    totalAdoptions?: IntFilter<"GlobalStats"> | number
    co2OffsetKg?: FloatFilter<"GlobalStats"> | number
    countriesActive?: IntFilter<"GlobalStats"> | number
    updatedAt?: DateTimeFilter<"GlobalStats"> | Date | string
  }, "id">

  export type GlobalStatsOrderByWithAggregationInput = {
    id?: SortOrder
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
    updatedAt?: SortOrder
    _count?: GlobalStatsCountOrderByAggregateInput
    _avg?: GlobalStatsAvgOrderByAggregateInput
    _max?: GlobalStatsMaxOrderByAggregateInput
    _min?: GlobalStatsMinOrderByAggregateInput
    _sum?: GlobalStatsSumOrderByAggregateInput
  }

  export type GlobalStatsScalarWhereWithAggregatesInput = {
    AND?: GlobalStatsScalarWhereWithAggregatesInput | GlobalStatsScalarWhereWithAggregatesInput[]
    OR?: GlobalStatsScalarWhereWithAggregatesInput[]
    NOT?: GlobalStatsScalarWhereWithAggregatesInput | GlobalStatsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GlobalStats"> | string
    totalTrees?: IntWithAggregatesFilter<"GlobalStats"> | number
    totalUsers?: IntWithAggregatesFilter<"GlobalStats"> | number
    totalUpdates?: IntWithAggregatesFilter<"GlobalStats"> | number
    totalAdoptions?: IntWithAggregatesFilter<"GlobalStats"> | number
    co2OffsetKg?: FloatWithAggregatesFilter<"GlobalStats"> | number
    countriesActive?: IntWithAggregatesFilter<"GlobalStats"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"GlobalStats"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TreeCreateInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    owner: UserCreateNestedOneWithoutTreesInput
    updates?: TreeUpdateCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutTreeInput
    certificates?: CertificateCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    ownerId: string
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutTreeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutTreesNestedInput
    updates?: TreeUpdateUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    updates?: TreeUpdateUncheckedUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type TreeCreateManyInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    ownerId: string
  }

  export type TreeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TreeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUpdateCreateInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tree: TreeCreateNestedOneWithoutUpdatesInput
    user: UserCreateNestedOneWithoutUpdatesInput
  }

  export type TreeUpdateUncheckedCreateInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    treeId: string
    userId: string
  }

  export type TreeUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutUpdatesNestedInput
    user?: UserUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type TreeUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUpdateCreateManyInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    treeId: string
    userId: string
  }

  export type TreeUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionCreateInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    tree: TreeCreateNestedOneWithoutAdoptionsInput
    previousOwner: UserCreateNestedOneWithoutTransfersInput
    newOwner: UserCreateNestedOneWithoutAdoptionsInput
  }

  export type TreeAdoptionUncheckedCreateInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    previousOwnerId: string
    newOwnerId: string
  }

  export type TreeAdoptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutAdoptionsNestedInput
    previousOwner?: UserUpdateOneRequiredWithoutTransfersNestedInput
    newOwner?: UserUpdateOneRequiredWithoutAdoptionsNestedInput
  }

  export type TreeAdoptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionCreateManyInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    previousOwnerId: string
    newOwnerId: string
  }

  export type TreeAdoptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeAdoptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type BadgeCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonNullValueInput | InputJsonValue
    pointsValue?: number
    isActive?: boolean
    createdAt?: Date | string
    userBadges?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonNullValueInput | InputJsonValue
    pointsValue?: number
    isActive?: boolean
    createdAt?: Date | string
    userBadges?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonNullValueInput | InputJsonValue
    pointsValue?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    id?: string
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesInput
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: string
    earnedAt?: Date | string
    userId: string
    badgeId: string
  }

  export type UserBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeCreateManyInput = {
    id?: string
    earnedAt?: Date | string
    userId: string
    badgeId: string
  }

  export type UserBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardCreateInput = {
    id?: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl?: string | null
    inStock?: boolean
    isActive?: boolean
    createdAt?: Date | string
    redemptions?: RewardRedemptionCreateNestedManyWithoutRewardInput
  }

  export type RewardUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl?: string | null
    inStock?: boolean
    isActive?: boolean
    createdAt?: Date | string
    redemptions?: RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput
  }

  export type RewardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptions?: RewardRedemptionUpdateManyWithoutRewardNestedInput
  }

  export type RewardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redemptions?: RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput
  }

  export type RewardCreateManyInput = {
    id?: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl?: string | null
    inStock?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionCreateInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    user: UserCreateNestedOneWithoutRewardsInput
    reward: RewardCreateNestedOneWithoutRedemptionsInput
  }

  export type RewardRedemptionUncheckedCreateInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    userId: string
    rewardId: string
  }

  export type RewardRedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
    reward?: RewardUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardRedemptionCreateManyInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    userId: string
    rewardId: string
  }

  export type RewardRedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RewardRedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    rewardId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateCreateInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
    tree?: TreeCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    userId: string
    treeId?: string | null
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
    tree?: TreeUpdateOneWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    treeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificateCreateManyInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    userId: string
    treeId?: string | null
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    treeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
    userId: string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LearningModuleCreateInput = {
    id?: string
    title: string
    description: string
    content: JsonNullValueInput | InputJsonValue
    duration: number
    difficulty: $Enums.Difficulty
    topics?: LearningModuleCreatetopicsInput | string[]
    thumbnailUrl?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type LearningModuleUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    content: JsonNullValueInput | InputJsonValue
    duration: number
    difficulty: $Enums.Difficulty
    topics?: LearningModuleCreatetopicsInput | string[]
    thumbnailUrl?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type LearningModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    topics?: LearningModuleUpdatetopicsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    topics?: LearningModuleUpdatetopicsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningModuleCreateManyInput = {
    id?: string
    title: string
    description: string
    content: JsonNullValueInput | InputJsonValue
    duration: number
    difficulty: $Enums.Difficulty
    topics?: LearningModuleCreatetopicsInput | string[]
    thumbnailUrl?: string | null
    isActive?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type LearningModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    topics?: LearningModuleUpdatetopicsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    topics?: LearningModuleUpdatetopicsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalStatsCreateInput = {
    id?: string
    totalTrees?: number
    totalUsers?: number
    totalUpdates?: number
    totalAdoptions?: number
    co2OffsetKg?: number
    countriesActive?: number
    updatedAt?: Date | string
  }

  export type GlobalStatsUncheckedCreateInput = {
    id?: string
    totalTrees?: number
    totalUsers?: number
    totalUpdates?: number
    totalAdoptions?: number
    co2OffsetKg?: number
    countriesActive?: number
    updatedAt?: Date | string
  }

  export type GlobalStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTrees?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalUpdates?: IntFieldUpdateOperationsInput | number
    totalAdoptions?: IntFieldUpdateOperationsInput | number
    co2OffsetKg?: FloatFieldUpdateOperationsInput | number
    countriesActive?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTrees?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalUpdates?: IntFieldUpdateOperationsInput | number
    totalAdoptions?: IntFieldUpdateOperationsInput | number
    co2OffsetKg?: FloatFieldUpdateOperationsInput | number
    countriesActive?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalStatsCreateManyInput = {
    id?: string
    totalTrees?: number
    totalUsers?: number
    totalUpdates?: number
    totalAdoptions?: number
    co2OffsetKg?: number
    countriesActive?: number
    updatedAt?: Date | string
  }

  export type GlobalStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTrees?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalUpdates?: IntFieldUpdateOperationsInput | number
    totalAdoptions?: IntFieldUpdateOperationsInput | number
    co2OffsetKg?: FloatFieldUpdateOperationsInput | number
    countriesActive?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GlobalStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTrees?: IntFieldUpdateOperationsInput | number
    totalUsers?: IntFieldUpdateOperationsInput | number
    totalUpdates?: IntFieldUpdateOperationsInput | number
    totalAdoptions?: IntFieldUpdateOperationsInput | number
    co2OffsetKg?: FloatFieldUpdateOperationsInput | number
    countriesActive?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TreeListRelationFilter = {
    every?: TreeWhereInput
    some?: TreeWhereInput
    none?: TreeWhereInput
  }

  export type TreeAdoptionListRelationFilter = {
    every?: TreeAdoptionWhereInput
    some?: TreeAdoptionWhereInput
    none?: TreeAdoptionWhereInput
  }

  export type TreeUpdateListRelationFilter = {
    every?: TreeUpdateWhereInput
    some?: TreeUpdateWhereInput
    none?: TreeUpdateWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type RewardRedemptionListRelationFilter = {
    every?: RewardRedemptionWhereInput
    some?: RewardRedemptionWhereInput
    none?: RewardRedemptionWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeAdoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardRedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    greenPoints?: SortOrder
    isProfilePublic?: SortOrder
    emailNotifications?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    greenPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    greenPoints?: SortOrder
    isProfilePublic?: SortOrder
    emailNotifications?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    greenPoints?: SortOrder
    isProfilePublic?: SortOrder
    emailNotifications?: SortOrder
    city?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    greenPoints?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTreeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeSource | EnumTreeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeSourceFilter<$PrismaModel> | $Enums.TreeSource
  }

  export type EnumHealthStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthStatusFilter<$PrismaModel> | $Enums.HealthStatus
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TreeCountOrderByAggregateInput = {
    id?: SortOrder
    qrCode?: SortOrder
    species?: SortOrder
    source?: SortOrder
    commitmentDuration?: SortOrder
    initialHealthStatus?: SortOrder
    currentHealthStatus?: SortOrder
    location?: SortOrder
    photoUrl?: SortOrder
    plantedAt?: SortOrder
    isActive?: SortOrder
    isAdoptable?: SortOrder
    transferReason?: SortOrder
    lastUpdateAt?: SortOrder
    ownerId?: SortOrder
  }

  export type TreeAvgOrderByAggregateInput = {
    commitmentDuration?: SortOrder
  }

  export type TreeMaxOrderByAggregateInput = {
    id?: SortOrder
    qrCode?: SortOrder
    species?: SortOrder
    source?: SortOrder
    commitmentDuration?: SortOrder
    initialHealthStatus?: SortOrder
    currentHealthStatus?: SortOrder
    photoUrl?: SortOrder
    plantedAt?: SortOrder
    isActive?: SortOrder
    isAdoptable?: SortOrder
    transferReason?: SortOrder
    lastUpdateAt?: SortOrder
    ownerId?: SortOrder
  }

  export type TreeMinOrderByAggregateInput = {
    id?: SortOrder
    qrCode?: SortOrder
    species?: SortOrder
    source?: SortOrder
    commitmentDuration?: SortOrder
    initialHealthStatus?: SortOrder
    currentHealthStatus?: SortOrder
    photoUrl?: SortOrder
    plantedAt?: SortOrder
    isActive?: SortOrder
    isAdoptable?: SortOrder
    transferReason?: SortOrder
    lastUpdateAt?: SortOrder
    ownerId?: SortOrder
  }

  export type TreeSumOrderByAggregateInput = {
    commitmentDuration?: SortOrder
  }

  export type EnumTreeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeSource | EnumTreeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeSourceWithAggregatesFilter<$PrismaModel> | $Enums.TreeSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreeSourceFilter<$PrismaModel>
    _max?: NestedEnumTreeSourceFilter<$PrismaModel>
  }

  export type EnumHealthStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel> | $Enums.HealthStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthStatusFilter<$PrismaModel>
    _max?: NestedEnumHealthStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TreeRelationFilter = {
    is?: TreeWhereInput
    isNot?: TreeWhereInput
  }

  export type TreeUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    healthStatus?: SortOrder
    notes?: SortOrder
    photoUrl?: SortOrder
    growthMeasurements?: SortOrder
    gpsLocation?: SortOrder
    createdAt?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
  }

  export type TreeUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    healthStatus?: SortOrder
    notes?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
  }

  export type TreeUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    healthStatus?: SortOrder
    notes?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    treeId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TreeAdoptionCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    commitmentMessage?: SortOrder
    commitmentDuration?: SortOrder
    adoptedAt?: SortOrder
    treeId?: SortOrder
    previousOwnerId?: SortOrder
    newOwnerId?: SortOrder
  }

  export type TreeAdoptionAvgOrderByAggregateInput = {
    commitmentDuration?: SortOrder
  }

  export type TreeAdoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    commitmentMessage?: SortOrder
    commitmentDuration?: SortOrder
    adoptedAt?: SortOrder
    treeId?: SortOrder
    previousOwnerId?: SortOrder
    newOwnerId?: SortOrder
  }

  export type TreeAdoptionMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    commitmentMessage?: SortOrder
    commitmentDuration?: SortOrder
    adoptedAt?: SortOrder
    treeId?: SortOrder
    previousOwnerId?: SortOrder
    newOwnerId?: SortOrder
  }

  export type TreeAdoptionSumOrderByAggregateInput = {
    commitmentDuration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBadgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryFilter<$PrismaModel> | $Enums.BadgeCategory
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    requirement?: SortOrder
    pointsValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    pointsValue?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsValue?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    pointsValue?: SortOrder
  }

  export type EnumBadgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BadgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumBadgeCategoryFilter<$PrismaModel>
  }

  export type BadgeRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: string
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type EnumRewardCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardCategory | EnumRewardCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardCategoryFilter<$PrismaModel> | $Enums.RewardCategory
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    inStock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    pointsCost?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    inStock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pointsCost?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    inStock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    pointsCost?: SortOrder
  }

  export type EnumRewardCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardCategory | EnumRewardCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RewardCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardCategoryFilter<$PrismaModel>
    _max?: NestedEnumRewardCategoryFilter<$PrismaModel>
  }

  export type EnumRedemptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | EnumRedemptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRedemptionStatusFilter<$PrismaModel> | $Enums.RedemptionStatus
  }

  export type RewardRelationFilter = {
    is?: RewardWhereInput
    isNot?: RewardWhereInput
  }

  export type RewardRedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    pointsSpent?: SortOrder
    shippingAddress?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
  }

  export type RewardRedemptionAvgOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type RewardRedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
  }

  export type RewardRedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    shippedAt?: SortOrder
    deliveredAt?: SortOrder
    userId?: SortOrder
    rewardId?: SortOrder
  }

  export type RewardRedemptionSumOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type EnumRedemptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | EnumRedemptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RedemptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRedemptionStatusFilter<$PrismaModel>
    _max?: NestedEnumRedemptionStatusFilter<$PrismaModel>
  }

  export type EnumCertificateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateType | EnumCertificateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateTypeFilter<$PrismaModel> | $Enums.CertificateType
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type TreeNullableRelationFilter = {
    is?: TreeWhereInput | null
    isNot?: TreeWhereInput | null
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    metadata?: SortOrder
    issuedAt?: SortOrder
    userId?: SortOrder
    treeId?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
    userId?: SortOrder
    treeId?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    issuedAt?: SortOrder
    userId?: SortOrder
    treeId?: SortOrder
  }

  export type EnumCertificateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateType | EnumCertificateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateTypeWithAggregatesFilter<$PrismaModel> | $Enums.CertificateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificateTypeFilter<$PrismaModel>
    _max?: NestedEnumCertificateTypeFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    data?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LearningModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    topics?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningModuleAvgOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type LearningModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    difficulty?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type LearningModuleSumOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GlobalStatsCountOrderByAggregateInput = {
    id?: SortOrder
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalStatsAvgOrderByAggregateInput = {
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
  }

  export type GlobalStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalStatsMinOrderByAggregateInput = {
    id?: SortOrder
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
    updatedAt?: SortOrder
  }

  export type GlobalStatsSumOrderByAggregateInput = {
    totalTrees?: SortOrder
    totalUsers?: SortOrder
    totalUpdates?: SortOrder
    totalAdoptions?: SortOrder
    co2OffsetKg?: SortOrder
    countriesActive?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TreeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput> | TreeCreateWithoutOwnerInput[] | TreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutOwnerInput | TreeCreateOrConnectWithoutOwnerInput[]
    createMany?: TreeCreateManyOwnerInputEnvelope
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
  }

  export type TreeAdoptionCreateNestedManyWithoutNewOwnerInput = {
    create?: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput> | TreeAdoptionCreateWithoutNewOwnerInput[] | TreeAdoptionUncheckedCreateWithoutNewOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutNewOwnerInput | TreeAdoptionCreateOrConnectWithoutNewOwnerInput[]
    createMany?: TreeAdoptionCreateManyNewOwnerInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput = {
    create?: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput> | TreeAdoptionCreateWithoutPreviousOwnerInput[] | TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput | TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput[]
    createMany?: TreeAdoptionCreateManyPreviousOwnerInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type TreeUpdateCreateNestedManyWithoutUserInput = {
    create?: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput> | TreeUpdateCreateWithoutUserInput[] | TreeUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutUserInput | TreeUpdateCreateOrConnectWithoutUserInput[]
    createMany?: TreeUpdateCreateManyUserInputEnvelope
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type RewardRedemptionCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput> | RewardRedemptionCreateWithoutUserInput[] | RewardRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutUserInput | RewardRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: RewardRedemptionCreateManyUserInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type TreeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput> | TreeCreateWithoutOwnerInput[] | TreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutOwnerInput | TreeCreateOrConnectWithoutOwnerInput[]
    createMany?: TreeCreateManyOwnerInputEnvelope
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
  }

  export type TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput = {
    create?: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput> | TreeAdoptionCreateWithoutNewOwnerInput[] | TreeAdoptionUncheckedCreateWithoutNewOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutNewOwnerInput | TreeAdoptionCreateOrConnectWithoutNewOwnerInput[]
    createMany?: TreeAdoptionCreateManyNewOwnerInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput = {
    create?: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput> | TreeAdoptionCreateWithoutPreviousOwnerInput[] | TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput | TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput[]
    createMany?: TreeAdoptionCreateManyPreviousOwnerInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type TreeUpdateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput> | TreeUpdateCreateWithoutUserInput[] | TreeUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutUserInput | TreeUpdateCreateOrConnectWithoutUserInput[]
    createMany?: TreeUpdateCreateManyUserInputEnvelope
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type RewardRedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput> | RewardRedemptionCreateWithoutUserInput[] | RewardRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutUserInput | RewardRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: RewardRedemptionCreateManyUserInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TreeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput> | TreeCreateWithoutOwnerInput[] | TreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutOwnerInput | TreeCreateOrConnectWithoutOwnerInput[]
    upsert?: TreeUpsertWithWhereUniqueWithoutOwnerInput | TreeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TreeCreateManyOwnerInputEnvelope
    set?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    disconnect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    delete?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    update?: TreeUpdateWithWhereUniqueWithoutOwnerInput | TreeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TreeUpdateManyWithWhereWithoutOwnerInput | TreeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TreeScalarWhereInput | TreeScalarWhereInput[]
  }

  export type TreeAdoptionUpdateManyWithoutNewOwnerNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput> | TreeAdoptionCreateWithoutNewOwnerInput[] | TreeAdoptionUncheckedCreateWithoutNewOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutNewOwnerInput | TreeAdoptionCreateOrConnectWithoutNewOwnerInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutNewOwnerInput | TreeAdoptionUpsertWithWhereUniqueWithoutNewOwnerInput[]
    createMany?: TreeAdoptionCreateManyNewOwnerInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutNewOwnerInput | TreeAdoptionUpdateWithWhereUniqueWithoutNewOwnerInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutNewOwnerInput | TreeAdoptionUpdateManyWithWhereWithoutNewOwnerInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput> | TreeAdoptionCreateWithoutPreviousOwnerInput[] | TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput | TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutPreviousOwnerInput | TreeAdoptionUpsertWithWhereUniqueWithoutPreviousOwnerInput[]
    createMany?: TreeAdoptionCreateManyPreviousOwnerInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutPreviousOwnerInput | TreeAdoptionUpdateWithWhereUniqueWithoutPreviousOwnerInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutPreviousOwnerInput | TreeAdoptionUpdateManyWithWhereWithoutPreviousOwnerInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type TreeUpdateUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput> | TreeUpdateCreateWithoutUserInput[] | TreeUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutUserInput | TreeUpdateCreateOrConnectWithoutUserInput[]
    upsert?: TreeUpdateUpsertWithWhereUniqueWithoutUserInput | TreeUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreeUpdateCreateManyUserInputEnvelope
    set?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    disconnect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    delete?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    update?: TreeUpdateUpdateWithWhereUniqueWithoutUserInput | TreeUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreeUpdateUpdateManyWithWhereWithoutUserInput | TreeUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type RewardRedemptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput> | RewardRedemptionCreateWithoutUserInput[] | RewardRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutUserInput | RewardRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutUserInput | RewardRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardRedemptionCreateManyUserInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutUserInput | RewardRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutUserInput | RewardRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type TreeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput> | TreeCreateWithoutOwnerInput[] | TreeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TreeCreateOrConnectWithoutOwnerInput | TreeCreateOrConnectWithoutOwnerInput[]
    upsert?: TreeUpsertWithWhereUniqueWithoutOwnerInput | TreeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TreeCreateManyOwnerInputEnvelope
    set?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    disconnect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    delete?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    connect?: TreeWhereUniqueInput | TreeWhereUniqueInput[]
    update?: TreeUpdateWithWhereUniqueWithoutOwnerInput | TreeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TreeUpdateManyWithWhereWithoutOwnerInput | TreeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TreeScalarWhereInput | TreeScalarWhereInput[]
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput> | TreeAdoptionCreateWithoutNewOwnerInput[] | TreeAdoptionUncheckedCreateWithoutNewOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutNewOwnerInput | TreeAdoptionCreateOrConnectWithoutNewOwnerInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutNewOwnerInput | TreeAdoptionUpsertWithWhereUniqueWithoutNewOwnerInput[]
    createMany?: TreeAdoptionCreateManyNewOwnerInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutNewOwnerInput | TreeAdoptionUpdateWithWhereUniqueWithoutNewOwnerInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutNewOwnerInput | TreeAdoptionUpdateManyWithWhereWithoutNewOwnerInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput> | TreeAdoptionCreateWithoutPreviousOwnerInput[] | TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput | TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutPreviousOwnerInput | TreeAdoptionUpsertWithWhereUniqueWithoutPreviousOwnerInput[]
    createMany?: TreeAdoptionCreateManyPreviousOwnerInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutPreviousOwnerInput | TreeAdoptionUpdateWithWhereUniqueWithoutPreviousOwnerInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutPreviousOwnerInput | TreeAdoptionUpdateManyWithWhereWithoutPreviousOwnerInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type TreeUpdateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput> | TreeUpdateCreateWithoutUserInput[] | TreeUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutUserInput | TreeUpdateCreateOrConnectWithoutUserInput[]
    upsert?: TreeUpdateUpsertWithWhereUniqueWithoutUserInput | TreeUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreeUpdateCreateManyUserInputEnvelope
    set?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    disconnect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    delete?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    update?: TreeUpdateUpdateWithWhereUniqueWithoutUserInput | TreeUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreeUpdateUpdateManyWithWhereWithoutUserInput | TreeUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput> | RewardRedemptionCreateWithoutUserInput[] | RewardRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutUserInput | RewardRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutUserInput | RewardRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RewardRedemptionCreateManyUserInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutUserInput | RewardRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutUserInput | RewardRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTreesInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    connect?: UserWhereUniqueInput
  }

  export type TreeUpdateCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput> | TreeUpdateCreateWithoutTreeInput[] | TreeUpdateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutTreeInput | TreeUpdateCreateOrConnectWithoutTreeInput[]
    createMany?: TreeUpdateCreateManyTreeInputEnvelope
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
  }

  export type TreeAdoptionCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput> | TreeAdoptionCreateWithoutTreeInput[] | TreeAdoptionUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutTreeInput | TreeAdoptionCreateOrConnectWithoutTreeInput[]
    createMany?: TreeAdoptionCreateManyTreeInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutTreeInput = {
    create?: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput> | CertificateCreateWithoutTreeInput[] | CertificateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTreeInput | CertificateCreateOrConnectWithoutTreeInput[]
    createMany?: CertificateCreateManyTreeInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type TreeUpdateUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput> | TreeUpdateCreateWithoutTreeInput[] | TreeUpdateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutTreeInput | TreeUpdateCreateOrConnectWithoutTreeInput[]
    createMany?: TreeUpdateCreateManyTreeInputEnvelope
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
  }

  export type TreeAdoptionUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput> | TreeAdoptionCreateWithoutTreeInput[] | TreeAdoptionUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutTreeInput | TreeAdoptionCreateOrConnectWithoutTreeInput[]
    createMany?: TreeAdoptionCreateManyTreeInputEnvelope
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutTreeInput = {
    create?: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput> | CertificateCreateWithoutTreeInput[] | CertificateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTreeInput | CertificateCreateOrConnectWithoutTreeInput[]
    createMany?: CertificateCreateManyTreeInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type EnumTreeSourceFieldUpdateOperationsInput = {
    set?: $Enums.TreeSource
  }

  export type EnumHealthStatusFieldUpdateOperationsInput = {
    set?: $Enums.HealthStatus
  }

  export type UserUpdateOneRequiredWithoutTreesNestedInput = {
    create?: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreesInput
    upsert?: UserUpsertWithoutTreesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreesInput, UserUpdateWithoutTreesInput>, UserUncheckedUpdateWithoutTreesInput>
  }

  export type TreeUpdateUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput> | TreeUpdateCreateWithoutTreeInput[] | TreeUpdateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutTreeInput | TreeUpdateCreateOrConnectWithoutTreeInput[]
    upsert?: TreeUpdateUpsertWithWhereUniqueWithoutTreeInput | TreeUpdateUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeUpdateCreateManyTreeInputEnvelope
    set?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    disconnect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    delete?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    update?: TreeUpdateUpdateWithWhereUniqueWithoutTreeInput | TreeUpdateUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeUpdateUpdateManyWithWhereWithoutTreeInput | TreeUpdateUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
  }

  export type TreeAdoptionUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput> | TreeAdoptionCreateWithoutTreeInput[] | TreeAdoptionUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutTreeInput | TreeAdoptionCreateOrConnectWithoutTreeInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutTreeInput | TreeAdoptionUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeAdoptionCreateManyTreeInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutTreeInput | TreeAdoptionUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutTreeInput | TreeAdoptionUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput> | CertificateCreateWithoutTreeInput[] | CertificateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTreeInput | CertificateCreateOrConnectWithoutTreeInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutTreeInput | CertificateUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CertificateCreateManyTreeInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutTreeInput | CertificateUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutTreeInput | CertificateUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type TreeUpdateUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput> | TreeUpdateCreateWithoutTreeInput[] | TreeUpdateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeUpdateCreateOrConnectWithoutTreeInput | TreeUpdateCreateOrConnectWithoutTreeInput[]
    upsert?: TreeUpdateUpsertWithWhereUniqueWithoutTreeInput | TreeUpdateUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeUpdateCreateManyTreeInputEnvelope
    set?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    disconnect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    delete?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    connect?: TreeUpdateWhereUniqueInput | TreeUpdateWhereUniqueInput[]
    update?: TreeUpdateUpdateWithWhereUniqueWithoutTreeInput | TreeUpdateUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeUpdateUpdateManyWithWhereWithoutTreeInput | TreeUpdateUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput> | TreeAdoptionCreateWithoutTreeInput[] | TreeAdoptionUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: TreeAdoptionCreateOrConnectWithoutTreeInput | TreeAdoptionCreateOrConnectWithoutTreeInput[]
    upsert?: TreeAdoptionUpsertWithWhereUniqueWithoutTreeInput | TreeAdoptionUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: TreeAdoptionCreateManyTreeInputEnvelope
    set?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    disconnect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    delete?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    connect?: TreeAdoptionWhereUniqueInput | TreeAdoptionWhereUniqueInput[]
    update?: TreeAdoptionUpdateWithWhereUniqueWithoutTreeInput | TreeAdoptionUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: TreeAdoptionUpdateManyWithWhereWithoutTreeInput | TreeAdoptionUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutTreeNestedInput = {
    create?: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput> | CertificateCreateWithoutTreeInput[] | CertificateUncheckedCreateWithoutTreeInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutTreeInput | CertificateCreateOrConnectWithoutTreeInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutTreeInput | CertificateUpsertWithWhereUniqueWithoutTreeInput[]
    createMany?: CertificateCreateManyTreeInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutTreeInput | CertificateUpdateWithWhereUniqueWithoutTreeInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutTreeInput | CertificateUpdateManyWithWhereWithoutTreeInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type TreeCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<TreeCreateWithoutUpdatesInput, TreeUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutUpdatesInput
    connect?: TreeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<UserCreateWithoutUpdatesInput, UserUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatesInput
    connect?: UserWhereUniqueInput
  }

  export type TreeUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<TreeCreateWithoutUpdatesInput, TreeUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutUpdatesInput
    upsert?: TreeUpsertWithoutUpdatesInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutUpdatesInput, TreeUpdateWithoutUpdatesInput>, TreeUncheckedUpdateWithoutUpdatesInput>
  }

  export type UserUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatesInput, UserUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatesInput
    upsert?: UserUpsertWithoutUpdatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatesInput, UserUpdateWithoutUpdatesInput>, UserUncheckedUpdateWithoutUpdatesInput>
  }

  export type TreeCreateNestedOneWithoutAdoptionsInput = {
    create?: XOR<TreeCreateWithoutAdoptionsInput, TreeUncheckedCreateWithoutAdoptionsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutAdoptionsInput
    connect?: TreeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransfersInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdoptionsInput = {
    create?: XOR<UserCreateWithoutAdoptionsInput, UserUncheckedCreateWithoutAdoptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdoptionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TreeUpdateOneRequiredWithoutAdoptionsNestedInput = {
    create?: XOR<TreeCreateWithoutAdoptionsInput, TreeUncheckedCreateWithoutAdoptionsInput>
    connectOrCreate?: TreeCreateOrConnectWithoutAdoptionsInput
    upsert?: TreeUpsertWithoutAdoptionsInput
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutAdoptionsInput, TreeUpdateWithoutAdoptionsInput>, TreeUncheckedUpdateWithoutAdoptionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    upsert?: UserUpsertWithoutTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransfersInput, UserUpdateWithoutTransfersInput>, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type UserUpdateOneRequiredWithoutAdoptionsNestedInput = {
    create?: XOR<UserCreateWithoutAdoptionsInput, UserUncheckedCreateWithoutAdoptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdoptionsInput
    upsert?: UserUpsertWithoutAdoptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdoptionsInput, UserUpdateWithoutAdoptionsInput>, UserUncheckedUpdateWithoutAdoptionsInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type EnumBadgeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.BadgeCategory
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgeCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type BadgeUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgeUpsertWithoutUserBadgesInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutUserBadgesInput, BadgeUpdateWithoutUserBadgesInput>, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type RewardRedemptionCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type RewardRedemptionUncheckedCreateNestedManyWithoutRewardInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
  }

  export type EnumRewardCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RewardCategory
  }

  export type RewardRedemptionUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutRewardInput | RewardRedemptionUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutRewardNestedInput = {
    create?: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput> | RewardRedemptionCreateWithoutRewardInput[] | RewardRedemptionUncheckedCreateWithoutRewardInput[]
    connectOrCreate?: RewardRedemptionCreateOrConnectWithoutRewardInput | RewardRedemptionCreateOrConnectWithoutRewardInput[]
    upsert?: RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput | RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput[]
    createMany?: RewardRedemptionCreateManyRewardInputEnvelope
    set?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    disconnect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    delete?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    connect?: RewardRedemptionWhereUniqueInput | RewardRedemptionWhereUniqueInput[]
    update?: RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput | RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput[]
    updateMany?: RewardRedemptionUpdateManyWithWhereWithoutRewardInput | RewardRedemptionUpdateManyWithWhereWithoutRewardInput[]
    deleteMany?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRewardsInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type RewardCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedemptionsInput
    connect?: RewardWhereUniqueInput
  }

  export type EnumRedemptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.RedemptionStatus
  }

  export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRewardsInput
    upsert?: UserUpsertWithoutRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRewardsInput, UserUpdateWithoutRewardsInput>, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type RewardUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: RewardCreateOrConnectWithoutRedemptionsInput
    upsert?: RewardUpsertWithoutRedemptionsInput
    connect?: RewardWhereUniqueInput
    update?: XOR<XOR<RewardUpdateToOneWithWhereWithoutRedemptionsInput, RewardUpdateWithoutRedemptionsInput>, RewardUncheckedUpdateWithoutRedemptionsInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type TreeCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<TreeCreateWithoutCertificatesInput, TreeUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutCertificatesInput
    connect?: TreeWhereUniqueInput
  }

  export type EnumCertificateTypeFieldUpdateOperationsInput = {
    set?: $Enums.CertificateType
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type TreeUpdateOneWithoutCertificatesNestedInput = {
    create?: XOR<TreeCreateWithoutCertificatesInput, TreeUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: TreeCreateOrConnectWithoutCertificatesInput
    upsert?: TreeUpsertWithoutCertificatesInput
    disconnect?: TreeWhereInput | boolean
    delete?: TreeWhereInput | boolean
    connect?: TreeWhereUniqueInput
    update?: XOR<XOR<TreeUpdateToOneWithWhereWithoutCertificatesInput, TreeUpdateWithoutCertificatesInput>, TreeUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type LearningModuleCreatetopicsInput = {
    set: string[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type LearningModuleUpdatetopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTreeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeSource | EnumTreeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeSourceFilter<$PrismaModel> | $Enums.TreeSource
  }

  export type NestedEnumHealthStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthStatusFilter<$PrismaModel> | $Enums.HealthStatus
  }

  export type NestedEnumTreeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreeSource | EnumTreeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TreeSource[] | ListEnumTreeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTreeSourceWithAggregatesFilter<$PrismaModel> | $Enums.TreeSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreeSourceFilter<$PrismaModel>
    _max?: NestedEnumTreeSourceFilter<$PrismaModel>
  }

  export type NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
    in?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.HealthStatus[] | ListEnumHealthStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel> | $Enums.HealthStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHealthStatusFilter<$PrismaModel>
    _max?: NestedEnumHealthStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBadgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryFilter<$PrismaModel> | $Enums.BadgeCategory
  }

  export type NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeCategory | EnumBadgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeCategory[] | ListEnumBadgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BadgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumBadgeCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRewardCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardCategory | EnumRewardCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardCategoryFilter<$PrismaModel> | $Enums.RewardCategory
  }

  export type NestedEnumRewardCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardCategory | EnumRewardCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardCategory[] | ListEnumRewardCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RewardCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardCategoryFilter<$PrismaModel>
    _max?: NestedEnumRewardCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRedemptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | EnumRedemptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRedemptionStatusFilter<$PrismaModel> | $Enums.RedemptionStatus
  }

  export type NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | EnumRedemptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RedemptionStatus[] | ListEnumRedemptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RedemptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRedemptionStatusFilter<$PrismaModel>
    _max?: NestedEnumRedemptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumCertificateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateType | EnumCertificateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateTypeFilter<$PrismaModel> | $Enums.CertificateType
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCertificateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateType | EnumCertificateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateType[] | ListEnumCertificateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateTypeWithAggregatesFilter<$PrismaModel> | $Enums.CertificateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificateTypeFilter<$PrismaModel>
    _max?: NestedEnumCertificateTypeFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TreeCreateWithoutOwnerInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    updates?: TreeUpdateCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutTreeInput
    certificates?: CertificateCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutOwnerInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutTreeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutOwnerInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput>
  }

  export type TreeCreateManyOwnerInputEnvelope = {
    data: TreeCreateManyOwnerInput | TreeCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TreeAdoptionCreateWithoutNewOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    tree: TreeCreateNestedOneWithoutAdoptionsInput
    previousOwner: UserCreateNestedOneWithoutTransfersInput
  }

  export type TreeAdoptionUncheckedCreateWithoutNewOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    previousOwnerId: string
  }

  export type TreeAdoptionCreateOrConnectWithoutNewOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    create: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput>
  }

  export type TreeAdoptionCreateManyNewOwnerInputEnvelope = {
    data: TreeAdoptionCreateManyNewOwnerInput | TreeAdoptionCreateManyNewOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TreeAdoptionCreateWithoutPreviousOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    tree: TreeCreateNestedOneWithoutAdoptionsInput
    newOwner: UserCreateNestedOneWithoutAdoptionsInput
  }

  export type TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    newOwnerId: string
  }

  export type TreeAdoptionCreateOrConnectWithoutPreviousOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    create: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput>
  }

  export type TreeAdoptionCreateManyPreviousOwnerInputEnvelope = {
    data: TreeAdoptionCreateManyPreviousOwnerInput | TreeAdoptionCreateManyPreviousOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TreeUpdateCreateWithoutUserInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tree: TreeCreateNestedOneWithoutUpdatesInput
  }

  export type TreeUpdateUncheckedCreateWithoutUserInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    treeId: string
  }

  export type TreeUpdateCreateOrConnectWithoutUserInput = {
    where: TreeUpdateWhereUniqueInput
    create: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput>
  }

  export type TreeUpdateCreateManyUserInputEnvelope = {
    data: TreeUpdateCreateManyUserInput | TreeUpdateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    id?: string
    earnedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: string
    earnedAt?: Date | string
    badgeId: string
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RewardRedemptionCreateWithoutUserInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    reward: RewardCreateNestedOneWithoutRedemptionsInput
  }

  export type RewardRedemptionUncheckedCreateWithoutUserInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    rewardId: string
  }

  export type RewardRedemptionCreateOrConnectWithoutUserInput = {
    where: RewardRedemptionWhereUniqueInput
    create: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput>
  }

  export type RewardRedemptionCreateManyUserInputEnvelope = {
    data: RewardRedemptionCreateManyUserInput | RewardRedemptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    tree?: TreeCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    treeId?: string | null
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TreeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TreeWhereUniqueInput
    update: XOR<TreeUpdateWithoutOwnerInput, TreeUncheckedUpdateWithoutOwnerInput>
    create: XOR<TreeCreateWithoutOwnerInput, TreeUncheckedCreateWithoutOwnerInput>
  }

  export type TreeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TreeWhereUniqueInput
    data: XOR<TreeUpdateWithoutOwnerInput, TreeUncheckedUpdateWithoutOwnerInput>
  }

  export type TreeUpdateManyWithWhereWithoutOwnerInput = {
    where: TreeScalarWhereInput
    data: XOR<TreeUpdateManyMutationInput, TreeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TreeScalarWhereInput = {
    AND?: TreeScalarWhereInput | TreeScalarWhereInput[]
    OR?: TreeScalarWhereInput[]
    NOT?: TreeScalarWhereInput | TreeScalarWhereInput[]
    id?: UuidFilter<"Tree"> | string
    qrCode?: StringFilter<"Tree"> | string
    species?: StringFilter<"Tree"> | string
    source?: EnumTreeSourceFilter<"Tree"> | $Enums.TreeSource
    commitmentDuration?: IntFilter<"Tree"> | number
    initialHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFilter<"Tree"> | $Enums.HealthStatus
    location?: JsonFilter<"Tree">
    photoUrl?: StringFilter<"Tree"> | string
    plantedAt?: DateTimeFilter<"Tree"> | Date | string
    isActive?: BoolFilter<"Tree"> | boolean
    isAdoptable?: BoolFilter<"Tree"> | boolean
    transferReason?: StringNullableFilter<"Tree"> | string | null
    lastUpdateAt?: DateTimeNullableFilter<"Tree"> | Date | string | null
    ownerId?: UuidFilter<"Tree"> | string
  }

  export type TreeAdoptionUpsertWithWhereUniqueWithoutNewOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    update: XOR<TreeAdoptionUpdateWithoutNewOwnerInput, TreeAdoptionUncheckedUpdateWithoutNewOwnerInput>
    create: XOR<TreeAdoptionCreateWithoutNewOwnerInput, TreeAdoptionUncheckedCreateWithoutNewOwnerInput>
  }

  export type TreeAdoptionUpdateWithWhereUniqueWithoutNewOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    data: XOR<TreeAdoptionUpdateWithoutNewOwnerInput, TreeAdoptionUncheckedUpdateWithoutNewOwnerInput>
  }

  export type TreeAdoptionUpdateManyWithWhereWithoutNewOwnerInput = {
    where: TreeAdoptionScalarWhereInput
    data: XOR<TreeAdoptionUpdateManyMutationInput, TreeAdoptionUncheckedUpdateManyWithoutNewOwnerInput>
  }

  export type TreeAdoptionScalarWhereInput = {
    AND?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
    OR?: TreeAdoptionScalarWhereInput[]
    NOT?: TreeAdoptionScalarWhereInput | TreeAdoptionScalarWhereInput[]
    id?: UuidFilter<"TreeAdoption"> | string
    reason?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentMessage?: StringNullableFilter<"TreeAdoption"> | string | null
    commitmentDuration?: IntNullableFilter<"TreeAdoption"> | number | null
    adoptedAt?: DateTimeFilter<"TreeAdoption"> | Date | string
    treeId?: UuidFilter<"TreeAdoption"> | string
    previousOwnerId?: UuidFilter<"TreeAdoption"> | string
    newOwnerId?: UuidFilter<"TreeAdoption"> | string
  }

  export type TreeAdoptionUpsertWithWhereUniqueWithoutPreviousOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    update: XOR<TreeAdoptionUpdateWithoutPreviousOwnerInput, TreeAdoptionUncheckedUpdateWithoutPreviousOwnerInput>
    create: XOR<TreeAdoptionCreateWithoutPreviousOwnerInput, TreeAdoptionUncheckedCreateWithoutPreviousOwnerInput>
  }

  export type TreeAdoptionUpdateWithWhereUniqueWithoutPreviousOwnerInput = {
    where: TreeAdoptionWhereUniqueInput
    data: XOR<TreeAdoptionUpdateWithoutPreviousOwnerInput, TreeAdoptionUncheckedUpdateWithoutPreviousOwnerInput>
  }

  export type TreeAdoptionUpdateManyWithWhereWithoutPreviousOwnerInput = {
    where: TreeAdoptionScalarWhereInput
    data: XOR<TreeAdoptionUpdateManyMutationInput, TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerInput>
  }

  export type TreeUpdateUpsertWithWhereUniqueWithoutUserInput = {
    where: TreeUpdateWhereUniqueInput
    update: XOR<TreeUpdateUpdateWithoutUserInput, TreeUpdateUncheckedUpdateWithoutUserInput>
    create: XOR<TreeUpdateCreateWithoutUserInput, TreeUpdateUncheckedCreateWithoutUserInput>
  }

  export type TreeUpdateUpdateWithWhereUniqueWithoutUserInput = {
    where: TreeUpdateWhereUniqueInput
    data: XOR<TreeUpdateUpdateWithoutUserInput, TreeUpdateUncheckedUpdateWithoutUserInput>
  }

  export type TreeUpdateUpdateManyWithWhereWithoutUserInput = {
    where: TreeUpdateScalarWhereInput
    data: XOR<TreeUpdateUpdateManyMutationInput, TreeUpdateUncheckedUpdateManyWithoutUserInput>
  }

  export type TreeUpdateScalarWhereInput = {
    AND?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
    OR?: TreeUpdateScalarWhereInput[]
    NOT?: TreeUpdateScalarWhereInput | TreeUpdateScalarWhereInput[]
    id?: UuidFilter<"TreeUpdate"> | string
    healthStatus?: EnumHealthStatusFilter<"TreeUpdate"> | $Enums.HealthStatus
    notes?: StringNullableFilter<"TreeUpdate"> | string | null
    photoUrl?: StringFilter<"TreeUpdate"> | string
    growthMeasurements?: JsonNullableFilter<"TreeUpdate">
    gpsLocation?: JsonNullableFilter<"TreeUpdate">
    createdAt?: DateTimeFilter<"TreeUpdate"> | Date | string
    treeId?: UuidFilter<"TreeUpdate"> | string
    userId?: UuidFilter<"TreeUpdate"> | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: UuidFilter<"UserBadge"> | string
    earnedAt?: DateTimeFilter<"UserBadge"> | Date | string
    userId?: UuidFilter<"UserBadge"> | string
    badgeId?: UuidFilter<"UserBadge"> | string
  }

  export type RewardRedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: RewardRedemptionWhereUniqueInput
    update: XOR<RewardRedemptionUpdateWithoutUserInput, RewardRedemptionUncheckedUpdateWithoutUserInput>
    create: XOR<RewardRedemptionCreateWithoutUserInput, RewardRedemptionUncheckedCreateWithoutUserInput>
  }

  export type RewardRedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: RewardRedemptionWhereUniqueInput
    data: XOR<RewardRedemptionUpdateWithoutUserInput, RewardRedemptionUncheckedUpdateWithoutUserInput>
  }

  export type RewardRedemptionUpdateManyWithWhereWithoutUserInput = {
    where: RewardRedemptionScalarWhereInput
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyWithoutUserInput>
  }

  export type RewardRedemptionScalarWhereInput = {
    AND?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    OR?: RewardRedemptionScalarWhereInput[]
    NOT?: RewardRedemptionScalarWhereInput | RewardRedemptionScalarWhereInput[]
    id?: UuidFilter<"RewardRedemption"> | string
    pointsSpent?: IntFilter<"RewardRedemption"> | number
    shippingAddress?: JsonNullableFilter<"RewardRedemption">
    status?: EnumRedemptionStatusFilter<"RewardRedemption"> | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFilter<"RewardRedemption"> | Date | string
    shippedAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"RewardRedemption"> | Date | string | null
    userId?: UuidFilter<"RewardRedemption"> | string
    rewardId?: UuidFilter<"RewardRedemption"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    data?: JsonNullableFilter<"Notification">
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: UuidFilter<"Notification"> | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: UuidFilter<"Certificate"> | string
    type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType
    pdfUrl?: StringFilter<"Certificate"> | string
    metadata?: JsonFilter<"Certificate">
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    userId?: UuidFilter<"Certificate"> | string
    treeId?: UuidNullableFilter<"Certificate"> | string | null
  }

  export type UserCreateWithoutTreesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTreesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTreesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
  }

  export type TreeUpdateCreateWithoutTreeInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUpdatesInput
  }

  export type TreeUpdateUncheckedCreateWithoutTreeInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type TreeUpdateCreateOrConnectWithoutTreeInput = {
    where: TreeUpdateWhereUniqueInput
    create: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput>
  }

  export type TreeUpdateCreateManyTreeInputEnvelope = {
    data: TreeUpdateCreateManyTreeInput | TreeUpdateCreateManyTreeInput[]
    skipDuplicates?: boolean
  }

  export type TreeAdoptionCreateWithoutTreeInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    previousOwner: UserCreateNestedOneWithoutTransfersInput
    newOwner: UserCreateNestedOneWithoutAdoptionsInput
  }

  export type TreeAdoptionUncheckedCreateWithoutTreeInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    previousOwnerId: string
    newOwnerId: string
  }

  export type TreeAdoptionCreateOrConnectWithoutTreeInput = {
    where: TreeAdoptionWhereUniqueInput
    create: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput>
  }

  export type TreeAdoptionCreateManyTreeInputEnvelope = {
    data: TreeAdoptionCreateManyTreeInput | TreeAdoptionCreateManyTreeInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutTreeInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateWithoutTreeInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    userId: string
  }

  export type CertificateCreateOrConnectWithoutTreeInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput>
  }

  export type CertificateCreateManyTreeInputEnvelope = {
    data: CertificateCreateManyTreeInput | CertificateCreateManyTreeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTreesInput = {
    update: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
    create: XOR<UserCreateWithoutTreesInput, UserUncheckedCreateWithoutTreesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreesInput, UserUncheckedUpdateWithoutTreesInput>
  }

  export type UserUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeUpdateUpsertWithWhereUniqueWithoutTreeInput = {
    where: TreeUpdateWhereUniqueInput
    update: XOR<TreeUpdateUpdateWithoutTreeInput, TreeUpdateUncheckedUpdateWithoutTreeInput>
    create: XOR<TreeUpdateCreateWithoutTreeInput, TreeUpdateUncheckedCreateWithoutTreeInput>
  }

  export type TreeUpdateUpdateWithWhereUniqueWithoutTreeInput = {
    where: TreeUpdateWhereUniqueInput
    data: XOR<TreeUpdateUpdateWithoutTreeInput, TreeUpdateUncheckedUpdateWithoutTreeInput>
  }

  export type TreeUpdateUpdateManyWithWhereWithoutTreeInput = {
    where: TreeUpdateScalarWhereInput
    data: XOR<TreeUpdateUpdateManyMutationInput, TreeUpdateUncheckedUpdateManyWithoutTreeInput>
  }

  export type TreeAdoptionUpsertWithWhereUniqueWithoutTreeInput = {
    where: TreeAdoptionWhereUniqueInput
    update: XOR<TreeAdoptionUpdateWithoutTreeInput, TreeAdoptionUncheckedUpdateWithoutTreeInput>
    create: XOR<TreeAdoptionCreateWithoutTreeInput, TreeAdoptionUncheckedCreateWithoutTreeInput>
  }

  export type TreeAdoptionUpdateWithWhereUniqueWithoutTreeInput = {
    where: TreeAdoptionWhereUniqueInput
    data: XOR<TreeAdoptionUpdateWithoutTreeInput, TreeAdoptionUncheckedUpdateWithoutTreeInput>
  }

  export type TreeAdoptionUpdateManyWithWhereWithoutTreeInput = {
    where: TreeAdoptionScalarWhereInput
    data: XOR<TreeAdoptionUpdateManyMutationInput, TreeAdoptionUncheckedUpdateManyWithoutTreeInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutTreeInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutTreeInput, CertificateUncheckedUpdateWithoutTreeInput>
    create: XOR<CertificateCreateWithoutTreeInput, CertificateUncheckedCreateWithoutTreeInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutTreeInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutTreeInput, CertificateUncheckedUpdateWithoutTreeInput>
  }

  export type CertificateUpdateManyWithWhereWithoutTreeInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutTreeInput>
  }

  export type TreeCreateWithoutUpdatesInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    owner: UserCreateNestedOneWithoutTreesInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutTreeInput
    certificates?: CertificateCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutUpdatesInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    ownerId: string
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutTreeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutUpdatesInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutUpdatesInput, TreeUncheckedCreateWithoutUpdatesInput>
  }

  export type UserCreateWithoutUpdatesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpdatesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpdatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatesInput, UserUncheckedCreateWithoutUpdatesInput>
  }

  export type TreeUpsertWithoutUpdatesInput = {
    update: XOR<TreeUpdateWithoutUpdatesInput, TreeUncheckedUpdateWithoutUpdatesInput>
    create: XOR<TreeCreateWithoutUpdatesInput, TreeUncheckedCreateWithoutUpdatesInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutUpdatesInput, TreeUncheckedUpdateWithoutUpdatesInput>
  }

  export type TreeUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutTreesNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type UserUpsertWithoutUpdatesInput = {
    update: XOR<UserUpdateWithoutUpdatesInput, UserUncheckedUpdateWithoutUpdatesInput>
    create: XOR<UserCreateWithoutUpdatesInput, UserUncheckedCreateWithoutUpdatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatesInput, UserUncheckedUpdateWithoutUpdatesInput>
  }

  export type UserUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeCreateWithoutAdoptionsInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    owner: UserCreateNestedOneWithoutTreesInput
    updates?: TreeUpdateCreateNestedManyWithoutTreeInput
    certificates?: CertificateCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutAdoptionsInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    ownerId: string
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutTreeInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutAdoptionsInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutAdoptionsInput, TreeUncheckedCreateWithoutAdoptionsInput>
  }

  export type UserCreateWithoutTransfersInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransfersInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
  }

  export type UserCreateWithoutAdoptionsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdoptionsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdoptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdoptionsInput, UserUncheckedCreateWithoutAdoptionsInput>
  }

  export type TreeUpsertWithoutAdoptionsInput = {
    update: XOR<TreeUpdateWithoutAdoptionsInput, TreeUncheckedUpdateWithoutAdoptionsInput>
    create: XOR<TreeCreateWithoutAdoptionsInput, TreeUncheckedCreateWithoutAdoptionsInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutAdoptionsInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutAdoptionsInput, TreeUncheckedUpdateWithoutAdoptionsInput>
  }

  export type TreeUpdateWithoutAdoptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutTreesNestedInput
    updates?: TreeUpdateUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutAdoptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    updates?: TreeUpdateUncheckedUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type UserUpsertWithoutTransfersInput = {
    update: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type UserUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAdoptionsInput = {
    update: XOR<UserUpdateWithoutAdoptionsInput, UserUncheckedUpdateWithoutAdoptionsInput>
    create: XOR<UserCreateWithoutAdoptionsInput, UserUncheckedCreateWithoutAdoptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdoptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdoptionsInput, UserUncheckedUpdateWithoutAdoptionsInput>
  }

  export type UserUpdateWithoutAdoptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdoptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    id?: string
    earnedAt?: Date | string
    user: UserCreateNestedOneWithoutBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: string
    earnedAt?: Date | string
    userId: string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutBadgesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type BadgeCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonNullValueInput | InputJsonValue
    pointsValue?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutUserBadgesInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: $Enums.BadgeCategory
    requirement: JsonNullValueInput | InputJsonValue
    pointsValue?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutUserBadgesInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgeUpsertWithoutUserBadgesInput = {
    update: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgeCreateWithoutUserBadgesInput, BadgeUncheckedCreateWithoutUserBadgesInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutUserBadgesInput, BadgeUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgeUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutUserBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: EnumBadgeCategoryFieldUpdateOperationsInput | $Enums.BadgeCategory
    requirement?: JsonNullValueInput | InputJsonValue
    pointsValue?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardRedemptionCreateWithoutRewardInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    user: UserCreateNestedOneWithoutRewardsInput
  }

  export type RewardRedemptionUncheckedCreateWithoutRewardInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    userId: string
  }

  export type RewardRedemptionCreateOrConnectWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    create: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput>
  }

  export type RewardRedemptionCreateManyRewardInputEnvelope = {
    data: RewardRedemptionCreateManyRewardInput | RewardRedemptionCreateManyRewardInput[]
    skipDuplicates?: boolean
  }

  export type RewardRedemptionUpsertWithWhereUniqueWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    update: XOR<RewardRedemptionUpdateWithoutRewardInput, RewardRedemptionUncheckedUpdateWithoutRewardInput>
    create: XOR<RewardRedemptionCreateWithoutRewardInput, RewardRedemptionUncheckedCreateWithoutRewardInput>
  }

  export type RewardRedemptionUpdateWithWhereUniqueWithoutRewardInput = {
    where: RewardRedemptionWhereUniqueInput
    data: XOR<RewardRedemptionUpdateWithoutRewardInput, RewardRedemptionUncheckedUpdateWithoutRewardInput>
  }

  export type RewardRedemptionUpdateManyWithWhereWithoutRewardInput = {
    where: RewardRedemptionScalarWhereInput
    data: XOR<RewardRedemptionUpdateManyMutationInput, RewardRedemptionUncheckedUpdateManyWithoutRewardInput>
  }

  export type UserCreateWithoutRewardsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRewardsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
  }

  export type RewardCreateWithoutRedemptionsInput = {
    id?: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl?: string | null
    inStock?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    name: string
    description: string
    pointsCost: number
    category: $Enums.RewardCategory
    imageUrl?: string | null
    inStock?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type RewardCreateOrConnectWithoutRedemptionsInput = {
    where: RewardWhereUniqueInput
    create: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
  }

  export type UserUpsertWithoutRewardsInput = {
    update: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
    create: XOR<UserCreateWithoutRewardsInput, UserUncheckedCreateWithoutRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRewardsInput, UserUncheckedUpdateWithoutRewardsInput>
  }

  export type UserUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RewardUpsertWithoutRedemptionsInput = {
    update: XOR<RewardUpdateWithoutRedemptionsInput, RewardUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<RewardCreateWithoutRedemptionsInput, RewardUncheckedCreateWithoutRedemptionsInput>
    where?: RewardWhereInput
  }

  export type RewardUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: RewardWhereInput
    data: XOR<RewardUpdateWithoutRedemptionsInput, RewardUncheckedUpdateWithoutRedemptionsInput>
  }

  export type RewardUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    category?: EnumRewardCategoryFieldUpdateOperationsInput | $Enums.RewardCategory
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inStock?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type TreeCreateWithoutCertificatesInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    owner: UserCreateNestedOneWithoutTreesInput
    updates?: TreeUpdateCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutTreeInput
  }

  export type TreeUncheckedCreateWithoutCertificatesInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
    ownerId: string
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutTreeInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutTreeInput
  }

  export type TreeCreateOrConnectWithoutCertificatesInput = {
    where: TreeWhereUniqueInput
    create: XOR<TreeCreateWithoutCertificatesInput, TreeUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeUpsertWithoutCertificatesInput = {
    update: XOR<TreeUpdateWithoutCertificatesInput, TreeUncheckedUpdateWithoutCertificatesInput>
    create: XOR<TreeCreateWithoutCertificatesInput, TreeUncheckedCreateWithoutCertificatesInput>
    where?: TreeWhereInput
  }

  export type TreeUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: TreeWhereInput
    data: XOR<TreeUpdateWithoutCertificatesInput, TreeUncheckedUpdateWithoutCertificatesInput>
  }

  export type TreeUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutTreesNestedInput
    updates?: TreeUpdateUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    updates?: TreeUpdateUncheckedUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    profilePicture?: string | null
    bio?: string | null
    greenPoints?: number
    isProfilePublic?: boolean
    emailNotifications?: boolean
    city?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    trees?: TreeUncheckedCreateNestedManyWithoutOwnerInput
    adoptions?: TreeAdoptionUncheckedCreateNestedManyWithoutNewOwnerInput
    transfers?: TreeAdoptionUncheckedCreateNestedManyWithoutPreviousOwnerInput
    updates?: TreeUpdateUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
    rewards?: RewardRedemptionUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    greenPoints?: IntFieldUpdateOperationsInput | number
    isProfilePublic?: BoolFieldUpdateOperationsInput | boolean
    emailNotifications?: BoolFieldUpdateOperationsInput | boolean
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trees?: TreeUncheckedUpdateManyWithoutOwnerNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutNewOwnerNestedInput
    transfers?: TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerNestedInput
    updates?: TreeUpdateUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
    rewards?: RewardRedemptionUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TreeCreateManyOwnerInput = {
    id?: string
    qrCode: string
    species: string
    source: $Enums.TreeSource
    commitmentDuration: number
    initialHealthStatus: $Enums.HealthStatus
    currentHealthStatus?: $Enums.HealthStatus
    location: JsonNullValueInput | InputJsonValue
    photoUrl: string
    plantedAt?: Date | string
    isActive?: boolean
    isAdoptable?: boolean
    transferReason?: string | null
    lastUpdateAt?: Date | string | null
  }

  export type TreeAdoptionCreateManyNewOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    previousOwnerId: string
  }

  export type TreeAdoptionCreateManyPreviousOwnerInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    treeId: string
    newOwnerId: string
  }

  export type TreeUpdateCreateManyUserInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    treeId: string
  }

  export type UserBadgeCreateManyUserInput = {
    id?: string
    earnedAt?: Date | string
    badgeId: string
  }

  export type RewardRedemptionCreateManyUserInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    rewardId: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    title: string
    message: string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: boolean
    createdAt?: Date | string
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    treeId?: string | null
  }

  export type TreeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: TreeUpdateUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: TreeUpdateUncheckedUpdateManyWithoutTreeNestedInput
    adoptions?: TreeAdoptionUncheckedUpdateManyWithoutTreeNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutTreeNestedInput
  }

  export type TreeUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    species?: StringFieldUpdateOperationsInput | string
    source?: EnumTreeSourceFieldUpdateOperationsInput | $Enums.TreeSource
    commitmentDuration?: IntFieldUpdateOperationsInput | number
    initialHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    currentHealthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    location?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    plantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdoptable?: BoolFieldUpdateOperationsInput | boolean
    transferReason?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TreeAdoptionUpdateWithoutNewOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutAdoptionsNestedInput
    previousOwner?: UserUpdateOneRequiredWithoutTransfersNestedInput
  }

  export type TreeAdoptionUncheckedUpdateWithoutNewOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutNewOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionUpdateWithoutPreviousOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutAdoptionsNestedInput
    newOwner?: UserUpdateOneRequiredWithoutAdoptionsNestedInput
  }

  export type TreeAdoptionUncheckedUpdateWithoutPreviousOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutPreviousOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUpdateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type TreeUpdateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUpdateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardRedemptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reward?: RewardUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rewardId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tree?: TreeUpdateOneWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreeUpdateCreateManyTreeInput = {
    id?: string
    healthStatus: $Enums.HealthStatus
    notes?: string | null
    photoUrl: string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userId: string
  }

  export type TreeAdoptionCreateManyTreeInput = {
    id?: string
    reason?: string | null
    commitmentMessage?: string | null
    commitmentDuration?: number | null
    adoptedAt?: Date | string
    previousOwnerId: string
    newOwnerId: string
  }

  export type CertificateCreateManyTreeInput = {
    id?: string
    type: $Enums.CertificateType
    pdfUrl: string
    metadata: JsonNullValueInput | InputJsonValue
    issuedAt?: Date | string
    userId: string
  }

  export type TreeUpdateUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type TreeUpdateUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeUpdateUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: StringFieldUpdateOperationsInput | string
    growthMeasurements?: NullableJsonNullValueInput | InputJsonValue
    gpsLocation?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousOwner?: UserUpdateOneRequiredWithoutTransfersNestedInput
    newOwner?: UserUpdateOneRequiredWithoutAdoptionsNestedInput
  }

  export type TreeAdoptionUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type TreeAdoptionUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentMessage?: NullableStringFieldUpdateOperationsInput | string | null
    commitmentDuration?: NullableIntFieldUpdateOperationsInput | number | null
    adoptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previousOwnerId?: StringFieldUpdateOperationsInput | string
    newOwnerId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateUncheckedUpdateManyWithoutTreeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCertificateTypeFieldUpdateOperationsInput | $Enums.CertificateType
    pdfUrl?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: string
    earnedAt?: Date | string
    userId: string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardRedemptionCreateManyRewardInput = {
    id?: string
    pointsSpent: number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.RedemptionStatus
    redeemedAt?: Date | string
    shippedAt?: Date | string | null
    deliveredAt?: Date | string | null
    userId: string
  }

  export type RewardRedemptionUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardRedemptionUncheckedUpdateWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RewardRedemptionUncheckedUpdateManyWithoutRewardInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingAddress?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus
    redeemedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreeCountOutputTypeDefaultArgs instead
     */
    export type TreeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeCountOutputTypeDefaultArgs instead
     */
    export type BadgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RewardCountOutputTypeDefaultArgs instead
     */
    export type RewardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RewardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreeDefaultArgs instead
     */
    export type TreeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TreeAdoptionDefaultArgs instead
     */
    export type TreeAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TreeAdoptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BadgeDefaultArgs instead
     */
    export type BadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBadgeDefaultArgs instead
     */
    export type UserBadgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBadgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RewardDefaultArgs instead
     */
    export type RewardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RewardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RewardRedemptionDefaultArgs instead
     */
    export type RewardRedemptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RewardRedemptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CertificateDefaultArgs instead
     */
    export type CertificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CertificateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LearningModuleDefaultArgs instead
     */
    export type LearningModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LearningModuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GlobalStatsDefaultArgs instead
     */
    export type GlobalStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GlobalStatsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}