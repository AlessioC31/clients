import {
  PinCryptoServiceAbstraction,
  PinCryptoService,
  LoginStrategyServiceAbstraction,
  LoginStrategyService,
} from "@bitwarden/auth/common";
import { AvatarUpdateService as AvatarUpdateServiceAbstraction } from "@bitwarden/common/abstractions/account/avatar-update.service";
import { ApiService as ApiServiceAbstraction } from "@bitwarden/common/abstractions/api.service";
import { AuditService as AuditServiceAbstraction } from "@bitwarden/common/abstractions/audit.service";
import { EventCollectionService as EventCollectionServiceAbstraction } from "@bitwarden/common/abstractions/event/event-collection.service";
import { EventUploadService as EventUploadServiceAbstraction } from "@bitwarden/common/abstractions/event/event-upload.service";
import { NotificationsService as NotificationsServiceAbstraction } from "@bitwarden/common/abstractions/notifications.service";
import { SearchService as SearchServiceAbstraction } from "@bitwarden/common/abstractions/search.service";
import { SettingsService as SettingsServiceAbstraction } from "@bitwarden/common/abstractions/settings.service";
import { VaultTimeoutSettingsService as VaultTimeoutSettingsServiceAbstraction } from "@bitwarden/common/abstractions/vault-timeout/vault-timeout-settings.service";
import { InternalOrganizationServiceAbstraction } from "@bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction";
import { PolicyApiServiceAbstraction } from "@bitwarden/common/admin-console/abstractions/policy/policy-api.service.abstraction";
import { InternalPolicyService as InternalPolicyServiceAbstraction } from "@bitwarden/common/admin-console/abstractions/policy/policy.service.abstraction";
import { ProviderService as ProviderServiceAbstraction } from "@bitwarden/common/admin-console/abstractions/provider.service";
import { PolicyApiService } from "@bitwarden/common/admin-console/services/policy/policy-api.service";
import { ProviderService } from "@bitwarden/common/admin-console/services/provider.service";
import { AccountService as AccountServiceAbstraction } from "@bitwarden/common/auth/abstractions/account.service";
import { AuthRequestCryptoServiceAbstraction } from "@bitwarden/common/auth/abstractions/auth-request-crypto.service.abstraction";
import { AuthService as AuthServiceAbstraction } from "@bitwarden/common/auth/abstractions/auth.service";
import { DeviceTrustCryptoServiceAbstraction } from "@bitwarden/common/auth/abstractions/device-trust-crypto.service.abstraction";
import { DevicesServiceAbstraction } from "@bitwarden/common/auth/abstractions/devices/devices.service.abstraction";
import { DevicesApiServiceAbstraction } from "@bitwarden/common/auth/abstractions/devices-api.service.abstraction";
import { KeyConnectorService as KeyConnectorServiceAbstraction } from "@bitwarden/common/auth/abstractions/key-connector.service";
import { TokenService as TokenServiceAbstraction } from "@bitwarden/common/auth/abstractions/token.service";
import { TwoFactorService as TwoFactorServiceAbstraction } from "@bitwarden/common/auth/abstractions/two-factor.service";
import { UserVerificationApiServiceAbstraction } from "@bitwarden/common/auth/abstractions/user-verification/user-verification-api.service.abstraction";
import { UserVerificationService as UserVerificationServiceAbstraction } from "@bitwarden/common/auth/abstractions/user-verification/user-verification.service.abstraction";
import { AuthenticationStatus } from "@bitwarden/common/auth/enums/authentication-status";
import { ForceSetPasswordReason } from "@bitwarden/common/auth/models/domain/force-set-password-reason";
import { AccountServiceImplementation } from "@bitwarden/common/auth/services/account.service";
import { AuthRequestCryptoServiceImplementation } from "@bitwarden/common/auth/services/auth-request-crypto.service.implementation";
import { AuthService } from "@bitwarden/common/auth/services/auth.service";
import { DeviceTrustCryptoService } from "@bitwarden/common/auth/services/device-trust-crypto.service.implementation";
import { DevicesServiceImplementation } from "@bitwarden/common/auth/services/devices/devices.service.implementation";
import { DevicesApiServiceImplementation } from "@bitwarden/common/auth/services/devices-api.service.implementation";
import { KeyConnectorService } from "@bitwarden/common/auth/services/key-connector.service";
import { TokenService } from "@bitwarden/common/auth/services/token.service";
import { TwoFactorService } from "@bitwarden/common/auth/services/two-factor.service";
import { UserVerificationApiService } from "@bitwarden/common/auth/services/user-verification/user-verification-api.service";
import { UserVerificationService } from "@bitwarden/common/auth/services/user-verification/user-verification.service";
import { AppIdService as AppIdServiceAbstraction } from "@bitwarden/common/platform/abstractions/app-id.service";
import { ConfigApiServiceAbstraction } from "@bitwarden/common/platform/abstractions/config/config-api.service.abstraction";
import { CryptoFunctionService as CryptoFunctionServiceAbstraction } from "@bitwarden/common/platform/abstractions/crypto-function.service";
import { CryptoService as CryptoServiceAbstraction } from "@bitwarden/common/platform/abstractions/crypto.service";
import { EncryptService } from "@bitwarden/common/platform/abstractions/encrypt.service";
import { FileUploadService as FileUploadServiceAbstraction } from "@bitwarden/common/platform/abstractions/file-upload/file-upload.service";
import { I18nService as I18nServiceAbstraction } from "@bitwarden/common/platform/abstractions/i18n.service";
import { LogService as LogServiceAbstraction } from "@bitwarden/common/platform/abstractions/log.service";
import { MessagingService as MessagingServiceAbstraction } from "@bitwarden/common/platform/abstractions/messaging.service";
import { PlatformUtilsService as PlatformUtilsServiceAbstraction } from "@bitwarden/common/platform/abstractions/platform-utils.service";
import {
  AbstractMemoryStorageService,
  AbstractStorageService,
  ObservableStorageService,
} from "@bitwarden/common/platform/abstractions/storage.service";
import { SystemService as SystemServiceAbstraction } from "@bitwarden/common/platform/abstractions/system.service";
import { StateFactory } from "@bitwarden/common/platform/factories/state-factory";
import { GlobalState } from "@bitwarden/common/platform/models/domain/global-state";
import { AppIdService } from "@bitwarden/common/platform/services/app-id.service";
import { ConfigApiService } from "@bitwarden/common/platform/services/config/config-api.service";
import { ConsoleLogService } from "@bitwarden/common/platform/services/console-log.service";
import { ContainerService } from "@bitwarden/common/platform/services/container.service";
import { EncryptServiceImplementation } from "@bitwarden/common/platform/services/cryptography/encrypt.service.implementation";
import { MultithreadEncryptServiceImplementation } from "@bitwarden/common/platform/services/cryptography/multithread-encrypt.service.implementation";
import { FileUploadService } from "@bitwarden/common/platform/services/file-upload/file-upload.service";
import { MemoryStorageService } from "@bitwarden/common/platform/services/memory-storage.service";
import { SystemService } from "@bitwarden/common/platform/services/system.service";
import { WebCryptoFunctionService } from "@bitwarden/common/platform/services/web-crypto-function.service";
import {
  ActiveUserStateProvider,
  DerivedStateProvider,
  GlobalStateProvider,
  SingleUserStateProvider,
  StateProvider,
} from "@bitwarden/common/platform/state";
/* eslint-disable import/no-restricted-paths -- We need the implementation to inject, but generally these should not be accessed */
import { DefaultActiveUserStateProvider } from "@bitwarden/common/platform/state/implementations/default-active-user-state.provider";
import { DefaultGlobalStateProvider } from "@bitwarden/common/platform/state/implementations/default-global-state.provider";
import { DefaultSingleUserStateProvider } from "@bitwarden/common/platform/state/implementations/default-single-user-state.provider";
import { DefaultStateProvider } from "@bitwarden/common/platform/state/implementations/default-state.provider";
/* eslint-enable import/no-restricted-paths */
import { AvatarUpdateService } from "@bitwarden/common/services/account/avatar-update.service";
import { ApiService } from "@bitwarden/common/services/api.service";
import { AuditService } from "@bitwarden/common/services/audit.service";
import { EventCollectionService } from "@bitwarden/common/services/event/event-collection.service";
import { EventUploadService } from "@bitwarden/common/services/event/event-upload.service";
import { NotificationsService } from "@bitwarden/common/services/notifications.service";
import { SearchService } from "@bitwarden/common/services/search.service";
import { VaultTimeoutSettingsService } from "@bitwarden/common/services/vault-timeout/vault-timeout-settings.service";
import {
  PasswordGenerationService,
  PasswordGenerationServiceAbstraction,
} from "@bitwarden/common/tools/generator/password";
import {
  UsernameGenerationService,
  UsernameGenerationServiceAbstraction,
} from "@bitwarden/common/tools/generator/username";
import {
  PasswordStrengthService,
  PasswordStrengthServiceAbstraction,
} from "@bitwarden/common/tools/password-strength";
import { SendApiService } from "@bitwarden/common/tools/send/services/send-api.service";
import { SendApiService as SendApiServiceAbstraction } from "@bitwarden/common/tools/send/services/send-api.service.abstraction";
import { InternalSendService as InternalSendServiceAbstraction } from "@bitwarden/common/tools/send/services/send.service.abstraction";
import { UserId } from "@bitwarden/common/types/guid";
import { CipherService as CipherServiceAbstraction } from "@bitwarden/common/vault/abstractions/cipher.service";
import { CollectionService as CollectionServiceAbstraction } from "@bitwarden/common/vault/abstractions/collection.service";
import { Fido2AuthenticatorService as Fido2AuthenticatorServiceAbstraction } from "@bitwarden/common/vault/abstractions/fido2/fido2-authenticator.service.abstraction";
import { Fido2ClientService as Fido2ClientServiceAbstraction } from "@bitwarden/common/vault/abstractions/fido2/fido2-client.service.abstraction";
import { Fido2UserInterfaceService as Fido2UserInterfaceServiceAbstraction } from "@bitwarden/common/vault/abstractions/fido2/fido2-user-interface.service.abstraction";
import { CipherFileUploadService as CipherFileUploadServiceAbstraction } from "@bitwarden/common/vault/abstractions/file-upload/cipher-file-upload.service";
import { FolderApiServiceAbstraction } from "@bitwarden/common/vault/abstractions/folder/folder-api.service.abstraction";
import { InternalFolderService as InternalFolderServiceAbstraction } from "@bitwarden/common/vault/abstractions/folder/folder.service.abstraction";
import { SyncNotifierService as SyncNotifierServiceAbstraction } from "@bitwarden/common/vault/abstractions/sync/sync-notifier.service.abstraction";
import { SyncService as SyncServiceAbstraction } from "@bitwarden/common/vault/abstractions/sync/sync.service.abstraction";
import { TotpService as TotpServiceAbstraction } from "@bitwarden/common/vault/abstractions/totp.service";
import { VaultSettingsService as VaultSettingsServiceAbstraction } from "@bitwarden/common/vault/abstractions/vault-settings/vault-settings.service";
import { CipherView } from "@bitwarden/common/vault/models/view/cipher.view";
import { CipherService } from "@bitwarden/common/vault/services/cipher.service";
import { CollectionService } from "@bitwarden/common/vault/services/collection.service";
import { Fido2AuthenticatorService } from "@bitwarden/common/vault/services/fido2/fido2-authenticator.service";
import { Fido2ClientService } from "@bitwarden/common/vault/services/fido2/fido2-client.service";
import { CipherFileUploadService } from "@bitwarden/common/vault/services/file-upload/cipher-file-upload.service";
import { FolderApiService } from "@bitwarden/common/vault/services/folder/folder-api.service";
import { FolderService } from "@bitwarden/common/vault/services/folder/folder.service";
import { SyncNotifierService } from "@bitwarden/common/vault/services/sync/sync-notifier.service";
import { SyncService } from "@bitwarden/common/vault/services/sync/sync.service";
import { TotpService } from "@bitwarden/common/vault/services/totp.service";
import { VaultSettingsService } from "@bitwarden/common/vault/services/vault-settings/vault-settings.service";
import {
  IndividualVaultExportService,
  IndividualVaultExportServiceAbstraction,
  OrganizationVaultExportService,
  OrganizationVaultExportServiceAbstraction,
  VaultExportService,
  VaultExportServiceAbstraction,
} from "@bitwarden/exporter/vault-export";
import {
  ImportApiService,
  ImportApiServiceAbstraction,
  ImportService,
  ImportServiceAbstraction,
} from "@bitwarden/importer/core";

