
declare function CGSizeFromGADAdSize(size: GADAdSize): CGSize;

declare const enum GADAdChoicesPosition {

	TopRightCorner = 0,

	TopLeftCorner = 1,

	BottomRightCorner = 2,

	BottomLeftCorner = 3
}

declare class GADAdChoicesView extends UIView {

	static alloc(): GADAdChoicesView; // inherited from NSObject

	static appearance(): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADAdChoicesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADAdChoicesView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADAdChoicesView; // inherited from UIAppearance

	static new(): GADAdChoicesView; // inherited from NSObject
}

declare const enum GADAdFormat {

	Banner = 0,

	Interstitial = 1,

	Rewarded = 2,

	Native = 3,

	RewardedInterstitial = 4,

	Unknown = 5
}

declare class GADAdLoader extends NSObject {

	static alloc(): GADAdLoader; // inherited from NSObject

	static new(): GADAdLoader; // inherited from NSObject

	readonly adUnitID: string;

	delegate: GADAdLoaderDelegate;

	readonly loading: boolean;

	constructor(o: { adUnitID: string; rootViewController: UIViewController; adTypes: NSArray<string> | string[]; options: NSArray<GADAdLoaderOptions> | GADAdLoaderOptions[]; });

	initWithAdUnitIDRootViewControllerAdTypesOptions(adUnitID: string, rootViewController: UIViewController, adTypes: NSArray<string> | string[], options: NSArray<GADAdLoaderOptions> | GADAdLoaderOptions[]): this;

	loadRequest(request: GADRequest): void;
}

interface GADAdLoaderDelegate extends NSObjectProtocol {

	adLoaderDidFailToReceiveAdWithError(adLoader: GADAdLoader, error: NSError): void;

	adLoaderDidFinishLoading?(adLoader: GADAdLoader): void;
}
declare var GADAdLoaderDelegate: {

	prototype: GADAdLoaderDelegate;
};

declare class GADAdLoaderOptions extends NSObject {

	static alloc(): GADAdLoaderOptions; // inherited from NSObject

	static new(): GADAdLoaderOptions; // inherited from NSObject
}

interface GADAdMetadataDelegate extends NSObjectProtocol {

	adMetadataDidChange(ad: GADAdMetadataProvider): void;
}
declare var GADAdMetadataDelegate: {

	prototype: GADAdMetadataDelegate;
};

interface GADAdMetadataProvider extends NSObjectProtocol {

	adMetadata: NSDictionary<string, any>;

	adMetadataDelegate: GADAdMetadataDelegate;
}
declare var GADAdMetadataProvider: {

	prototype: GADAdMetadataProvider;
};

interface GADAdNetworkExtras extends NSObjectProtocol {
}
declare var GADAdNetworkExtras: {

	prototype: GADAdNetworkExtras;
};

declare class GADAdNetworkResponseInfo extends NSObject {

	static alloc(): GADAdNetworkResponseInfo; // inherited from NSObject

	static new(): GADAdNetworkResponseInfo; // inherited from NSObject

	readonly adNetworkClassName: string;

	readonly credentials: NSDictionary<string, any>;

	readonly dictionaryRepresentation: NSDictionary<string, any>;

	readonly error: NSError;

	readonly latency: number;
}

declare class GADAdReward extends NSObject {

	static alloc(): GADAdReward; // inherited from NSObject

	static new(): GADAdReward; // inherited from NSObject

	readonly amount: NSDecimalNumber;

	readonly type: string;

	constructor(o: { rewardType: string; rewardAmount: NSDecimalNumber; });

	initWithRewardTypeRewardAmount(rewardType: string, rewardAmount: NSDecimalNumber): this;
}

interface GADAdSize {
	size: CGSize;
	flags: number;
}
declare var GADAdSize: interop.StructType<GADAdSize>;

interface GADAdSizeDelegate extends NSObjectProtocol {

	adViewWillChangeAdSizeTo(bannerView: GADBannerView, size: GADAdSize): void;
}
declare var GADAdSizeDelegate: {

	prototype: GADAdSizeDelegate;
};

declare function GADAdSizeEqualToSize(size1: GADAdSize, size2: GADAdSize): boolean;

declare function GADAdSizeFromCGSize(size: CGSize): GADAdSize;

declare function GADAdSizeFromNSValue(value: NSValue): GADAdSize;

declare function GADAdSizeFullWidthLandscapeWithHeight(height: number): GADAdSize;

declare function GADAdSizeFullWidthPortraitWithHeight(height: number): GADAdSize;

declare function GADAdSizeIsFluid(size: GADAdSize): boolean;

declare class GADAdValue extends NSObject implements NSCopying {

	static alloc(): GADAdValue; // inherited from NSObject

	static new(): GADAdValue; // inherited from NSObject

	readonly currencyCode: string;

	readonly precision: GADAdValuePrecision;

	readonly value: NSDecimalNumber;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum GADAdValuePrecision {

	Unknown = 0,

	Estimated = 1,

	PublisherProvided = 2,

	Precise = 3
}

declare const enum GADAdapterInitializationState {

	NotReady = 0,

	Ready = 1
}

declare class GADAdapterStatus extends NSObject implements NSCopying {

	static alloc(): GADAdapterStatus; // inherited from NSObject

	static new(): GADAdapterStatus; // inherited from NSObject

	readonly latency: number;

	readonly state: GADAdapterInitializationState;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface GADAppEventDelegate extends NSObjectProtocol {

	adViewDidReceiveAppEventWithInfo?(banner: GADBannerView, name: string, info: string): void;

	interstitialAdDidReceiveAppEventWithInfo?(interstitialAd: GADInterstitialAd, name: string, info: string): void;
}
declare var GADAppEventDelegate: {

	prototype: GADAppEventDelegate;
};

declare class GADAppOpenAd extends NSObject implements GADFullScreenPresentingAd {

	static alloc(): GADAppOpenAd; // inherited from NSObject

	static loadWithAdUnitIDRequestOrientationCompletionHandler(adUnitID: string, request: GADRequest, orientation: UIInterfaceOrientation, completionHandler: (p1: GADAppOpenAd, p2: NSError) => void): void;

	static new(): GADAppOpenAd; // inherited from NSObject

	paidEventHandler: (p1: GADAdValue) => void;

