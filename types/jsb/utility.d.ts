/** @module Utility */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `MenuController`.
 */
interface MenuController {
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
  menuTableView: UITableView | null;
  /** Exported member.*/
  commandTable: unknown[] | null;
  /** Exported member.*/
  sections: unknown[] | null;
  /** Exported member.*/
  rowHeight: number;
  /** Exported member.*/
  secHeight: number;
  /** Exported member.*/
  fontSize: number;
}
/** Native class object for {@link MenuController}.*/
interface MenuControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): MenuController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): MenuController | null;
  /** Exported member.*/
  alloc(): MenuController | null;
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
declare var MenuController: MenuControllerClass;

/** Native instance exported as `SpeechManager`.
 */
interface SpeechManager {
  /** Exported member.*/
  readonly speaking: boolean;
  /** Exported member.*/
  readonly sysSpeaking: boolean;
  /** Exported member.*/
  readonly paused: boolean;
  /** Exported member.*/
  sceneWindow: UIWindow | null;
  /** Exported member.*/
  languageCode: string | null;
  /** Exported member.*/
  startSpeechNotes(_notes: unknown[] | null): void;
  /** Exported member.*/
  stopSpeech(): void;
  /** Exported member.*/
  pauseSpeech(): void;
  /** Exported member.*/
  continueSpeech(): void;
  /** Exported member.*/
  prevSpeech(): void;
  /** Exported member.*/
  nextSpeech(): void;
  /** Exported member.*/
  canPrev(): boolean;
  /** Exported member.*/
  canNext(): boolean;
  /** Exported member.*/
  playText(_text: string | null): void;
  /** Exported member.*/
  playTextLanguageTxt(_text: string | null, _languageTxt: string | null): void;
}
/** Native class object for {@link SpeechManager}.*/
interface SpeechManagerClass {
  /** Exported member.*/
  sharedInstance(): SpeechManager | null;
}
/** Host-injected native class object.*/
declare var SpeechManager: SpeechManagerClass;

/** Native instance exported as `SQLiteDatabase`.
 */
interface SQLiteDatabase {
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
  copy(): unknown;
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
  traceExecution: boolean;
  /** Exported member.*/
  checkedOut: boolean;
  /** Exported member.*/
  crashOnErrors: boolean;
  /** Exported member.*/
  logsErrors: boolean;
  /** Exported member.*/
  cachedStatements: Record<string, unknown> | null;
  /** Exported member.*/
  initWithPath(_inPath: string | null): SQLiteDatabase | null;
  /** Exported member.*/
  open(): boolean;
  /** Exported member.*/
  close(): boolean;
  /** Exported member.*/
  goodConnection(): boolean;
  /** Exported member.*/
  executeUpdateWithArgumentsInArray(_sql: string | null, _arguments: unknown[] | null): boolean;
  /** Exported member.*/
  executeUpdateWithParameterDictionary(_sql: string | null, _arguments: Record<string, unknown> | null): boolean;
  /** Exported member.*/
  executeStatements(_sql: string | null): boolean;
  /** Exported member.*/
  changes(): number;
  /** Exported member.*/
  executeQueryWithArgumentsInArray(_sql: string | null, _arguments: unknown[] | null): SQLiteResultSet | null;
  /** Exported member.*/
  executeQueryWithParameterDictionary(_sql: string | null, _arguments: Record<string, unknown> | null): SQLiteResultSet | null;
  /** Exported member.*/
  beginTransaction(): boolean;
  /** Exported member.*/
  beginDeferredTransaction(): boolean;
  /** Exported member.*/
  commit(): boolean;
  /** Exported member.*/
  rollback(): boolean;
  /** Exported member.*/
  inTransaction(): boolean;
  /** Exported member.*/
  clearCachedStatements(): void;
  /** Exported member.*/
  closeOpenResultSets(): void;
  /** Exported member.*/
  hasOpenResultSets(): boolean;
  /** Exported member.*/
  shouldCacheStatements(): boolean;
  /** Exported member.*/
  setShouldCacheStatements(_value: boolean): void;
  /** Exported member.*/
  setKey(_key: string | null): boolean;
  /** Exported member.*/
  rekey(_key: string | null): boolean;
  /** Exported member.*/
  setKeyWithData(_keyData: NSData | null): boolean;
  /** Exported member.*/
  rekeyWithData(_keyData: NSData | null): boolean;
  /** Exported member.*/
  databasePath(): string | null;
  /** Exported member.*/
  lastErrorMessage(): string | null;
  /** Exported member.*/
  lastErrorCode(): number;
  /** Exported member.*/
  hadError(): boolean;
  /** Exported member.*/
  lastError(): NSError | null;
  /** Exported member.*/
  setMaxBusyRetryTimeInterval(_timeoutInSeconds: number): void;
  /** Exported member.*/
  maxBusyRetryTimeInterval(): number;
  /** Exported member.*/
  hasDateFormatter(): boolean;
  /** Exported member.*/
  setDateFormat(_format: NSDateFormatter | null): void;
  /** Exported member.*/
  dateFromString(_s: string | null): Date | null;
  /** Exported member.*/
  stringFromDate(_date: Date | null): string | null;
}
/** Native class object for {@link SQLiteDatabase}.*/
interface SQLiteDatabaseClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): SQLiteDatabase | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): SQLiteDatabase | null;
  /** Exported member.*/
  alloc(): SQLiteDatabase | null;
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
  databaseWithPath(_inPath: string | null): SQLiteDatabase | null;
  /** Exported member.*/
  isSQLiteThreadSafe(): boolean;
  /** Exported member.*/
  sqliteLibVersion(): string | null;
  /** Exported member.*/
  FMDBUserVersion(): string | null;
  /** Exported member.*/
  FMDBVersion(): number;
  /** Exported member.*/
  storeableDateFormat(_format: string | null): NSDateFormatter | null;
}
/** Host-injected native class object.*/
declare var SQLiteDatabase: SQLiteDatabaseClass;

