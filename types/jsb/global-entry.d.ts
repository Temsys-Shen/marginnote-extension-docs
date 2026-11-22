/** @module 全局与入口 */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `Application`.
 */
interface Application {
  /** Exported member.*/
  readonly currentTheme: string | null;
  /** Exported member.*/
  readonly defaultTintColorForDarkBackground: UIColor | null;
  /** Exported member.*/
  readonly defaultTintColorForSelected: UIColor | null;
  /** Exported member.*/
  readonly defaultTintColor: UIColor | null;
  /** Exported member.*/
  readonly defaultBookPageColor: UIColor | null;
  /** Exported member.*/
  readonly defaultNotebookColor: UIColor | null;
  /** Exported member.*/
  readonly defaultTextColor: UIColor | null;
  /** Exported member.*/
  readonly defaultDisableColor: UIColor | null;
  /** Exported member.*/
  readonly defaultHighlightBlendColor: UIColor | null;
  /** Exported member.*/
  readonly focusWindow: UIWindow | null;
  /** Exported member.*/
  readonly dbPath: string | null;
  /** Exported member.*/
  readonly documentPath: string | null;
  /** Exported member.*/
  readonly cachePath: string | null;
  /** Exported member.*/
  readonly tempPath: string | null;
  /** Exported member.*/
  readonly osType: number;
  /** Exported member.*/
  readonly appVersion: string | null;
  /** Exported member.*/
  readonly build: string | null;
  /** Exported member.*/
  readonly searchManager: SearchManager | null;
  /** Exported member.*/
  refreshAfterDBChanged(_topicid: string | null): void;
  /** Exported member.*/
  queryCommandWithKeyFlagsInWindow(_command: string | null, _keyFlags: number, _window: UIWindow | null): Record<string, unknown> | null;
  /** Exported member.*/
  processCommandWithKeyFlagsInWindow(_command: string | null, _keyFlags: number, _window: UIWindow | null): void;
  /** Exported member.*/
  openURL(_url: NSURL | null): void;
  /** Exported member.*/
  alert(_message: string | null): void;
  /** Exported member.*/
  showHUD(_message: string | null, _view: UIView | null, _duration: number): void;
  /** Exported member.*/
  waitHUDOnView(_message: string | null, _view: UIView | null): void;
  /** Exported member.*/
  stopWaitHUDOnView(_view: UIView | null): void;
  /** Exported member.*/
  saveFileWithUti(_mfile: string | null, _uti: string | null): void;
  /** Exported member.*/
  studyController(_window: UIWindow | null): StudyController | null;
  /** Exported member.*/
  checkNotifySenderInWindow(_obj: unknown, _window: UIWindow | null): boolean;
  /** Exported member.*/
  openFileWithUTIs(_types: Array<string> | null, _controller: UIViewController | null, _block: unknown): void;
  /** Exported member.*/
  regsiterHtmlCommentEditor(_commentEditor: Record<string, unknown> | null, _htmlEditor: unknown, _htmlRender: unknown, _commentTag: string | null): void;
  /** Exported member.*/
  unregsiterHtmlCommentEditor(_commentTag: string | null): void;
  /** Exported member.*/
  importDocument(_fileUrl: string | null): string | null;
  /** Exported member.*/
  immersiveTemplateForAddon(_addonID: string | null): Record<string, unknown> | null;
  /** Exported member.*/
  aiWordInContext(_note: Note | null, _word: string | null, _sentence: string | null, _completion: unknown): void;
  /** Exported member.*/
  aiPickSenseInContext(_note: Note | null, _word: string | null, _sentence: string | null, _senses: unknown[] | null, _completion: unknown): void;
  /** Exported member.*/
  aiRunTask(_note: Note | null, _taskId: string | null, _params: Record<string, unknown> | null, _completion: unknown): void;
}
/** Native class object for {@link Application}.*/
interface ApplicationClass {
  /** Exported member.*/
  sharedInstance(): Application | null;
}
/** Host-injected native class object.*/
declare var Application: ApplicationClass;

/** Native instance exported as `Database`.
 */