import { BrowserOrganizationService } from "../admin-console/services/browser-organization.service";
import { BrowserPolicyService } from "../admin-console/services/browser-policy.service";
import ContextMenusBackground from "../autofill/background/context-menus.background";
import NotificationBackground from "../autofill/background/notification.background";
import OverlayBackground from "../autofill/background/overlay.background";
import TabsBackground from "../autofill/background/tabs.background";
import WebRequestBackground from "../autofill/background/web-request.background";
import { CipherContextMenuHandler } from "../autofill/browser/cipher-context-menu-handler";
import { ContextMenuClickedHandler } from "../autofill/browser/context-menu-clicked-handler";
import { MainContextMenuHandler } from "../autofill/browser/main-context-menu-handler";
import { AutofillService as AutofillServiceAbstraction } from "../autofill/services/abstractions/autofill.service";
import AutofillService from "../autofill/services/autofill.service";
import { SafariApp } from "../browser/safariApp";
import { Account } from "../models/account";
import { BrowserApi } from "../platform/browser/browser-api";
import { flagEnabled } from "../platform/flags";
import { UpdateBadge } from "../platform/listeners/update-badge";
import { BrowserStateService as StateServiceAbstraction } from "../platform/services/abstractions/browser-state.service";
import { BrowserConfigService } from "../platform/services/browser-config.service";
import { BrowserCryptoService } from "../platform/services/browser-crypto.service";
import { BrowserEnvironmentService } from "../platform/services/browser-environment.service";
import { BrowserI18nService } from "../platform/services/browser-i18n.service";
import BrowserLocalStorageService from "../platform/services/browser-local-storage.service";
import BrowserMessagingPrivateModeBackgroundService from "../platform/services/browser-messaging-private-mode-background.service";
import BrowserMessagingService from "../platform/services/browser-messaging.service";
import BrowserPlatformUtilsService from "../platform/services/browser-platform-utils.service";
import { BrowserStateService } from "../platform/services/browser-state.service";
import { KeyGenerationService } from "../platform/services/key-generation.service";
import { LocalBackedSessionStorageService } from "../platform/services/local-backed-session-storage.service";
import { BackgroundDerivedStateProvider } from "../platform/state/background-derived-state.provider";
import { BackgroundMemoryStorageService } from "../platform/storage/background-memory-storage.service";
import { BrowserSendService } from "../services/browser-send.service";
import { BrowserSettingsService } from "../services/browser-settings.service";
import VaultTimeoutService from "../services/vault-timeout/vault-timeout.service";
import FilelessImporterBackground from "../tools/background/fileless-importer.background";
import { BrowserFido2UserInterfaceService } from "../vault/fido2/browser-fido2-user-interface.service";
import { Fido2Service as Fido2ServiceAbstraction } from "../vault/services/abstractions/fido2.service";
import Fido2Service from "../vault/services/fido2.service";
import { VaultFilterService } from "../vault/services/vault-filter.service";

