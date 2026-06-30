import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { PrismaModule } from "./prisma/prisma.module";
import { AllExceptionsFilter } from "./common/filters/http-exception.filter";

import { AdministratorModule } from "./administrators/administrators.module";
import { AdminRoleModule } from "./admin_roles/admin_roles.module";
import { AdvertModule } from "./adverts/adverts.module";
import { AnalyticsEventModule } from "./analytics_events/analytics_events.module";
import { BrandModule } from "./brands/brands.module";
import { BrandAnalyticModule } from "./brand_analytics/brand_analytics.module";
import { CategoryModule } from "./categories/categories.module";
import { DeviceModule } from "./devices/devices.module";
import { EmailVerificationModule } from "./email_verifications/email_verifications.module";
import { EventModule } from "./events/events.module";
import { LocationModule } from "./locations/locations.module";
import { NotificationModule } from "./notifications/notifications.module";
import { OrderModule } from "./orders/orders.module";
import { PayoutModule } from "./payouts/payouts.module";
import { PayoutAccountModule } from "./payout_accounts/payout_accounts.module";
import { PermissionModule } from "./permissions/permissions.module";
import { PromoModule } from "./promos/promos.module";
import { PromoAnalyticModule } from "./promo_analytics/promo_analytics.module";
import { PromoLikeModule } from "./promo_likes/promo_likes.module";
import { PromoVoucherModule } from "./promo_vouchers/promo_vouchers.module";
import { ReservationModule } from "./reservations/reservations.module";
import { ReviewModule } from "./reviews/reviews.module";
import { RoleModule } from "./roles/roles.module";
import { SubscriptionModule } from "./subscriptions/subscriptions.module";
import { SubscriptionPlanModule } from "./subscription_plans/subscription_plans.module";
import { SystemAnalyticModule } from "./system_analytics/system_analytics.module";
import { SystemSettingModule } from "./system_settings/system_settings.module";
import { TransactionModule } from "./transactions/transactions.module";
import { UploadModule } from "./uploads/uploads.module";
import { UserModule } from "./users/users.module";
import { UserAnalyticModule } from "./user_analytics/user_analytics.module";
import { UserRoleModule } from "./user_roles/user_roles.module";
import { UserSettingModule } from "./user_settings/user_settings.module";
import { WalletModule } from "./wallets/wallets.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AdministratorModule,
    AdminRoleModule,
    AdvertModule,
    AnalyticsEventModule,
    BrandModule,
    BrandAnalyticModule,
    CategoryModule,
    DeviceModule,
    EmailVerificationModule,
    EventModule,
    LocationModule,
    NotificationModule,
    OrderModule,
    PayoutModule,
    PayoutAccountModule,
    PermissionModule,
    PromoModule,
    PromoAnalyticModule,
    PromoLikeModule,
    PromoVoucherModule,
    ReservationModule,
    ReviewModule,
    RoleModule,
    SubscriptionModule,
    SubscriptionPlanModule,
    SystemAnalyticModule,
    SystemSettingModule,
    TransactionModule,
    UploadModule,
    UserModule,
    UserAnalyticModule,
    UserRoleModule,
    UserSettingModule,
    WalletModule,
  ],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}