interface Database {
  /** Exported member.*/
  getNotebookById(_topicid: string | null): unknown;
  /** Exported member.*/
  getMediaByHash(_hash: string | null): NSData | null;
  /** Exported member.*/
  getNoteById(_noteid: string | null): unknown;
  /** Exported member.*/
  getDocumentById(_md5: string | null): unknown;
  /** Exported member.*/
  getFlashcardByNoteId(_noteid: string | null, _topicid: string | null): unknown;
  /** Exported member.*/
  getFlashcardsByNoteId(_noteid: string | null): unknown[] | null;
  /** Exported member.*/
  getNotesByHashtag(_hashtag: string | null, _topicid: string | null): unknown[] | null;
  /** Exported member.*/
  hasFlashcardByNoteId(_noteid: string | null): boolean;
  /** Exported member.*/
  savedb(): void;
  /** Exported member.*/
  allNotebooks(): unknown[] | null;
  /** Exported member.*/
  allDocuments(): unknown[] | null;
  /** Exported member.*/
  setNotebookSyncDirty(_topicid: string | null): void;
  /** Exported member.*/
  saveHistoryArchiveKey(_topicid: string | null, _key: string | null): unknown[] | null;
  /** Exported member.*/
  loadHistoryArchiveKey(_topicid: string | null, _key: string | null): unknown[] | null;
  /** Exported member.*/
  deleteBookNote(_noteid: string | null): void;
  /** Exported member.*/
  deleteBookNoteTree(_noteid: string | null): void;
  /** Exported member.*/
  cloneNotesToTopic(_notes: unknown[] | null, _topicid: string | null): unknown[] | null;
  /** Exported member.*/
  cloneNotesToFlashcardsToTopic(_notes: unknown[] | null, _topicid: string | null): unknown[] | null;
  /** Exported member.*/
  exportNotebookStorePath(_topicid: string | null, _storePath: string | null): boolean;
  /** Exported member.*/
  importNotebookFromStorePathMerge(_storePath: string | null, _merge: boolean): unknown;
  /** Exported member.*/
  getSketchNoteForMindMapFocusNoteId(_topicid: string | null, _focusNoteId: string | null): Note | null;
  /** Exported member.*/
  getSketchNoteForDocumentMd5Page(_topicid: string | null, _md5: string | null, _page: number): Note | null;
  /** Exported member.*/
  getSketchNotesForDocumentMd5Page(_topicid: string | null, _md5: string | null, _page: number): Array<Note> | null;
  /** Exported member.*/
  getSketchNotesForMindMap(_topicid: string | null): Array<Note> | null;
  /** Exported member.*/
  createNoteWithTitleTopicid(_title: string | null, _topicid: string | null): Note | null;
  /** Exported member.*/
  createNoteWithTitleTopicidBookmd5Page(_title: string | null, _topicid: string | null, _bookmd5: string | null, _page: number): Note | null;
}
/** Native class object for {@link Database}.*/
interface DatabaseClass {
  /** Exported member.*/
  sharedInstance(): Database | null;
  /** Exported member.*/
  transDictionaryToJSCompatible(_dic: Record<string, unknown> | null): Record<string, unknown> | null;
  /** Exported member.*/
  transArrayToJSCompatible(_arr: unknown[] | null): unknown[] | null;
}
/** Host-injected native class object.*/
declare var Database: DatabaseClass;

/** Native instance exported as `Document`.
 */
interface Document {
  /** Exported member.*/
  readonly currentTopicId: string | null;
  /** Exported member.*/
  readonly lastVisit: Date | null;
  /** Exported member.*/
  readonly docMd5: string | null;
  /** Exported member.*/
  readonly pathFile: string | null;
  /** Exported member.*/
  readonly fullPathFileName: string | null;
  /** Exported member.*/
  readonly docTitle: string | null;
  /** Exported member.*/
  readonly pageCount: number;
  /** Exported member.*/
  textContentsForPageNo(_pageNo: number): unknown[] | null;
  /** Exported member.*/
  pageTextForPageNo(_pageNo: number): string | null;
  /** Exported member.*/
  tocAll(): unknown[] | null;
}
/** Native class object for {@link Document}.*/
interface DocumentClass {

}
/** Host-injected native class object.*/
declare var Document: DocumentClass;

/** Native instance exported as `Note`.
 */