	readonly responseInfo: GADResponseInfo;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fullScreenContentDelegate: GADFullScreenContentDelegate; // inherited from GADFullScreenPresentingAd

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canPresentFromRootViewControllerError(rootViewController: UIViewController): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentFromRootViewController(rootViewController: UIViewController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GADAudioVideoManager extends NSObject {

	static alloc(): GADAudioVideoManager; // inherited from NSObject

	static new(): GADAudioVideoManager; // inherited from NSObject

	audioSessionIsApplicationManaged: boolean;

	delegate: GADAudioVideoManagerDelegate;
}

interface GADAudioVideoManagerDelegate extends NSObjectProtocol {

	audioVideoManagerDidPauseAllVideo?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerDidStopPlayingAudio?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerWillPlayAudio?(audioVideoManager: GADAudioVideoManager): void;

	audioVideoManagerWillPlayVideo?(audioVideoManager: GADAudioVideoManager): void;
}
declare var GADAudioVideoManagerDelegate: {

	prototype: GADAudioVideoManagerDelegate;
};

declare class GADBannerView extends UIView {

	static alloc(): GADBannerView; // inherited from NSObject

	static appearance(): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADBannerView; // inherited from UIAppearance

	static new(): GADBannerView; // inherited from NSObject

	adSize: GADAdSize;

	adSizeDelegate: GADAdSizeDelegate;

	adUnitID: string;

	autoloadEnabled: boolean;

	delegate: GADBannerViewDelegate;

	paidEventHandler: (p1: GADAdValue) => void;

	readonly responseInfo: GADResponseInfo;

	rootViewController: UIViewController;

	constructor(o: { adSize: GADAdSize; });

	constructor(o: { adSize: GADAdSize; origin: CGPoint; });

	initWithAdSize(adSize: GADAdSize): this;

	initWithAdSizeOrigin(adSize: GADAdSize, origin: CGPoint): this;

	loadRequest(request: GADRequest): void;
}

interface GADBannerViewDelegate extends NSObjectProtocol {

	bannerViewDidDismissScreen?(bannerView: GADBannerView): void;

	bannerViewDidFailToReceiveAdWithError?(bannerView: GADBannerView, error: NSError): void;

	bannerViewDidReceiveAd?(bannerView: GADBannerView): void;

	bannerViewDidRecordClick?(bannerView: GADBannerView): void;

	bannerViewDidRecordImpression?(bannerView: GADBannerView): void;

	bannerViewWillDismissScreen?(bannerView: GADBannerView): void;

	bannerViewWillPresentScreen?(bannerView: GADBannerView): void;
}
declare var GADBannerViewDelegate: {

	prototype: GADBannerViewDelegate;
};

declare function GADClosestValidSizeForAdSizes(original: GADAdSize, possibleAdSizes: NSArray<NSValue> | NSValue[]): GADAdSize;

declare function GADCurrentOrientationAnchoredAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

declare function GADCurrentOrientationInlineAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

declare var GADCustomEventAdNetworkClassName: string;

interface GADCustomEventBanner extends NSObjectProtocol {

	delegate: GADCustomEventBannerDelegate;

	init?(): GADCustomEventBanner;

	requestBannerAdParameterLabelRequest(adSize: GADAdSize, serverParameter: string, serverLabel: string, request: GADCustomEventRequest): void;
}
declare var GADCustomEventBanner: {

	prototype: GADCustomEventBanner;
};

interface GADCustomEventBannerDelegate extends NSObjectProtocol {

	viewControllerForPresentingModalView: UIViewController;

	customEventBannerClickDidOccurInAd(customEvent: GADCustomEventBanner, view: UIView): void;

	customEventBannerDidDismissModal(customEvent: GADCustomEventBanner): void;

	customEventBannerDidFailAd(customEvent: GADCustomEventBanner, error: NSError): void;

	customEventBannerDidReceiveAd(customEvent: GADCustomEventBanner, view: UIView): void;

	customEventBannerWasClicked(customEvent: GADCustomEventBanner): void;

	customEventBannerWillDismissModal(customEvent: GADCustomEventBanner): void;

	customEventBannerWillLeaveApplication(customEvent: GADCustomEventBanner): void;

	customEventBannerWillPresentModal(customEvent: GADCustomEventBanner): void;
}
declare var GADCustomEventBannerDelegate: {

	prototype: GADCustomEventBannerDelegate;
};

declare class GADCustomEventExtras extends NSObject implements GADAdNetworkExtras {

	static alloc(): GADCustomEventExtras; // inherited from NSObject

	static new(): GADCustomEventExtras; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	allExtras(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	extrasForLabel(label: string): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllExtras(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setExtrasForLabel(extras: NSDictionary<any, any>, label: string): void;
}

interface GADCustomEventInterstitial extends NSObjectProtocol {

	delegate: GADCustomEventInterstitialDelegate;

	init?(): GADCustomEventInterstitial;

	presentFromRootViewController(rootViewController: UIViewController): void;

	requestInterstitialAdWithParameterLabelRequest(serverParameter: string, serverLabel: string, request: GADCustomEventRequest): void;
}
declare var GADCustomEventInterstitial: {

	prototype: GADCustomEventInterstitial;
};

interface GADCustomEventInterstitialDelegate extends NSObjectProtocol {

	customEventInterstitialDidDismiss(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialDidFailAd(customEvent: GADCustomEventInterstitial, error: NSError): void;

	customEventInterstitialDidReceiveAd(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialDidReceiveAd(customEvent: GADCustomEventInterstitial, ad: NSObject): void;

	customEventInterstitialWasClicked(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillDismiss(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillLeaveApplication(customEvent: GADCustomEventInterstitial): void;

	customEventInterstitialWillPresent(customEvent: GADCustomEventInterstitial): void;
}
declare var GADCustomEventInterstitialDelegate: {

	prototype: GADCustomEventInterstitialDelegate;
};

interface GADCustomEventNativeAd extends NSObjectProtocol {

	delegate: GADCustomEventNativeAdDelegate;

	handlesUserClicks(): boolean;

	handlesUserImpressions(): boolean;

	init?(): GADCustomEventNativeAd;

	requestNativeAdWithParameterRequestAdTypesOptionsRootViewController(serverParameter: string, request: GADCustomEventRequest, adTypes: NSArray<any> | any[], options: NSArray<any> | any[], rootViewController: UIViewController): void;
}
declare var GADCustomEventNativeAd: {

	prototype: GADCustomEventNativeAd;
};

interface GADCustomEventNativeAdDelegate extends NSObjectProtocol {

	customEventNativeAdDidFailToLoadWithError(customEventNativeAd: GADCustomEventNativeAd, error: NSError): void;

	customEventNativeAdDidReceiveMediatedUnifiedNativeAd(customEventNativeAd: GADCustomEventNativeAd, mediatedUnifiedNativeAd: GADMediatedUnifiedNativeAd): void;
}
declare var GADCustomEventNativeAdDelegate: {

	prototype: GADCustomEventNativeAdDelegate;
};

declare var GADCustomEventParametersServer: string;

declare class GADCustomEventRequest extends NSObject {

	static alloc(): GADCustomEventRequest; // inherited from NSObject

	static new(): GADCustomEventRequest; // inherited from NSObject

	readonly additionalParameters: NSDictionary<any, any>;

	readonly isTesting: boolean;

	readonly userHasLocation: boolean;

	readonly userKeywords: NSArray<any>;

	readonly userLatitude: number;

	readonly userLocationAccuracyInMeters: number;

	readonly userLocationDescription: string;

	readonly userLongitude: number;
}

declare class GADCustomNativeAd extends NSObject {

	static alloc(): GADCustomNativeAd; // inherited from NSObject

	static new(): GADCustomNativeAd; // inherited from NSObject

	readonly availableAssetKeys: NSArray<string>;

	customClickHandler: (p1: string) => void;

	delegate: GADCustomNativeAdDelegate;

	readonly displayAdMeasurement: GADDisplayAdMeasurement;

	readonly formatID: string;

	readonly mediaContent: GADMediaContent;

	readonly mediaView: GADMediaView;

	readonly responseInfo: GADResponseInfo;

	rootViewController: UIViewController;

	imageForKey(key: string): GADNativeAdImage;

	performClickOnAssetWithKey(assetKey: string): void;

	recordImpression(): void;

	stringForKey(key: string): string;
}

interface GADCustomNativeAdDelegate extends NSObjectProtocol {

	customNativeAdDidDismissScreen?(nativeAd: GADCustomNativeAd): void;

	customNativeAdDidRecordClick?(nativeAd: GADCustomNativeAd): void;

	customNativeAdDidRecordImpression?(nativeAd: GADCustomNativeAd): void;

	customNativeAdWillDismissScreen?(nativeAd: GADCustomNativeAd): void;

	customNativeAdWillPresentScreen?(nativeAd: GADCustomNativeAd): void;
}
declare var GADCustomNativeAdDelegate: {

	prototype: GADCustomNativeAdDelegate;
};

interface GADCustomNativeAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveCustomNativeAd(adLoader: GADAdLoader, customNativeAd: GADCustomNativeAd): void;

	customNativeAdFormatIDsForAdLoader(adLoader: GADAdLoader): NSArray<string>;
}
declare var GADCustomNativeAdLoaderDelegate: {

	prototype: GADCustomNativeAdLoaderDelegate;
};

declare var GADCustomNativeAdMediaViewKey: string;

declare class GADDebugOptionsViewController extends UIViewController {

	static alloc(): GADDebugOptionsViewController; // inherited from NSObject

	static debugOptionsViewControllerWithAdUnitID(adUnitID: string): GADDebugOptionsViewController;

	static new(): GADDebugOptionsViewController; // inherited from NSObject

	delegate: GADDebugOptionsViewControllerDelegate;
}

interface GADDebugOptionsViewControllerDelegate extends NSObjectProtocol {

	debugOptionsViewControllerDidDismiss(controller: GADDebugOptionsViewController): void;
}
declare var GADDebugOptionsViewControllerDelegate: {

	prototype: GADDebugOptionsViewControllerDelegate;
};

declare class GADDisplayAdMeasurement extends NSObject {

	static alloc(): GADDisplayAdMeasurement; // inherited from NSObject

	static new(): GADDisplayAdMeasurement; // inherited from NSObject

	view: UIView;

	startWithError(): boolean;
}

declare class GADDynamicHeightSearchRequest extends GADRequest {

	static alloc(): GADDynamicHeightSearchRequest; // inherited from NSObject

	static new(): GADDynamicHeightSearchRequest; // inherited from NSObject

	static request(): GADDynamicHeightSearchRequest; // inherited from GADRequest

	CSSWidth: string;

	adBorderCSSSelections: string;

	adBorderColor: string;

	adPage: number;

	adSeparatorColor: string;

	adTestEnabled: boolean;

	adjustableLineHeight: number;

	annotationFontSize: number;

	annotationTextColor: string;

	attributionBottomSpacing: number;

	attributionFontFamily: string;

	attributionFontSize: number;

	attributionTextColor: string;

	backgroundColor: string;

	boldTitleEnabled: boolean;

	borderCSSSelections: string;

	borderColor: string;

	channel: string;

	clickToCallExtensionEnabled: boolean;

	descriptionFontSize: number;

	detailedAttributionExtensionEnabled: boolean;

	domainLinkColor: string;

	domainLinkFontSize: number;

	fontFamily: string;

	hostLanguage: string;

	locationExtensionEnabled: boolean;

	locationExtensionFontSize: number;

	locationExtensionTextColor: string;

	longerHeadlinesExtensionEnabled: boolean;

	numberOfAds: number;

	plusOnesExtensionEnabled: boolean;

	query: string;

	sellerRatingsExtensionEnabled: boolean;

	siteLinksExtensionEnabled: boolean;

	styleID: string;

	textColor: string;

	titleFontSize: number;

	titleLinkColor: string;

	titleUnderlineHidden: boolean;

	verticalSpacing: number;

	setAdvancedOptionValueForKey(value: any, key: string): void;
}

declare const enum GADErrorCode {

	InvalidRequest = 0,

	NoFill = 1,

	NetworkError = 2,

	ServerError = 3,

	OSVersionTooLow = 4,

	Timeout = 5,

	MediationDataError = 7,

	MediationAdapterError = 8,

	MediationInvalidAdSize = 10,

	InternalError = 11,

	InvalidArgument = 12,

	ReceivedInvalidResponse = 13,

	MediationNoFill = 9,

	AdAlreadyUsed = 19,

	ApplicationIdentifierMissing = 20
}

declare var GADErrorDomain: string;

declare var GADErrorUserInfoKeyResponseInfo: string;

declare class GADExtras extends NSObject implements GADAdNetworkExtras {

	static alloc(): GADExtras; // inherited from NSObject

	static new(): GADExtras; // inherited from NSObject

	additionalParameters: NSDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface GADFullScreenContentDelegate extends NSObjectProtocol {

	adDidDismissFullScreenContent?(ad: GADFullScreenPresentingAd): void;

	adDidFailToPresentFullScreenContentWithError?(ad: GADFullScreenPresentingAd, error: NSError): void;

	adDidPresentFullScreenContent?(ad: GADFullScreenPresentingAd): void;

	adDidRecordClick?(ad: GADFullScreenPresentingAd): void;

	adDidRecordImpression?(ad: GADFullScreenPresentingAd): void;

	adWillDismissFullScreenContent?(ad: GADFullScreenPresentingAd): void;
}
declare var GADFullScreenContentDelegate: {

	prototype: GADFullScreenContentDelegate;
};

interface GADFullScreenPresentingAd extends NSObjectProtocol {

	fullScreenContentDelegate: GADFullScreenContentDelegate;
}
declare var GADFullScreenPresentingAd: {

	prototype: GADFullScreenPresentingAd;
};

declare const enum GADGender {

	kGADGenderUnknown = 0,

	kGADGenderMale = 1,

	kGADGenderFemale = 2
}

declare var GADGoogleAdNetworkClassName: string;

declare class GADInitializationStatus extends NSObject implements NSCopying {

	static alloc(): GADInitializationStatus; // inherited from NSObject

	static new(): GADInitializationStatus; // inherited from NSObject

	readonly adapterStatusesByClassName: NSDictionary<string, GADAdapterStatus>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare function GADInlineAdaptiveBannerAdSizeWithWidthAndMaxHeight(width: number, maxHeight: number): GADAdSize;

declare class GADInterstitialAd extends NSObject implements GADFullScreenPresentingAd {

	static alloc(): GADInterstitialAd; // inherited from NSObject

	static loadWithAdUnitIDRequestCompletionHandler(adUnitID: string, request: GADRequest, completionHandler: (p1: GADInterstitialAd, p2: NSError) => void): void;

	static new(): GADInterstitialAd; // inherited from NSObject

	readonly adUnitID: string;

	paidEventHandler: (p1: GADAdValue) => void;

	readonly responseInfo: GADResponseInfo;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fullScreenContentDelegate: GADFullScreenContentDelegate; // inherited from GADFullScreenPresentingAd

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canPresentFromRootViewControllerError(rootViewController: UIViewController): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentFromRootViewController(rootViewController: UIViewController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function GADLandscapeAnchoredAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

declare function GADLandscapeInlineAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

interface GADMAdNetworkAdapter extends NSObjectProtocol {

	changeAdSizeTo?(adSize: GADAdSize): void;

	getBannerWithSize(adSize: GADAdSize): void;

	getInterstitial(): void;

	getNativeAdWithAdTypesOptions?(adTypes: NSArray<string> | string[], options: NSArray<GADAdLoaderOptions> | GADAdLoaderOptions[]): void;

	handlesUserClicks?(): boolean;

	handlesUserImpressions?(): boolean;

	initWithGADMAdNetworkConnector?(connector: GADMAdNetworkConnector): GADMAdNetworkAdapter;

	presentInterstitialFromRootViewController(rootViewController: UIViewController): void;

	stopBeingDelegate(): void;
}
declare var GADMAdNetworkAdapter: {

	prototype: GADMAdNetworkAdapter;

	adapterVersion(): string;

	networkExtrasClass(): typeof NSObject;
};

interface GADMAdNetworkConnector extends GADMediationAdRequest {

	adMuted(): boolean;

	adVolume(): number;

	adapterClickDidOccurInBanner(adapter: GADMAdNetworkAdapter, view: UIView): void;

	adapterDidDismissFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterDidDismissInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterDidFailAd(adapter: GADMAdNetworkAdapter, error: NSError): void;

	adapterDidFailInterstitial(adapter: GADMAdNetworkAdapter, error: NSError): void;

	adapterDidGetAdClick(adapter: GADMAdNetworkAdapter): void;

	adapterDidReceiveAdView(adapter: GADMAdNetworkAdapter, view: UIView): void;

	adapterDidReceiveInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterDidReceiveInterstitial(adapter: GADMAdNetworkAdapter, interstitial: NSObject): void;

	adapterDidReceiveMediatedUnifiedNativeAd(adapter: GADMAdNetworkAdapter, mediatedUnifiedNativeAd: GADMediatedUnifiedNativeAd): void;

	adapterWillDismissFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterWillDismissInterstitial(adapter: GADMAdNetworkAdapter): void;

	adapterWillLeaveApplication(adapter: GADMAdNetworkAdapter): void;

	adapterWillPresentFullScreenModal(adapter: GADMAdNetworkAdapter): void;

	adapterWillPresentInterstitial(adapter: GADMAdNetworkAdapter): void;

	viewControllerForPresentingModalView(): UIViewController;
}
declare var GADMAdNetworkConnector: {

	prototype: GADMAdNetworkConnector;
};

declare const enum GADMBannerAnimationType {

	kGADMBannerAnimationTypeNone = 0,

	kGADMBannerAnimationTypeFlipFromLeft = 1,

	kGADMBannerAnimationTypeFlipFromRight = 2,

	kGADMBannerAnimationTypeCurlUp = 3,

	kGADMBannerAnimationTypeCurlDown = 4,

	kGADMBannerAnimationTypeSlideFromLeft = 5,

	kGADMBannerAnimationTypeSlideFromRight = 6,

	kGADMBannerAnimationTypeFadeIn = 7,

	kGADMBannerAnimationTypeRandom = 8
}

interface GADMRewardBasedVideoAdNetworkAdapter extends NSObjectProtocol {

	initWithGADMAdNetworkConnector?(connector: GADMRewardBasedVideoAdNetworkConnector): GADMRewardBasedVideoAdNetworkAdapter;

	initWithRewardBasedVideoAdNetworkConnector?(connector: GADMRewardBasedVideoAdNetworkConnector): GADMRewardBasedVideoAdNetworkAdapter;

	initWithRewardBasedVideoAdNetworkConnectorCredentials?(connector: GADMRewardBasedVideoAdNetworkConnector, credentials: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): GADMRewardBasedVideoAdNetworkAdapter;

	presentRewardBasedVideoAdWithRootViewController(viewController: UIViewController): void;

	requestRewardBasedVideoAd(): void;

	setUp(): void;

	setUpWithUserID?(userID: string): void;

	stopBeingDelegate(): void;
}
declare var GADMRewardBasedVideoAdNetworkAdapter: {

	prototype: GADMRewardBasedVideoAdNetworkAdapter;

	adapterVersion(): string;

	networkExtrasClass(): typeof NSObject;
};

interface GADMRewardBasedVideoAdNetworkConnector extends GADMediationAdRequest {

	adapterDidCloseRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidCompletePlayingRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidFailToLoadRewardBasedVideoAdwithError(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter, error: NSError): void;

	adapterDidFailToSetUpRewardBasedVideoAdWithError(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter, error: NSError): void;

	adapterDidGetAdClick(adapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidOpenRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidReceiveRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidRewardUserWithReward(rewardBasedVideoAd: GADMRewardBasedVideoAdNetworkAdapter, reward: GADAdReward): void;

	adapterDidSetUpRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterDidStartPlayingRewardBasedVideoAd(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;

	adapterWillLeaveApplication(rewardBasedVideoAdAdapter: GADMRewardBasedVideoAdNetworkAdapter): void;
}
declare var GADMRewardBasedVideoAdNetworkConnector: {

	prototype: GADMRewardBasedVideoAdNetworkConnector;
};

declare var GADMaxAdContentRatingGeneral: string;

declare var GADMaxAdContentRatingMatureAudience: string;

declare var GADMaxAdContentRatingParentalGuidance: string;

declare var GADMaxAdContentRatingTeen: string;

declare const enum GADMediaAspectRatio {

	Unknown = 0,

	Any = 1,

	Landscape = 2,

	Portrait = 3,

	Square = 4
}

declare class GADMediaContent extends NSObject {

	static alloc(): GADMediaContent; // inherited from NSObject

	static new(): GADMediaContent; // inherited from NSObject

	readonly aspectRatio: number;

	readonly currentTime: number;

	readonly duration: number;

	readonly hasVideoContent: boolean;

	mainImage: UIImage;

	readonly videoController: GADVideoController;
}

declare class GADMediaView extends UIView {

	static alloc(): GADMediaView; // inherited from NSObject

	static appearance(): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADMediaView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADMediaView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADMediaView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADMediaView; // inherited from UIAppearance

	static new(): GADMediaView; // inherited from NSObject

	mediaContent: GADMediaContent;
}

interface GADMediatedUnifiedNativeAd extends NSObjectProtocol {

	adChoicesView?: UIView;

	advertiser: string;

	body: string;

	callToAction: string;

	currentTime?: number;

	duration?: number;

	extraAssets: NSDictionary<string, any>;

	hasVideoContent?: boolean;

	headline: string;

	icon: GADNativeAdImage;

	images: NSArray<GADNativeAdImage>;

	mediaContentAspectRatio?: number;

	mediaView?: UIView;

	price: string;

	starRating: NSDecimalNumber;

	store: string;

	didRecordClickOnAssetWithNameViewViewController?(assetName: string, view: UIView, viewController: UIViewController): void;

	didRecordImpression?(): void;

	didRenderInViewClickableAssetViewsNonclickableAssetViewsViewController?(view: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>, viewController: UIViewController): void;

	didUntrackView?(view: UIView): void;
}
declare var GADMediatedUnifiedNativeAd: {

	prototype: GADMediatedUnifiedNativeAd;
};

declare class GADMediatedUnifiedNativeAdNotificationSource extends NSObject {

	static alloc(): GADMediatedUnifiedNativeAdNotificationSource; // inherited from NSObject

	static mediatedNativeAdDidDismissScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidEndVideoPlayback(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidPauseVideo(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidPlayVideo(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidRecordClick(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdDidRecordImpression(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillDismissScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillLeaveApplication(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static mediatedNativeAdWillPresentScreen(mediatedNativeAd: GADMediatedUnifiedNativeAd): void;

	static new(): GADMediatedUnifiedNativeAdNotificationSource; // inherited from NSObject
}

interface GADMediationAd extends NSObjectProtocol {
}
declare var GADMediationAd: {

	prototype: GADMediationAd;
};

declare class GADMediationAdConfiguration extends NSObject {

	static alloc(): GADMediationAdConfiguration; // inherited from NSObject

	static new(): GADMediationAdConfiguration; // inherited from NSObject

	readonly bidResponse: string;

	readonly childDirectedTreatment: number;

	readonly credentials: GADMediationCredentials;

	readonly extras: GADAdNetworkExtras;

	readonly hasUserLocation: boolean;

	readonly isTestRequest: boolean;

	readonly topViewController: UIViewController;

	readonly userLatitude: number;

	readonly userLocationAccuracyInMeters: number;

	readonly userLongitude: number;

	readonly watermark: NSData;
}

interface GADMediationAdEventDelegate extends NSObjectProtocol {

	didDismissFullScreenView(): void;

	didFailToPresentWithError(error: NSError): void;

	reportClick(): void;

	reportImpression(): void;

	willDismissFullScreenView(): void;

	willPresentFullScreenView(): void;
}
declare var GADMediationAdEventDelegate: {

	prototype: GADMediationAdEventDelegate;
};

interface GADMediationAdRequest extends NSObjectProtocol {

	childDirectedTreatment(): number;

	credentials(): NSDictionary<any, any>;

	maxAdContentRating(): string;

	networkExtras(): GADAdNetworkExtras;

	publisherId(): string;

	testMode(): boolean;

	underAgeOfConsent(): number;

	userBirthday(): Date;

	userGender(): GADGender;

	userHasLocation(): boolean;

	userKeywords(): NSArray<any>;

	userLatitude(): number;

	userLocationAccuracyInMeters(): number;

	userLocationDescription(): string;

	userLongitude(): number;
}
declare var GADMediationAdRequest: {

	prototype: GADMediationAdRequest;
};

interface GADMediationAdapter extends NSObjectProtocol {

	init?(): GADMediationAdapter;

	loadBannerForAdConfigurationCompletionHandler?(adConfiguration: GADMediationBannerAdConfiguration, completionHandler: (p1: GADMediationBannerAd, p2: NSError) => GADMediationBannerAdEventDelegate): void;

	loadInterscrollerAdForAdConfigurationCompletionHandler?(adConfiguration: GADMediationBannerAdConfiguration, completionHandler: (p1: GADMediationInterscrollerAd, p2: NSError) => GADMediationBannerAdEventDelegate): void;

	loadInterstitialForAdConfigurationCompletionHandler?(adConfiguration: GADMediationInterstitialAdConfiguration, completionHandler: (p1: GADMediationInterstitialAd, p2: NSError) => GADMediationInterstitialAdEventDelegate): void;

	loadNativeAdForAdConfigurationCompletionHandler?(adConfiguration: GADMediationNativeAdConfiguration, completionHandler: (p1: GADMediationNativeAd, p2: NSError) => GADMediationNativeAdEventDelegate): void;

	loadRewardedAdForAdConfigurationCompletionHandler?(adConfiguration: GADMediationRewardedAdConfiguration, completionHandler: (p1: GADMediationRewardedAd, p2: NSError) => GADMediationRewardedAdEventDelegate): void;

	loadRewardedInterstitialAdForAdConfigurationCompletionHandler?(adConfiguration: GADMediationRewardedAdConfiguration, completionHandler: (p1: GADMediationRewardedAd, p2: NSError) => GADMediationRewardedAdEventDelegate): void;
}
declare var GADMediationAdapter: {

	prototype: GADMediationAdapter;

	adSDKVersion(): GADVersionNumber;

	adapterVersion(): GADVersionNumber;

	networkExtrasClass(): typeof NSObject;

	setUpWithConfigurationCompletionHandler?(configuration: GADMediationServerConfiguration, completionHandler: (p1: NSError) => void): void;
};

interface GADMediationBannerAd extends GADMediationAd {

	view: UIView;

	changeAdSizeTo?(adSize: GADAdSize): void;
}
declare var GADMediationBannerAd: {

	prototype: GADMediationBannerAd;
};

declare class GADMediationBannerAdConfiguration extends GADMediationAdConfiguration {

	static alloc(): GADMediationBannerAdConfiguration; // inherited from NSObject

	static new(): GADMediationBannerAdConfiguration; // inherited from NSObject

	readonly adSize: GADAdSize;
}

interface GADMediationBannerAdEventDelegate extends GADMediationAdEventDelegate {

	willBackgroundApplication(): void;
}
declare var GADMediationBannerAdEventDelegate: {

	prototype: GADMediationBannerAdEventDelegate;
};

declare class GADMediationCredentials extends NSObject {

	static alloc(): GADMediationCredentials; // inherited from NSObject

	static new(): GADMediationCredentials; // inherited from NSObject

	readonly format: GADAdFormat;

	readonly settings: NSDictionary<string, any>;
}

declare const enum GADMediationErrorCode {

	kGADErrorInvalidRequest = 0,

	kGADErrorNoFill = 1,

	kGADErrorNetworkError = 2,

	kGADErrorServerError = 3,

	kGADErrorOSVersionTooLow = 4,

	kGADErrorTimeout = 5,

	kGADErrorInterstitialAlreadyUsed = 6,

	kGADErrorMediationDataError = 7,

	kGADErrorMediationAdapterError = 8,

	kGADErrorMediationInvalidAdSize = 10,

	kGADErrorInternalError = 11,

	kGADErrorInvalidArgument = 12,

	kGADErrorReceivedInvalidResponse = 13,

	kGADErrorRewardedAdAlreadyUsed = 14,

	kGADErrorMediationNoFill = 9,

	kGADErrorAdAlreadyUsed = 19,

	kGADErrorApplicationIdentifierMissing = 20
}

interface GADMediationInterscrollerAd extends GADMediationBannerAd {

	delegateInterscrollerEffect: boolean;
}
declare var GADMediationInterscrollerAd: {

	prototype: GADMediationInterscrollerAd;
};

interface GADMediationInterstitialAd extends GADMediationAd {

	presentFromViewController(viewController: UIViewController): void;
}
declare var GADMediationInterstitialAd: {

	prototype: GADMediationInterstitialAd;
};

declare class GADMediationInterstitialAdConfiguration extends GADMediationAdConfiguration {

	static alloc(): GADMediationInterstitialAdConfiguration; // inherited from NSObject

	static new(): GADMediationInterstitialAdConfiguration; // inherited from NSObject
}

interface GADMediationInterstitialAdEventDelegate extends GADMediationAdEventDelegate {

	willBackgroundApplication(): void;
}
declare var GADMediationInterstitialAdEventDelegate: {

	prototype: GADMediationInterstitialAdEventDelegate;
};

interface GADMediationNativeAd extends GADMediatedUnifiedNativeAd, GADMediationAd {

	handlesUserClicks?(): boolean;

	handlesUserImpressions?(): boolean;
}
declare var GADMediationNativeAd: {

	prototype: GADMediationNativeAd;
};

declare class GADMediationNativeAdConfiguration extends GADMediationAdConfiguration {

	static alloc(): GADMediationNativeAdConfiguration; // inherited from NSObject

	static new(): GADMediationNativeAdConfiguration; // inherited from NSObject

	readonly options: NSArray<GADAdLoaderOptions>;
}

interface GADMediationNativeAdEventDelegate extends GADMediationAdEventDelegate {

	didEndVideo(): void;

	didMuteVideo(): void;

	didPauseVideo(): void;

	didPlayVideo(): void;

	didUnmuteVideo(): void;

	willBackgroundApplication(): void;
}
declare var GADMediationNativeAdEventDelegate: {

	prototype: GADMediationNativeAdEventDelegate;
};

interface GADMediationRewardedAd extends GADMediationAd {

	presentFromViewController(viewController: UIViewController): void;
}
declare var GADMediationRewardedAd: {

	prototype: GADMediationRewardedAd;
};

declare class GADMediationRewardedAdConfiguration extends GADMediationAdConfiguration {

	static alloc(): GADMediationRewardedAdConfiguration; // inherited from NSObject

	static new(): GADMediationRewardedAdConfiguration; // inherited from NSObject
}

interface GADMediationRewardedAdEventDelegate extends GADMediationAdEventDelegate {

	didEndVideo(): void;

	didRewardUserWithReward(reward: GADAdReward): void;

	didStartVideo(): void;
}
declare var GADMediationRewardedAdEventDelegate: {

	prototype: GADMediationRewardedAdEventDelegate;
};

declare class GADMediationServerConfiguration extends NSObject {

	static alloc(): GADMediationServerConfiguration; // inherited from NSObject

	static new(): GADMediationServerConfiguration; // inherited from NSObject

	readonly credentials: NSArray<GADMediationCredentials>;
}

declare class GADMobileAds extends NSObject {

	static alloc(): GADMobileAds; // inherited from NSObject

	static new(): GADMobileAds; // inherited from NSObject

	static sharedInstance(): GADMobileAds;

	applicationMuted: boolean;

	applicationVolume: number;

	readonly audioVideoManager: GADAudioVideoManager;

	readonly initializationStatus: GADInitializationStatus;

	readonly requestConfiguration: GADRequestConfiguration;

	readonly sdkVersion: string;

	disableAutomatedInAppPurchaseReporting(): void;

	disableMediationInitialization(): void;

	disableSDKCrashReporting(): void;

	enableAutomatedInAppPurchaseReporting(): void;

	isSDKVersionAtLeastMajorMinorPatch(major: number, minor: number, patch: number): boolean;

	presentAdInspectorFromViewControllerCompletionHandler(viewController: UIViewController, completionHandler: (p1: NSError) => void): void;

	startWithCompletionHandler(completionHandler: (p1: GADInitializationStatus) => void): void;
}

declare class GADMultipleAdsAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADMultipleAdsAdLoaderOptions; // inherited from NSObject

	static new(): GADMultipleAdsAdLoaderOptions; // inherited from NSObject

	numberOfAds: number;
}

declare class GADMuteThisAdReason extends NSObject {

	static alloc(): GADMuteThisAdReason; // inherited from NSObject

	static new(): GADMuteThisAdReason; // inherited from NSObject

	readonly reasonDescription: string;
}

declare class GADNativeAd extends NSObject {

	static alloc(): GADNativeAd; // inherited from NSObject

	static new(): GADNativeAd; // inherited from NSObject

	readonly advertiser: string;

	readonly body: string;

	readonly callToAction: string;

	readonly customClickGestureEnabled: boolean;

	readonly customMuteThisAdAvailable: boolean;

	delegate: GADNativeAdDelegate;

	readonly extraAssets: NSDictionary<string, any>;

	readonly headline: string;

	readonly icon: GADNativeAdImage;

	readonly images: NSArray<GADNativeAdImage>;

	readonly mediaContent: GADMediaContent;

	readonly muteThisAdReasons: NSArray<GADMuteThisAdReason>;

	paidEventHandler: (p1: GADAdValue) => void;

	readonly price: string;

	readonly responseInfo: GADResponseInfo;

	rootViewController: UIViewController;

	readonly starRating: NSDecimalNumber;

	readonly store: string;

	unconfirmedClickDelegate: GADNativeAdUnconfirmedClickDelegate;

	cancelUnconfirmedClick(): void;

	enableCustomClickGestures(): void;

	muteThisAdWithReason(reason: GADMuteThisAdReason): void;

	recordCustomClickGesture(): void;

	registerAdViewClickableAssetViewsNonclickableAssetViews(adView: UIView, clickableAssetViews: NSDictionary<string, UIView>, nonclickableAssetViews: NSDictionary<string, UIView>): void;

	registerClickConfirmingView(view: UIView): void;

	unregisterAdView(): void;
}

declare var GADNativeAdChoicesViewAsset: string;

interface GADNativeAdDelegate extends NSObjectProtocol {

	nativeAdDidDismissScreen?(nativeAd: GADNativeAd): void;

	nativeAdDidRecordClick?(nativeAd: GADNativeAd): void;

	nativeAdDidRecordImpression?(nativeAd: GADNativeAd): void;

	nativeAdIsMuted?(nativeAd: GADNativeAd): void;

	nativeAdWillDismissScreen?(nativeAd: GADNativeAd): void;

	nativeAdWillPresentScreen?(nativeAd: GADNativeAd): void;
}
declare var GADNativeAdDelegate: {

	prototype: GADNativeAdDelegate;
};

declare class GADNativeAdImage extends NSObject {

	static alloc(): GADNativeAdImage; // inherited from NSObject

	static new(): GADNativeAdImage; // inherited from NSObject

	readonly image: UIImage;

	readonly imageURL: NSURL;

	readonly scale: number;

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; scale: number; });

	initWithImage(image: UIImage): this;

	initWithURLScale(URL: NSURL, scale: number): this;
}

declare class GADNativeAdImageAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeAdImageAdLoaderOptions; // inherited from NSObject

	static new(): GADNativeAdImageAdLoaderOptions; // inherited from NSObject

	disableImageLoading: boolean;

	shouldRequestMultipleImages: boolean;
}

interface GADNativeAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveNativeAd(adLoader: GADAdLoader, nativeAd: GADNativeAd): void;
}
declare var GADNativeAdLoaderDelegate: {

	prototype: GADNativeAdLoaderDelegate;
};

declare class GADNativeAdMediaAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeAdMediaAdLoaderOptions; // inherited from NSObject

	static new(): GADNativeAdMediaAdLoaderOptions; // inherited from NSObject

	mediaAspectRatio: GADMediaAspectRatio;
}

interface GADNativeAdUnconfirmedClickDelegate extends NSObjectProtocol {

	nativeAdDidCancelUnconfirmedClick(nativeAd: GADNativeAd): void;

	nativeAdDidReceiveUnconfirmedClickOnAssetID(nativeAd: GADNativeAd, assetID: string): void;
}
declare var GADNativeAdUnconfirmedClickDelegate: {

	prototype: GADNativeAdUnconfirmedClickDelegate;
};

declare class GADNativeAdView extends UIView {

	static alloc(): GADNativeAdView; // inherited from NSObject

	static appearance(): GADNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADNativeAdView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADNativeAdView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADNativeAdView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADNativeAdView; // inherited from UIAppearance

	static new(): GADNativeAdView; // inherited from NSObject

	adChoicesView: GADAdChoicesView;

	advertiserView: UIView;

	bodyView: UIView;

	callToActionView: UIView;

	headlineView: UIView;

	iconView: UIView;

	imageView: UIView;

	mediaView: GADMediaView;

	nativeAd: GADNativeAd;

	priceView: UIView;

	starRatingView: UIView;

	storeView: UIView;
}

declare class GADNativeAdViewAdOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeAdViewAdOptions; // inherited from NSObject

	static new(): GADNativeAdViewAdOptions; // inherited from NSObject

	preferredAdChoicesPosition: GADAdChoicesPosition;
}

declare var GADNativeAdvertiserAsset: string;

declare var GADNativeBodyAsset: string;

declare var GADNativeCallToActionAsset: string;

declare var GADNativeHeadlineAsset: string;

declare var GADNativeIconAsset: string;

declare var GADNativeImageAsset: string;

declare var GADNativeMediaViewAsset: string;

declare class GADNativeMuteThisAdLoaderOptions extends GADAdLoaderOptions {

	static alloc(): GADNativeMuteThisAdLoaderOptions; // inherited from NSObject

	static new(): GADNativeMuteThisAdLoaderOptions; // inherited from NSObject

	customMuteThisAdRequested: boolean;
}

declare var GADNativePriceAsset: string;

declare var GADNativeStarRatingAsset: string;

declare var GADNativeStoreAsset: string;

declare function GADPortraitAnchoredAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

declare function GADPortraitInlineAdaptiveBannerAdSizeWithWidth(width: number): GADAdSize;

declare const enum GADPresentationErrorCode {

	CodeAdNotReady = 15,

	CodeAdTooLarge = 16,

	CodeInternal = 17,

	CodeAdAlreadyUsed = 18,

	NotMainThread = 21,

	Mediation = 22
}

interface GADRTBAdapter extends GADMediationAdapter {

	collectSignalsForRequestParametersCompletionHandler(params: GADRTBRequestParameters, completionHandler: (p1: string, p2: NSError) => void): void;
}
declare var GADRTBAdapter: {

	prototype: GADRTBAdapter;

	adSDKVersion(): GADVersionNumber;

	adapterVersion(): GADVersionNumber;

	networkExtrasClass(): typeof NSObject;

	setUpWithConfigurationCompletionHandler?(configuration: GADMediationServerConfiguration, completionHandler: (p1: NSError) => void): void;
};

declare class GADRTBMediationSignalsConfiguration extends NSObject {

	static alloc(): GADRTBMediationSignalsConfiguration; // inherited from NSObject

	static new(): GADRTBMediationSignalsConfiguration; // inherited from NSObject

	readonly credentials: NSArray<GADMediationCredentials>;
}

declare class GADRTBRequestParameters extends NSObject {

	static alloc(): GADRTBRequestParameters; // inherited from NSObject

	static new(): GADRTBRequestParameters; // inherited from NSObject

	readonly adSize: GADAdSize;

	readonly configuration: GADRTBMediationSignalsConfiguration;

	readonly extras: GADAdNetworkExtras;
}

declare class GADRequest extends NSObject implements NSCopying {

	static alloc(): GADRequest; // inherited from NSObject

	static new(): GADRequest; // inherited from NSObject

	static request(): GADRequest;

	contentURL: string;

	keywords: NSArray<string>;

	neighboringContentURLStrings: NSArray<string>;

	requestAgent: string;

	scene: UIWindowScene;

	adNetworkExtrasFor(aClass: typeof NSObject): GADAdNetworkExtras;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	registerAdNetworkExtras(extras: GADAdNetworkExtras): void;

	removeAdNetworkExtrasFor(aClass: typeof NSObject): void;

	setLocationWithLatitudeLongitudeAccuracy(latitude: number, longitude: number, accuracyInMeters: number): void;
}

declare class GADRequestConfiguration extends NSObject {

	static alloc(): GADRequestConfiguration; // inherited from NSObject

	static new(): GADRequestConfiguration; // inherited from NSObject

	maxAdContentRating: string;

	testDeviceIdentifiers: NSArray<string>;

	setSameAppKeyEnabled(enabled: boolean): void;

	tagForChildDirectedTreatment(childDirectedTreatment: boolean): void;

	tagForUnderAgeOfConsent(underAgeOfConsent: boolean): void;
}

declare class GADResponseInfo extends NSObject {

	static alloc(): GADResponseInfo; // inherited from NSObject

	static new(): GADResponseInfo; // inherited from NSObject

	readonly adNetworkClassName: string;

	readonly adNetworkInfoArray: NSArray<GADAdNetworkResponseInfo>;

	readonly dictionaryRepresentation: NSDictionary<string, any>;

	readonly responseIdentifier: string;
}

declare class GADRewardedAd extends NSObject implements GADAdMetadataProvider, GADFullScreenPresentingAd {

	static alloc(): GADRewardedAd; // inherited from NSObject

	static loadWithAdUnitIDRequestCompletionHandler(adUnitID: string, request: GADRequest, completionHandler: (p1: GADRewardedAd, p2: NSError) => void): void;

	static new(): GADRewardedAd; // inherited from NSObject

	readonly adReward: GADAdReward;

	readonly adUnitID: string;

	paidEventHandler: (p1: GADAdValue) => void;

	readonly responseInfo: GADResponseInfo;

	serverSideVerificationOptions: GADServerSideVerificationOptions;

	readonly adMetadata: NSDictionary<string, any>; // inherited from GADAdMetadataProvider

	adMetadataDelegate: GADAdMetadataDelegate; // inherited from GADAdMetadataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fullScreenContentDelegate: GADFullScreenContentDelegate; // inherited from GADFullScreenPresentingAd

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canPresentFromRootViewControllerError(rootViewController: UIViewController): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentFromRootViewControllerUserDidEarnRewardHandler(rootViewController: UIViewController, userDidEarnRewardHandler: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GADRewardedInterstitialAd extends NSObject implements GADAdMetadataProvider, GADFullScreenPresentingAd {

	static alloc(): GADRewardedInterstitialAd; // inherited from NSObject

	static loadWithAdUnitIDRequestCompletionHandler(adUnitID: string, request: GADRequest, completionHandler: (p1: GADRewardedInterstitialAd, p2: NSError) => void): void;

	static new(): GADRewardedInterstitialAd; // inherited from NSObject

	readonly adReward: GADAdReward;

	readonly adUnitID: string;

	paidEventHandler: (p1: GADAdValue) => void;

	readonly responseInfo: GADResponseInfo;

	serverSideVerificationOptions: GADServerSideVerificationOptions;

	readonly adMetadata: NSDictionary<string, any>; // inherited from GADAdMetadataProvider

	adMetadataDelegate: GADAdMetadataDelegate; // inherited from GADAdMetadataProvider

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	fullScreenContentDelegate: GADFullScreenContentDelegate; // inherited from GADFullScreenPresentingAd

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	canPresentFromRootViewControllerError(rootViewController: UIViewController): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentFromRootViewControllerUserDidEarnRewardHandler(viewController: UIViewController, userDidEarnRewardHandler: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class GADSearchBannerView extends GADBannerView {

	static alloc(): GADSearchBannerView; // inherited from NSObject

	static appearance(): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GADSearchBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADSearchBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GADSearchBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GADSearchBannerView; // inherited from UIAppearance

	static new(): GADSearchBannerView; // inherited from NSObject
}

declare class GADServerSideVerificationOptions extends NSObject implements NSCopying {

	static alloc(): GADServerSideVerificationOptions; // inherited from NSObject

	static new(): GADServerSideVerificationOptions; // inherited from NSObject

	customRewardString: string;

	userIdentifier: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var GADUnifiedNativeAdChoicesViewAsset: string;

declare var GADUnifiedNativeAdvertiserAsset: string;

declare var GADUnifiedNativeBodyAsset: string;

declare var GADUnifiedNativeCallToActionAsset: string;

declare var GADUnifiedNativeHeadlineAsset: string;

declare var GADUnifiedNativeIconAsset: string;

declare var GADUnifiedNativeImageAsset: string;

declare var GADUnifiedNativeMediaViewAsset: string;

declare var GADUnifiedNativePriceAsset: string;

declare var GADUnifiedNativeStarRatingAsset: string;

declare var GADUnifiedNativeStoreAsset: string;

interface GADVersionNumber {
	majorVersion: number;
	minorVersion: number;
	patchVersion: number;
}
declare var GADVersionNumber: interop.StructType<GADVersionNumber>;

declare class GADVideoController extends NSObject {

	static alloc(): GADVideoController; // inherited from NSObject

	static new(): GADVideoController; // inherited from NSObject

	delegate: GADVideoControllerDelegate;

	clickToExpandEnabled(): boolean;

	customControlsEnabled(): boolean;

	pause(): void;

	play(): void;

	setMute(mute: boolean): void;

	stop(): void;
}

interface GADVideoControllerDelegate extends NSObjectProtocol {

	videoControllerDidEndVideoPlayback?(videoController: GADVideoController): void;

	videoControllerDidMuteVideo?(videoController: GADVideoController): void;

	videoControllerDidPauseVideo?(videoController: GADVideoController): void;

	videoControllerDidPlayVideo?(videoController: GADVideoController): void;

	videoControllerDidUnmuteVideo?(videoController: GADVideoController): void;
}
declare var GADVideoControllerDelegate: {

	prototype: GADVideoControllerDelegate;
};

declare class GADVideoOptions extends GADAdLoaderOptions {

	static alloc(): GADVideoOptions; // inherited from NSObject

	static new(): GADVideoOptions; // inherited from NSObject

	clickToExpandRequested: boolean;

	customControlsRequested: boolean;

	startMuted: boolean;
}

interface GAMBannerAdLoaderDelegate extends GADAdLoaderDelegate {

	adLoaderDidReceiveGAMBannerView(adLoader: GADAdLoader, bannerView: GAMBannerView): void;

	validBannerSizesForAdLoader(adLoader: GADAdLoader): NSArray<NSValue>;
}
declare var GAMBannerAdLoaderDelegate: {

	prototype: GAMBannerAdLoaderDelegate;
};

declare class GAMBannerView extends GADBannerView {

	static alloc(): GAMBannerView; // inherited from NSObject

	static appearance(): GAMBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GAMBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GAMBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GAMBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GAMBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GAMBannerView; // inherited from UIAppearance

	static new(): GAMBannerView; // inherited from NSObject

	appEventDelegate: GADAppEventDelegate;

	enableManualImpressions: boolean;

	validAdSizes: NSArray<NSValue>;

	readonly videoController: GADVideoController;

	recordImpression(): void;

	resize(size: GADAdSize): void;

	setAdOptions(adOptions: NSArray<GADAdLoaderOptions> | GADAdLoaderOptions[]): void;
}

declare class GAMBannerViewOptions extends GADAdLoaderOptions {

	static alloc(): GAMBannerViewOptions; // inherited from NSObject

	static new(): GAMBannerViewOptions; // inherited from NSObject

	enableManualImpressions: boolean;
}

declare class GAMInterstitialAd extends GADInterstitialAd {

	static alloc(): GAMInterstitialAd; // inherited from NSObject

	static loadWithAdManagerAdUnitIDRequestCompletionHandler(adUnitID: string, request: GAMRequest, completionHandler: (p1: GAMInterstitialAd, p2: NSError) => void): void;

	static new(): GAMInterstitialAd; // inherited from NSObject

	appEventDelegate: GADAppEventDelegate;
}

declare class GAMRequest extends GADRequest {

	static alloc(): GAMRequest; // inherited from NSObject

	static new(): GAMRequest; // inherited from NSObject

	static request(): GAMRequest; // inherited from GADRequest

	categoryExclusions: NSArray<string>;

	customTargeting: NSDictionary<string, string>;

	publisherProvidedID: string;
}

declare var GoogleMobileAdsVersionString: interop.Reference<number>;

declare function IsGADAdSizeValid(size: GADAdSize): boolean;

declare function NSStringFromGADAdSize(size: GADAdSize): string;

declare function NSValueFromGADAdSize(size: GADAdSize): NSValue;

declare var kGADAdLoaderAdTypeCustomNative: string;

declare var kGADAdLoaderAdTypeGAMBanner: string;

declare var kGADAdLoaderAdTypeNative: string;

declare var kGADAdSizeBanner: GADAdSize;

declare var kGADAdSizeFluid: GADAdSize;

declare var kGADAdSizeFullBanner: GADAdSize;

declare var kGADAdSizeInvalid: GADAdSize;

declare var kGADAdSizeLargeBanner: GADAdSize;

declare var kGADAdSizeLeaderboard: GADAdSize;

declare var kGADAdSizeMediumRectangle: GADAdSize;

declare var kGADAdSizeSkyscraper: GADAdSize;

declare var kGADAdSizeSmartBannerLandscape: GADAdSize;

declare var kGADAdSizeSmartBannerPortrait: GADAdSize;

declare var kGADErrorDomain: string;

declare var kGADSimulatorID: string;

declare var kGAMSimulatorID: string;