import CommandsBackground from "./commands.background";
import IdleBackground from "./idle.background";
import { NativeMessagingBackground } from "./nativeMessaging.background";
import RuntimeBackground from "./runtime.background";

export default class MainBackground {
  messagingService: MessagingServiceAbstraction;
  storageService: AbstractStorageService;
  secureStorageService: AbstractStorageService;
  memoryStorageService: AbstractMemoryStorageService;
  memoryStorageForStateProviders: AbstractMemoryStorageService & ObservableStorageService;
  i18nService: I18nServiceAbstraction;
  platformUtilsService: PlatformUtilsServiceAbstraction;
  logService: LogServiceAbstraction;
  cryptoService: CryptoServiceAbstraction;
  cryptoFunctionService: CryptoFunctionServiceAbstraction;
  tokenService: TokenServiceAbstraction;
  appIdService: AppIdServiceAbstraction;
  apiService: ApiServiceAbstraction;
  environmentService: BrowserEnvironmentService;
  settingsService: SettingsServiceAbstraction;
  cipherService: CipherServiceAbstraction;
  folderService: InternalFolderServiceAbstraction;
  collectionService: CollectionServiceAbstraction;
  vaultTimeoutService: VaultTimeoutService;
  vaultTimeoutSettingsService: VaultTimeoutSettingsServiceAbstraction;
  syncService: SyncServiceAbstraction;
  passwordGenerationService: PasswordGenerationServiceAbstraction;
  passwordStrengthService: PasswordStrengthServiceAbstraction;
  totpService: TotpServiceAbstraction;
  autofillService: AutofillServiceAbstraction;
  containerService: ContainerService;
  auditService: AuditServiceAbstraction;
  authService: AuthServiceAbstraction;
  loginStrategyService: LoginStrategyServiceAbstraction;
  importApiService: ImportApiServiceAbstraction;
  importService: ImportServiceAbstraction;
  exportService: VaultExportServiceAbstraction;
  searchService: SearchServiceAbstraction;
  notificationsService: NotificationsServiceAbstraction;
  stateService: StateServiceAbstraction;
  systemService: SystemServiceAbstraction;
  eventCollectionService: EventCollectionServiceAbstraction;
  eventUploadService: EventUploadServiceAbstraction;
  policyService: InternalPolicyServiceAbstraction;
  sendService: InternalSendServiceAbstraction;
  fileUploadService: FileUploadServiceAbstraction;
  cipherFileUploadService: CipherFileUploadServiceAbstraction;
  organizationService: InternalOrganizationServiceAbstraction;
  providerService: ProviderServiceAbstraction;
  keyConnectorService: KeyConnectorServiceAbstraction;
  userVerificationService: UserVerificationServiceAbstraction;
  twoFactorService: TwoFactorServiceAbstraction;
  vaultFilterService: VaultFilterService;
  usernameGenerationService: UsernameGenerationServiceAbstraction;
  encryptService: EncryptService;
  folderApiService: FolderApiServiceAbstraction;
  policyApiService: PolicyApiServiceAbstraction;
  sendApiService: SendApiServiceAbstraction;
  userVerificationApiService: UserVerificationApiServiceAbstraction;
  syncNotifierService: SyncNotifierServiceAbstraction;
  fido2UserInterfaceService: Fido2UserInterfaceServiceAbstraction;
  fido2AuthenticatorService: Fido2AuthenticatorServiceAbstraction;
  fido2ClientService: Fido2ClientServiceAbstraction;
  avatarUpdateService: AvatarUpdateServiceAbstraction;
  mainContextMenuHandler: MainContextMenuHandler;
  cipherContextMenuHandler: CipherContextMenuHandler;
  configService: BrowserConfigService;
  configApiService: ConfigApiServiceAbstraction;
  devicesApiService: DevicesApiServiceAbstraction;
  devicesService: DevicesServiceAbstraction;
  deviceTrustCryptoService: DeviceTrustCryptoServiceAbstraction;
  authRequestCryptoService: AuthRequestCryptoServiceAbstraction;
  accountService: AccountServiceAbstraction;
  globalStateProvider: GlobalStateProvider;
  pinCryptoService: PinCryptoServiceAbstraction;
  singleUserStateProvider: SingleUserStateProvider;
  activeUserStateProvider: ActiveUserStateProvider;
  derivedStateProvider: DerivedStateProvider;
  stateProvider: StateProvider;
  fido2Service: Fido2ServiceAbstraction;
  individualVaultExportService: IndividualVaultExportServiceAbstraction;
  organizationVaultExportService: OrganizationVaultExportServiceAbstraction;
  vaultSettingsService: VaultSettingsServiceAbstraction;