interface Note {
  /** Exported member.*/
  excerptText: string | null;
  /** Exported member.*/
  excerptTextMarkdown: number | null;
  /** Exported member.*/
  noteTitle: string | null;
  /** Exported member.*/
  excerptTextDirty: number | null;
  /** Exported member.*/
  colorIndex: number;
  /** Exported member.*/
  fillIndex: number;
  /** Exported member.*/
  readonly noteId: string | null;
  /** Exported member.*/
  readonly docMd5: string | null;
  /** Exported member.*/
  readonly notebookId: string | null;
  /** Exported member.*/
  readonly startPage: number | null;
  /** Exported member.*/
  readonly endPage: number | null;
  /** Exported member.*/
  readonly startPos: string | null;
  /** Exported member.*/
  readonly endPos: string | null;
  /** Exported member.*/
  readonly excerptPic: Record<string, unknown> | null;
  /** Exported member.*/
  readonly createDate: Date | null;
  /** Exported member.*/
  modifiedDate: Date | null;
  /** Exported member.*/
  readonly mediaList: string | null;
  /** Exported member.*/
  readonly originNoteId: string | null;
  /** Exported member.*/
  mindmapBranchClose: number | null;
  /** Exported member.*/
  readonly notesText: string | null;
  /** Exported member.*/
  readonly groupNoteId: string | null;
  /** Exported member.*/
  readonly comments: unknown[] | null;
  /** Exported member.*/
  readonly parentNote: Note | null;
  /** Exported member.*/
  readonly childMindMap: Note | null;
  /** Exported member.*/
  readonly linkedNotes: unknown[] | null;
  /** Exported member.*/
  readonly childNotes: unknown[] | null;
  /** Exported member.*/
  readonly summaryLinks: unknown[] | null;
  /** Exported member.*/
  readonly zLevel: number | null;
  /** Exported member.*/
  readonly hidden: number | null;
  /** Exported member.*/
  readonly toc: number | null;
  /** Exported member.*/
  readonly annotation: number | null;
  /** Exported member.*/
  readonly groupMode: number | null;
  /** Exported member.*/
  readonly flashcard: number | null;
  /** Exported member.*/
  readonly summary: boolean;
  /** Exported member.*/
  readonly flagged: number | null;
  /** Exported member.*/
  readonly textHighlight: Record<string, unknown> | null;
  /** Exported member.*/
  readonly options: Record<string, unknown> | null;
  /** Exported member.*/
  textFirst: number | null;
  /** Exported member.*/
  readonly lastBlankBandFailure: string | null;
  /** Exported member.*/
  readonly hasExcerptSelection: number | null;
  /** Exported member.*/
  readonly hashtags: unknown[] | null;
  /** Exported member.*/
  commentState(): Record<string, unknown> | null;
  /** Exported member.*/
  setCommentsCollapsed(_targets: unknown, _collapsed: unknown, _revision: unknown): Record<string, unknown> | null;
  /** Exported member.*/
  paste(): void;
  /** Exported member.*/
  clearFormat(): void;
  /** Exported member.*/
  allNoteText(): string | null;
  /** Exported member.*/
  merge(_note: Note | null): void;
  /** Exported member.*/
  appendHtmlComment(_html: string | null, _text: string | null, _size: CGSize, _tag: string | null): void;
  /** Exported member.*/
  appendTextComment(_text: string | null): void;
  /** Exported member.*/
  appendMarkdownComment(_text: string | null): void;
  /** Exported member.*/
  appendRichTextComment(_text: string | null, _style: Record<string, unknown> | null): void;
  /** Exported member.*/
  appendNoteLink(_note: Note | null): void;
  /** Exported member.*/
  removeCommentByIndex(_index: number): void;
  /** Exported member.*/
  setCommentField(_index: number, _fieldId: string | null, _isLabel: boolean): void;
  /** Exported member.*/
  appendBlankBand(_role: string | null, _height: number | null): Note | null;
  /** Exported member.*/
  blankBands(): unknown[] | null;
  /** Exported member.*/
  setBlankBandClosed(_bandId: string | null, _closed: boolean): boolean;
  /** Exported member.*/
  setBlankBandHeight(_bandId: string | null, _height: number | null): boolean;
  /** Exported member.*/
  scrollToBlankBand(_bandId: string | null): boolean;
  /** Exported member.*/
  blankBandImage(_bandId: string | null, _maxEdge: number | null): NSData | null;
  /** Exported member.*/
  getDrawingSize(): number | null;
  /** Exported member.*/
  getStrokesCount(): number;
  /** Exported member.*/
  realGroupNoteIdForTopicId(_topicid: string | null): string | null;
  /** Exported member.*/
  removeFromParent(): void;
  /** Exported member.*/
  insertChildBefore(_note: Note | null, _n: Note | null): void;
  /** Exported member.*/
  addChild(_note: Note | null): void;
  /** Exported member.*/
  processMarkdownBase64Images(): boolean;
  /** Exported member.*/
  sortCommentsByNewIndices(_newIndices: unknown[] | null): void;
  /** Exported member.*/
  addHashtag(_hashtag: string | null): boolean;
  /** Exported member.*/
  removeHashtag(_hashtag: string | null): boolean;
  /** Exported member.*/
  setAddonValueForKey(_value: unknown, _key: string | null): boolean;
  /** Exported member.*/
  addonValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  addonValues(): Record<string, unknown> | null;
}
/** Native class object for {@link Note}.*/
interface NoteClass {
  /** Exported member.*/
  createWithTitleNotebookDocument(_title: string | null, _topic: Notebook | null, _book: Document | null): Note | null;
}
/** Host-injected native class object.*/
declare var Note: NoteClass;

