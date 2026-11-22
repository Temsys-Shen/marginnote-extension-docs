/** @module MarginNote核心 */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `AddonWebPanel`.
 */
interface AddonWebPanel {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  providesPresentationContextTransitionStyle: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly nibName: string | null;
  /** Exported member.*/
  readonly childViewControllers: unknown[] | null;
  /** Exported member.*/
  readonly parentViewController: UIViewController | null;
  /** Exported member.*/
  wantsFullScreenLayout: boolean;
  /** Exported member.*/
  readonly presentingViewController: UIViewController | null;
  /** Exported member.*/
  readonly nibBundle: NSBundle | null;
  /** Exported member.*/
  readonly interfaceOrientation: number;
  /** Exported member.*/
  modalPresentationStyle: number;
  /** Exported member.*/
  readonly presentedViewController: UIViewController | null;
  /** Exported member.*/
  readonly searchDisplayController: UISearchDisplayController | null;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  view: UIView | null;
  /** Exported member.*/
  modalTransitionStyle: number;
  /** Exported member.*/
  readonly modalViewController: UIViewController | null;
  /** Exported member.*/
  definesPresentationContext: boolean;
  /** Exported member.*/
  preferredContentSize: CGSize;
  /** Exported member.*/
  readonly navigationItem: UINavigationItem | null;
  /** Exported member.*/
  hidesBottomBarWhenPushed: boolean;
  /** Exported member.*/
  readonly navigationController: UINavigationController | null;
  /** Exported member.*/
  toolbarItems: unknown[] | null;
  /** Exported member.*/
  loadView(): void;
  /** Exported member.*/
  viewWillUnload(): void;
  /** Exported member.*/
  viewDidUnload(): void;
  /** Exported member.*/
  viewDidLoad(): void;
  /** Exported member.*/
  isViewLoaded(): boolean;
  /** Exported member.*/
  performSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): void;
  /** Exported member.*/
  shouldPerformSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): boolean;
  /** Exported member.*/
  viewWillAppear(_animated: boolean): void;
  /** Exported member.*/
  viewDidAppear(_animated: boolean): void;
  /** Exported member.*/
  viewWillDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewDidDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewWillLayoutSubviews(): void;
  /** Exported member.*/
  viewDidLayoutSubviews(): void;
  /** Exported member.*/
  didReceiveMemoryWarning(): void;
  /** Exported member.*/
  isBeingPresented(): boolean;
  /** Exported member.*/
  isBeingDismissed(): boolean;
  /** Exported member.*/
  isMovingToParentViewController(): boolean;
  /** Exported member.*/
  isMovingFromParentViewController(): boolean;
  /** Exported member.*/
  presentViewControllerAnimatedCompletion(_viewControllerToPresent: UIViewController | null, _flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  dismissViewControllerAnimatedCompletion(_flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  presentModalViewControllerAnimated(_modalViewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  dismissModalViewControllerAnimated(_animated: boolean): void;
  /** Exported member.*/
  disablesAutomaticKeyboardDismissal(): boolean;
  /** Exported member.*/
  preferredStatusBarStyle(): number;
  /** Exported member.*/
  prefersStatusBarHidden(): boolean;
  /** Exported member.*/
  preferredStatusBarUpdateAnimation(): number;
  /** Exported member.*/
  setNeedsStatusBarAppearanceUpdate(): void;
  /** Exported member.*/
  shouldAutorotateToInterfaceOrientation(_toInterfaceOrientation: number): boolean;
  /** Exported member.*/
  shouldAutorotate(): boolean;
  /** Exported member.*/
  supportedInterfaceOrientations(): number;
  /** Exported member.*/
  preferredInterfaceOrientationForPresentation(): number;
  /** Exported member.*/
  rotatingHeaderView(): UIView | null;
  /** Exported member.*/
  rotatingFooterView(): UIView | null;
  /** Exported member.*/
  willRotateToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didRotateFromInterfaceOrientation(_fromInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didAnimateFirstHalfOfRotationToInterfaceOrientation(_toInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(_fromInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  editButtonItem(): UIBarButtonItem | null;
  /** Exported member.*/
  addChildViewController(_childController: UIViewController | null): void;
  /** Exported member.*/
  removeFromParentViewController(_unused: unknown): void;
  /** Exported member.*/
  transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(_fromViewController: UIViewController | null, _toViewController: UIViewController | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  beginAppearanceTransitionAnimated(_isAppearing: boolean, _animated: boolean): void;
  /** Exported member.*/
  endAppearanceTransition(): void;
  /** Exported member.*/
  childViewControllerForStatusBarStyle(): UIViewController | null;
  /** Exported member.*/
  childViewControllerForStatusBarHidden(): UIViewController | null;
  /** Exported member.*/
  automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardRotationMethods(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardAppearanceMethods(): boolean;
  /** Exported member.*/
  willMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  didMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  encodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  decodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  applicationFinishedRestoringState(): void;
  /** Exported member.*/
  updateViewConstraints(): void;
  /** Exported member.*/
  setToolbarItemsAnimated(_toolbarItems: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  readonly floatingVisible: boolean;
  /** Exported member.*/
  readonly mode: string | null;
  /** Exported member.*/
  onMessage: unknown;
  /** Exported member.*/
  maxContentHeight: number;
  /** Exported member.*/
  panelWidth: number;
  /** Exported member.*/
  loadHTML(_html: string | null): void;
  /** Exported member.*/
  loadPanel(): boolean;
  /** Exported member.*/
  teardown(): void;
  /** Exported member.*/
  putMedia(_key: string | null, _data: unknown, _type: string | null): void;
  /** Exported member.*/
  clearMedia(): void;
  /** Exported member.*/
  showFloatingIn(_host: UIViewController | null): void;
  /** Exported member.*/
  showFloatingInMode(_host: UIViewController | null, _mode: string | null): void;
  /** Exported member.*/
  hideFloating(): void;
  /** Exported member.*/
  post(_event: string | null, _data: unknown): void;
}
/** Native class object for {@link AddonWebPanel}.*/
interface AddonWebPanelClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): AddonWebPanel | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): AddonWebPanel | null;
  /** Exported member.*/
  alloc(): AddonWebPanel | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  attemptRotationToDeviceOrientation(): void;
  /** Exported member.*/
  panel(): AddonWebPanel | null;
}
/** Host-injected native class object.*/
declare var AddonWebPanel: AddonWebPanelClass;

/** Native instance exported as `JSExtension`.
 */
interface JSExtension {
  /** Exported member.*/
  readonly window: UIWindow | null;
  /** Exported member.*/
  sceneWillConnect(): void;
  /** Exported member.*/
  sceneDidDisconnect(): void;
  /** Exported member.*/
  sceneWillResignActive(): void;
  /** Exported member.*/
  sceneDidBecomeActive(): void;
  /** Exported member.*/
  notebookWillOpen(_topicid: string | null): void;
  /** Exported member.*/
  notebookWillClose(_topicid: string | null): void;
  /** Exported member.*/
  documentDidOpen(_docmd5: string | null): void;
  /** Exported member.*/
  documentWillClose(_docmd5: string | null): void;
  /** Exported member.*/
  queryAddonCommandStatus(): Record<string, unknown> | null;
  /** Exported member.*/
  additionalTitleLinksOfNotebook(_topicid: string | null): unknown[] | null;
  /** Exported member.*/
  viewControllerForTitleLink(_titleLink: string | null): UIViewController | null;
  /** Exported member.*/
  controllerWillLayoutSubviews(_controller: UIViewController | null): void;
  /** Exported member.*/
  additionalShortcutKeys(): unknown[] | null;
  /** Exported member.*/
  queryShortcutKeyWithKeyFlags(_command: string | null, _keyFlags: number): Record<string, unknown> | null;
  /** Exported member.*/
  processShortcutKeyWithKeyFlags(_command: string | null, _keyFlags: number): void;
}
/** Native class object for {@link JSExtension}.*/
interface JSExtensionClass {
  /** Exported member.*/
  addonDidConnect(): void;
  /** Exported member.*/
  addonWillDisconnect(): void;
  /** Exported member.*/
  applicationDidEnterBackground(): void;
  /** Exported member.*/
  applicationWillEnterForeground(): void;
  /** Exported member.*/
  applicationDidReceiveLocalNotification(_notify: UILocalNotification | null): void;
}
/** Host-injected native class object.*/
declare var JSExtension: JSExtensionClass;

/** Native instance exported as `StudyController`.
 */
interface StudyController {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  providesPresentationContextTransitionStyle: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly nibName: string | null;
  /** Exported member.*/
  readonly childViewControllers: unknown[] | null;
  /** Exported member.*/
  readonly parentViewController: UIViewController | null;
  /** Exported member.*/
  wantsFullScreenLayout: boolean;
  /** Exported member.*/
  readonly presentingViewController: UIViewController | null;
  /** Exported member.*/
  readonly nibBundle: NSBundle | null;
  /** Exported member.*/
  readonly interfaceOrientation: number;
  /** Exported member.*/
  modalPresentationStyle: number;
  /** Exported member.*/
  readonly presentedViewController: UIViewController | null;
  /** Exported member.*/
  readonly searchDisplayController: UISearchDisplayController | null;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  view: UIView | null;
  /** Exported member.*/
  modalTransitionStyle: number;
  /** Exported member.*/
  readonly modalViewController: UIViewController | null;
  /** Exported member.*/
  definesPresentationContext: boolean;
  /** Exported member.*/
  preferredContentSize: CGSize;
  /** Exported member.*/
  readonly navigationItem: UINavigationItem | null;
  /** Exported member.*/
  hidesBottomBarWhenPushed: boolean;
  /** Exported member.*/
  readonly navigationController: UINavigationController | null;
  /** Exported member.*/
  toolbarItems: unknown[] | null;
  /** Exported member.*/
  loadView(): void;
  /** Exported member.*/
  viewWillUnload(): void;
  /** Exported member.*/
  viewDidUnload(): void;
  /** Exported member.*/
  viewDidLoad(): void;
  /** Exported member.*/
  isViewLoaded(): boolean;
  /** Exported member.*/
  performSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): void;
  /** Exported member.*/
  shouldPerformSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): boolean;
  /** Exported member.*/
  viewWillAppear(_animated: boolean): void;
  /** Exported member.*/
  viewDidAppear(_animated: boolean): void;
  /** Exported member.*/
  viewWillDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewDidDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewWillLayoutSubviews(): void;
  /** Exported member.*/
  viewDidLayoutSubviews(): void;
  /** Exported member.*/
  didReceiveMemoryWarning(): void;
  /** Exported member.*/
  isBeingPresented(): boolean;
  /** Exported member.*/
  isBeingDismissed(): boolean;
  /** Exported member.*/
  isMovingToParentViewController(): boolean;
  /** Exported member.*/
  isMovingFromParentViewController(): boolean;
  /** Exported member.*/
  presentViewControllerAnimatedCompletion(_viewControllerToPresent: UIViewController | null, _flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  dismissViewControllerAnimatedCompletion(_flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  presentModalViewControllerAnimated(_modalViewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  dismissModalViewControllerAnimated(_animated: boolean): void;
  /** Exported member.*/
  disablesAutomaticKeyboardDismissal(): boolean;
  /** Exported member.*/
  preferredStatusBarStyle(): number;
  /** Exported member.*/
  prefersStatusBarHidden(): boolean;
  /** Exported member.*/
  preferredStatusBarUpdateAnimation(): number;
  /** Exported member.*/
  setNeedsStatusBarAppearanceUpdate(): void;
  /** Exported member.*/
  shouldAutorotateToInterfaceOrientation(_toInterfaceOrientation: number): boolean;
  /** Exported member.*/
  shouldAutorotate(): boolean;
  /** Exported member.*/
  supportedInterfaceOrientations(): number;
  /** Exported member.*/
  preferredInterfaceOrientationForPresentation(): number;
  /** Exported member.*/
  rotatingHeaderView(): UIView | null;
  /** Exported member.*/
  rotatingFooterView(): UIView | null;
  /** Exported member.*/
  willRotateToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didRotateFromInterfaceOrientation(_fromInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didAnimateFirstHalfOfRotationToInterfaceOrientation(_toInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(_fromInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  editButtonItem(): UIBarButtonItem | null;
  /** Exported member.*/
  addChildViewController(_childController: UIViewController | null): void;
  /** Exported member.*/
  removeFromParentViewController(_unused: unknown): void;
  /** Exported member.*/
  transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(_fromViewController: UIViewController | null, _toViewController: UIViewController | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  beginAppearanceTransitionAnimated(_isAppearing: boolean, _animated: boolean): void;
  /** Exported member.*/
  endAppearanceTransition(): void;
  /** Exported member.*/
  childViewControllerForStatusBarStyle(): UIViewController | null;
  /** Exported member.*/
  childViewControllerForStatusBarHidden(): UIViewController | null;
  /** Exported member.*/
  automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardRotationMethods(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardAppearanceMethods(): boolean;
  /** Exported member.*/
  willMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  didMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  encodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  decodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  applicationFinishedRestoringState(): void;
  /** Exported member.*/
  updateViewConstraints(): void;
  /** Exported member.*/
  setToolbarItemsAnimated(_toolbarItems: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  readonly studyMode: number;
  /** Exported member.*/
  readonly narrowMode: boolean;
  /** Exported member.*/
  readonly immersiveMode: boolean;
  /** Exported member.*/
  docMapSplitMode: number;
  /** Exported member.*/
  rightMapMode: boolean;
  /** Exported member.*/
  readonly notebookController: NotebookController | null;
  /** Exported member.*/
  readonly readerController: ReaderController | null;
  /** Exported member.*/
  readonly extensionPanelController: UIViewController | null;
  /** Exported member.*/
  focusNoteInMindMapById(_noteId: string | null): void;
  /** Exported member.*/
  focusNoteInFloatMindMapById(_noteId: string | null): void;
  /** Exported member.*/
  focusNoteInDocumentById(_noteId: string | null): void;
  /** Exported member.*/
  refreshAddonCommands(): void;
  /** Exported member.*/
  isNoteInReview(_noteid: string | null): boolean;
  /** Exported member.*/
  openNotebookAndDocument(_notebookId: string | null, _docMd5: string | null): void;
  /** Exported member.*/
  toggleExtensionPanel(): void;
  /** Exported member.*/
  setMindMapNodeWidths(_updates: unknown[] | null, _notebookId: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  clearMindMapNodeWidthOverrides(_noteIds: unknown[] | null, _notebookId: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  setMindMapDefaultNodeWidth(_width: number | null, _notebookId: string | null, _childMindMapNoteId: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  setImmersiveMode(_modeId: string | null): boolean;
}
/** Native class object for {@link StudyController}.*/
interface StudyControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): StudyController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): StudyController | null;
  /** Exported member.*/
  alloc(): StudyController | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  attemptRotationToDeviceOrientation(): void;
}
/** Host-injected native class object.*/
declare var StudyController: StudyControllerClass;

/** Native instance exported as `NotebookController`.
 */
interface NotebookController {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  providesPresentationContextTransitionStyle: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly nibName: string | null;
  /** Exported member.*/
  readonly childViewControllers: unknown[] | null;
  /** Exported member.*/
  readonly parentViewController: UIViewController | null;
  /** Exported member.*/
  wantsFullScreenLayout: boolean;
  /** Exported member.*/
  readonly presentingViewController: UIViewController | null;
  /** Exported member.*/
  readonly nibBundle: NSBundle | null;
  /** Exported member.*/
  readonly interfaceOrientation: number;
  /** Exported member.*/
  modalPresentationStyle: number;
  /** Exported member.*/
  readonly presentedViewController: UIViewController | null;
  /** Exported member.*/
  readonly searchDisplayController: UISearchDisplayController | null;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  view: UIView | null;
  /** Exported member.*/
  modalTransitionStyle: number;
  /** Exported member.*/
  readonly modalViewController: UIViewController | null;
  /** Exported member.*/
  definesPresentationContext: boolean;
  /** Exported member.*/
  preferredContentSize: CGSize;
  /** Exported member.*/
  readonly navigationItem: UINavigationItem | null;
  /** Exported member.*/
  hidesBottomBarWhenPushed: boolean;
  /** Exported member.*/
  readonly navigationController: UINavigationController | null;
  /** Exported member.*/
  toolbarItems: unknown[] | null;
  /** Exported member.*/
  loadView(): void;
  /** Exported member.*/
  viewWillUnload(): void;
  /** Exported member.*/
  viewDidUnload(): void;
  /** Exported member.*/
  viewDidLoad(): void;
  /** Exported member.*/
  isViewLoaded(): boolean;
  /** Exported member.*/
  performSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): void;
  /** Exported member.*/
  shouldPerformSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): boolean;
  /** Exported member.*/
  viewWillAppear(_animated: boolean): void;
  /** Exported member.*/
  viewDidAppear(_animated: boolean): void;
  /** Exported member.*/
  viewWillDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewDidDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewWillLayoutSubviews(): void;
  /** Exported member.*/
  viewDidLayoutSubviews(): void;
  /** Exported member.*/
  didReceiveMemoryWarning(): void;
  /** Exported member.*/
  isBeingPresented(): boolean;
  /** Exported member.*/
  isBeingDismissed(): boolean;
  /** Exported member.*/
  isMovingToParentViewController(): boolean;
  /** Exported member.*/
  isMovingFromParentViewController(): boolean;
  /** Exported member.*/
  presentViewControllerAnimatedCompletion(_viewControllerToPresent: UIViewController | null, _flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  dismissViewControllerAnimatedCompletion(_flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  presentModalViewControllerAnimated(_modalViewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  dismissModalViewControllerAnimated(_animated: boolean): void;
  /** Exported member.*/
  disablesAutomaticKeyboardDismissal(): boolean;
  /** Exported member.*/
  preferredStatusBarStyle(): number;
  /** Exported member.*/
  prefersStatusBarHidden(): boolean;
  /** Exported member.*/
  preferredStatusBarUpdateAnimation(): number;
  /** Exported member.*/
  setNeedsStatusBarAppearanceUpdate(): void;
  /** Exported member.*/
  shouldAutorotateToInterfaceOrientation(_toInterfaceOrientation: number): boolean;
  /** Exported member.*/
  shouldAutorotate(): boolean;
  /** Exported member.*/
  supportedInterfaceOrientations(): number;
  /** Exported member.*/
  preferredInterfaceOrientationForPresentation(): number;
  /** Exported member.*/
  rotatingHeaderView(): UIView | null;
  /** Exported member.*/
  rotatingFooterView(): UIView | null;
  /** Exported member.*/
  willRotateToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didRotateFromInterfaceOrientation(_fromInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didAnimateFirstHalfOfRotationToInterfaceOrientation(_toInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(_fromInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  editButtonItem(): UIBarButtonItem | null;
  /** Exported member.*/
  addChildViewController(_childController: UIViewController | null): void;
  /** Exported member.*/
  removeFromParentViewController(_unused: unknown): void;
  /** Exported member.*/
  transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(_fromViewController: UIViewController | null, _toViewController: UIViewController | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  beginAppearanceTransitionAnimated(_isAppearing: boolean, _animated: boolean): void;
  /** Exported member.*/
  endAppearanceTransition(): void;
  /** Exported member.*/
  childViewControllerForStatusBarStyle(): UIViewController | null;
  /** Exported member.*/
  childViewControllerForStatusBarHidden(): UIViewController | null;
  /** Exported member.*/
  automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardRotationMethods(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardAppearanceMethods(): boolean;
  /** Exported member.*/
  willMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  didMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  encodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  decodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  applicationFinishedRestoringState(): void;
  /** Exported member.*/
  updateViewConstraints(): void;
  /** Exported member.*/
  setToolbarItemsAnimated(_toolbarItems: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  readonly outlineView: OutlineView | null;
  /** Exported member.*/
  readonly mindmapView: MindMapView | null;
  /** Exported member.*/
  readonly notebookId: string | null;
  /** Exported member.*/
  readonly focusNote: Note | null;
  /** Exported member.*/
  readonly visibleFocusNote: Note | null;
  /** Exported member.*/
  changeFocusToNote(_note: unknown): void;
}
/** Native class object for {@link NotebookController}.*/
interface NotebookControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NotebookController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NotebookController | null;
  /** Exported member.*/
  alloc(): NotebookController | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  attemptRotationToDeviceOrientation(): void;
}
/** Host-injected native class object.*/
declare var NotebookController: NotebookControllerClass;

/** Native instance exported as `ReaderController`.
 */
interface ReaderController {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  providesPresentationContextTransitionStyle: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly nibName: string | null;
  /** Exported member.*/
  readonly childViewControllers: unknown[] | null;
  /** Exported member.*/
  readonly parentViewController: UIViewController | null;
  /** Exported member.*/
  wantsFullScreenLayout: boolean;
  /** Exported member.*/
  readonly presentingViewController: UIViewController | null;
  /** Exported member.*/
  readonly nibBundle: NSBundle | null;
  /** Exported member.*/
  readonly interfaceOrientation: number;
  /** Exported member.*/
  modalPresentationStyle: number;
  /** Exported member.*/
  readonly presentedViewController: UIViewController | null;
  /** Exported member.*/
  readonly searchDisplayController: UISearchDisplayController | null;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  view: UIView | null;
  /** Exported member.*/
  modalTransitionStyle: number;
  /** Exported member.*/
  readonly modalViewController: UIViewController | null;
  /** Exported member.*/
  definesPresentationContext: boolean;
  /** Exported member.*/
  preferredContentSize: CGSize;
  /** Exported member.*/
  readonly navigationItem: UINavigationItem | null;
  /** Exported member.*/
  hidesBottomBarWhenPushed: boolean;
  /** Exported member.*/
  readonly navigationController: UINavigationController | null;
  /** Exported member.*/
  toolbarItems: unknown[] | null;
  /** Exported member.*/
  loadView(): void;
  /** Exported member.*/
  viewWillUnload(): void;
  /** Exported member.*/
  viewDidUnload(): void;
  /** Exported member.*/
  viewDidLoad(): void;
  /** Exported member.*/
  isViewLoaded(): boolean;
  /** Exported member.*/
  performSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): void;
  /** Exported member.*/
  shouldPerformSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): boolean;
  /** Exported member.*/
  viewWillAppear(_animated: boolean): void;
  /** Exported member.*/
  viewDidAppear(_animated: boolean): void;
  /** Exported member.*/
  viewWillDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewDidDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewWillLayoutSubviews(): void;
  /** Exported member.*/
  viewDidLayoutSubviews(): void;
  /** Exported member.*/
  didReceiveMemoryWarning(): void;
  /** Exported member.*/
  isBeingPresented(): boolean;
  /** Exported member.*/
  isBeingDismissed(): boolean;
  /** Exported member.*/
  isMovingToParentViewController(): boolean;
  /** Exported member.*/
  isMovingFromParentViewController(): boolean;
  /** Exported member.*/
  presentViewControllerAnimatedCompletion(_viewControllerToPresent: UIViewController | null, _flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  dismissViewControllerAnimatedCompletion(_flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  presentModalViewControllerAnimated(_modalViewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  dismissModalViewControllerAnimated(_animated: boolean): void;
  /** Exported member.*/
  disablesAutomaticKeyboardDismissal(): boolean;
  /** Exported member.*/
  preferredStatusBarStyle(): number;
  /** Exported member.*/
  prefersStatusBarHidden(): boolean;
  /** Exported member.*/
  preferredStatusBarUpdateAnimation(): number;
  /** Exported member.*/
  setNeedsStatusBarAppearanceUpdate(): void;
  /** Exported member.*/
  shouldAutorotateToInterfaceOrientation(_toInterfaceOrientation: number): boolean;
  /** Exported member.*/
  shouldAutorotate(): boolean;
  /** Exported member.*/
  supportedInterfaceOrientations(): number;
  /** Exported member.*/
  preferredInterfaceOrientationForPresentation(): number;
  /** Exported member.*/
  rotatingHeaderView(): UIView | null;
  /** Exported member.*/
  rotatingFooterView(): UIView | null;
  /** Exported member.*/
  willRotateToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didRotateFromInterfaceOrientation(_fromInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didAnimateFirstHalfOfRotationToInterfaceOrientation(_toInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(_fromInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  editButtonItem(): UIBarButtonItem | null;
  /** Exported member.*/
  addChildViewController(_childController: UIViewController | null): void;
  /** Exported member.*/
  removeFromParentViewController(_unused: unknown): void;
  /** Exported member.*/
  transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(_fromViewController: UIViewController | null, _toViewController: UIViewController | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  beginAppearanceTransitionAnimated(_isAppearing: boolean, _animated: boolean): void;
  /** Exported member.*/
  endAppearanceTransition(): void;
  /** Exported member.*/
  childViewControllerForStatusBarStyle(): UIViewController | null;
  /** Exported member.*/
  childViewControllerForStatusBarHidden(): UIViewController | null;
  /** Exported member.*/
  automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardRotationMethods(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardAppearanceMethods(): boolean;
  /** Exported member.*/
  willMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  didMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  encodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  decodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  applicationFinishedRestoringState(): void;
  /** Exported member.*/
  updateViewConstraints(): void;
  /** Exported member.*/
  setToolbarItemsAnimated(_toolbarItems: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  readonly currentDocumentController: DocumentController | null;
  /** Exported member.*/
  readonly documentControllers: unknown[] | null;
}
/** Native class object for {@link ReaderController}.*/
interface ReaderControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): ReaderController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): ReaderController | null;
  /** Exported member.*/
  alloc(): ReaderController | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  attemptRotationToDeviceOrientation(): void;
}
/** Host-injected native class object.*/
declare var ReaderController: ReaderControllerClass;

/** Native instance exported as `DocumentController`.
 */
interface DocumentController {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  providesPresentationContextTransitionStyle: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly nibName: string | null;
  /** Exported member.*/
  readonly childViewControllers: unknown[] | null;
  /** Exported member.*/
  readonly parentViewController: UIViewController | null;
  /** Exported member.*/
  wantsFullScreenLayout: boolean;
  /** Exported member.*/
  readonly presentingViewController: UIViewController | null;
  /** Exported member.*/
  readonly nibBundle: NSBundle | null;
  /** Exported member.*/
  readonly interfaceOrientation: number;
  /** Exported member.*/
  modalPresentationStyle: number;
  /** Exported member.*/
  readonly presentedViewController: UIViewController | null;
  /** Exported member.*/
  readonly searchDisplayController: UISearchDisplayController | null;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  view: UIView | null;
  /** Exported member.*/
  modalTransitionStyle: number;
  /** Exported member.*/
  readonly modalViewController: UIViewController | null;
  /** Exported member.*/
  definesPresentationContext: boolean;
  /** Exported member.*/
  preferredContentSize: CGSize;
  /** Exported member.*/
  readonly navigationItem: UINavigationItem | null;
  /** Exported member.*/
  hidesBottomBarWhenPushed: boolean;
  /** Exported member.*/
  readonly navigationController: UINavigationController | null;
  /** Exported member.*/
  toolbarItems: unknown[] | null;
  /** Exported member.*/
  loadView(): void;
  /** Exported member.*/
  viewWillUnload(): void;
  /** Exported member.*/
  viewDidUnload(): void;
  /** Exported member.*/
  viewDidLoad(): void;
  /** Exported member.*/
  isViewLoaded(): boolean;
  /** Exported member.*/
  performSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): void;
  /** Exported member.*/
  shouldPerformSegueWithIdentifierSender(_identifier: string | null, _sender: unknown): boolean;
  /** Exported member.*/
  viewWillAppear(_animated: boolean): void;
  /** Exported member.*/
  viewDidAppear(_animated: boolean): void;
  /** Exported member.*/
  viewWillDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewDidDisappear(_animated: boolean): void;
  /** Exported member.*/
  viewWillLayoutSubviews(): void;
  /** Exported member.*/
  viewDidLayoutSubviews(): void;
  /** Exported member.*/
  didReceiveMemoryWarning(): void;
  /** Exported member.*/
  isBeingPresented(): boolean;
  /** Exported member.*/
  isBeingDismissed(): boolean;
  /** Exported member.*/
  isMovingToParentViewController(): boolean;
  /** Exported member.*/
  isMovingFromParentViewController(): boolean;
  /** Exported member.*/
  presentViewControllerAnimatedCompletion(_viewControllerToPresent: UIViewController | null, _flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  dismissViewControllerAnimatedCompletion(_flag: boolean, _completion: unknown): void;
  /** Exported member.*/
  presentModalViewControllerAnimated(_modalViewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  dismissModalViewControllerAnimated(_animated: boolean): void;
  /** Exported member.*/
  disablesAutomaticKeyboardDismissal(): boolean;
  /** Exported member.*/
  preferredStatusBarStyle(): number;
  /** Exported member.*/
  prefersStatusBarHidden(): boolean;
  /** Exported member.*/
  preferredStatusBarUpdateAnimation(): number;
  /** Exported member.*/
  setNeedsStatusBarAppearanceUpdate(): void;
  /** Exported member.*/
  shouldAutorotateToInterfaceOrientation(_toInterfaceOrientation: number): boolean;
  /** Exported member.*/
  shouldAutorotate(): boolean;
  /** Exported member.*/
  supportedInterfaceOrientations(): number;
  /** Exported member.*/
  preferredInterfaceOrientationForPresentation(): number;
  /** Exported member.*/
  rotatingHeaderView(): UIView | null;
  /** Exported member.*/
  rotatingFooterView(): UIView | null;
  /** Exported member.*/
  willRotateToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didRotateFromInterfaceOrientation(_fromInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  willAnimateFirstHalfOfRotationToInterfaceOrientationDuration(_toInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  didAnimateFirstHalfOfRotationToInterfaceOrientation(_toInterfaceOrientation: number): void;
  /** Exported member.*/
  willAnimateSecondHalfOfRotationFromInterfaceOrientationDuration(_fromInterfaceOrientation: number, _duration: number): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  editButtonItem(): UIBarButtonItem | null;
  /** Exported member.*/
  addChildViewController(_childController: UIViewController | null): void;
  /** Exported member.*/
  removeFromParentViewController(_unused: unknown): void;
  /** Exported member.*/
  transitionFromViewControllerToViewControllerDurationOptionsAnimationsCompletion(_fromViewController: UIViewController | null, _toViewController: UIViewController | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  beginAppearanceTransitionAnimated(_isAppearing: boolean, _animated: boolean): void;
  /** Exported member.*/
  endAppearanceTransition(): void;
  /** Exported member.*/
  childViewControllerForStatusBarStyle(): UIViewController | null;
  /** Exported member.*/
  childViewControllerForStatusBarHidden(): UIViewController | null;
  /** Exported member.*/
  automaticallyForwardAppearanceAndRotationMethodsToChildViewControllers(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardRotationMethods(): boolean;
  /** Exported member.*/
  shouldAutomaticallyForwardAppearanceMethods(): boolean;
  /** Exported member.*/
  willMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  didMoveToParentViewController(_parent: UIViewController | null): void;
  /** Exported member.*/
  encodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  decodeRestorableStateWithCoder(_coder: NSCoder | null): void;
  /** Exported member.*/
  applicationFinishedRestoringState(): void;
  /** Exported member.*/
  updateViewConstraints(): void;
  /** Exported member.*/
  setToolbarItemsAnimated(_toolbarItems: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  readonly document: Document | null;
  /** Exported member.*/
  readonly docMd5: string | null;
  /** Exported member.*/
  readonly notebookId: string | null;
  /** Exported member.*/
  readonly focusNote: Note | null;
  /** Exported member.*/
  readonly visibleFocusNote: Note | null;
  /** Exported member.*/
  readonly selectionText: string | null;
  /** Exported member.*/
  readonly lastFocusNote: Note | null;
  /** Exported member.*/
  readonly currPageNo: number;
  /** Exported member.*/
  readonly currPageIndex: number;
  /** Exported member.*/
  readonly isSelectionText: boolean;
  /** Exported member.*/
  readonly videoPlaybackState: Record<string, unknown> | null;
  /** Exported member.*/
  imageFromSelection(): NSData | null;
  /** Exported member.*/
  imageFromFocusNote(): NSData | null;
  /** Exported member.*/
  setPageAtIndex(_index: number): void;
  /** Exported member.*/
  indicesFromPageNo(_pageNo: number): Array<number> | null;
  /** Exported member.*/
  indexFromPageNo(_pageNo: number): number;
  /** Exported member.*/
  pageNoFromIndex(_index: number): number;
  /** Exported member.*/
  highlightFromSelection(): unknown;
  /** Exported member.*/
  playVideo(): Record<string, unknown> | null;
  /** Exported member.*/
  pauseVideo(): Record<string, unknown> | null;
  /** Exported member.*/
  seekVideo(_time: number | null): Record<string, unknown> | null;
  /** Exported member.*/
  setVideoPlaybackRate(_rate: number | null): Record<string, unknown> | null;
  /** Exported member.*/
  setVideoLoopRange(_start: number | null, _end: number | null, _enabled: boolean): Record<string, unknown> | null;
  /** Exported member.*/
  clearVideoLoopRange(): Record<string, unknown> | null;
}
/** Native class object for {@link DocumentController}.*/
interface DocumentControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): DocumentController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): DocumentController | null;
  /** Exported member.*/
  alloc(): DocumentController | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  attemptRotationToDeviceOrientation(): void;
}
/** Host-injected native class object.*/
declare var DocumentController: DocumentControllerClass;

/** Native instance exported as `MindMapView`.
 */
interface MindMapView {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  autoresizesSubviews: boolean;
  /** Exported member.*/
  readonly subviews: unknown[] | null;
  /** Exported member.*/
  clipsToBounds: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  overrideUserInterfaceStyle: number;
  /** Exported member.*/
  readonly window: UIWindow | null;
  /** Exported member.*/
  transform: CGAffineTransform;
  /** Exported member.*/
  tag: number;
  /** Exported member.*/
  readonly layer: CALayer | null;
  /** Exported member.*/
  userInteractionEnabled: boolean;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  exclusiveTouch: boolean;
  /** Exported member.*/
  alpha: number;
  /** Exported member.*/
  clearsContextBeforeDrawing: boolean;
  /** Exported member.*/
  multipleTouchEnabled: boolean;
  /** Exported member.*/
  autoresizingMask: number;
  /** Exported member.*/
  contentMode: number;
  /** Exported member.*/
  contentStretch: CGRect;
  /** Exported member.*/
  readonly superview: UIView | null;
  /** Exported member.*/
  gestureRecognizers: unknown[] | null;
  /** Exported member.*/
  center: CGPoint;
  /** Exported member.*/
  contentScaleFactor: number;
  /** Exported member.*/
  initWithFrame(_frame: CGRect): MindMapView | null;
  /** Exported member.*/
  hitTestWithEvent(_point: CGPoint, _event: UIEvent | null): UIView | null;
  /** Exported member.*/
  pointInsideWithEvent(_point: CGPoint, _event: UIEvent | null): boolean;
  /** Exported member.*/
  convertPointToView(_point: CGPoint, _view: UIView | null): CGPoint;
  /** Exported member.*/
  convertPointFromView(_point: CGPoint, _view: UIView | null): CGPoint;
  /** Exported member.*/
  convertRectToView(_rect: CGRect, _view: UIView | null): CGRect;
  /** Exported member.*/
  convertRectFromView(_rect: CGRect, _view: UIView | null): CGRect;
  /** Exported member.*/
  sizeThatFits(_size: CGSize): CGSize;
  /** Exported member.*/
  sizeToFit(): void;
  /** Exported member.*/
  removeFromSuperview(_unused: unknown): void;
  /** Exported member.*/
  insertSubviewAtIndex(_view: UIView | null, _index: number): void;
  /** Exported member.*/
  exchangeSubviewAtIndexWithSubviewAtIndex(_index1: number, _index2: number): void;
  /** Exported member.*/
  addSubview(_view: UIView | null): void;
  /** Exported member.*/
  insertSubviewBelowSubview(_view: UIView | null, _siblingSubview: UIView | null): void;
  /** Exported member.*/
  insertSubviewAboveSubview(_view: UIView | null, _siblingSubview: UIView | null): void;
  /** Exported member.*/
  bringSubviewToFront(_view: UIView | null): void;
  /** Exported member.*/
  sendSubviewToBack(_view: UIView | null): void;
  /** Exported member.*/
  didAddSubview(_subview: UIView | null): void;
  /** Exported member.*/
  willRemoveSubview(_subview: UIView | null): void;
  /** Exported member.*/
  willMoveToSuperview(_newSuperview: UIView | null): void;
  /** Exported member.*/
  didMoveToSuperview(): void;
  /** Exported member.*/
  willMoveToWindow(_newWindow: UIWindow | null): void;
  /** Exported member.*/
  didMoveToWindow(): void;
  /** Exported member.*/
  isDescendantOfView(_view: UIView | null): boolean;
  /** Exported member.*/
  viewWithTag(_tag: number): UIView | null;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSubviews(): void;
  /** Exported member.*/
  drawRect(_rect: CGRect): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_rect: CGRect): void;
  /** Exported member.*/
  addGestureRecognizer(_gestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  removeGestureRecognizer(_gestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  gestureRecognizerShouldBegin(_gestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  alignmentRectForFrame(_frame: CGRect): CGRect;
  /** Exported member.*/
  frameForAlignmentRect(_alignmentRect: CGRect): CGRect;
  /** Exported member.*/
  alignmentRectInsets(): UIEdgeInsets;
  /** Exported member.*/
  viewForBaselineLayout(): UIView | null;
  /** Exported member.*/
  intrinsicContentSize(): CGSize;
  /** Exported member.*/
  invalidateIntrinsicContentSize(): void;
  /** Exported member.*/
  systemLayoutSizeFittingSize(_targetSize: CGSize): CGSize;
  /** Exported member.*/
  hasAmbiguousLayout(): boolean;
  /** Exported member.*/
  exerciseAmbiguityInLayout(): void;
  /** Exported member.*/
  snapshotViewAfterScreenUpdates(_afterUpdates: boolean): UIView | null;
  /** Exported member.*/
  resizableSnapshotViewFromRectAfterScreenUpdatesWithCapInsets(_rect: CGRect, _afterUpdates: boolean, _capInsets: UIEdgeInsets): UIView | null;
  /** Exported member.*/
  drawViewHierarchyInRectAfterScreenUpdates(_rect: CGRect, _afterUpdates: boolean): boolean;
  /** Exported member.*/
  endEditing(_force: boolean): boolean;
  /** Exported member.*/
  contentOffset: CGPoint;
  /** Exported member.*/
  showsVerticalScrollIndicator: boolean;
  /** Exported member.*/
  showsHorizontalScrollIndicator: boolean;
  /** Exported member.*/
  readonly decelerating: boolean;
  /** Exported member.*/
  decelerationRate: number;
  /** Exported member.*/
  directionalLockEnabled: boolean;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  readonly zooming: boolean;
  /** Exported member.*/
  alwaysBounceHorizontal: boolean;
  /** Exported member.*/
  readonly pinchGestureRecognizer: UIPinchGestureRecognizer | null;
  /** Exported member.*/
  scrollsToTop: boolean;
  /** Exported member.*/
  maximumZoomScale: number;
  /** Exported member.*/
  minimumZoomScale: number;
  /** Exported member.*/
  readonly panGestureRecognizer: UIPanGestureRecognizer | null;
  /** Exported member.*/
  scrollEnabled: boolean;
  /** Exported member.*/
  readonly dragging: boolean;
  /** Exported member.*/
  bounces: boolean;
  /** Exported member.*/
  readonly zoomBouncing: boolean;
  /** Exported member.*/
  pagingEnabled: boolean;
  /** Exported member.*/
  delaysContentTouches: boolean;
  /** Exported member.*/
  scrollIndicatorInsets: UIEdgeInsets;
  /** Exported member.*/
  alwaysBounceVertical: boolean;
  /** Exported member.*/
  contentSize: CGSize;
  /** Exported member.*/
  contentInset: UIEdgeInsets;
  /** Exported member.*/
  bouncesZoom: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  indicatorStyle: number;
  /** Exported member.*/
  zoomScale: number;
  /** Exported member.*/
  canCancelContentTouches: boolean;
  /** Exported member.*/
  setContentOffsetAnimated(_contentOffset: CGPoint, _animated: boolean): void;
  /** Exported member.*/
  scrollRectToVisibleAnimated(_rect: CGRect, _animated: boolean): void;
  /** Exported member.*/
  flashScrollIndicators(): void;
  /** Exported member.*/
  setZoomScaleAnimated(_scale: number, _animated: boolean): void;
  /** Exported member.*/
  zoomToRectAnimated(_rect: CGRect, _animated: boolean): void;
  /** Exported member.*/
  readonly mindmapNodes: unknown[] | null;
  /** Exported member.*/
  readonly selViewLst: unknown[] | null;
}
/** Native class object for {@link MindMapView}.*/
interface MindMapViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): MindMapView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): MindMapView | null;
  /** Exported member.*/
  alloc(): MindMapView | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  layerClass(): NativeClass<NativeObject>;
  /** Exported member.*/
  beginAnimationsContext(_animationID: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  commitAnimations(): void;
  /** Exported member.*/
  setAnimationDelegate(_delegate: unknown): void;
  /** Exported member.*/
  setAnimationWillStartSelector(_selector: string | null): void;
  /** Exported member.*/
  setAnimationDidStopSelector(_selector: string | null): void;
  /** Exported member.*/
  setAnimationDuration(_duration: number): void;
  /** Exported member.*/
  setAnimationDelay(_delay: number): void;
  /** Exported member.*/
  setAnimationStartDate(_startDate: Date | null): void;
  /** Exported member.*/
  setAnimationCurve(_curve: number): void;
  /** Exported member.*/
  setAnimationRepeatCount(_repeatCount: number): void;
  /** Exported member.*/
  setAnimationRepeatAutoreverses(_repeatAutoreverses: boolean): void;
  /** Exported member.*/
  setAnimationBeginsFromCurrentState(_fromCurrentState: boolean): void;
  /** Exported member.*/
  setAnimationTransitionForViewCache(_transition: number, _view: UIView | null, _cache: boolean): void;
  /** Exported member.*/
  setAnimationsEnabled(_enabled: boolean): void;
  /** Exported member.*/
  areAnimationsEnabled(): boolean;
  /** Exported member.*/
  animateWithDurationDelayOptionsAnimationsCompletion(_duration: number, _delay: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  animateWithDurationAnimationsCompletion(_duration: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  animateWithDurationAnimations(_duration: number, _animations: unknown): void;
  /** Exported member.*/
  transitionWithViewDurationOptionsAnimationsCompletion(_view: UIView | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  transitionFromViewToViewDurationOptionsCompletion(_fromView: UIView | null, _toView: UIView | null, _duration: number, _options: number, _completion: unknown): void;
  /** Exported member.*/
  requiresConstraintBasedLayout(): boolean;
}
/** Host-injected native class object.*/
declare var MindMapView: MindMapViewClass;

/** Native instance exported as `OutlineView`.
 */
interface OutlineView {
  /** Exported member.*/
  isEqual(_object: unknown): boolean;
  /** Exported member.*/
  hash(): number;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  self(): unknown;
  /** Exported member.*/
  zone(): NativePointer | null;
  /** Exported member.*/
  performSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  performSelectorWithObject(_aSelector: string | null, _object: unknown): unknown;
  /** Exported member.*/
  performSelectorWithObjectWithObject(_aSelector: string | null, _object1: unknown, _object2: unknown): unknown;
  /** Exported member.*/
  isProxy(): boolean;
  /** Exported member.*/
  isKindOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  isMemberOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  conformsToProtocol(_aProtocol: Protocol | null): boolean;
  /** Exported member.*/
  respondsToSelector(_aSelector: NativeSelector): boolean;
  /** Exported member.*/
  retain(): unknown;
  /** Exported member.*/
  release(): void;
  /** Exported member.*/
  autorelease(): unknown;
  /** Exported member.*/
  retainCount(): number;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  debugDescription(): string | null;
  /** Exported member.*/
  dealloc(): void;
  /** Exported member.*/
  finalize(): void;
  /** Exported member.*/
  copy(_sender: unknown): void;
  /** Exported member.*/
  mutableCopy(): unknown;
  /** Exported member.*/
  methodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  doesNotRecognizeSelector(_aSelector: string | null): void;
  /** Exported member.*/
  forwardingTargetForSelector(_aSelector: string | null): unknown;
  /** Exported member.*/
  forwardInvocation(_anInvocation: NSInvocation | null): void;
  /** Exported member.*/
  methodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  allowsWeakReference(): boolean;
  /** Exported member.*/
  retainWeakReference(): boolean;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
  /** Exported member.*/
  nextResponder(): UIResponder | null;
  /** Exported member.*/
  canBecomeFirstResponder(): boolean;
  /** Exported member.*/
  becomeFirstResponder(): boolean;
  /** Exported member.*/
  canResignFirstResponder(): boolean;
  /** Exported member.*/
  resignFirstResponder(): boolean;
  /** Exported member.*/
  isFirstResponder(): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  motionBeganWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionEndedWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  motionCancelledWithEvent(_motion: number, _event: UIEvent | null): void;
  /** Exported member.*/
  remoteControlReceivedWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  canPerformActionWithSender(_action: NativeSelector, _sender: unknown): boolean;
  /** Exported member.*/
  targetForActionWithSender(_action: NativeSelector, _sender: unknown): unknown;
  /** Exported member.*/
  cut(_sender: unknown): void;
  /** Exported member.*/
  paste(_sender: unknown): void;
  /** Exported member.*/
  select(_sender: unknown): void;
  /** Exported member.*/
  selectAll(_sender: unknown): void;
  /** Exported member.*/
  delete(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionLeftToRight(_sender: unknown): void;
  /** Exported member.*/
  makeTextWritingDirectionRightToLeft(_sender: unknown): void;
  /** Exported member.*/
  toggleBoldface(_sender: unknown): void;
  /** Exported member.*/
  toggleItalics(_sender: unknown): void;
  /** Exported member.*/
  toggleUnderline(_sender: unknown): void;
  /** Exported member.*/
  increaseSize(_sender: unknown): void;
  /** Exported member.*/
  decreaseSize(_sender: unknown): void;
  /** Exported member.*/
  reloadInputViews(): void;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  autoresizesSubviews: boolean;
  /** Exported member.*/
  readonly subviews: unknown[] | null;
  /** Exported member.*/
  clipsToBounds: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  overrideUserInterfaceStyle: number;
  /** Exported member.*/
  readonly window: UIWindow | null;
  /** Exported member.*/
  transform: CGAffineTransform;
  /** Exported member.*/
  tag: number;
  /** Exported member.*/
  readonly layer: CALayer | null;
  /** Exported member.*/
  userInteractionEnabled: boolean;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  exclusiveTouch: boolean;
  /** Exported member.*/
  alpha: number;
  /** Exported member.*/
  clearsContextBeforeDrawing: boolean;
  /** Exported member.*/
  multipleTouchEnabled: boolean;
  /** Exported member.*/
  autoresizingMask: number;
  /** Exported member.*/
  contentMode: number;
  /** Exported member.*/
  contentStretch: CGRect;
  /** Exported member.*/
  readonly superview: UIView | null;
  /** Exported member.*/
  gestureRecognizers: unknown[] | null;
  /** Exported member.*/
  center: CGPoint;
  /** Exported member.*/
  contentScaleFactor: number;
  /** Exported member.*/
  initWithFrame(_frame: CGRect): OutlineView | null;
  /** Exported member.*/
  hitTestWithEvent(_point: CGPoint, _event: UIEvent | null): UIView | null;
  /** Exported member.*/
  pointInsideWithEvent(_point: CGPoint, _event: UIEvent | null): boolean;
  /** Exported member.*/
  convertPointToView(_point: CGPoint, _view: UIView | null): CGPoint;
  /** Exported member.*/
  convertPointFromView(_point: CGPoint, _view: UIView | null): CGPoint;
  /** Exported member.*/
  convertRectToView(_rect: CGRect, _view: UIView | null): CGRect;
  /** Exported member.*/
  convertRectFromView(_rect: CGRect, _view: UIView | null): CGRect;
  /** Exported member.*/
  sizeThatFits(_size: CGSize): CGSize;
  /** Exported member.*/
  sizeToFit(): void;
  /** Exported member.*/
  removeFromSuperview(_unused: unknown): void;
  /** Exported member.*/
  insertSubviewAtIndex(_view: UIView | null, _index: number): void;
  /** Exported member.*/
  exchangeSubviewAtIndexWithSubviewAtIndex(_index1: number, _index2: number): void;
  /** Exported member.*/
  addSubview(_view: UIView | null): void;
  /** Exported member.*/
  insertSubviewBelowSubview(_view: UIView | null, _siblingSubview: UIView | null): void;
  /** Exported member.*/
  insertSubviewAboveSubview(_view: UIView | null, _siblingSubview: UIView | null): void;
  /** Exported member.*/
  bringSubviewToFront(_view: UIView | null): void;
  /** Exported member.*/
  sendSubviewToBack(_view: UIView | null): void;
  /** Exported member.*/
  didAddSubview(_subview: UIView | null): void;
  /** Exported member.*/
  willRemoveSubview(_subview: UIView | null): void;
  /** Exported member.*/
  willMoveToSuperview(_newSuperview: UIView | null): void;
  /** Exported member.*/
  didMoveToSuperview(): void;
  /** Exported member.*/
  willMoveToWindow(_newWindow: UIWindow | null): void;
  /** Exported member.*/
  didMoveToWindow(): void;
  /** Exported member.*/
  isDescendantOfView(_view: UIView | null): boolean;
  /** Exported member.*/
  viewWithTag(_tag: number): UIView | null;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSubviews(): void;
  /** Exported member.*/
  drawRect(_rect: CGRect): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_rect: CGRect): void;
  /** Exported member.*/
  addGestureRecognizer(_gestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  removeGestureRecognizer(_gestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  gestureRecognizerShouldBegin(_gestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  alignmentRectForFrame(_frame: CGRect): CGRect;
  /** Exported member.*/
  frameForAlignmentRect(_alignmentRect: CGRect): CGRect;
  /** Exported member.*/
  alignmentRectInsets(): UIEdgeInsets;
  /** Exported member.*/
  viewForBaselineLayout(): UIView | null;
  /** Exported member.*/
  intrinsicContentSize(): CGSize;
  /** Exported member.*/
  invalidateIntrinsicContentSize(): void;
  /** Exported member.*/
  systemLayoutSizeFittingSize(_targetSize: CGSize): CGSize;
  /** Exported member.*/
  hasAmbiguousLayout(): boolean;
  /** Exported member.*/
  exerciseAmbiguityInLayout(): void;
  /** Exported member.*/
  snapshotViewAfterScreenUpdates(_afterUpdates: boolean): UIView | null;
  /** Exported member.*/
  resizableSnapshotViewFromRectAfterScreenUpdatesWithCapInsets(_rect: CGRect, _afterUpdates: boolean, _capInsets: UIEdgeInsets): UIView | null;
  /** Exported member.*/
  drawViewHierarchyInRectAfterScreenUpdates(_rect: CGRect, _afterUpdates: boolean): boolean;
  /** Exported member.*/
  endEditing(_force: boolean): boolean;
  /** Exported member.*/
  contentOffset: CGPoint;
  /** Exported member.*/
  showsVerticalScrollIndicator: boolean;
  /** Exported member.*/
  showsHorizontalScrollIndicator: boolean;
  /** Exported member.*/
  readonly decelerating: boolean;
  /** Exported member.*/
  decelerationRate: number;
  /** Exported member.*/
  directionalLockEnabled: boolean;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  readonly zooming: boolean;
  /** Exported member.*/
  alwaysBounceHorizontal: boolean;
  /** Exported member.*/
  readonly pinchGestureRecognizer: UIPinchGestureRecognizer | null;
  /** Exported member.*/
  scrollsToTop: boolean;
  /** Exported member.*/
  maximumZoomScale: number;
  /** Exported member.*/
  minimumZoomScale: number;
  /** Exported member.*/
  readonly panGestureRecognizer: UIPanGestureRecognizer | null;
  /** Exported member.*/
  scrollEnabled: boolean;
  /** Exported member.*/
  readonly dragging: boolean;
  /** Exported member.*/
  bounces: boolean;
  /** Exported member.*/
  readonly zoomBouncing: boolean;
  /** Exported member.*/
  pagingEnabled: boolean;
  /** Exported member.*/
  delaysContentTouches: boolean;
  /** Exported member.*/
  scrollIndicatorInsets: UIEdgeInsets;
  /** Exported member.*/
  alwaysBounceVertical: boolean;
  /** Exported member.*/
  contentSize: CGSize;
  /** Exported member.*/
  contentInset: UIEdgeInsets;
  /** Exported member.*/
  bouncesZoom: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  indicatorStyle: number;
  /** Exported member.*/
  zoomScale: number;
  /** Exported member.*/
  canCancelContentTouches: boolean;
  /** Exported member.*/
  setContentOffsetAnimated(_contentOffset: CGPoint, _animated: boolean): void;
  /** Exported member.*/
  scrollRectToVisibleAnimated(_rect: CGRect, _animated: boolean): void;
  /** Exported member.*/
  flashScrollIndicators(): void;
  /** Exported member.*/
  setZoomScaleAnimated(_scale: number, _animated: boolean): void;
  /** Exported member.*/
  zoomToRectAnimated(_rect: CGRect, _animated: boolean): void;
  /** Exported member.*/
  readonly style: number;
  /** Exported member.*/
  dataSource: unknown;
  /** Exported member.*/
  rowHeight: number;
  /** Exported member.*/
  separatorStyle: number;
  /** Exported member.*/
  separatorColor: UIColor | null;
  /** Exported member.*/
  tableHeaderView: UIView | null;
  /** Exported member.*/
  tableFooterView: UIView | null;
  /** Exported member.*/
  backgroundView: UIView | null;
  /** Exported member.*/
  allowsSelection: boolean;
  /** Exported member.*/
  allowsSelectionDuringEditing: boolean;
  /** Exported member.*/
  allowsMultipleSelectionDuringEditing: boolean;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  sectionHeaderHeight: number;
  /** Exported member.*/
  sectionFooterHeight: number;
  /** Exported member.*/
  reloadData(): void;
  /** Exported member.*/
  reloadSectionIndexTitles(): void;
  /** Exported member.*/
  numberOfSections(): number;
  /** Exported member.*/
  numberOfRowsInSection(_section: number): number;
  /** Exported member.*/
  rectForSection(_section: number): CGRect;
  /** Exported member.*/
  rectForHeaderInSection(_section: number): CGRect;
  /** Exported member.*/
  rectForFooterInSection(_section: number): CGRect;
  /** Exported member.*/
  rectForRowAtIndexPath(_indexPath: NSIndexPath | null): CGRect;
  /** Exported member.*/
  indexPathForRowAtPoint(_point: CGPoint): NSIndexPath | null;
  /** Exported member.*/
  indexPathForCell(_cell: UITableViewCell | null): NSIndexPath | null;
  /** Exported member.*/
  indexPathsForRowsInRect(_rect: CGRect): unknown[] | null;
  /** Exported member.*/
  cellForRowAtIndexPath(_indexPath: NSIndexPath | null): UITableViewCell | null;
  /** Exported member.*/
  visibleCells(): unknown[] | null;
  /** Exported member.*/
  indexPathsForVisibleRows(): unknown[] | null;
  /** Exported member.*/
  headerViewForSection(_section: number): UIView | null;
  /** Exported member.*/
  footerViewForSection(_section: number): UIView | null;
  /** Exported member.*/
  scrollToRowAtIndexPathAtScrollPositionAnimated(_indexPath: NSIndexPath | null, _scrollPosition: number, _animated: boolean): void;
  /** Exported member.*/
  scrollToNearestSelectedRowAtScrollPositionAnimated(_scrollPosition: number, _animated: boolean): void;
  /** Exported member.*/
  beginUpdates(): void;
  /** Exported member.*/
  endUpdates(): void;
  /** Exported member.*/
  insertSectionsWithRowAnimation(_sections: NSIndexSet | null, _animation: number): void;
  /** Exported member.*/
  deleteSectionsWithRowAnimation(_sections: NSIndexSet | null, _animation: number): void;
  /** Exported member.*/
  reloadSectionsWithRowAnimation(_sections: NSIndexSet | null, _animation: number): void;
  /** Exported member.*/
  moveSectionToSection(_section: number, _newSection: number): void;
  /** Exported member.*/
  insertRowsAtIndexPathsWithRowAnimation(_indexPaths: unknown[] | null, _animation: number): void;
  /** Exported member.*/
  deleteRowsAtIndexPathsWithRowAnimation(_indexPaths: unknown[] | null, _animation: number): void;
  /** Exported member.*/
  reloadRowsAtIndexPathsWithRowAnimation(_indexPaths: unknown[] | null, _animation: number): void;
  /** Exported member.*/
  moveRowAtIndexPathToIndexPath(_indexPath: NSIndexPath | null, _newIndexPath: NSIndexPath | null): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
  /** Exported member.*/
  indexPathForSelectedRow(): NSIndexPath | null;
  /** Exported member.*/
  indexPathsForSelectedRows(): unknown[] | null;
  /** Exported member.*/
  selectRowAtIndexPathAnimatedScrollPosition(_indexPath: NSIndexPath | null, _animated: boolean, _scrollPosition: number): void;
  /** Exported member.*/
  deselectRowAtIndexPathAnimated(_indexPath: NSIndexPath | null, _animated: boolean): void;
  /** Exported member.*/
  dequeueReusableCellWithIdentifier(_identifier: string | null): unknown;
  /** Exported member.*/
  dequeueReusableCellWithIdentifierForIndexPath(_identifier: string | null, _indexPath: NSIndexPath | null): unknown;
  /** Exported member.*/
  dequeueReusableHeaderFooterViewWithIdentifier(_identifier: string | null): unknown;
  /** Exported member.*/
  registerClassForCellReuseIdentifier(_cellClass: unknown, _identifier: string | null): void;
  /** Exported member.*/
  registerClassForHeaderFooterViewReuseIdentifier(_aClass: unknown, _identifier: string | null): void;
  /** Exported member.*/
  noteFromIndexPath(_indexPath: NSIndexPath | null): Note | null;
}
/** Native class object for {@link OutlineView}.*/
interface OutlineViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): OutlineView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): OutlineView | null;
  /** Exported member.*/
  alloc(): OutlineView | null;
  /** Exported member.*/
  copyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  mutableCopyWithZone(_zone: NativePointer | null): unknown;
  /** Exported member.*/
  superclass(): NativeClass<NativeObject>;
  /** Exported member.*/
  class(): NativeClass<NativeObject>;
  /** Exported member.*/
  instancesRespondToSelector(_aSelector: string | null): boolean;
  /** Exported member.*/
  conformsToProtocol(_protocol: Protocol | null): boolean;
  /** Exported member.*/
  instanceMethodForSelector(_aSelector: NativeSelector): IMP;
  /** Exported member.*/
  instanceMethodSignatureForSelector(_aSelector: string | null): NSMethodSignature | null;
  /** Exported member.*/
  description(): string | null;
  /** Exported member.*/
  isSubclassOfClass(_aClass: NativeClass<NativeObject>): boolean;
  /** Exported member.*/
  resolveClassMethod(_sel: string | null): boolean;
  /** Exported member.*/
  resolveInstanceMethod(_sel: string | null): boolean;
  /** Exported member.*/
  keyCommandWithInputModifierFlagsAction(_input: string | null, _modifierFlags: number, _action: NativeSelector): UIKeyCommand | null;
  /** Exported member.*/
  clearTextInputContextIdentifier(_identifier: string | null): void;
  /** Exported member.*/
  layerClass(): NativeClass<NativeObject>;
  /** Exported member.*/
  beginAnimationsContext(_animationID: string | null, _context: NativePointer | null): void;
  /** Exported member.*/
  commitAnimations(): void;
  /** Exported member.*/
  setAnimationDelegate(_delegate: unknown): void;
  /** Exported member.*/
  setAnimationWillStartSelector(_selector: string | null): void;
  /** Exported member.*/
  setAnimationDidStopSelector(_selector: string | null): void;
  /** Exported member.*/
  setAnimationDuration(_duration: number): void;
  /** Exported member.*/
  setAnimationDelay(_delay: number): void;
  /** Exported member.*/
  setAnimationStartDate(_startDate: Date | null): void;
  /** Exported member.*/
  setAnimationCurve(_curve: number): void;
  /** Exported member.*/
  setAnimationRepeatCount(_repeatCount: number): void;
  /** Exported member.*/
  setAnimationRepeatAutoreverses(_repeatAutoreverses: boolean): void;
  /** Exported member.*/
  setAnimationBeginsFromCurrentState(_fromCurrentState: boolean): void;
  /** Exported member.*/
  setAnimationTransitionForViewCache(_transition: number, _view: UIView | null, _cache: boolean): void;
  /** Exported member.*/
  setAnimationsEnabled(_enabled: boolean): void;
  /** Exported member.*/
  areAnimationsEnabled(): boolean;
  /** Exported member.*/
  animateWithDurationDelayOptionsAnimationsCompletion(_duration: number, _delay: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  animateWithDurationAnimationsCompletion(_duration: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  animateWithDurationAnimations(_duration: number, _animations: unknown): void;
  /** Exported member.*/
  transitionWithViewDurationOptionsAnimationsCompletion(_view: UIView | null, _duration: number, _options: number, _animations: unknown, _completion: unknown): void;
  /** Exported member.*/
  transitionFromViewToViewDurationOptionsCompletion(_fromView: UIView | null, _toView: UIView | null, _duration: number, _options: number, _completion: unknown): void;
  /** Exported member.*/
  requiresConstraintBasedLayout(): boolean;
}
/** Host-injected native class object.*/
declare var OutlineView: OutlineViewClass;

/** Native instance exported as `MindMapNode`.
 */
interface MindMapNode {
  /** Exported member.*/
  readonly note: Note | null;
  /** Exported member.*/
  readonly parentNode: MindMapNode | null;
  /** Exported member.*/
  readonly summaryLinks: unknown[] | null;
  /** Exported member.*/
  readonly childNodes: unknown[] | null;
  /** Exported member.*/
  readonly frame: CGRect;
}
/** Native class object for {@link MindMapNode}.*/
interface MindMapNodeClass {

}
/** Host-injected native class object.*/
declare var MindMapNode: MindMapNodeClass;