  // Passed to the popup for Safari to workaround issues with theming, downloading, etc.
  backgroundWindow = window;

  onUpdatedRan: boolean;
  onReplacedRan: boolean;
  loginToAutoFill: CipherView = null;

  private commandsBackground: CommandsBackground;
  private contextMenusBackground: ContextMenusBackground;
  private idleBackground: IdleBackground;
  private notificationBackground: NotificationBackground;
  private overlayBackground: OverlayBackground;
  private filelessImporterBackground: FilelessImporterBackground;
  private runtimeBackground: RuntimeBackground;
  private tabsBackground: TabsBackground;
  private webRequestBackground: WebRequestBackground;

  private syncTimeout: any;
  private isSafari: boolean;
  private nativeMessagingBackground: NativeMessagingBackground;
  popupOnlyContext: boolean;

  constructor(public isPrivateMode: boolean = false) {
    this.popupOnlyContext = isPrivateMode || BrowserApi.manifestVersion === 3;

    // Services
    const lockedCallback = async (userId?: string) => {
      if (this.notificationsService != null) {
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.notificationsService.updateConnection(false);
      }
      await this.refreshBadge();
      await this.refreshMenu(true);
      if (this.systemService != null) {
        await this.systemService.clearPendingClipboard();
        await this.systemService.startProcessReload(this.authService);
      }
    };

    const logoutCallback = async (expired: boolean, userId?: string) =>
      await this.logout(expired, userId);

    this.messagingService = this.popupOnlyContext
      ? new BrowserMessagingPrivateModeBackgroundService()
      : new BrowserMessagingService();
    this.logService = new ConsoleLogService(false);
    this.cryptoFunctionService = new WebCryptoFunctionService(window);
    this.storageService = new BrowserLocalStorageService();
    this.secureStorageService = new BrowserLocalStorageService();
    this.memoryStorageService =
      BrowserApi.manifestVersion === 3
        ? new LocalBackedSessionStorageService(
            new EncryptServiceImplementation(this.cryptoFunctionService, this.logService, false),
            new KeyGenerationService(this.cryptoFunctionService),
          )
        : new MemoryStorageService();
    this.memoryStorageForStateProviders =
      BrowserApi.manifestVersion === 3
        ? new LocalBackedSessionStorageService(
            new EncryptServiceImplementation(this.cryptoFunctionService, this.logService, false),
            new KeyGenerationService(this.cryptoFunctionService),
          )
        : new BackgroundMemoryStorageService();
    this.globalStateProvider = new DefaultGlobalStateProvider(
      this.memoryStorageForStateProviders,
      this.storageService as BrowserLocalStorageService,
    );
    this.encryptService = flagEnabled("multithreadDecryption")
      ? new MultithreadEncryptServiceImplementation(
          this.cryptoFunctionService,
          this.logService,
          true,
        )
      : new EncryptServiceImplementation(this.cryptoFunctionService, this.logService, true);

    this.singleUserStateProvider = new DefaultSingleUserStateProvider(
      this.memoryStorageForStateProviders,
      this.storageService as BrowserLocalStorageService,
    );
    this.accountService = new AccountServiceImplementation(
      this.messagingService,
      this.logService,
      this.globalStateProvider,
    );
    this.activeUserStateProvider = new DefaultActiveUserStateProvider(
      this.accountService,
      this.memoryStorageForStateProviders,
      this.storageService as BrowserLocalStorageService,
    );
    this.derivedStateProvider = new BackgroundDerivedStateProvider(
      this.memoryStorageForStateProviders,
    );
    this.stateProvider = new DefaultStateProvider(
      this.activeUserStateProvider,
      this.singleUserStateProvider,
      this.globalStateProvider,
      this.derivedStateProvider,
    );
    this.environmentService = new BrowserEnvironmentService(
      this.logService,
      this.stateProvider,
      this.accountService,
    );
    this.stateService = new BrowserStateService(
      this.storageService,
      this.secureStorageService,
      this.memoryStorageService,
      this.logService,
      new StateFactory(GlobalState, Account),
      this.accountService,
      this.environmentService,
    );
    this.platformUtilsService = new BrowserPlatformUtilsService(
      this.messagingService,
      (clipboardValue, clearMs) => {
        if (this.systemService != null) {
          // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.systemService.clearClipboard(clipboardValue, clearMs);
        }
      },
      async () => {
        if (this.nativeMessagingBackground != null) {
          const promise = this.nativeMessagingBackground.getResponse();

          try {
            await this.nativeMessagingBackground.send({ command: "biometricUnlock" });
          } catch (e) {
            return Promise.reject(e);
          }

          return promise.then((result) => result.response === "unlocked");
        }
      },
      window,
    );
    this.i18nService = new BrowserI18nService(BrowserApi.getUILanguage(), this.stateService);
    this.cryptoService = new BrowserCryptoService(
      this.cryptoFunctionService,
      this.encryptService,
      this.platformUtilsService,
      this.logService,
      this.stateService,
      this.accountService,
      this.stateProvider,
    );
    this.tokenService = new TokenService(this.stateService);
    this.appIdService = new AppIdService(this.storageService);
    this.apiService = new ApiService(
      this.tokenService,
      this.platformUtilsService,
      this.environmentService,
      this.appIdService,
      (expired: boolean) => this.logout(expired),
    );
    this.settingsService = new BrowserSettingsService(this.stateService);
    this.fileUploadService = new FileUploadService(this.logService);
    this.cipherFileUploadService = new CipherFileUploadService(
      this.apiService,
      this.fileUploadService,
    );
    this.searchService = new SearchService(this.logService, this.i18nService);

    this.collectionService = new CollectionService(
      this.cryptoService,
      this.i18nService,
      this.stateService,
    );
    this.syncNotifierService = new SyncNotifierService();
    this.organizationService = new BrowserOrganizationService(this.stateService);
    this.policyService = new BrowserPolicyService(this.stateService, this.organizationService);
    this.policyApiService = new PolicyApiService(
      this.policyService,
      this.apiService,
      this.stateService,
    );
    this.keyConnectorService = new KeyConnectorService(
      this.stateService,
      this.cryptoService,
      this.apiService,
      this.tokenService,
      this.logService,
      this.organizationService,
      this.cryptoFunctionService,
      logoutCallback,
    );

    this.passwordStrengthService = new PasswordStrengthService();

    this.passwordGenerationService = new PasswordGenerationService(
      this.cryptoService,
      this.policyService,
      this.stateService,
    );

    this.twoFactorService = new TwoFactorService(this.i18nService, this.platformUtilsService);

    // eslint-disable-next-line
    const that = this;
    const backgroundMessagingService = new (class extends MessagingServiceAbstraction {
      // AuthService should send the messages to the background not popup.
      send = (subscriber: string, arg: any = {}) => {
        const message = Object.assign({}, { command: subscriber }, arg);
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        that.runtimeBackground.processMessage(message, that as any);
      };
    })();

    this.devicesApiService = new DevicesApiServiceImplementation(this.apiService);
    this.deviceTrustCryptoService = new DeviceTrustCryptoService(
      this.cryptoFunctionService,
      this.cryptoService,
      this.encryptService,
      this.stateService,
      this.appIdService,
      this.devicesApiService,
      this.i18nService,
      this.platformUtilsService,
    );

    this.devicesService = new DevicesServiceImplementation(this.devicesApiService);

    this.authRequestCryptoService = new AuthRequestCryptoServiceImplementation(this.cryptoService);

    this.authService = new AuthService(
      backgroundMessagingService,
      this.cryptoService,
      this.apiService,
      this.stateService,
    );

    this.loginStrategyService = new LoginStrategyService(
      this.cryptoService,
      this.apiService,
      this.tokenService,
      this.appIdService,
      this.platformUtilsService,
      backgroundMessagingService,
      this.logService,
      this.keyConnectorService,
      this.environmentService,
      this.stateService,
      this.twoFactorService,
      this.i18nService,
      this.encryptService,
      this.passwordStrengthService,
      this.policyService,
      this.deviceTrustCryptoService,
      this.authRequestCryptoService,
    );

    this.userVerificationApiService = new UserVerificationApiService(this.apiService);

    this.configApiService = new ConfigApiService(this.apiService, this.authService);

    this.configService = new BrowserConfigService(
      this.stateService,
      this.configApiService,
      this.authService,
      this.environmentService,
      this.logService,
      true,
    );

    this.cipherService = new CipherService(
      this.cryptoService,
      this.settingsService,
      this.apiService,
      this.i18nService,
      this.searchService,
      this.stateService,
      this.encryptService,
      this.cipherFileUploadService,
      this.configService,
    );
    this.folderService = new FolderService(
      this.cryptoService,
      this.i18nService,
      this.cipherService,
      this.stateService,
      this.stateProvider,
    );
    this.folderApiService = new FolderApiService(this.folderService, this.apiService);

    this.vaultTimeoutSettingsService = new VaultTimeoutSettingsService(
      this.cryptoService,
      this.tokenService,
      this.policyService,
      this.stateService,
    );

    this.pinCryptoService = new PinCryptoService(
      this.stateService,
      this.cryptoService,
      this.vaultTimeoutSettingsService,
      this.logService,
    );

    this.userVerificationService = new UserVerificationService(
      this.stateService,
      this.cryptoService,
      this.i18nService,
      this.userVerificationApiService,
      this.pinCryptoService,
      this.logService,
      this.vaultTimeoutSettingsService,
      this.platformUtilsService,
    );

    this.vaultFilterService = new VaultFilterService(
      this.stateService,
      this.organizationService,
      this.folderService,
      this.cipherService,
      this.collectionService,
      this.policyService,
      this.accountService,
    );

    this.vaultSettingsService = new VaultSettingsService(this.stateProvider);

    this.vaultTimeoutService = new VaultTimeoutService(
      this.cipherService,
      this.folderService,
      this.collectionService,
      this.cryptoService,
      this.platformUtilsService,
      this.messagingService,
      this.searchService,
      this.stateService,
      this.authService,
      this.vaultTimeoutSettingsService,
      lockedCallback,
      logoutCallback,
    );
    this.containerService = new ContainerService(this.cryptoService, this.encryptService);
    this.sendService = new BrowserSendService(
      this.cryptoService,
      this.i18nService,
      this.cryptoFunctionService,
      this.stateService,
    );
    this.sendApiService = new SendApiService(
      this.apiService,
      this.fileUploadService,
      this.sendService,
    );
    this.providerService = new ProviderService(this.stateService);
    this.syncService = new SyncService(
      this.apiService,
      this.settingsService,
      this.folderService,
      this.cipherService,
      this.cryptoService,
      this.collectionService,
      this.messagingService,
      this.policyService,
      this.sendService,
      this.logService,
      this.keyConnectorService,
      this.stateService,
      this.providerService,
      this.folderApiService,
      this.organizationService,
      this.sendApiService,
      this.stateProvider,
      logoutCallback,
    );
    this.eventUploadService = new EventUploadService(
      this.apiService,
      this.stateService,
      this.logService,
    );
    this.eventCollectionService = new EventCollectionService(
      this.cipherService,
      this.stateService,
      this.organizationService,
      this.eventUploadService,
    );
    this.totpService = new TotpService(this.cryptoFunctionService, this.logService);

    this.autofillService = new AutofillService(
      this.cipherService,
      this.stateService,
      this.totpService,
      this.eventCollectionService,
      this.logService,
      this.settingsService,
      this.userVerificationService,
    );
    this.auditService = new AuditService(this.cryptoFunctionService, this.apiService);

    this.importApiService = new ImportApiService(this.apiService);

    this.importService = new ImportService(
      this.cipherService,
      this.folderService,
      this.importApiService,
      this.i18nService,
      this.collectionService,
      this.cryptoService,
    );

    this.individualVaultExportService = new IndividualVaultExportService(
      this.folderService,
      this.cipherService,
      this.cryptoService,
      this.cryptoFunctionService,
      this.stateService,
    );

    this.organizationVaultExportService = new OrganizationVaultExportService(
      this.cipherService,
      this.apiService,
      this.cryptoService,
      this.cryptoFunctionService,
      this.stateService,
      this.collectionService,
    );

    this.exportService = new VaultExportService(
      this.individualVaultExportService,
      this.organizationVaultExportService,
    );

    this.notificationsService = new NotificationsService(
      this.logService,
      this.syncService,
      this.appIdService,
      this.apiService,
      this.environmentService,
      logoutCallback,
      this.stateService,
      this.authService,
      this.messagingService,
    );

    this.fido2Service = new Fido2Service();
    this.fido2UserInterfaceService = new BrowserFido2UserInterfaceService(this.authService);
    this.fido2AuthenticatorService = new Fido2AuthenticatorService(
      this.cipherService,
      this.fido2UserInterfaceService,
      this.syncService,
      this.logService,
    );
    this.fido2ClientService = new Fido2ClientService(
      this.fido2AuthenticatorService,
      this.configService,
      this.authService,
      this.stateService,
      this.vaultSettingsService,
      this.logService,
    );

    const systemUtilsServiceReloadCallback = () => {
      const forceWindowReload =
        this.platformUtilsService.isSafari() ||
        this.platformUtilsService.isFirefox() ||
        this.platformUtilsService.isOpera();
      BrowserApi.reloadExtension(forceWindowReload ? window : null);
      return Promise.resolve();
    };

    this.systemService = new SystemService(
      this.messagingService,
      this.platformUtilsService,
      systemUtilsServiceReloadCallback,
      this.stateService,
      this.vaultTimeoutSettingsService,
    );

    // Other fields
    this.isSafari = this.platformUtilsService.isSafari();

    // Background
    this.runtimeBackground = new RuntimeBackground(
      this,
      this.autofillService,
      this.platformUtilsService as BrowserPlatformUtilsService,
      this.i18nService,
      this.notificationsService,
      this.stateService,
      this.systemService,
      this.environmentService,
      this.messagingService,
      this.logService,
      this.configService,
      this.fido2Service,
      this.settingsService,
    );
    this.nativeMessagingBackground = new NativeMessagingBackground(
      this.cryptoService,
      this.cryptoFunctionService,
      this.runtimeBackground,
      this.i18nService,
      this.messagingService,
      this.appIdService,
      this.platformUtilsService,
      this.stateService,
      this.logService,
      this.authService,
    );
    this.commandsBackground = new CommandsBackground(
      this,
      this.passwordGenerationService,
      this.platformUtilsService,
      this.vaultTimeoutService,
      this.authService,
    );
    this.notificationBackground = new NotificationBackground(
      this.autofillService,
      this.cipherService,
      this.authService,
      this.policyService,
      this.folderService,
      this.stateService,
      this.environmentService,
    );
    this.overlayBackground = new OverlayBackground(
      this.cipherService,
      this.autofillService,
      this.authService,
      this.environmentService,
      this.settingsService,
      this.stateService,
      this.i18nService,
      this.platformUtilsService,
    );
    this.filelessImporterBackground = new FilelessImporterBackground(
      this.configService,
      this.authService,
      this.policyService,
      this.notificationBackground,
      this.importService,
      this.syncService,
    );
    this.tabsBackground = new TabsBackground(
      this,
      this.notificationBackground,
      this.overlayBackground,
    );
    if (!this.popupOnlyContext) {
      const contextMenuClickedHandler = new ContextMenuClickedHandler(
        (options) => this.platformUtilsService.copyToClipboard(options.text, { window: self }),
        async (_tab) => {
          const options = (await this.passwordGenerationService.getOptions())?.[0] ?? {};
          const password = await this.passwordGenerationService.generatePassword(options);
          this.platformUtilsService.copyToClipboard(password, { window: window });
          // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this.passwordGenerationService.addHistory(password);
        },
        async (tab, cipher) => {
          this.loginToAutoFill = cipher;
          if (tab == null) {
            return;
          }

          // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          BrowserApi.tabSendMessage(tab, {
            command: "collectPageDetails",
            tab: tab,
            sender: "contextMenu",
          });
        },
        this.authService,
        this.cipherService,
        this.stateService,
        this.totpService,
        this.eventCollectionService,
        this.userVerificationService,
      );