/** Native instance exported as `Notebook`.
 */
interface Notebook {
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  readonly topicId: string | null;
  /** Exported member.*/
  readonly lastVisit: Date | null;
  /** Exported member.*/
  readonly mainDocMd5: string | null;
  /** Exported member.*/
  readonly historyDate: Date | null;
  /** Exported member.*/
  readonly syncMode: number | null;
  /** Exported member.*/
  readonly categoryList: string | null;
  /** Exported member.*/
  readonly hashtags: string | null;
  /** Exported member.*/
  readonly docList: string | null;
  /** Exported member.*/
  readonly options: Record<string, unknown> | null;
  /** Exported member.*/
  readonly documents: unknown[] | null;
  /** Exported member.*/
  readonly notes: unknown[] | null;
  /** Exported member.*/
  hideLinksInMindMapNode: boolean;
  /** Exported member.*/
  readonly flags: number | null;
  /** Exported member.*/
  readonly type: number | null;
}
/** Native class object for {@link Notebook}.*/
interface NotebookClass {

}
/** Host-injected native class object.*/
declare var Notebook: NotebookClass;

/** Native instance exported as `PopupMenu`.
 */
interface PopupMenu {
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
  initWithFrame(_frame: CGRect): PopupMenu | null;
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
  readonly visible: boolean;
  /** Exported member.*/
  items: unknown[] | null;
  /** Exported member.*/
  readonly arrowDirection: number;
  /** Exported member.*/
  readonly targetWinRect: CGRect;
  /** Exported member.*/
  dismissAnimated(_animated: boolean): void;
  /** Exported member.*/
  updateWithTargetRect(_targetRect: CGRect): void;
  /** Exported member.*/
  showInViewTargetRectAnimated(_view: UIView | null, _targetRect: CGRect, _animated: boolean): void;
}
/** Native class object for {@link PopupMenu}.*/
interface PopupMenuClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): PopupMenu | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): PopupMenu | null;
  /** Exported member.*/
  alloc(): PopupMenu | null;
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
  /** Exported member.*/
  currentMenu(): PopupMenu | null;
  /** Exported member.*/
  popupMenuWithItems(_items: unknown[] | null): PopupMenu | null;
}
/** Host-injected native class object.*/
declare var PopupMenu: PopupMenuClass;

/** Native instance exported as `PopupMenuItem`.
 */
interface PopupMenuItem {
  /** Exported member.*/
  readonly title: string | null;
  /** Exported member.*/
  readonly actionString: string | null;
}
/** Native class object for {@link PopupMenuItem}.*/
interface PopupMenuItemClass {

}
/** Host-injected native class object.*/
declare var PopupMenuItem: PopupMenuItemClass;

/** Native instance exported as `SearchManager`.
 */
