# NestJS API

> Auto-generated from your DB diagram using [Architect](https://architectapp.dev).

## Stack

- **Runtime**: Node.js 20 + TypeScript
- **Framework**: NestJS 10
- **ORM**: Prisma (PostgreSQL)
- **Validation**: class-validator + class-transformer
- **Containerization**: Docker + Docker Compose

## Project Structure

```
src/
├── common/
│   ├── filters/          # AllExceptionsFilter
│   └── guards/           # JwtAuthGuard, JwtStrategy
├── prisma/               # PrismaService (global module)
├── administrators/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── administrators.controller.ts
│   ├── administrators.service.ts
│   └── administrators.module.ts
├── admin_roles/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── admin_roles.controller.ts
│   ├── admin_roles.service.ts
│   └── admin_roles.module.ts
├── adverts/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── adverts.controller.ts
│   ├── adverts.service.ts
│   └── adverts.module.ts
├── analytics_events/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── analytics_events.controller.ts
│   ├── analytics_events.service.ts
│   └── analytics_events.module.ts
├── auths/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── auths.controller.ts
│   ├── auths.service.ts
│   └── auths.module.ts
├── brands/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── brands.controller.ts
│   ├── brands.service.ts
│   └── brands.module.ts
├── brand_analytics/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── brand_analytics.controller.ts
│   ├── brand_analytics.service.ts
│   └── brand_analytics.module.ts
├── categories/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── categories.controller.ts
│   ├── categories.service.ts
│   └── categories.module.ts
├── devices/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── devices.controller.ts
│   ├── devices.service.ts
│   └── devices.module.ts
├── email_verifications/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── email_verifications.controller.ts
│   ├── email_verifications.service.ts
│   └── email_verifications.module.ts
├── events/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── events.controller.ts
│   ├── events.service.ts
│   └── events.module.ts
├── locations/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── locations.controller.ts
│   ├── locations.service.ts
│   └── locations.module.ts
├── notifications/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── notifications.controller.ts
│   ├── notifications.service.ts
│   └── notifications.module.ts
├── orders/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   └── orders.module.ts
├── payouts/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── payouts.controller.ts
│   ├── payouts.service.ts
│   └── payouts.module.ts
├── payout_accounts/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── payout_accounts.controller.ts
│   ├── payout_accounts.service.ts
│   └── payout_accounts.module.ts
├── permissions/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── permissions.controller.ts
│   ├── permissions.service.ts
│   └── permissions.module.ts
├── promos/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── promos.controller.ts
│   ├── promos.service.ts
│   └── promos.module.ts
├── promo_analytics/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── promo_analytics.controller.ts
│   ├── promo_analytics.service.ts
│   └── promo_analytics.module.ts
├── promo_likes/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── promo_likes.controller.ts
│   ├── promo_likes.service.ts
│   └── promo_likes.module.ts
├── promo_vouchers/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── promo_vouchers.controller.ts
│   ├── promo_vouchers.service.ts
│   └── promo_vouchers.module.ts
├── reservations/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── reservations.controller.ts
│   ├── reservations.service.ts
│   └── reservations.module.ts
├── reviews/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── reviews.controller.ts
│   ├── reviews.service.ts
│   └── reviews.module.ts
├── roles/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── roles.controller.ts
│   ├── roles.service.ts
│   └── roles.module.ts
├── subscriptions/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── subscriptions.controller.ts
│   ├── subscriptions.service.ts
│   └── subscriptions.module.ts
├── subscription_plans/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── subscription_plans.controller.ts
│   ├── subscription_plans.service.ts
│   └── subscription_plans.module.ts
├── system_analytics/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── system_analytics.controller.ts
│   ├── system_analytics.service.ts
│   └── system_analytics.module.ts
├── system_settings/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── system_settings.controller.ts
│   ├── system_settings.service.ts
│   └── system_settings.module.ts
├── transactions/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── transactions.controller.ts
│   ├── transactions.service.ts
│   └── transactions.module.ts
├── uploads/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── uploads.controller.ts
│   ├── uploads.service.ts
│   └── uploads.module.ts
├── users/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── user_analytics/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── user_analytics.controller.ts
│   ├── user_analytics.service.ts
│   └── user_analytics.module.ts
├── user_roles/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── user_roles.controller.ts
│   ├── user_roles.service.ts
│   └── user_roles.module.ts
├── user_settings/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── user_settings.controller.ts
│   ├── user_settings.service.ts
│   └── user_settings.module.ts
├── wallets/
│   ├── dto/              # create & update DTOs
│   ├── entities/         # TypeORM entity
│   ├── wallets.controller.ts
│   ├── wallets.service.ts
│   └── wallets.module.ts
├── app.module.ts
└── main.ts
```

## Entities

- `administrators`
- `admin_roles`
- `adverts`
- `analytics_events`
- `auths`
- `brands`
- `brand_analytics`
- `categories`
- `devices`
- `email_verifications`
- `events`
- `locations`
- `notifications`
- `orders`
- `payouts`
- `payout_accounts`
- `permissions`
- `promos`
- `promo_analytics`
- `promo_likes`
- `promo_vouchers`
- `reservations`
- `reviews`
- `roles`
- `subscriptions`
- `subscription_plans`
- `system_analytics`
- `system_settings`
- `transactions`
- `uploads`
- `users`
- `user_analytics`
- `user_roles`
- `user_settings`
- `wallets`


## Getting Started

```bash
# 1. Copy env
cp .env.example .env

# 2. Install dependencies
npm install

# 3. Run migrations
npx prisma migrate dev --name init

# 4. Start dev server
npm run start:dev
```

## API Endpoints

### Administrator
| Method | Path | Description |
|--------|------|-------------|
| GET | /administrators | List all |
| GET | /administrators/:id | Get one |
| POST | /administrators | Create |
| PATCH | /administrators/:id | Update |
| DELETE | /administrators/:id | Delete |

### AdminRole
| Method | Path | Description |
|--------|------|-------------|
| GET | /admin_roles | List all |
| GET | /admin_roles/:id | Get one |
| POST | /admin_roles | Create |
| PATCH | /admin_roles/:id | Update |
| DELETE | /admin_roles/:id | Delete |

### Advert
| Method | Path | Description |
|--------|------|-------------|
| GET | /adverts | List all |
| GET | /adverts/:id | Get one |
| POST | /adverts | Create |
| PATCH | /adverts/:id | Update |
| DELETE | /adverts/:id | Delete |

### AnalyticsEvent
| Method | Path | Description |
|--------|------|-------------|
| GET | /analytics_events | List all |
| GET | /analytics_events/:id | Get one |
| POST | /analytics_events | Create |
| PATCH | /analytics_events/:id | Update |
| DELETE | /analytics_events/:id | Delete |

### Auth
| Method | Path | Description |
|--------|------|-------------|
| GET | /auths | List all |
| GET | /auths/:id | Get one |
| POST | /auths | Create |
| PATCH | /auths/:id | Update |
| DELETE | /auths/:id | Delete |

### Brand
| Method | Path | Description |
|--------|------|-------------|
| GET | /brands | List all |
| GET | /brands/:id | Get one |
| POST | /brands | Create |
| PATCH | /brands/:id | Update |
| DELETE | /brands/:id | Delete |

### BrandAnalytic
| Method | Path | Description |
|--------|------|-------------|
| GET | /brand_analytics | List all |
| GET | /brand_analytics/:id | Get one |
| POST | /brand_analytics | Create |
| PATCH | /brand_analytics/:id | Update |
| DELETE | /brand_analytics/:id | Delete |

### Category
| Method | Path | Description |
|--------|------|-------------|
| GET | /categories | List all |
| GET | /categories/:id | Get one |
| POST | /categories | Create |
| PATCH | /categories/:id | Update |
| DELETE | /categories/:id | Delete |

### Device
| Method | Path | Description |
|--------|------|-------------|
| GET | /devices | List all |
| GET | /devices/:id | Get one |
| POST | /devices | Create |
| PATCH | /devices/:id | Update |
| DELETE | /devices/:id | Delete |

### EmailVerification
| Method | Path | Description |
|--------|------|-------------|
| GET | /email_verifications | List all |
| GET | /email_verifications/:id | Get one |
| POST | /email_verifications | Create |
| PATCH | /email_verifications/:id | Update |
| DELETE | /email_verifications/:id | Delete |

### Event
| Method | Path | Description |
|--------|------|-------------|
| GET | /events | List all |
| GET | /events/:id | Get one |
| POST | /events | Create |
| PATCH | /events/:id | Update |
| DELETE | /events/:id | Delete |

### Location
| Method | Path | Description |
|--------|------|-------------|
| GET | /locations | List all |
| GET | /locations/:id | Get one |
| POST | /locations | Create |
| PATCH | /locations/:id | Update |
| DELETE | /locations/:id | Delete |

### Notification
| Method | Path | Description |
|--------|------|-------------|
| GET | /notifications | List all |
| GET | /notifications/:id | Get one |
| POST | /notifications | Create |
| PATCH | /notifications/:id | Update |
| DELETE | /notifications/:id | Delete |

### Order
| Method | Path | Description |
|--------|------|-------------|
| GET | /orders | List all |
| GET | /orders/:id | Get one |
| POST | /orders | Create |
| PATCH | /orders/:id | Update |
| DELETE | /orders/:id | Delete |

### Payout
| Method | Path | Description |
|--------|------|-------------|
| GET | /payouts | List all |
| GET | /payouts/:id | Get one |
| POST | /payouts | Create |
| PATCH | /payouts/:id | Update |
| DELETE | /payouts/:id | Delete |

### PayoutAccount
| Method | Path | Description |
|--------|------|-------------|
| GET | /payout_accounts | List all |
| GET | /payout_accounts/:id | Get one |
| POST | /payout_accounts | Create |
| PATCH | /payout_accounts/:id | Update |
| DELETE | /payout_accounts/:id | Delete |

### Permission
| Method | Path | Description |
|--------|------|-------------|
| GET | /permissions | List all |
| GET | /permissions/:id | Get one |
| POST | /permissions | Create |
| PATCH | /permissions/:id | Update |
| DELETE | /permissions/:id | Delete |

### Promo
| Method | Path | Description |
|--------|------|-------------|
| GET | /promos | List all |
| GET | /promos/:id | Get one |
| POST | /promos | Create |
| PATCH | /promos/:id | Update |
| DELETE | /promos/:id | Delete |

### PromoAnalytic
| Method | Path | Description |
|--------|------|-------------|
| GET | /promo_analytics | List all |
| GET | /promo_analytics/:id | Get one |
| POST | /promo_analytics | Create |
| PATCH | /promo_analytics/:id | Update |
| DELETE | /promo_analytics/:id | Delete |

### PromoLike
| Method | Path | Description |
|--------|------|-------------|
| GET | /promo_likes | List all |
| GET | /promo_likes/:id | Get one |
| POST | /promo_likes | Create |
| PATCH | /promo_likes/:id | Update |
| DELETE | /promo_likes/:id | Delete |

### PromoVoucher
| Method | Path | Description |
|--------|------|-------------|
| GET | /promo_vouchers | List all |
| GET | /promo_vouchers/:id | Get one |
| POST | /promo_vouchers | Create |
| PATCH | /promo_vouchers/:id | Update |
| DELETE | /promo_vouchers/:id | Delete |

### Reservation
| Method | Path | Description |
|--------|------|-------------|
| GET | /reservations | List all |
| GET | /reservations/:id | Get one |
| POST | /reservations | Create |
| PATCH | /reservations/:id | Update |
| DELETE | /reservations/:id | Delete |

### Review
| Method | Path | Description |
|--------|------|-------------|
| GET | /reviews | List all |
| GET | /reviews/:id | Get one |
| POST | /reviews | Create |
| PATCH | /reviews/:id | Update |
| DELETE | /reviews/:id | Delete |

### Role
| Method | Path | Description |
|--------|------|-------------|
| GET | /roles | List all |
| GET | /roles/:id | Get one |
| POST | /roles | Create |
| PATCH | /roles/:id | Update |
| DELETE | /roles/:id | Delete |

### Subscription
| Method | Path | Description |
|--------|------|-------------|
| GET | /subscriptions | List all |
| GET | /subscriptions/:id | Get one |
| POST | /subscriptions | Create |
| PATCH | /subscriptions/:id | Update |
| DELETE | /subscriptions/:id | Delete |

### SubscriptionPlan
| Method | Path | Description |
|--------|------|-------------|
| GET | /subscription_plans | List all |
| GET | /subscription_plans/:id | Get one |
| POST | /subscription_plans | Create |
| PATCH | /subscription_plans/:id | Update |
| DELETE | /subscription_plans/:id | Delete |

### SystemAnalytic
| Method | Path | Description |
|--------|------|-------------|
| GET | /system_analytics | List all |
| GET | /system_analytics/:id | Get one |
| POST | /system_analytics | Create |
| PATCH | /system_analytics/:id | Update |
| DELETE | /system_analytics/:id | Delete |

### SystemSetting
| Method | Path | Description |
|--------|------|-------------|
| GET | /system_settings | List all |
| GET | /system_settings/:id | Get one |
| POST | /system_settings | Create |
| PATCH | /system_settings/:id | Update |
| DELETE | /system_settings/:id | Delete |

### Transaction
| Method | Path | Description |
|--------|------|-------------|
| GET | /transactions | List all |
| GET | /transactions/:id | Get one |
| POST | /transactions | Create |
| PATCH | /transactions/:id | Update |
| DELETE | /transactions/:id | Delete |

### Upload
| Method | Path | Description |
|--------|------|-------------|
| GET | /uploads | List all |
| GET | /uploads/:id | Get one |
| POST | /uploads | Create |
| PATCH | /uploads/:id | Update |
| DELETE | /uploads/:id | Delete |

### User
| Method | Path | Description |
|--------|------|-------------|
| GET | /users | List all |
| GET | /users/:id | Get one |
| POST | /users | Create |
| PATCH | /users/:id | Update |
| DELETE | /users/:id | Delete |

### UserAnalytic
| Method | Path | Description |
|--------|------|-------------|
| GET | /user_analytics | List all |
| GET | /user_analytics/:id | Get one |
| POST | /user_analytics | Create |
| PATCH | /user_analytics/:id | Update |
| DELETE | /user_analytics/:id | Delete |

### UserRole
| Method | Path | Description |
|--------|------|-------------|
| GET | /user_roles | List all |
| GET | /user_roles/:id | Get one |
| POST | /user_roles | Create |
| PATCH | /user_roles/:id | Update |
| DELETE | /user_roles/:id | Delete |

### UserSetting
| Method | Path | Description |
|--------|------|-------------|
| GET | /user_settings | List all |
| GET | /user_settings/:id | Get one |
| POST | /user_settings | Create |
| PATCH | /user_settings/:id | Update |
| DELETE | /user_settings/:id | Delete |

### Wallet
| Method | Path | Description |
|--------|------|-------------|
| GET | /wallets | List all |
| GET | /wallets/:id | Get one |
| POST | /wallets | Create |
| PATCH | /wallets/:id | Update |
| DELETE | /wallets/:id | Delete |

## Docker

```bash
docker compose up -d
```