/** Native instance exported as `SQLiteResultSet`.
 */
interface SQLiteResultSet {
  /** Exported member.*/
  query: string | null;
  /** Exported member.*/
  readonly columnNameToIndexMap: Record<string, unknown> | null;
  /** Exported member.*/
  statement: SQLiteStatement | null;
  /** Exported member.*/
  close(): void;
  /** Exported member.*/
  setParentDB(_newDb: SQLiteDatabase | null): void;
  /** Exported member.*/
  next(): boolean;
  /** Exported member.*/
  nextWithError(_outErr: NSError | null): boolean;
  /** Exported member.*/
  hasAnotherRow(): boolean;
  /** Exported member.*/
  columnCount(): number;
  /** Exported member.*/
  columnIndexForName(_columnName: string | null): number;
  /** Exported member.*/
  columnNameForIndex(_columnIdx: number): string | null;
  /** Exported member.*/
  intForColumn(_columnName: string | null): number;
  /** Exported member.*/
  intForColumnIndex(_columnIdx: number): number;
  /** Exported member.*/
  longForColumn(_columnName: string | null): number;
  /** Exported member.*/
  longForColumnIndex(_columnIdx: number): number;
  /** Exported member.*/
  longLongIntForColumn(_columnName: string | null): number;
  /** Exported member.*/
  longLongIntForColumnIndex(_columnIdx: number): number;
  /** Exported member.*/
  unsignedLongLongIntForColumn(_columnName: string | null): number;
  /** Exported member.*/
  unsignedLongLongIntForColumnIndex(_columnIdx: number): number;
  /** Exported member.*/
  boolForColumn(_columnName: string | null): boolean;
  /** Exported member.*/
  boolForColumnIndex(_columnIdx: number): boolean;
  /** Exported member.*/
  doubleForColumn(_columnName: string | null): number;
  /** Exported member.*/
  doubleForColumnIndex(_columnIdx: number): number;
  /** Exported member.*/
  stringForColumn(_columnName: string | null): string | null;
  /** Exported member.*/
  stringForColumnIndex(_columnIdx: number): string | null;
  /** Exported member.*/
  dateForColumn(_columnName: string | null): Date | null;
  /** Exported member.*/
  dateForColumnIndex(_columnIdx: number): Date | null;
  /** Exported member.*/
  dataForColumn(_columnName: string | null): NSData | null;
  /** Exported member.*/
  dataForColumnIndex(_columnIdx: number): NSData | null;
  /** Exported member.*/
  objectForColumnName(_columnName: string | null): unknown;
  /** Exported member.*/
  objectForColumnIndex(_columnIdx: number): unknown;
  /** Exported member.*/
  objectForKeyedSubscript(_columnName: string | null): unknown;
  /** Exported member.*/
  objectAtIndexedSubscript(_columnIdx: number): unknown;
  /** Exported member.*/
  columnIndexIsNull(_columnIdx: number): boolean;
  /** Exported member.*/
  columnIsNull(_columnName: string | null): boolean;
  /** Exported member.*/
  resultDictionary(): Record<string, unknown> | null;
  /** Exported member.*/
  kvcMagic(_object: unknown): void;
}
/** Native class object for {@link SQLiteResultSet}.*/
interface SQLiteResultSetClass {
  /** Exported member.*/
  resultSetWithStatementUsingParentDatabase(_statement: SQLiteStatement | null, _aDB: SQLiteDatabase | null): SQLiteResultSet | null;
}
/** Host-injected native class object.*/
declare var SQLiteResultSet: SQLiteResultSetClass;