interface SearchManager {
  /** Exported member.*/
  readonly ftsIndexing: boolean;
  /** Exported member.*/
  readonly propIndexing: boolean;
  /** Exported member.*/
  readonly vectorIndexing: boolean;
  /** Exported member.*/
  syncTopicForceBlock(_topicid: string | null, _force: boolean, _block: unknown): void;
  /** Exported member.*/
  syncDBAfterMigration(): void;
  /** Exported member.*/
  syncDB(): void;
  /** Exported member.*/
  searchTextWordList(_textWordLst: unknown[] | null, _titleOnly: boolean, _topicid: string | null, _beginsWith: boolean, _limit: number): unknown[] | null;
  /** Exported member.*/
  searchText(_searchText: string | null, _titleOnly: boolean, _topicid: string | null, _beginsWith: boolean, _limit: number): unknown[] | null;
  /** Exported member.*/
  searchTextNoteOnly(_searchText: string | null, _titleOnly: boolean, _topicid: string | null, _beginsWith: boolean, _limit: number, _noteOnly: boolean): unknown[] | null;
  /** Exported member.*/
  searchFts3Text(_text: string | null, _titleOnly: boolean, _topicid: string | null, _limit: number, _noteOnly: boolean): unknown[] | null;
  /** Exported member.*/
  searchURLs(_urls: Array<string> | null, _topicid: string | null): unknown[] | null;
  /** Exported member.*/
  hasTopicIndex(_topicid: string | null): boolean;
  /** Exported member.*/
  hasVectorIndex(_topicid: string | null): boolean;
  /** Exported member.*/
  hasBookIndex(_md5: string | null): boolean;
  /** Exported member.*/
  resetBookIndex(): void;
  /** Exported member.*/
  searchPage(_searchText: string | null, _beginsWith: boolean, _limit: number): unknown[] | null;
  /** Exported member.*/
  snippetForFts3RowId(_rowid: number): string | null;
  /** Exported member.*/
  snippetForPageRowId(_rowid: number): Record<string, unknown> | null;
  /** Exported member.*/
  findSimilarNotes(_queryVector: NSData | null, _topicId: string | null, _k: number): Array<Record<string, unknown>> | null;
  /** Exported member.*/
  batchFindSimilarNotes(_queryVectors: Array<NSData> | null, _topicId: string | null, _k: number): Array<Array<Record<string, unknown>>> | null;
  /** Exported member.*/
  findSimilarNotesHybrid(_queryVector: NSData | null, _queryText: string | null, _topicId: string | null, _k: number, _semanticWeight: number, _bm25Weight: number): Array<Record<string, unknown>> | null;
  /** Exported member.*/
  loadVectorCacheForTopic(_topicId: string | null): Record<string, NSData> | null;
  /** Exported member.*/
  syncTopicVectorsForceCompletion(_topicId: string | null, _force: boolean, _completion: unknown): void;
  /** Exported member.*/
  invalidateVectorCacheForTopics(_topicIds: Array<string> | null): void;
}
/** Native class object for {@link SearchManager}.*/
interface SearchManagerClass {

}
/** Host-injected native class object.*/
declare var SearchManager: SearchManagerClass;

/** Dispatch queue token.*/
type DispatchQueue = NativeOpaque<"dispatch_queue_t">;
/** Runtime namespace installed before framework registration.
 * `require` evaluates a script for side effects; this is not Node.js require.
 * Runtime class creation and selector helpers may be restricted by host policy.
 */
interface JSBRuntime {
  /** Define a plugin class; its global name is chosen by the caller. */
  defineClass(declaration: string, instanceMembers?: Record<string, unknown> | null, staticMembers?: Record<string, unknown> | null): unknown;
  /** @deprecated Use defineClass. */
  define(declaration: string, instanceMembers?: Record<string, unknown> | null, staticMembers?: Record<string, unknown> | null): unknown;
  require(name: string): unknown;
  selector(name: string): NativeSelector;
  dispatch_async(queue: DispatchQueue, block: () => void): void;
  dispatch_get_global_queue(priority: number, flags: number): DispatchQueue;
  dispatch_get_main_queue(): DispatchQueue;
  log(format: string, ...args: unknown[]): void;
  dump(value: unknown): void;
  exports: Record<string, unknown>;
  main_path: string | null;
  addon_id: string | null;
  module_class: unknown;
  newAddon: ((mainPath: string) => unknown) | null;
}
/** Host-injected bridge namespace.*/
declare var JSB: JSBRuntime;
/** Callback-local receiver temporarily installed by native forwarding.
 * The current plugin instance inside an instance method defined by `JSB.defineClass`.
 * Not a browser Window, and not guaranteed to exist outside a callback.
 * Narrow before use; do not retain it as a stable receiver.
 */
declare var self: unknown;
/** Metadata attached to a registered agent tool.*/
interface AgentToolInfo {
  name: string;
  kind?: string;
  scopes?: string[];
  description?: string;
}
/** An agent tool registered through `AgentTools.register`.*/
interface AgentTool {
  name: string;
  info?: AgentToolInfo;
  run?: (input?: unknown) => unknown;
}
/** Deprecated global tool registry injected by the host script.*/
interface AgentToolsObject {
  register(tool: AgentTool): void;
  list(): AgentToolInfo[];
  get(name: string): AgentTool | null;
  run(name: string, input?: unknown): Promise<unknown>;
}
/** Deprecated host-injected tool registry.*/
declare var AgentTools: AgentToolsObject;