      this.contextMenusBackground = new ContextMenusBackground(contextMenuClickedHandler);
    }

    this.idleBackground = new IdleBackground(
      this.vaultTimeoutService,
      this.stateService,
      this.notificationsService,
      this.accountService,
    );
    this.webRequestBackground = new WebRequestBackground(
      this.platformUtilsService,
      this.cipherService,
      this.authService,
    );

    this.usernameGenerationService = new UsernameGenerationService(
      this.cryptoService,
      this.stateService,
      this.apiService,
    );

    this.avatarUpdateService = new AvatarUpdateService(this.apiService, this.stateService);

    if (!this.popupOnlyContext) {
      this.mainContextMenuHandler = new MainContextMenuHandler(
        this.stateService,
        this.i18nService,
        this.logService,
      );

      this.cipherContextMenuHandler = new CipherContextMenuHandler(
        this.mainContextMenuHandler,
        this.authService,
        this.cipherService,
      );
    }
  }

  async bootstrap() {
    this.containerService.attachToGlobal(window);

    await this.stateService.init();

    await this.vaultTimeoutService.init(true);
    await (this.i18nService as BrowserI18nService).init();
    await (this.eventUploadService as EventUploadService).init(true);
    await this.runtimeBackground.init();
    await this.notificationBackground.init();
    this.filelessImporterBackground.init();
    await this.commandsBackground.init();

    this.configService.init();
    this.twoFactorService.init();

    await this.overlayBackground.init();

    await this.tabsBackground.init();
    if (!this.popupOnlyContext) {
      this.contextMenusBackground?.init();
    }
    await this.idleBackground.init();
    await this.webRequestBackground.init();

    await this.fido2Service.init();

    if (this.platformUtilsService.isFirefox() && !this.isPrivateMode) {
      // Set Private Mode windows to the default icon - they do not share state with the background page
      const privateWindows = await BrowserApi.getPrivateModeWindows();
      privateWindows.forEach(async (win) => {
        await new UpdateBadge(self).setBadgeIcon("", win.id);
      });

      // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      BrowserApi.onWindowCreated(async (win) => {
        if (win.incognito) {
          await new UpdateBadge(self).setBadgeIcon("", win.id);
        }
      });
    }

    return new Promise<void>((resolve) => {
      setTimeout(async () => {
        await this.environmentService.setUrlsFromStorage();
        // Workaround to ignore stateService.activeAccount until URLs are set
        // TODO: Remove this when implementing ticket PM-2637
        this.environmentService.initialized = true;
        if (!this.isPrivateMode) {
          await this.refreshBadge();
        }
        // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.fullSync(true);
        setTimeout(() => this.notificationsService.init(), 2500);
        resolve();
      }, 500);
    });
  }

  async refreshBadge() {
    await new UpdateBadge(self).run({ existingServices: this as any });
  }

  async refreshMenu(forLocked = false) {
    if (!chrome.windows || !chrome.contextMenus) {
      return;
    }

    await MainContextMenuHandler.removeAll();

    if (forLocked) {
      await this.mainContextMenuHandler?.noAccess();
      this.onUpdatedRan = this.onReplacedRan = false;
      return;
    }

    await this.mainContextMenuHandler?.init();

    const tab = await BrowserApi.getTabFromCurrentWindow();
    if (tab) {
      await this.cipherContextMenuHandler?.update(tab.url);
      this.onUpdatedRan = this.onReplacedRan = false;
    }
  }

  /**
   * Switch accounts to indicated userId -- null is no active user
   */
  async switchAccount(userId: UserId) {
    try {
      await this.stateService.setActiveUser(userId);

      if (userId == null) {
        await this.stateService.setRememberedEmail(null);
        await this.refreshBadge();
        await this.refreshMenu();
        await this.overlayBackground.updateOverlayCiphers();
        return;
      }

      const status = await this.authService.getAuthStatus(userId);
      const forcePasswordReset =
        (await this.stateService.getForceSetPasswordReason({ userId: userId })) !=
        ForceSetPasswordReason.None;

      await this.systemService.clearPendingClipboard();
      await this.notificationsService.updateConnection(false);

      if (status === AuthenticationStatus.Locked) {
        this.messagingService.send("locked", { userId: userId });
      } else if (forcePasswordReset) {
        this.messagingService.send("update-temp-password", { userId: userId });
      } else {
        this.messagingService.send("unlocked", { userId: userId });
        await this.refreshBadge();
        await this.refreshMenu();
        await this.overlayBackground.updateOverlayCiphers();
        await this.syncService.fullSync(false);
      }
    } finally {
      this.messagingService.send("switchAccountFinish", { userId: userId });
    }
  }

  async logout(expired: boolean, userId?: string) {
    await this.eventUploadService.uploadEvents(userId);

    await Promise.all([
      this.syncService.setLastSync(new Date(0), userId as UserId),
      this.cryptoService.clearKeys(userId),
      this.settingsService.clear(userId),
      this.cipherService.clear(userId),
      this.folderService.clear(userId),
      this.collectionService.clear(userId),
      this.policyService.clear(userId),
      this.passwordGenerationService.clear(userId),
      this.vaultTimeoutSettingsService.clear(userId),
      this.keyConnectorService.clear(),
      this.vaultFilterService.clear(),
    ]);

    //Needs to be checked before state is cleaned
    const needStorageReseed = await this.needsStorageReseed();

    const currentUserId = await this.stateService.getUserId();
    const newActiveUser = await this.stateService.clean({ userId: userId });

    if (userId == null || userId === currentUserId) {
      this.searchService.clearIndex();
    }

    if (newActiveUser != null) {
      // we have a new active user, do not continue tearing down application
      await this.switchAccount(newActiveUser as UserId);
      this.messagingService.send("switchAccountFinish");
    } else {
      this.messagingService.send("doneLoggingOut", { expired: expired, userId: userId });
    }

    if (needStorageReseed) {
      await this.reseedStorage();
    }

    if (BrowserApi.manifestVersion === 3) {
      // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      BrowserApi.sendMessage("updateBadge");
    }
    await this.refreshBadge();
    await this.mainContextMenuHandler.noAccess();
    // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.notificationsService.updateConnection(false);
    await this.systemService.clearPendingClipboard();
    await this.systemService.startProcessReload(this.authService);
  }

  private async needsStorageReseed(): Promise<boolean> {
    const currentVaultTimeout = await this.stateService.getVaultTimeout();
    return currentVaultTimeout == null ? false : true;
  }

  async collectPageDetailsForContentScript(tab: any, sender: string, frameId: number = null) {
    if (tab == null || !tab.id) {
      return;
    }

    const options: any = {};
    if (frameId != null) {
      options.frameId = frameId;
    }

    // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    BrowserApi.tabSendMessage(
      tab,
      {
        command: "collectPageDetails",
        tab: tab,
        sender: sender,
      },
      options,
    );
  }

  async openPopup() {
    // Chrome APIs cannot open popup

    // TODO: Do we need to open this popup?
    if (!this.isSafari) {
      return;
    }
    await SafariApp.sendMessageToApp("showPopover", null, true);
  }

  async reseedStorage() {
    if (
      !this.platformUtilsService.isChrome() &&
      !this.platformUtilsService.isVivaldi() &&
      !this.platformUtilsService.isOpera()
    ) {
      return;
    }

    const getStorage = (): Promise<any> =>
      new Promise((resolve) => {
        chrome.storage.local.get(null, (o: any) => resolve(o));
      });

    const clearStorage = (): Promise<void> =>
      new Promise((resolve) => {
        chrome.storage.local.clear(() => resolve());
      });

    const storage = await getStorage();
    await clearStorage();

    for (const key in storage) {
      // eslint-disable-next-line
      if (!storage.hasOwnProperty(key)) {
        continue;
      }
      await this.storageService.save(key, storage[key]);
    }
  }

  private async fullSync(override = false) {
    const syncInternal = 6 * 60 * 60 * 1000; // 6 hours
    const lastSync = await this.syncService.getLastSync();

    let lastSyncAgo = syncInternal + 1;
    if (lastSync != null) {
      lastSyncAgo = new Date().getTime() - lastSync.getTime();
    }

    if (override || lastSyncAgo >= syncInternal) {
      await this.syncService.fullSync(override);
      this.scheduleNextSync();
    } else {
      this.scheduleNextSync();
    }
  }

  private scheduleNextSync() {
    if (this.syncTimeout) {
      clearTimeout(this.syncTimeout);
    }

    this.syncTimeout = setTimeout(async () => await this.fullSync(), 5 * 60 * 1000); // check every 5 minutes
  }
}