/** Native instance exported as `SQLiteStatement`.
 */
interface SQLiteStatement {
  /** Exported member.*/
  useCount: number;
  /** Exported member.*/
  query: string | null;
  /** Exported member.*/
  inUse: boolean;
  /** Exported member.*/
  close(): void;
  /** Exported member.*/
  reset(): void;
}
/** Native class object for {@link SQLiteStatement}.*/
interface SQLiteStatementClass {

}
/** Host-injected native class object.*/
declare var SQLiteStatement: SQLiteStatementClass;

/** Native instance exported as `UndoManager`.
 */
interface UndoManager {
  /** Exported member.*/
  undoGrouping(_actionName: string | null, _topicid: string | null, _block: unknown): void;
  /** Exported member.*/
  undo(): void;
  /** Exported member.*/
  redo(): void;
  /** Exported member.*/
  canUndo(): boolean;
  /** Exported member.*/
  canRedo(): boolean;
  /** Exported member.*/
  clearAll(): void;
}
/** Native class object for {@link UndoManager}.*/
interface UndoManagerClass {
  /** Exported member.*/
  sharedInstance(): UndoManager | null;
}
/** Host-injected native class object.*/
declare var UndoManager: UndoManagerClass;

/** Native instance exported as `ZipArchive`.
 */
interface ZipArchive {
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
  copy(): unknown;
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
  initWithPath(_path: string | null): ZipArchive | null;
  /** Exported member.*/
  open(): boolean;
  /** Exported member.*/
  writeFile(_path: string | null): boolean;
  /** Exported member.*/
  writeDataFilename(_data: NSData | null, _filename: string | null): boolean;
  /** Exported member.*/
  close(): boolean;
}
/** Native class object for {@link ZipArchive}.*/
interface ZipArchiveClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): ZipArchive | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): ZipArchive | null;
  /** Exported member.*/
  alloc(): ZipArchive | null;
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
  unzipFileAtPathToDestination(_path: string | null, _destination: string | null): boolean;
  /** Exported member.*/
  unzipFileAtPathToDestinationOverwritePassword(_path: string | null, _destination: string | null, _overwrite: boolean, _password: string | null): boolean;
  /** Exported member.*/
  createZipFileAtPathWithFilesAtPaths(_path: string | null, _filenames: unknown[] | null): boolean;
  /** Exported member.*/
  createZipFileAtPathWithContentsOfDirectory(_path: string | null, _directoryPath: string | null): boolean;
}
/** Host-injected native class object.*/
declare var ZipArchive: ZipArchiveClass;
