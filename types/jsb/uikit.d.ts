/** @module UIKit */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `NSMutableParagraphStyle`.
 */
interface NSMutableParagraphStyle {
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
  readonly options: Record<string, unknown> | null;
  /** Exported member.*/
  paragraphSpacing: number;
  /** Exported member.*/
  tabStops: unknown[] | null;
  /** Exported member.*/
  headIndent: number;
  /** Exported member.*/
  lineBreakMode: number;
  /** Exported member.*/
  hyphenationFactor: number;
  /** Exported member.*/
  alignment: number;
  /** Exported member.*/
  readonly location: number;
  /** Exported member.*/
  tailIndent: number;
  /** Exported member.*/
  firstLineHeadIndent: number;
  /** Exported member.*/
  lineSpacing: number;
  /** Exported member.*/
  minimumLineHeight: number;
  /** Exported member.*/
  paragraphSpacingBefore: number;
  /** Exported member.*/
  maximumLineHeight: number;
  /** Exported member.*/
  lineHeightMultiple: number;
  /** Exported member.*/
  baseWritingDirection: number;
  /** Exported member.*/
  defaultTabInterval: number;
}
/** Native class object for {@link NSMutableParagraphStyle}.*/
interface NSMutableParagraphStyleClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSMutableParagraphStyle | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSMutableParagraphStyle | null;
  /** Exported member.*/
  alloc(): NSMutableParagraphStyle | null;
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
  defaultParagraphStyle(): NSParagraphStyle | null;
  /** Exported member.*/
  defaultWritingDirectionForLanguage(_languageName: string | null): number;
}
/** Host-injected native class object.*/
declare var NSMutableParagraphStyle: NSMutableParagraphStyleClass;

/** Native instance exported as `NSParagraphStyle`.
 */
interface NSParagraphStyle {
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
  readonly options: Record<string, unknown> | null;
  /** Exported member.*/
  paragraphSpacing: number;
  /** Exported member.*/
  tabStops: unknown[] | null;
  /** Exported member.*/
  headIndent: number;
  /** Exported member.*/
  lineBreakMode: number;
  /** Exported member.*/
  hyphenationFactor: number;
  /** Exported member.*/
  alignment: number;
  /** Exported member.*/
  readonly location: number;
  /** Exported member.*/
  tailIndent: number;
  /** Exported member.*/
  firstLineHeadIndent: number;
  /** Exported member.*/
  lineSpacing: number;
  /** Exported member.*/
  minimumLineHeight: number;
  /** Exported member.*/
  paragraphSpacingBefore: number;
  /** Exported member.*/
  maximumLineHeight: number;
  /** Exported member.*/
  lineHeightMultiple: number;
  /** Exported member.*/
  baseWritingDirection: number;
  /** Exported member.*/
  defaultTabInterval: number;
}
/** Native class object for {@link NSParagraphStyle}.*/
interface NSParagraphStyleClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSParagraphStyle | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSParagraphStyle | null;
  /** Exported member.*/
  alloc(): NSParagraphStyle | null;
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
  defaultParagraphStyle(): NSParagraphStyle | null;
  /** Exported member.*/
  defaultWritingDirectionForLanguage(_languageName: string | null): number;
}
/** Host-injected native class object.*/
declare var NSParagraphStyle: NSParagraphStyleClass;

/** Native instance exported as `NSTextStorage`.
 */
interface NSTextStorage {
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
  string(): string | null;
  /** Exported member.*/
  attributesAtIndexEffectiveRange(_location: number, _range: NSRangePointer): Record<string, unknown> | null;
  /** Exported member.*/
  length(): number;
  /** Exported member.*/
  attributeAtIndexEffectiveRange(_attrName: string | null, _location: number, _range: NSRangePointer): unknown;
  /** Exported member.*/
  attributedSubstringFromRange(_range: NSRange): NSAttributedString | null;
  /** Exported member.*/
  attributesAtIndexLongestEffectiveRangeInRange(_location: number, _range: NSRangePointer, _rangeLimit: NSRange): Record<string, unknown> | null;
  /** Exported member.*/
  attributeAtIndexLongestEffectiveRangeInRange(_attrName: string | null, _location: number, _range: NSRangePointer, _rangeLimit: NSRange): unknown;
  /** Exported member.*/
  isEqualToAttributedString(_other: NSAttributedString | null): boolean;
  /** Exported member.*/
  enumerateAttributesInRangeOptionsUsingBlock(_enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  enumerateAttributeInRangeOptionsUsingBlock(_attrName: string | null, _enumerationRange: NSRange, _opts: number, _block: NativeBlock | null): void;
  /** Exported member.*/
  dataFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSData | null;
  /** Exported member.*/
  fileWrapperFromRangeDocumentAttributesError(_range: NSRange, _dict: Record<string, unknown> | null, _error: NSError | null): NSFileWrapper | null;
  /** Exported member.*/
  size(): CGSize;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawWithRectOptionsAttributesContext(_rect: CGRect, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsAttributesContext(_size: CGSize, _options: number, _attributes: Record<string, unknown> | null, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  drawWithRectOptionsContext(_rect: CGRect, _options: number, _context: NSStringDrawingContext | null): void;
  /** Exported member.*/
  boundingRectWithSizeOptionsContext(_size: CGSize, _options: number, _context: NSStringDrawingContext | null): CGRect;
  /** Exported member.*/
  replaceCharactersInRangeWithString(_range: NSRange, _str: string | null): void;
  /** Exported member.*/
  setAttributesRange(_attrs: Record<string, unknown> | null, _range: NSRange): void;
  /** Exported member.*/
  mutableString(): string | null;
  /** Exported member.*/
  addAttributeValueRange(_name: string | null, _value: unknown, _range: NSRange): void;
  /** Exported member.*/
  addAttributesRange(_attrs: Record<string, unknown> | null, _range: NSRange): void;
  /** Exported member.*/
  removeAttributeRange(_name: string | null, _range: NSRange): void;
  /** Exported member.*/
  replaceCharactersInRangeWithAttributedString(_range: NSRange, _attrString: NSAttributedString | null): void;
  /** Exported member.*/
  insertAttributedStringAtIndex(_attrString: NSAttributedString | null, _loc: number): void;
  /** Exported member.*/
  appendAttributedString(_attrString: NSAttributedString | null): void;
  /** Exported member.*/
  deleteCharactersInRange(_range: NSRange): void;
  /** Exported member.*/
  setAttributedString(_attrString: NSAttributedString | null): void;
  /** Exported member.*/
  beginEditing(): void;
  /** Exported member.*/
  endEditing(): void;
  /** Exported member.*/
  fixAttributesInRange(_range: NSRange): void;
  /** Exported member.*/
  readFromFileURLOptionsDocumentAttributesError(_url: NSURL | null, _opts: Record<string, unknown> | null, _dict: Record<string, unknown> | null, _error: NSError | null): boolean;
  /** Exported member.*/
  readFromDataOptionsDocumentAttributesError(_data: NSData | null, _opts: Record<string, unknown> | null, _dict: Record<string, unknown> | null, _error: NSError | null): boolean;
  /** Exported member.*/
  readonly fixesAttributesLazily: boolean;
  /** Exported member.*/
  readonly layoutManagers: unknown[] | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  addLayoutManager(_aLayoutManager: NSLayoutManager | null): void;
  /** Exported member.*/
  removeLayoutManager(_aLayoutManager: NSLayoutManager | null): void;
  /** Exported member.*/
  editedRangeChangeInLength(_editedMask: number, _editedRange: NSRange, _delta: number): void;
  /** Exported member.*/
  processEditing(): void;
  /** Exported member.*/
  invalidateAttributesInRange(_range: NSRange): void;
  /** Exported member.*/
  ensureAttributesAreFixedInRange(_range: NSRange): void;
}
/** Native class object for {@link NSTextStorage}.*/
interface NSTextStorageClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): NSTextStorage | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): NSTextStorage | null;
  /** Exported member.*/
  alloc(): NSTextStorage | null;
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
  attributedStringWithAttachment(_attachment: NSTextAttachment | null): NSAttributedString | null;
}
/** Host-injected native class object.*/
declare var NSTextStorage: NSTextStorageClass;

/** Native instance exported as `UIActivityIndicatorView`.
 */
interface UIActivityIndicatorView {
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
  initWithFrame(_frame: CGRect): UIActivityIndicatorView | null;
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
  activityIndicatorViewStyle: number;
  /** Exported member.*/
  hidesWhenStopped: boolean;
  /** Exported member.*/
  color: UIColor | null;
  /** Exported member.*/
  startAnimating(): void;
  /** Exported member.*/
  stopAnimating(): void;
  /** Exported member.*/
  isAnimating(): boolean;
}
/** Native class object for {@link UIActivityIndicatorView}.*/
interface UIActivityIndicatorViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIActivityIndicatorView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIActivityIndicatorView | null;
  /** Exported member.*/
  alloc(): UIActivityIndicatorView | null;
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
declare var UIActivityIndicatorView: UIActivityIndicatorViewClass;

/** Native instance exported as `UIAlertView`.
 */
interface UIAlertView {
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
  initWithFrame(_frame: CGRect): UIAlertView | null;
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
  readonly numberOfButtons: number;
  /** Exported member.*/
  readonly visible: boolean;
  /** Exported member.*/
  cancelButtonIndex: number;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  message: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  alertViewStyle: number;
  /** Exported member.*/
  readonly firstOtherButtonIndex: number;
  /** Exported member.*/
  addButtonWithTitle(_title: string | null): number;
  /** Exported member.*/
  buttonTitleAtIndex(_buttonIndex: number): string | null;
  /** Exported member.*/
  show(_unused: unknown): void;
  /** Exported member.*/
  dismissWithClickedButtonIndexAnimated(_buttonIndex: number, _animated: boolean): void;
  /** Exported member.*/
  textFieldAtIndex(_textFieldIndex: number): UITextField | null;
}
/** Native class object for {@link UIAlertView}.*/
interface UIAlertViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIAlertView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIAlertView | null;
  /** Exported member.*/
  alloc(): UIAlertView | null;
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
  makeWithTitleMessageDelegateCancelButtonTitleOtherButtonTitles(_title: string | null, _message: string | null, _delegate: unknown, _cancelButtonTitle: string | null, _otherButtonTitles: unknown[] | null): unknown;
  /** Exported member.*/
  showWithTitleMessageStyleCancelButtonTitleOtherButtonTitlesTapBlock(_title: string | null, _message: string | null, _style: number, _cancelButtonTitle: string | null, _otherButtonTitles: unknown[] | null, _tapBlock: unknown): UIAlertView | null;
}
/** Host-injected native class object.*/
declare var UIAlertView: UIAlertViewClass;

/** Native instance exported as `UIApplication`.
 */
interface UIApplication {
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
  idleTimerDisabled: boolean;
  /** Exported member.*/
  applicationSupportsShakeToEdit: boolean;
  /** Exported member.*/
  readonly applicationState: number;
  /** Exported member.*/
  networkActivityIndicatorVisible: boolean;
  /** Exported member.*/
  readonly scheduledLocalNotifications: Array<UILocalNotification> | null;
  /** Exported member.*/
  openURL(_url: NSURL | null): boolean;
  /** Exported member.*/
  canOpenURL(_url: NSURL | null): boolean;
  /** Exported member.*/
  openURLOptionsCompletionHandler(_url: NSURL | null, _options: Record<string, unknown> | null, _completion: unknown): void;
  /** Exported member.*/
  cancelLocalNotification(_notification: UILocalNotification | null): void;
  /** Exported member.*/
  scheduleLocalNotification(_notification: UILocalNotification | null): void;
}
/** Native class object for {@link UIApplication}.*/
interface UIApplicationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIApplication | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIApplication | null;
  /** Exported member.*/
  alloc(): UIApplication | null;
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
  sharedApplication(): UIApplication | null;
}
/** Host-injected native class object.*/
declare var UIApplication: UIApplicationClass;

/** Native instance exported as `UIBarButtonItem`.
 */
interface UIBarButtonItem {
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
  enabled: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  image: UIImage | null;
  /** Exported member.*/
  tag: number;
  /** Exported member.*/
  imageInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhoneInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhone: UIImage | null;
  /** Exported member.*/
  setTitleTextAttributesForState(_attributes: Record<string, unknown> | null, _state: number): void;
  /** Exported member.*/
  titleTextAttributesForState(_state: number): Record<string, unknown> | null;
  /** Exported member.*/
  target: unknown;
  /** Exported member.*/
  style: number;
  /** Exported member.*/
  tintColor: UIColor | null;
  /** Exported member.*/
  action: NativeSelector;
  /** Exported member.*/
  possibleTitles: NSSet | null;
  /** Exported member.*/
  width: number;
  /** Exported member.*/
  customView: UIView | null;
  /** Exported member.*/
  setBackgroundImageForStateBarMetrics(_backgroundImage: UIImage | null, _state: number, _barMetrics: number): void;
  /** Exported member.*/
  backgroundImageForStateBarMetrics(_state: number, _barMetrics: number): UIImage | null;
  /** Exported member.*/
  setBackgroundImageForStateStyleBarMetrics(_backgroundImage: UIImage | null, _state: number, _style: number, _barMetrics: number): void;
  /** Exported member.*/
  backgroundImageForStateStyleBarMetrics(_state: number, _style: number, _barMetrics: number): UIImage | null;
  /** Exported member.*/
  setBackgroundVerticalPositionAdjustmentForBarMetrics(_adjustment: number, _barMetrics: number): void;
  /** Exported member.*/
  backgroundVerticalPositionAdjustmentForBarMetrics(_barMetrics: number): number;
  /** Exported member.*/
  setTitlePositionAdjustmentForBarMetrics(_adjustment: UIOffset, _barMetrics: number): void;
  /** Exported member.*/
  titlePositionAdjustmentForBarMetrics(_barMetrics: number): UIOffset;
  /** Exported member.*/
  setBackButtonBackgroundImageForStateBarMetrics(_backgroundImage: UIImage | null, _state: number, _barMetrics: number): void;
  /** Exported member.*/
  backButtonBackgroundImageForStateBarMetrics(_state: number, _barMetrics: number): UIImage | null;
  /** Exported member.*/
  setBackButtonTitlePositionAdjustmentForBarMetrics(_adjustment: UIOffset, _barMetrics: number): void;
  /** Exported member.*/
  backButtonTitlePositionAdjustmentForBarMetrics(_barMetrics: number): UIOffset;
  /** Exported member.*/
  setBackButtonBackgroundVerticalPositionAdjustmentForBarMetrics(_adjustment: number, _barMetrics: number): void;
  /** Exported member.*/
  backButtonBackgroundVerticalPositionAdjustmentForBarMetrics(_barMetrics: number): number;
}
/** Native class object for {@link UIBarButtonItem}.*/
interface UIBarButtonItemClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIBarButtonItem | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIBarButtonItem | null;
  /** Exported member.*/
  alloc(): UIBarButtonItem | null;
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
}
/** Host-injected native class object.*/
declare var UIBarButtonItem: UIBarButtonItemClass;

/** Native instance exported as `UIBarItem`.
 */
interface UIBarItem {
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
  enabled: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  image: UIImage | null;
  /** Exported member.*/
  tag: number;
  /** Exported member.*/
  imageInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhoneInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhone: UIImage | null;
  /** Exported member.*/
  setTitleTextAttributesForState(_attributes: Record<string, unknown> | null, _state: number): void;
  /** Exported member.*/
  titleTextAttributesForState(_state: number): Record<string, unknown> | null;
}
/** Native class object for {@link UIBarItem}.*/
interface UIBarItemClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIBarItem | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIBarItem | null;
  /** Exported member.*/
  alloc(): UIBarItem | null;
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
}
/** Host-injected native class object.*/
declare var UIBarItem: UIBarItemClass;

/** Native instance exported as `UIBezierPath`.
 */
interface UIBezierPath {
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
  lineCapStyle: number;
  /** Exported member.*/
  CGPath(): unknown;
  /** Exported member.*/
  readonly bounds: CGRect;
  /** Exported member.*/
  miterLimit: number;
  /** Exported member.*/
  flatness: number;
  /** Exported member.*/
  readonly empty: boolean;
  /** Exported member.*/
  usesEvenOddFillRule: boolean;
  /** Exported member.*/
  lineJoinStyle: number;
  /** Exported member.*/
  readonly currentPoint: CGPoint;
  /** Exported member.*/
  lineWidth: number;
  /** Exported member.*/
  moveToPoint(_point: CGPoint): void;
  /** Exported member.*/
  addLineToPoint(_point: CGPoint): void;
  /** Exported member.*/
  addCurveToPointControlPoint1ControlPoint2(_endPoint: CGPoint, _controlPoint1: CGPoint, _controlPoint2: CGPoint): void;
  /** Exported member.*/
  addQuadCurveToPointControlPoint(_endPoint: CGPoint, _controlPoint: CGPoint): void;
  /** Exported member.*/
  addArcWithCenterRadiusStartAngleEndAngleClockwise(_center: CGPoint, _radius: number, _startAngle: number, _endAngle: number, _clockwise: boolean): void;
  /** Exported member.*/
  closePath(): void;
  /** Exported member.*/
  removeAllPoints(): void;
  /** Exported member.*/
  appendPath(_bezierPath: UIBezierPath | null): void;
  /** Exported member.*/
  bezierPathByReversingPath(): UIBezierPath | null;
  /** Exported member.*/
  applyTransform(_transform: CGAffineTransform): void;
  /** Exported member.*/
  containsPoint(_point: CGPoint): boolean;
  /** Exported member.*/
  setLineDashCountPhase(_pattern: NativePointer | null, _count: number, _phase: number): void;
  /** Exported member.*/
  getLineDashCountPhase(_pattern: NativePointer | null, _count: NativePointer | null, _phase: NativePointer | null): void;
  /** Exported member.*/
  fill(): void;
  /** Exported member.*/
  stroke(): void;
  /** Exported member.*/
  fillWithBlendModeAlpha(_blendMode: number, _alpha: number): void;
  /** Exported member.*/
  strokeWithBlendModeAlpha(_blendMode: number, _alpha: number): void;
  /** Exported member.*/
  addClip(): void;
}
/** Native class object for {@link UIBezierPath}.*/
interface UIBezierPathClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIBezierPath | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIBezierPath | null;
  /** Exported member.*/
  alloc(): UIBezierPath | null;
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
  bezierPath(): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithRect(_rect: CGRect): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithOvalInRect(_rect: CGRect): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithRoundedRectCornerRadius(_rect: CGRect, _cornerRadius: number): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithRoundedRectByRoundingCornersCornerRadii(_rect: CGRect, _corners: number, _cornerRadii: CGSize): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithArcCenterRadiusStartAngleEndAngleClockwise(_center: CGPoint, _radius: number, _startAngle: number, _endAngle: number, _clockwise: boolean): UIBezierPath | null;
  /** Exported member.*/
  bezierPathWithCGPath(_CGPath: unknown): UIBezierPath | null;
}
/** Host-injected native class object.*/
declare var UIBezierPath: UIBezierPathClass;

/** Native instance exported as `UIButton`.
 */
interface UIButton {
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
  initWithFrame(_frame: CGRect): UIButton | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  readonly imageView: UIImageView | null;
  /** Exported member.*/
  readonly currentBackgroundImage: UIImage | null;
  /** Exported member.*/
  reversesTitleShadowWhenHighlighted: boolean;
  /** Exported member.*/
  readonly currentTitle: string | null;
  /** Exported member.*/
  adjustsImageWhenDisabled: boolean;
  /** Exported member.*/
  readonly buttonType: number;
  /** Exported member.*/
  readonly currentImage: UIImage | null;
  /** Exported member.*/
  contentEdgeInsets: UIEdgeInsets;
  /** Exported member.*/
  readonly currentTitleColor: UIColor | null;
  /** Exported member.*/
  titleEdgeInsets: UIEdgeInsets;
  /** Exported member.*/
  readonly currentTitleShadowColor: UIColor | null;
  /** Exported member.*/
  readonly titleLabel: UILabel | null;
  /** Exported member.*/
  imageEdgeInsets: UIEdgeInsets;
  /** Exported member.*/
  adjustsImageWhenHighlighted: boolean;
  /** Exported member.*/
  showsTouchWhenHighlighted: boolean;
  /** Exported member.*/
  setTitleForState(_title: string | null, _state: number): void;
  /** Exported member.*/
  setTitleColorForState(_color: UIColor | null, _state: number): void;
  /** Exported member.*/
  setTitleShadowColorForState(_color: UIColor | null, _state: number): void;
  /** Exported member.*/
  setImageForState(_image: UIImage | null, _state: number): void;
  /** Exported member.*/
  setBackgroundImageForState(_image: UIImage | null, _state: number): void;
  /** Exported member.*/
  setAttributedTitleForState(_title: NSAttributedString | null, _state: number): void;
  /** Exported member.*/
  titleForState(_state: number): string | null;
  /** Exported member.*/
  titleColorForState(_state: number): UIColor | null;
  /** Exported member.*/
  titleShadowColorForState(_state: number): UIColor | null;
  /** Exported member.*/
  imageForState(_state: number): UIImage | null;
  /** Exported member.*/
  backgroundImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  attributedTitleForState(_state: number): NSAttributedString | null;
  /** Exported member.*/
  backgroundRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  contentRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  titleRectForContentRect(_contentRect: CGRect): CGRect;
  /** Exported member.*/
  imageRectForContentRect(_contentRect: CGRect): CGRect;
}
/** Native class object for {@link UIButton}.*/
interface UIButtonClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIButton | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIButton | null;
  /** Exported member.*/
  alloc(): UIButton | null;
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
  buttonWithType(_buttonType: number): unknown;
}
/** Host-injected native class object.*/
declare var UIButton: UIButtonClass;

/** Native instance exported as `UICollectionView`.
 */
interface UICollectionView {
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
  initWithFrame(_frame: CGRect): UICollectionView | null;
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
  readonly item: number;
  /** Exported member.*/
  backgroundView: UIView | null;
  /** Exported member.*/
  allowsMultipleSelection: boolean;
  /** Exported member.*/
  allowsSelection: boolean;
  /** Exported member.*/
  dataSource: unknown;
  /** Exported member.*/
  collectionViewLayout: UICollectionViewLayout | null;
  /** Exported member.*/
  registerClassForCellWithReuseIdentifier(_cellClass: unknown, _identifier: string | null): void;
  /** Exported member.*/
  registerClassForSupplementaryViewOfKindWithReuseIdentifier(_viewClass: unknown, _elementKind: string | null, _identifier: string | null): void;
  /** Exported member.*/
  dequeueReusableCellWithReuseIdentifierForIndexPath(_identifier: string | null, _indexPath: NSIndexPath | null): unknown;
  /** Exported member.*/
  dequeueReusableSupplementaryViewOfKindWithReuseIdentifierForIndexPath(_elementKind: string | null, _identifier: string | null, _indexPath: NSIndexPath | null): unknown;
  /** Exported member.*/
  indexPathsForSelectedItems(): unknown[] | null;
  /** Exported member.*/
  deselectItemAtIndexPathAnimated(_indexPath: NSIndexPath | null, _animated: boolean): void;
  /** Exported member.*/
  reloadData(): void;
  /** Exported member.*/
  setCollectionViewLayoutAnimated(_layout: UICollectionViewLayout | null, _animated: boolean): void;
  /** Exported member.*/
  setCollectionViewLayoutAnimatedCompletion(_layout: UICollectionViewLayout | null, _animated: boolean, _completion: NativeBlock | null): void;
  /** Exported member.*/
  finishInteractiveTransition(): void;
  /** Exported member.*/
  cancelInteractiveTransition(): void;
  /** Exported member.*/
  numberOfSections(): number;
  /** Exported member.*/
  numberOfItemsInSection(_section: number): number;
  /** Exported member.*/
  layoutAttributesForItemAtIndexPath(_indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForSupplementaryElementOfKindAtIndexPath(_kind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  indexPathForItemAtPoint(_point: CGPoint): NSIndexPath | null;
  /** Exported member.*/
  indexPathForCell(_cell: UICollectionViewCell | null): NSIndexPath | null;
  /** Exported member.*/
  cellForItemAtIndexPath(_indexPath: NSIndexPath | null): UICollectionViewCell | null;
  /** Exported member.*/
  visibleCells(): unknown[] | null;
  /** Exported member.*/
  indexPathsForVisibleItems(): unknown[] | null;
  /** Exported member.*/
  insertSections(_sections: NSIndexSet | null): void;
  /** Exported member.*/
  deleteSections(_sections: NSIndexSet | null): void;
  /** Exported member.*/
  reloadSections(_sections: NSIndexSet | null): void;
  /** Exported member.*/
  moveSectionToSection(_section: number, _newSection: number): void;
  /** Exported member.*/
  insertItemsAtIndexPaths(_indexPaths: unknown[] | null): void;
  /** Exported member.*/
  deleteItemsAtIndexPaths(_indexPaths: unknown[] | null): void;
  /** Exported member.*/
  reloadItemsAtIndexPaths(_indexPaths: unknown[] | null): void;
  /** Exported member.*/
  moveItemAtIndexPathToIndexPath(_indexPath: NSIndexPath | null, _newIndexPath: NSIndexPath | null): void;
  /** Exported member.*/
  performBatchUpdatesCompletion(_updates: NativeBlock | null, _completion: NativeBlock | null): void;
}
/** Native class object for {@link UICollectionView}.*/
interface UICollectionViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionView | null;
  /** Exported member.*/
  alloc(): UICollectionView | null;
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
declare var UICollectionView: UICollectionViewClass;

/** Native instance exported as `UICollectionViewCell`.
 */
interface UICollectionViewCell {
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
  initWithFrame(_frame: CGRect): UICollectionViewCell | null;
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
  readonly contentView: UIView | null;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  readonly reuseIdentifier: string | null;
  /** Exported member.*/
  backgroundView: UIView | null;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  selectedBackgroundView: UIView | null;
  /** Exported member.*/
  prepareForReuse(): void;
  /** Exported member.*/
  applyLayoutAttributes(_layoutAttributes: UICollectionViewLayoutAttributes | null): void;
  /** Exported member.*/
  willTransitionFromLayoutToLayout(_oldLayout: UICollectionViewLayout | null, _newLayout: UICollectionViewLayout | null): void;
  /** Exported member.*/
  didTransitionFromLayoutToLayout(_oldLayout: UICollectionViewLayout | null, _newLayout: UICollectionViewLayout | null): void;
}
/** Native class object for {@link UICollectionViewCell}.*/
interface UICollectionViewCellClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionViewCell | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionViewCell | null;
  /** Exported member.*/
  alloc(): UICollectionViewCell | null;
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
declare var UICollectionViewCell: UICollectionViewCellClass;

/** Native instance exported as `UICollectionViewController`.
 */
interface UICollectionViewController {
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
  clearsSelectionOnViewWillAppear: boolean;
  /** Exported member.*/
  readonly collectionViewLayout: UICollectionViewLayout | null;
  /** Exported member.*/
  useLayoutToLayoutNavigationTransitions: boolean;
  /** Exported member.*/
  collectionView: UICollectionView | null;
  /** Exported member.*/
  initWithCollectionViewLayout(_layout: UICollectionViewLayout | null): UICollectionViewController | null;
}
/** Native class object for {@link UICollectionViewController}.*/
interface UICollectionViewControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionViewController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionViewController | null;
  /** Exported member.*/
  alloc(): UICollectionViewController | null;
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
declare var UICollectionViewController: UICollectionViewControllerClass;

/** Native instance exported as `UICollectionViewFlowLayout`.
 */
interface UICollectionViewFlowLayout {
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
  readonly invalidateEverything: boolean;
  /** Exported member.*/
  readonly indexPathAfterUpdate: NSIndexPath | null;
  /** Exported member.*/
  readonly collectionView: UICollectionView | null;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  readonly representedElementKind: string | null;
  /** Exported member.*/
  indexPath: NSIndexPath | null;
  /** Exported member.*/
  size: CGSize;
  /** Exported member.*/
  transform3D: CATransform3D;
  /** Exported member.*/
  transform: CGAffineTransform;
  /** Exported member.*/
  alpha: number;
  /** Exported member.*/
  center: CGPoint;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  zIndex: number;
  /** Exported member.*/
  readonly indexPathBeforeUpdate: NSIndexPath | null;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  readonly invalidateDataSourceCounts: boolean;
  /** Exported member.*/
  invalidateLayout(): void;
  /** Exported member.*/
  registerClassForDecorationViewOfKind(_viewClass: unknown, _decorationViewKind: string | null): void;
  /** Exported member.*/
  prepareLayout(): void;
  /** Exported member.*/
  layoutAttributesForElementsInRect(_rect: CGRect): unknown[] | null;
  /** Exported member.*/
  layoutAttributesForItemAtIndexPath(_indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForSupplementaryViewOfKindAtIndexPath(_kind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForDecorationViewOfKindAtIndexPath(_decorationViewKind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  shouldInvalidateLayoutForBoundsChange(_newBounds: CGRect): boolean;
  /** Exported member.*/
  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(_proposedContentOffset: CGPoint, _velocity: CGPoint): CGPoint;
  /** Exported member.*/
  targetContentOffsetForProposedContentOffset(_proposedContentOffset: CGPoint): CGPoint;
  /** Exported member.*/
  collectionViewContentSize(): CGSize;
  /** Exported member.*/
  sectionInset: UIEdgeInsets;
  /** Exported member.*/
  headerReferenceSize: CGSize;
  /** Exported member.*/
  minimumLineSpacing: number;
  /** Exported member.*/
  invalidateFlowLayoutAttributes: boolean;
  /** Exported member.*/
  invalidateFlowLayoutDelegateMetrics: boolean;
  /** Exported member.*/
  footerReferenceSize: CGSize;
  /** Exported member.*/
  itemSize: CGSize;
  /** Exported member.*/
  minimumInteritemSpacing: number;
}
/** Native class object for {@link UICollectionViewFlowLayout}.*/
interface UICollectionViewFlowLayoutClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionViewFlowLayout | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionViewFlowLayout | null;
  /** Exported member.*/
  alloc(): UICollectionViewFlowLayout | null;
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
  layoutAttributesClass(): NativeClass<NativeObject>;
  /** Exported member.*/
  invalidationContextClass(): NativeClass<NativeObject>;
}
/** Host-injected native class object.*/
declare var UICollectionViewFlowLayout: UICollectionViewFlowLayoutClass;

/** Native instance exported as `UICollectionViewLayout`.
 */
interface UICollectionViewLayout {
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
  readonly invalidateEverything: boolean;
  /** Exported member.*/
  readonly indexPathAfterUpdate: NSIndexPath | null;
  /** Exported member.*/
  readonly collectionView: UICollectionView | null;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  readonly representedElementKind: string | null;
  /** Exported member.*/
  indexPath: NSIndexPath | null;
  /** Exported member.*/
  size: CGSize;
  /** Exported member.*/
  transform3D: CATransform3D;
  /** Exported member.*/
  transform: CGAffineTransform;
  /** Exported member.*/
  alpha: number;
  /** Exported member.*/
  center: CGPoint;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  zIndex: number;
  /** Exported member.*/
  readonly indexPathBeforeUpdate: NSIndexPath | null;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  readonly invalidateDataSourceCounts: boolean;
  /** Exported member.*/
  invalidateLayout(): void;
  /** Exported member.*/
  registerClassForDecorationViewOfKind(_viewClass: unknown, _decorationViewKind: string | null): void;
  /** Exported member.*/
  prepareLayout(): void;
  /** Exported member.*/
  layoutAttributesForElementsInRect(_rect: CGRect): unknown[] | null;
  /** Exported member.*/
  layoutAttributesForItemAtIndexPath(_indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForSupplementaryViewOfKindAtIndexPath(_kind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForDecorationViewOfKindAtIndexPath(_decorationViewKind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  shouldInvalidateLayoutForBoundsChange(_newBounds: CGRect): boolean;
  /** Exported member.*/
  targetContentOffsetForProposedContentOffsetWithScrollingVelocity(_proposedContentOffset: CGPoint, _velocity: CGPoint): CGPoint;
  /** Exported member.*/
  targetContentOffsetForProposedContentOffset(_proposedContentOffset: CGPoint): CGPoint;
  /** Exported member.*/
  collectionViewContentSize(): CGSize;
}
/** Native class object for {@link UICollectionViewLayout}.*/
interface UICollectionViewLayoutClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionViewLayout | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionViewLayout | null;
  /** Exported member.*/
  alloc(): UICollectionViewLayout | null;
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
  layoutAttributesClass(): NativeClass<NativeObject>;
  /** Exported member.*/
  invalidationContextClass(): NativeClass<NativeObject>;
}
/** Host-injected native class object.*/
declare var UICollectionViewLayout: UICollectionViewLayoutClass;

/** Native instance exported as `UICollectionViewLayoutAttributes`.
 */
interface UICollectionViewLayoutAttributes {
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
  readonly invalidateEverything: boolean;
  /** Exported member.*/
  readonly indexPathAfterUpdate: NSIndexPath | null;
  /** Exported member.*/
  readonly collectionView: UICollectionView | null;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  readonly representedElementKind: string | null;
  /** Exported member.*/
  indexPath: NSIndexPath | null;
  /** Exported member.*/
  size: CGSize;
  /** Exported member.*/
  transform3D: CATransform3D;
  /** Exported member.*/
  transform: CGAffineTransform;
  /** Exported member.*/
  alpha: number;
  /** Exported member.*/
  center: CGPoint;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  zIndex: number;
  /** Exported member.*/
  readonly indexPathBeforeUpdate: NSIndexPath | null;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  readonly invalidateDataSourceCounts: boolean;
}
/** Native class object for {@link UICollectionViewLayoutAttributes}.*/
interface UICollectionViewLayoutAttributesClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  alloc(): UICollectionViewLayoutAttributes | null;
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
  layoutAttributesForCellWithIndexPath(_indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForSupplementaryViewOfKindWithIndexPath(_elementKind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
  /** Exported member.*/
  layoutAttributesForDecorationViewOfKindWithIndexPath(_decorationViewKind: string | null, _indexPath: NSIndexPath | null): UICollectionViewLayoutAttributes | null;
}
/** Host-injected native class object.*/
declare var UICollectionViewLayoutAttributes: UICollectionViewLayoutAttributesClass;

/** Native instance exported as `UIColor`.
 */
interface UIColor {
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
  readonly stringValue: string | null;
  /** Exported member.*/
  readonly hexStringValue: string | null;
  /** Exported member.*/
  readonly valueString: string | null;
  /** Exported member.*/
  getRedGreenBlueAlpha(): Record<string, unknown> | null;
  /** Exported member.*/
  getHueSaturationBrightnessAlpha(): Record<string, unknown> | null;
  /** Exported member.*/
  colorWithAlphaComponent(_alpha: number): UIColor | null;
}
/** Native class object for {@link UIColor}.*/
interface UIColorClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIColor | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIColor | null;
  /** Exported member.*/
  alloc(): UIColor | null;
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
  lightTextColor(): UIColor | null;
  /** Exported member.*/
  darkTextColor(): UIColor | null;
  /** Exported member.*/
  groupTableViewBackgroundColor(): UIColor | null;
  /** Exported member.*/
  viewFlipsideBackgroundColor(): UIColor | null;
  /** Exported member.*/
  scrollViewTexturedBackgroundColor(): UIColor | null;
  /** Exported member.*/
  underPageBackgroundColor(): UIColor | null;
  /** Exported member.*/
  colorWithWhiteAlpha(_white: number, _alpha: number): UIColor | null;
  /** Exported member.*/
  colorWithHueSaturationBrightnessAlpha(_hue: number, _saturation: number, _brightness: number, _alpha: number): UIColor | null;
  /** Exported member.*/
  colorWithRedGreenBlueAlpha(_red: number, _green: number, _blue: number, _alpha: number): UIColor | null;
  /** Exported member.*/
  colorWithCGColor(_cgColor: unknown): UIColor | null;
  /** Exported member.*/
  colorWithPatternImage(_image: UIImage | null): UIColor | null;
  /** Exported member.*/
  colorWithCIColor(_ciColor: CIColor | null): UIColor | null;
  /** Exported member.*/
  blackColor(): UIColor | null;
  /** Exported member.*/
  darkGrayColor(): UIColor | null;
  /** Exported member.*/
  lightGrayColor(): UIColor | null;
  /** Exported member.*/
  whiteColor(): UIColor | null;
  /** Exported member.*/
  grayColor(): UIColor | null;
  /** Exported member.*/
  redColor(): UIColor | null;
  /** Exported member.*/
  greenColor(): UIColor | null;
  /** Exported member.*/
  blueColor(): UIColor | null;
  /** Exported member.*/
  cyanColor(): UIColor | null;
  /** Exported member.*/
  yellowColor(): UIColor | null;
  /** Exported member.*/
  magentaColor(): UIColor | null;
  /** Exported member.*/
  orangeColor(): UIColor | null;
  /** Exported member.*/
  purpleColor(): UIColor | null;
  /** Exported member.*/
  brownColor(): UIColor | null;
  /** Exported member.*/
  clearColor(): UIColor | null;
  /** Exported member.*/
  blendedColor(_foregroundColor: UIColor | null, _backgroundColor: UIColor | null, _percentBlend: number): UIColor | null;
  /** Exported member.*/
  colorWithString(_string: string | null): UIColor | null;
  /** Exported member.*/
  colorWithHexString(_stringToConvert: string | null): UIColor | null;
  /** Exported member.*/
  colorWithRGBHex(_hex: number): UIColor | null;
}
/** Host-injected native class object.*/
declare var UIColor: UIColorClass;

/** Native instance exported as `UIControl`.
 */
interface UIControl {
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
  initWithFrame(_frame: CGRect): UIControl | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
}
/** Native class object for {@link UIControl}.*/
interface UIControlClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIControl | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIControl | null;
  /** Exported member.*/
  alloc(): UIControl | null;
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
declare var UIControl: UIControlClass;

/** Native instance exported as `UIDatePicker`.
 */
interface UIDatePicker {
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
  initWithFrame(_frame: CGRect): UIDatePicker | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  locale: NSLocale | null;
  /** Exported member.*/
  datePickerMode: number;
  /** Exported member.*/
  timeZone: NSTimeZone | null;
  /** Exported member.*/
  countDownDuration: number;
  /** Exported member.*/
  minuteInterval: number;
  /** Exported member.*/
  date: Date | null;
  /** Exported member.*/
  minimumDate: Date | null;
  /** Exported member.*/
  calendar: NSCalendar | null;
  /** Exported member.*/
  maximumDate: Date | null;
  /** Exported member.*/
  setDateAnimated(_date: Date | null, _animated: boolean): void;
}
/** Native class object for {@link UIDatePicker}.*/
interface UIDatePickerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIDatePicker | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIDatePicker | null;
  /** Exported member.*/
  alloc(): UIDatePicker | null;
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
declare var UIDatePicker: UIDatePickerClass;

/** Native instance exported as `UIDevice`.
 */
interface UIDevice {
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
  readonly batteryLevel: number;
  /** Exported member.*/
  readonly orientation: number;
  /** Exported member.*/
  readonly proximityState: boolean;
  /** Exported member.*/
  readonly enableInputClicksWhenVisible: boolean;
  /** Exported member.*/
  readonly localizedModel: string | null;
  /** Exported member.*/
  readonly multitaskingSupported: boolean;
  /** Exported member.*/
  readonly systemName: string | null;
  /** Exported member.*/
  readonly systemVersion: string | null;
  /** Exported member.*/
  proximityMonitoringEnabled: boolean;
  /** Exported member.*/
  readonly identifierForVendor: NSUUID | null;
  /** Exported member.*/
  batteryMonitoringEnabled: boolean;
  /** Exported member.*/
  readonly generatesDeviceOrientationNotifications: boolean;
  /** Exported member.*/
  readonly model: string | null;
  /** Exported member.*/
  readonly name: string | null;
  /** Exported member.*/
  readonly userInterfaceIdiom: number;
  /** Exported member.*/
  beginGeneratingDeviceOrientationNotifications(): void;
  /** Exported member.*/
  endGeneratingDeviceOrientationNotifications(): void;
  /** Exported member.*/
  playInputClick(): void;
}
/** Native class object for {@link UIDevice}.*/
interface UIDeviceClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIDevice | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIDevice | null;
  /** Exported member.*/
  alloc(): UIDevice | null;
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
  currentDevice(): UIDevice | null;
}
/** Host-injected native class object.*/
declare var UIDevice: UIDeviceClass;

/** Native instance exported as `UIEvent`.
 */
interface UIEvent {
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
  readonly type: number;
  /** Exported member.*/
  readonly subtype: number;
  /** Exported member.*/
  readonly timestamp: number;
  /** Exported member.*/
  allTouches(): NSSet | null;
  /** Exported member.*/
  touchesForWindow(_window: UIWindow | null): NSSet | null;
  /** Exported member.*/
  touchesForView(_view: UIView | null): NSSet | null;
  /** Exported member.*/
  touchesForGestureRecognizer(_gesture: UIGestureRecognizer | null): NSSet | null;
}
/** Native class object for {@link UIEvent}.*/
interface UIEventClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIEvent | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIEvent | null;
  /** Exported member.*/
  alloc(): UIEvent | null;
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
}
/** Host-injected native class object.*/
declare var UIEvent: UIEventClass;

/** Native instance exported as `UIFont`.
 */
interface UIFont {
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
  fontWithSize(_fontSize: number): UIFont | null;
}
/** Native class object for {@link UIFont}.*/
interface UIFontClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIFont | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIFont | null;
  /** Exported member.*/
  alloc(): UIFont | null;
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
  labelFontSize(): number;
  /** Exported member.*/
  buttonFontSize(): number;
  /** Exported member.*/
  smallSystemFontSize(): number;
  /** Exported member.*/
  systemFontSize(): number;
  /** Exported member.*/
  preferredFontForTextStyle(_style: string | null): UIFont | null;
  /** Exported member.*/
  fontWithNameSize(_fontName: string | null, _fontSize: number): UIFont | null;
  /** Exported member.*/
  familyNames(): unknown[] | null;
  /** Exported member.*/
  fontNamesForFamilyName(_familyName: string | null): unknown[] | null;
  /** Exported member.*/
  systemFontOfSize(_fontSize: number): UIFont | null;
  /** Exported member.*/
  boldSystemFontOfSize(_fontSize: number): UIFont | null;
  /** Exported member.*/
  italicSystemFontOfSize(_fontSize: number): UIFont | null;
}
/** Host-injected native class object.*/
declare var UIFont: UIFontClass;

/** Native instance exported as `UIGestureRecognizer`.
 */
interface UIGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UIGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
}
/** Native class object for {@link UIGestureRecognizer}.*/
interface UIGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UIGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UIGestureRecognizer: UIGestureRecognizerClass;

/** Native instance exported as `UIImage`.
 */
interface UIImage {
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
  readonly scale: number;
  /** Exported member.*/
  readonly leftCapWidth: number;
  /** Exported member.*/
  CGImage(): unknown;
  /** Exported member.*/
  readonly size: CGSize;
  /** Exported member.*/
  readonly topCapHeight: number;
  /** Exported member.*/
  readonly imageOrientation: number;
  /** Exported member.*/
  drawAtPoint(_point: CGPoint): void;
  /** Exported member.*/
  drawAtPointBlendModeAlpha(_point: CGPoint, _blendMode: number, _alpha: number): void;
  /** Exported member.*/
  drawInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawInRectBlendModeAlpha(_rect: CGRect, _blendMode: number, _alpha: number): void;
  /** Exported member.*/
  drawAsPatternInRect(_rect: CGRect): void;
  /** Exported member.*/
  resizableImageWithCapInsets(_capInsets: UIEdgeInsets): UIImage | null;
  /** Exported member.*/
  imageWithAlignmentRectInsets(_alignmentInsets: UIEdgeInsets): UIImage | null;
  /** Exported member.*/
  stretchableImageWithLeftCapWidthTopCapHeight(_leftCapWidth: number, _topCapHeight: number): UIImage | null;
  /** Exported member.*/
  jpegData(_compressionQuality: number): NSData | null;
  /** Exported member.*/
  pngData(): NSData | null;
}
/** Native class object for {@link UIImage}.*/
interface UIImageClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIImage | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIImage | null;
  /** Exported member.*/
  alloc(): UIImage | null;
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
  imageNamed(_name: string | null): UIImage | null;
  /** Exported member.*/
  imageWithContentsOfFile(_path: string | null): UIImage | null;
  /** Exported member.*/
  imageWithData(_data: NSData | null): UIImage | null;
  /** Exported member.*/
  imageWithDataScale(_data: NSData | null, _scale: number): UIImage | null;
  /** Exported member.*/
  imageWithCGImage(_cgImage: unknown): UIImage | null;
  /** Exported member.*/
  imageWithCGImageScaleOrientation(_cgImage: unknown, _scale: number, _orientation: number): UIImage | null;
  /** Exported member.*/
  addOSImageEncoding(_image: UIImage | null): void;
  /** Exported member.*/
  removeAllOSImageEncoding(): void;
}
/** Host-injected native class object.*/
declare var UIImage: UIImageClass;

/** Native instance exported as `UIImagePickerController`.
 */
interface UIImagePickerController {
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
  readonly visibleViewController: UIViewController | null;
  /** Exported member.*/
  navigationBarHidden: boolean;
  /** Exported member.*/
  toolbarHidden: boolean;
  /** Exported member.*/
  readonly interactivePopGestureRecognizer: UIGestureRecognizer | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  readonly toolbar: UIToolbar | null;
  /** Exported member.*/
  readonly topViewController: UIViewController | null;
  /** Exported member.*/
  viewControllers: unknown[] | null;
  /** Exported member.*/
  readonly navigationBar: UINavigationBar | null;
  /** Exported member.*/
  initWithRootViewController(_rootViewController: UIViewController | null): UIImagePickerController | null;
  /** Exported member.*/
  pushViewControllerAnimated(_viewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  popViewControllerAnimated(_animated: boolean): UIViewController | null;
  /** Exported member.*/
  popToViewControllerAnimated(_viewController: UIViewController | null, _animated: boolean): unknown[] | null;
  /** Exported member.*/
  popToRootViewControllerAnimated(_animated: boolean): unknown[] | null;
  /** Exported member.*/
  setViewControllersAnimated(_viewControllers: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  setNavigationBarHiddenAnimated(_hidden: boolean, _animated: boolean): void;
  /** Exported member.*/
  setToolbarHiddenAnimated(_hidden: boolean, _animated: boolean): void;
  /** Exported member.*/
  videoMaximumDuration: number;
  /** Exported member.*/
  mediaTypes: unknown[] | null;
  /** Exported member.*/
  sourceType: number;
  /** Exported member.*/
  allowsEditing: boolean;
  /** Exported member.*/
  cameraOverlayView: UIView | null;
  /** Exported member.*/
  allowsImageEditing: boolean;
  /** Exported member.*/
  cameraViewTransform: CGAffineTransform;
  /** Exported member.*/
  showsCameraControls: boolean;
  /** Exported member.*/
  takePicture(): void;
  /** Exported member.*/
  startVideoCapture(): boolean;
  /** Exported member.*/
  stopVideoCapture(): void;
}
/** Native class object for {@link UIImagePickerController}.*/
interface UIImagePickerControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIImagePickerController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIImagePickerController | null;
  /** Exported member.*/
  alloc(): UIImagePickerController | null;
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
  isSourceTypeAvailable(_sourceType: number): boolean;
  /** Exported member.*/
  availableMediaTypesForSourceType(_sourceType: number): unknown[] | null;
}
/** Host-injected native class object.*/
declare var UIImagePickerController: UIImagePickerControllerClass;

/** Native instance exported as `UIImageView`.
 */
interface UIImageView {
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
  initWithFrame(_frame: CGRect): UIImageView | null;
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
  animationRepeatCount: number;
  /** Exported member.*/
  highlightedAnimationImages: unknown[] | null;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  animationDuration: number;
  /** Exported member.*/
  image: UIImage | null;
  /** Exported member.*/
  animationImages: unknown[] | null;
  /** Exported member.*/
  highlightedImage: UIImage | null;
  /** Exported member.*/
  startAnimating(): void;
  /** Exported member.*/
  stopAnimating(): void;
  /** Exported member.*/
  isAnimating(): boolean;
}
/** Native class object for {@link UIImageView}.*/
interface UIImageViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIImageView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIImageView | null;
  /** Exported member.*/
  alloc(): UIImageView | null;
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
declare var UIImageView: UIImageViewClass;

/** Native instance exported as `UIKeyCommand`.
 */
interface UIKeyCommand {
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
  readonly input: string | null;
  /** Exported member.*/
  readonly undoManager: NSUndoManager | null;
  /** Exported member.*/
  readonly keyCommands: unknown[] | null;
  /** Exported member.*/
  readonly modifierFlags: number;
  /** Exported member.*/
  readonly inputView: UIView | null;
  /** Exported member.*/
  readonly textInputContextIdentifier: string | null;
  /** Exported member.*/
  readonly inputAccessoryView: UIView | null;
}
/** Native class object for {@link UIKeyCommand}.*/
interface UIKeyCommandClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIKeyCommand | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIKeyCommand | null;
  /** Exported member.*/
  alloc(): UIKeyCommand | null;
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
}
/** Host-injected native class object.*/
declare var UIKeyCommand: UIKeyCommandClass;

/** Native instance exported as `UILabel`.
 */
interface UILabel {
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
  initWithFrame(_frame: CGRect): UILabel | null;
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
  text: string | null;
  /** Exported member.*/
  attributedText: NSAttributedString | null;
  /** Exported member.*/
  font: UIFont | null;
  /** Exported member.*/
  textColor: UIColor | null;
  /** Exported member.*/
  highlightedTextColor: UIColor | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  shadowOffset: CGSize;
  /** Exported member.*/
  textAlignment: number;
  /** Exported member.*/
  lineBreakMode: number;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  numberOfLines: number;
  /** Exported member.*/
  baselineAdjustment: number;
  /** Exported member.*/
  adjustsFontSizeToFitWidth: boolean;
  /** Exported member.*/
  minimumFontSize: number;
  /** Exported member.*/
  minimumScaleFactor: number;
  /** Exported member.*/
  topAlign: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  textRectForBoundsLimitedToNumberOfLines(_bounds: CGRect, _numberOfLines: number): CGRect;
  /** Exported member.*/
  drawTextInRect(_rect: CGRect): void;
}
/** Native class object for {@link UILabel}.*/
interface UILabelClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UILabel | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UILabel | null;
  /** Exported member.*/
  alloc(): UILabel | null;
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
declare var UILabel: UILabelClass;

/** Native instance exported as `UILocalNotification`.
 */
interface UILocalNotification {
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
  timeZone: NSTimeZone | null;
  /** Exported member.*/
  userInfo: Record<string, unknown> | null;
  /** Exported member.*/
  alertBody: string | null;
  /** Exported member.*/
  soundName: string | null;
  /** Exported member.*/
  fireDate: Date | null;
}
/** Native class object for {@link UILocalNotification}.*/
interface UILocalNotificationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UILocalNotification | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UILocalNotification | null;
  /** Exported member.*/
  alloc(): UILocalNotification | null;
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
}
/** Host-injected native class object.*/
declare var UILocalNotification: UILocalNotificationClass;

/** Native instance exported as `UILongPressGestureRecognizer`.
 */
interface UILongPressGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UILongPressGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  allowableMovement: number;
  /** Exported member.*/
  minimumPressDuration: number;
  /** Exported member.*/
  numberOfTapsRequired: number;
  /** Exported member.*/
  numberOfTouchesRequired: number;
}
/** Native class object for {@link UILongPressGestureRecognizer}.*/
interface UILongPressGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UILongPressGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UILongPressGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UILongPressGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UILongPressGestureRecognizer: UILongPressGestureRecognizerClass;

/** Native instance exported as `UINavigationBar`.
 */
interface UINavigationBar {
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
  initWithFrame(_frame: CGRect): UINavigationBar | null;
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
  title: string | null;
  /** Exported member.*/
  backBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  items: unknown[] | null;
  /** Exported member.*/
  hidesBackButton: boolean;
  /** Exported member.*/
  translucent: boolean;
  /** Exported member.*/
  rightBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  prompt: string | null;
  /** Exported member.*/
  titleView: UIView | null;
  /** Exported member.*/
  barTintColor: UIColor | null;
  /** Exported member.*/
  barStyle: number;
  /** Exported member.*/
  readonly topItem: UINavigationItem | null;
  /** Exported member.*/
  leftBarButtonItems: unknown[] | null;
  /** Exported member.*/
  titleTextAttributes: Record<string, unknown> | null;
  /** Exported member.*/
  readonly backItem: UINavigationItem | null;
  /** Exported member.*/
  leftBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  rightBarButtonItems: unknown[] | null;
  /** Exported member.*/
  pushNavigationItemAnimated(_item: UINavigationItem | null, _animated: boolean): void;
  /** Exported member.*/
  popNavigationItemAnimated(_animated: boolean): UINavigationItem | null;
  /** Exported member.*/
  setItemsAnimated(_items: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  setBackgroundImageForBarMetrics(_backgroundImage: UIImage | null, _barMetrics: number): void;
  /** Exported member.*/
  backgroundImageForBarMetrics(_barMetrics: number): UIImage | null;
  /** Exported member.*/
  setTitleVerticalPositionAdjustmentForBarMetrics(_adjustment: number, _barMetrics: number): void;
  /** Exported member.*/
  titleVerticalPositionAdjustmentForBarMetrics(_barMetrics: number): number;
}
/** Native class object for {@link UINavigationBar}.*/
interface UINavigationBarClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UINavigationBar | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UINavigationBar | null;
  /** Exported member.*/
  alloc(): UINavigationBar | null;
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
declare var UINavigationBar: UINavigationBarClass;

/** Native instance exported as `UINavigationController`.
 */
interface UINavigationController {
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
  readonly visibleViewController: UIViewController | null;
  /** Exported member.*/
  navigationBarHidden: boolean;
  /** Exported member.*/
  toolbarHidden: boolean;
  /** Exported member.*/
  readonly interactivePopGestureRecognizer: UIGestureRecognizer | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  readonly toolbar: UIToolbar | null;
  /** Exported member.*/
  readonly topViewController: UIViewController | null;
  /** Exported member.*/
  viewControllers: unknown[] | null;
  /** Exported member.*/
  readonly navigationBar: UINavigationBar | null;
  /** Exported member.*/
  initWithRootViewController(_rootViewController: UIViewController | null): UINavigationController | null;
  /** Exported member.*/
  pushViewControllerAnimated(_viewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  popViewControllerAnimated(_animated: boolean): UIViewController | null;
  /** Exported member.*/
  popToViewControllerAnimated(_viewController: UIViewController | null, _animated: boolean): unknown[] | null;
  /** Exported member.*/
  popToRootViewControllerAnimated(_animated: boolean): unknown[] | null;
  /** Exported member.*/
  setViewControllersAnimated(_viewControllers: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  setNavigationBarHiddenAnimated(_hidden: boolean, _animated: boolean): void;
  /** Exported member.*/
  setToolbarHiddenAnimated(_hidden: boolean, _animated: boolean): void;
}
/** Native class object for {@link UINavigationController}.*/
interface UINavigationControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UINavigationController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UINavigationController | null;
  /** Exported member.*/
  alloc(): UINavigationController | null;
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
declare var UINavigationController: UINavigationControllerClass;

/** Native instance exported as `UINavigationItem`.
 */
interface UINavigationItem {
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
  title: string | null;
  /** Exported member.*/
  backBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  hidesBackButton: boolean;
  /** Exported member.*/
  rightBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  prompt: string | null;
  /** Exported member.*/
  titleView: UIView | null;
  /** Exported member.*/
  leftBarButtonItem: UIBarButtonItem | null;
  /** Exported member.*/
  initWithTitle(_title: string | null): UINavigationItem | null;
  /** Exported member.*/
  setHidesBackButtonAnimated(_hidesBackButton: boolean, _animated: boolean): void;
  /** Exported member.*/
  setLeftBarButtonItemsAnimated(_items: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  setRightBarButtonItemsAnimated(_items: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  setLeftBarButtonItemAnimated(_item: UIBarButtonItem | null, _animated: boolean): void;
  /** Exported member.*/
  setRightBarButtonItemAnimated(_item: UIBarButtonItem | null, _animated: boolean): void;
}
/** Native class object for {@link UINavigationItem}.*/
interface UINavigationItemClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UINavigationItem | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UINavigationItem | null;
  /** Exported member.*/
  alloc(): UINavigationItem | null;
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
}
/** Host-injected native class object.*/
declare var UINavigationItem: UINavigationItemClass;

/** Native instance exported as `UIPageControl`.
 */
interface UIPageControl {
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
  initWithFrame(_frame: CGRect): UIPageControl | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  numberOfPages: number;
  /** Exported member.*/
  defersCurrentPageDisplay: boolean;
  /** Exported member.*/
  pageIndicatorTintColor: UIColor | null;
  /** Exported member.*/
  hidesForSinglePage: boolean;
  /** Exported member.*/
  currentPage: number;
  /** Exported member.*/
  currentPageIndicatorTintColor: UIColor | null;
  /** Exported member.*/
  updateCurrentPageDisplay(): void;
  /** Exported member.*/
  sizeForNumberOfPages(_pageCount: number): CGSize;
}
/** Native class object for {@link UIPageControl}.*/
interface UIPageControlClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIPageControl | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIPageControl | null;
  /** Exported member.*/
  alloc(): UIPageControl | null;
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
declare var UIPageControl: UIPageControlClass;

/** Native instance exported as `UIPanGestureRecognizer`.
 */
interface UIPanGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UIPanGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  minimumNumberOfTouches: number;
  /** Exported member.*/
  maximumNumberOfTouches: number;
  /** Exported member.*/
  translationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  setTranslationInView(_translation: CGPoint, _view: UIView | null): void;
  /** Exported member.*/
  velocityInView(_view: UIView | null): CGPoint;
}
/** Native class object for {@link UIPanGestureRecognizer}.*/
interface UIPanGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIPanGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIPanGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UIPanGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UIPanGestureRecognizer: UIPanGestureRecognizerClass;

/** Native instance exported as `UIPasteboard`.
 */
interface UIPasteboard {
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
  persistent: boolean;
  /** Exported member.*/
  string: string | null;
  /** Exported member.*/
  readonly numberOfItems: number;
  /** Exported member.*/
  URL: NSURL | null;
  /** Exported member.*/
  color: UIColor | null;
  /** Exported member.*/
  colors: unknown[] | null;
  /** Exported member.*/
  image: UIImage | null;
  /** Exported member.*/
  readonly changeCount: number;
  /** Exported member.*/
  URLs: unknown[] | null;
  /** Exported member.*/
  images: unknown[] | null;
  /** Exported member.*/
  strings: unknown[] | null;
  /** Exported member.*/
  items: unknown[] | null;
  /** Exported member.*/
  readonly name: string | null;
  /** Exported member.*/
  pasteboardTypes(): unknown[] | null;
  /** Exported member.*/
  containsPasteboardTypes(_pasteboardTypes: unknown[] | null): boolean;
  /** Exported member.*/
  dataForPasteboardType(_pasteboardType: string | null): NSData | null;
  /** Exported member.*/
  valueForPasteboardType(_pasteboardType: string | null): unknown;
  /** Exported member.*/
  setValueForPasteboardType(_value: unknown, _pasteboardType: string | null): void;
  /** Exported member.*/
  setDataForPasteboardType(_data: NSData | null, _pasteboardType: string | null): void;
  /** Exported member.*/
  pasteboardTypesForItemSet(_itemSet: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  containsPasteboardTypesInItemSet(_pasteboardTypes: unknown[] | null, _itemSet: NSIndexSet | null): boolean;
  /** Exported member.*/
  itemSetWithPasteboardTypes(_pasteboardTypes: unknown[] | null): NSIndexSet | null;
  /** Exported member.*/
  valuesForPasteboardTypeInItemSet(_pasteboardType: string | null, _itemSet: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  dataForPasteboardTypeInItemSet(_pasteboardType: string | null, _itemSet: NSIndexSet | null): unknown[] | null;
  /** Exported member.*/
  addItems(_items: unknown[] | null): void;
}
/** Native class object for {@link UIPasteboard}.*/
interface UIPasteboardClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIPasteboard | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIPasteboard | null;
  /** Exported member.*/
  alloc(): UIPasteboard | null;
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
  generalPasteboard(): UIPasteboard | null;
  /** Exported member.*/
  pasteboardWithNameCreate(_pasteboardName: string | null, _create: boolean): UIPasteboard | null;
  /** Exported member.*/
  pasteboardWithUniqueName(): UIPasteboard | null;
  /** Exported member.*/
  removePasteboardWithName(_pasteboardName: string | null): void;
}
/** Host-injected native class object.*/
declare var UIPasteboard: UIPasteboardClass;

/** Native instance exported as `UIPinchGestureRecognizer`.
 */
interface UIPinchGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UIPinchGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  scale: number;
  /** Exported member.*/
  readonly velocity: number;
}
/** Native class object for {@link UIPinchGestureRecognizer}.*/
interface UIPinchGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIPinchGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIPinchGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UIPinchGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UIPinchGestureRecognizer: UIPinchGestureRecognizerClass;

/** Native instance exported as `UIPopoverController`.
 */
interface UIPopoverController {
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
  contentViewController: UIViewController | null;
  /** Exported member.*/
  popoverContentSize: CGSize;
  /** Exported member.*/
  passthroughViews: unknown[] | null;
  /** Exported member.*/
  readonly popoverVisible: boolean;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  initWithContentViewController(_viewController: UIViewController | null): UIPopoverController | null;
  /** Exported member.*/
  setContentViewControllerAnimated(_viewController: UIViewController | null, _animated: boolean): void;
  /** Exported member.*/
  presentPopoverFromRect(_rect: CGRect, _view: UIView | null, _arrowDirections: number, _animated: boolean): void;
  /** Exported member.*/
  presentPopoverFromBarButtonItem(_item: UIBarButtonItem | null, _arrowDirections: number, _animated: boolean): void;
  /** Exported member.*/
  dismissPopoverAnimated(_animated: boolean): void;
}
/** Native class object for {@link UIPopoverController}.*/
interface UIPopoverControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIPopoverController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIPopoverController | null;
  /** Exported member.*/
  alloc(): UIPopoverController | null;
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
}
/** Host-injected native class object.*/
declare var UIPopoverController: UIPopoverControllerClass;

/** Native instance exported as `UIResponder`.
 */
interface UIResponder {
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
}
/** Native class object for {@link UIResponder}.*/
interface UIResponderClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIResponder | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIResponder | null;
  /** Exported member.*/
  alloc(): UIResponder | null;
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
}
/** Host-injected native class object.*/
declare var UIResponder: UIResponderClass;

/** Native instance exported as `UIRotationGestureRecognizer`.
 */
interface UIRotationGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UIRotationGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  rotation: number;
  /** Exported member.*/
  readonly velocity: number;
}
/** Native class object for {@link UIRotationGestureRecognizer}.*/
interface UIRotationGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIRotationGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIRotationGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UIRotationGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UIRotationGestureRecognizer: UIRotationGestureRecognizerClass;

/** Native instance exported as `UIScreen`.
 */
interface UIScreen {
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
  readonly bounds: CGRect;
  /** Exported member.*/
  readonly applicationFrame: CGRect;
  /** Exported member.*/
  readonly availableModes: unknown[] | null;
  /** Exported member.*/
  currentMode: UIScreenMode | null;
  /** Exported member.*/
  brightness: number;
  /** Exported member.*/
  readonly scale: number;
  /** Exported member.*/
  snapshotViewAfterScreenUpdates(_afterUpdates: boolean): UIView | null;
}
/** Native class object for {@link UIScreen}.*/
interface UIScreenClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIScreen | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIScreen | null;
  /** Exported member.*/
  alloc(): UIScreen | null;
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
  screens(): unknown[] | null;
  /** Exported member.*/
  mainScreen(): UIScreen | null;
}
/** Host-injected native class object.*/
declare var UIScreen: UIScreenClass;

/** Native instance exported as `UIScreenMode`.
 */
interface UIScreenMode {
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
  readonly pixelAspectRatio: number;
  /** Exported member.*/
  readonly size: CGSize;
}
/** Native class object for {@link UIScreenMode}.*/
interface UIScreenModeClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIScreenMode | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIScreenMode | null;
  /** Exported member.*/
  alloc(): UIScreenMode | null;
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
}
/** Host-injected native class object.*/
declare var UIScreenMode: UIScreenModeClass;

/** Native instance exported as `UIScrollView`.
 */
interface UIScrollView {
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
  initWithFrame(_frame: CGRect): UIScrollView | null;
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
}
/** Native class object for {@link UIScrollView}.*/
interface UIScrollViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIScrollView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIScrollView | null;
  /** Exported member.*/
  alloc(): UIScrollView | null;
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
declare var UIScrollView: UIScrollViewClass;

/** Native instance exported as `UISearchBar`.
 */
interface UISearchBar {
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
  initWithFrame(_frame: CGRect): UISearchBar | null;
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
  showsBookmarkButton: boolean;
  /** Exported member.*/
  selectedScopeButtonIndex: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  scopeButtonTitles: unknown[] | null;
  /** Exported member.*/
  showsSearchResultsButton: boolean;
  /** Exported member.*/
  translucent: boolean;
  /** Exported member.*/
  placeholder: string | null;
  /** Exported member.*/
  prompt: string | null;
  /** Exported member.*/
  searchResultsButtonSelected: boolean;
  /** Exported member.*/
  keyboardType: number;
  /** Exported member.*/
  barTintColor: UIColor | null;
  /** Exported member.*/
  barStyle: number;
  /** Exported member.*/
  backgroundImage: UIImage | null;
  /** Exported member.*/
  showsCancelButton: boolean;
  /** Exported member.*/
  searchFieldBackgroundPositionAdjustment: UIOffset;
  /** Exported member.*/
  showsScopeBar: boolean;
  /** Exported member.*/
  searchTextPositionAdjustment: UIOffset;
  /** Exported member.*/
  text: string | null;
  /** Exported member.*/
  scopeBarBackgroundImage: UIImage | null;
  /** Exported member.*/
  autocorrectionType: number;
  /** Exported member.*/
  autocapitalizationType: number;
  /** Exported member.*/
  setShowsCancelButtonAnimated(_showsCancelButton: boolean, _animated: boolean): void;
  /** Exported member.*/
  setSearchFieldBackgroundImageForState(_backgroundImage: UIImage | null, _state: number): void;
  /** Exported member.*/
  searchFieldBackgroundImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  setScopeBarButtonBackgroundImageForState(_backgroundImage: UIImage | null, _state: number): void;
  /** Exported member.*/
  scopeBarButtonBackgroundImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  setScopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(_dividerImage: UIImage | null, _leftState: number, _rightState: number): void;
  /** Exported member.*/
  scopeBarButtonDividerImageForLeftSegmentStateRightSegmentState(_leftState: number, _rightState: number): UIImage | null;
  /** Exported member.*/
  setScopeBarButtonTitleTextAttributesForState(_attributes: Record<string, unknown> | null, _state: number): void;
  /** Exported member.*/
  scopeBarButtonTitleTextAttributesForState(_state: number): Record<string, unknown> | null;
}
/** Native class object for {@link UISearchBar}.*/
interface UISearchBarClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UISearchBar | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UISearchBar | null;
  /** Exported member.*/
  alloc(): UISearchBar | null;
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
declare var UISearchBar: UISearchBarClass;

/** Native instance exported as `UISegmentedControl`.
 */
interface UISegmentedControl {
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
  initWithFrame(_frame: CGRect): UISegmentedControl | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  segmentedControlStyle: number;
  /** Exported member.*/
  readonly numberOfSegments: number;
  /** Exported member.*/
  selectedSegmentIndex: number;
  /** Exported member.*/
  momentary: boolean;
  /** Exported member.*/
  insertSegmentWithTitleAtIndexAnimated(_title: string | null, _segment: number, _animated: boolean): void;
  /** Exported member.*/
  insertSegmentWithImageAtIndexAnimated(_image: UIImage | null, _segment: number, _animated: boolean): void;
  /** Exported member.*/
  removeSegmentAtIndexAnimated(_segment: number, _animated: boolean): void;
  /** Exported member.*/
  removeAllSegments(): void;
  /** Exported member.*/
  setTitleForSegmentAtIndex(_title: string | null, _segment: number): void;
  /** Exported member.*/
  titleForSegmentAtIndex(_segment: number): string | null;
  /** Exported member.*/
  setImageForSegmentAtIndex(_image: UIImage | null, _segment: number): void;
  /** Exported member.*/
  imageForSegmentAtIndex(_segment: number): UIImage | null;
  /** Exported member.*/
  setWidthForSegmentAtIndex(_width: number, _segment: number): void;
  /** Exported member.*/
  widthForSegmentAtIndex(_segment: number): number;
  /** Exported member.*/
  setContentOffsetForSegmentAtIndex(_offset: CGSize, _segment: number): void;
  /** Exported member.*/
  contentOffsetForSegmentAtIndex(_segment: number): CGSize;
  /** Exported member.*/
  setEnabledForSegmentAtIndex(_enabled: boolean, _segment: number): void;
  /** Exported member.*/
  isEnabledForSegmentAtIndex(_segment: number): boolean;
  /** Exported member.*/
  setBackgroundImageForStateBarMetrics(_backgroundImage: UIImage | null, _state: number, _barMetrics: number): void;
  /** Exported member.*/
  backgroundImageForStateBarMetrics(_state: number, _barMetrics: number): UIImage | null;
  /** Exported member.*/
  setDividerImageForLeftSegmentStateRightSegmentStateBarMetrics(_dividerImage: UIImage | null, _leftState: number, _rightState: number, _barMetrics: number): void;
  /** Exported member.*/
  dividerImageForLeftSegmentStateRightSegmentStateBarMetrics(_leftState: number, _rightState: number, _barMetrics: number): UIImage | null;
  /** Exported member.*/
  setTitleTextAttributesForState(_attributes: Record<string, unknown> | null, _state: number): void;
  /** Exported member.*/
  titleTextAttributesForState(_state: number): Record<string, unknown> | null;
  /** Exported member.*/
  setContentPositionAdjustmentForSegmentTypeBarMetrics(_adjustment: UIOffset, _leftCenterRightOrAlone: number, _barMetrics: number): void;
  /** Exported member.*/
  contentPositionAdjustmentForSegmentTypeBarMetrics(_leftCenterRightOrAlone: number, _barMetrics: number): UIOffset;
}
/** Native class object for {@link UISegmentedControl}.*/
interface UISegmentedControlClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UISegmentedControl | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UISegmentedControl | null;
  /** Exported member.*/
  alloc(): UISegmentedControl | null;
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
declare var UISegmentedControl: UISegmentedControlClass;

/** Native instance exported as `UISlider`.
 */
interface UISlider {
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
  initWithFrame(_frame: CGRect): UISlider | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  maximumTrackTintColor: UIColor | null;
  /** Exported member.*/
  minimumValueImage: UIImage | null;
  /** Exported member.*/
  value: number;
  /** Exported member.*/
  readonly currentMinimumTrackImage: UIImage | null;
  /** Exported member.*/
  minimumTrackTintColor: UIColor | null;
  /** Exported member.*/
  readonly currentThumbImage: UIImage | null;
  /** Exported member.*/
  maximumValueImage: UIImage | null;
  /** Exported member.*/
  readonly currentMaximumTrackImage: UIImage | null;
  /** Exported member.*/
  maximumValue: number;
  /** Exported member.*/
  thumbTintColor: UIColor | null;
  /** Exported member.*/
  minimumValue: number;
  /** Exported member.*/
  setValueAnimated(_value: number, _animated: boolean): void;
  /** Exported member.*/
  setThumbImageForState(_image: UIImage | null, _state: number): void;
  /** Exported member.*/
  setMinimumTrackImageForState(_image: UIImage | null, _state: number): void;
  /** Exported member.*/
  setMaximumTrackImageForState(_image: UIImage | null, _state: number): void;
  /** Exported member.*/
  thumbImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  minimumTrackImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  maximumTrackImageForState(_state: number): UIImage | null;
  /** Exported member.*/
  minimumValueImageRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  maximumValueImageRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  trackRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  thumbRectForBoundsTrackRectValue(_bounds: CGRect, _rect: CGRect, _value: number): CGRect;
}
/** Native class object for {@link UISlider}.*/
interface UISliderClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UISlider | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UISlider | null;
  /** Exported member.*/
  alloc(): UISlider | null;
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
declare var UISlider: UISliderClass;

/** Native instance exported as `UISwipeGestureRecognizer`.
 */
interface UISwipeGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UISwipeGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouchesRequired: number;
  /** Exported member.*/
  direction: number;
}
/** Native class object for {@link UISwipeGestureRecognizer}.*/
interface UISwipeGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UISwipeGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UISwipeGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UISwipeGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UISwipeGestureRecognizer: UISwipeGestureRecognizerClass;

/** Native instance exported as `UISwitch`.
 */
interface UISwitch {
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
  initWithFrame(_frame: CGRect): UISwitch | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  onTintColor: UIColor | null;
  /** Exported member.*/
  on: boolean;
  /** Exported member.*/
  setOnAnimated(_on: boolean, _animated: boolean): void;
}
/** Native class object for {@link UISwitch}.*/
interface UISwitchClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UISwitch | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UISwitch | null;
  /** Exported member.*/
  alloc(): UISwitch | null;
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
declare var UISwitch: UISwitchClass;

/** Native instance exported as `UITabBar`.
 */
interface UITabBar {
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
  initWithFrame(_frame: CGRect): UITabBar | null;
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
  selectionIndicatorImage: UIImage | null;
  /** Exported member.*/
  barStyle: number;
  /** Exported member.*/
  selectedItem: UITabBarItem | null;
  /** Exported member.*/
  translucent: boolean;
  /** Exported member.*/
  itemWidth: number;
  /** Exported member.*/
  backgroundImage: UIImage | null;
  /** Exported member.*/
  selectedImageTintColor: UIColor | null;
  /** Exported member.*/
  barTintColor: UIColor | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  items: unknown[] | null;
  /** Exported member.*/
  itemSpacing: number;
  /** Exported member.*/
  setItemsAnimated(_items: unknown[] | null, _animated: boolean): void;
  /** Exported member.*/
  beginCustomizingItems(_items: unknown[] | null): void;
  /** Exported member.*/
  endCustomizingAnimated(_animated: boolean): boolean;
  /** Exported member.*/
  isCustomizing(): boolean;
}
/** Native class object for {@link UITabBar}.*/
interface UITabBarClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITabBar | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITabBar | null;
  /** Exported member.*/
  alloc(): UITabBar | null;
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
declare var UITabBar: UITabBarClass;

/** Native instance exported as `UITabBarController`.
 */
interface UITabBarController {
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
  readonly tabBar: UITabBar | null;
  /** Exported member.*/
  selectedViewController: UIViewController | null;
  /** Exported member.*/
  readonly moreNavigationController: UINavigationController | null;
  /** Exported member.*/
  readonly tabBarController: UITabBarController | null;
  /** Exported member.*/
  tabBarItem: UITabBarItem | null;
  /** Exported member.*/
  customizableViewControllers: unknown[] | null;
  /** Exported member.*/
  viewControllers: unknown[] | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  selectedIndex: number;
  /** Exported member.*/
  setViewControllersAnimated(_viewControllers: unknown[] | null, _animated: boolean): void;
}
/** Native class object for {@link UITabBarController}.*/
interface UITabBarControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITabBarController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITabBarController | null;
  /** Exported member.*/
  alloc(): UITabBarController | null;
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
declare var UITabBarController: UITabBarControllerClass;

/** Native instance exported as `UITabBarItem`.
 */
interface UITabBarItem {
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
  enabled: boolean;
  /** Exported member.*/
  title: string | null;
  /** Exported member.*/
  image: UIImage | null;
  /** Exported member.*/
  tag: number;
  /** Exported member.*/
  imageInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhoneInsets: UIEdgeInsets;
  /** Exported member.*/
  landscapeImagePhone: UIImage | null;
  /** Exported member.*/
  setTitleTextAttributesForState(_attributes: Record<string, unknown> | null, _state: number): void;
  /** Exported member.*/
  titleTextAttributesForState(_state: number): Record<string, unknown> | null;
  /** Exported member.*/
  selectedImage: UIImage | null;
  /** Exported member.*/
  badgeValue: string | null;
  /** Exported member.*/
  setFinishedSelectedImageWithFinishedUnselectedImage(_selectedImage: UIImage | null, _unselectedImage: UIImage | null): void;
  /** Exported member.*/
  finishedSelectedImage(): UIImage | null;
  /** Exported member.*/
  finishedUnselectedImage(): UIImage | null;
  /** Exported member.*/
  setTitlePositionAdjustment(_adjustment: UIOffset): void;
  /** Exported member.*/
  titlePositionAdjustment(): UIOffset;
}
/** Native class object for {@link UITabBarItem}.*/
interface UITabBarItemClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITabBarItem | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITabBarItem | null;
  /** Exported member.*/
  alloc(): UITabBarItem | null;
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
}
/** Host-injected native class object.*/
declare var UITabBarItem: UITabBarItemClass;

/** Native instance exported as `UITableView`.
 */
interface UITableView {
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
  initWithFrame(_frame: CGRect): UITableView | null;
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
}
/** Native class object for {@link UITableView}.*/
interface UITableViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITableView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITableView | null;
  /** Exported member.*/
  alloc(): UITableView | null;
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
declare var UITableView: UITableViewClass;

/** Native instance exported as `UITableViewCell`.
 */
interface UITableViewCell {
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
  initWithFrame(_frame: CGRect): UITableViewCell | null;
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
  readonly contentView: UIView | null;
  /** Exported member.*/
  readonly textLabel: UILabel | null;
  /** Exported member.*/
  readonly detailTextLabel: UILabel | null;
  /** Exported member.*/
  readonly imageView: UIImageView | null;
  /** Exported member.*/
  indexPath: NSIndexPath | null;
  /** Exported member.*/
  tableView: UITableView | null;
  /** Exported member.*/
  backgroundView: UIView | null;
  /** Exported member.*/
  selectedBackgroundView: UIView | null;
  /** Exported member.*/
  selectionStyle: number;
  /** Exported member.*/
  indentationLevel: number;
  /** Exported member.*/
  accessoryType: number;
  /** Exported member.*/
  accessoryView: UIView | null;
  /** Exported member.*/
  editingAccessoryType: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  editing: boolean;
  /** Exported member.*/
  readonly showingDeleteConfirmation: boolean;
  /** Exported member.*/
  readonly reuseIdentifier: string | null;
  /** Exported member.*/
  indentationWidth: number;
  /** Exported member.*/
  tintColor: UIColor | null;
  /** Exported member.*/
  showsReorderControl: boolean;
  /** Exported member.*/
  readonly multiSelView: UIImageView | null;
  /** Exported member.*/
  prepareForReuse(): void;
  /** Exported member.*/
  setSelectedAnimated(_selected: boolean, _animated: boolean): void;
  /** Exported member.*/
  setHighlightedAnimated(_highlighted: boolean, _animated: boolean): void;
  /** Exported member.*/
  setEditingAnimated(_editing: boolean, _animated: boolean): void;
}
/** Native class object for {@link UITableViewCell}.*/
interface UITableViewCellClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITableViewCell | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITableViewCell | null;
  /** Exported member.*/
  alloc(): UITableViewCell | null;
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
  makeWithStyleReuseIdentifier(_style: number, _reuseIdentifier: string | null): unknown;
}
/** Host-injected native class object.*/
declare var UITableViewCell: UITableViewCellClass;

/** Native instance exported as `UITableViewController`.
 */
interface UITableViewController {
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
  clearsSelectionOnViewWillAppear: boolean;
  /** Exported member.*/
  tableView: UITableView | null;
  /** Exported member.*/
  initWithStyle(_style: number): UITableViewController | null;
}
/** Native class object for {@link UITableViewController}.*/
interface UITableViewControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITableViewController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITableViewController | null;
  /** Exported member.*/
  alloc(): UITableViewController | null;
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
declare var UITableViewController: UITableViewControllerClass;

/** Native instance exported as `UITapGestureRecognizer`.
 */
interface UITapGestureRecognizer {
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
  state: number;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  enabled: boolean;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  cancelsTouchesInView: boolean;
  /** Exported member.*/
  delaysTouchesBegan: boolean;
  /** Exported member.*/
  delaysTouchesEnded: boolean;
  /** Exported member.*/
  ignoreTouchForEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  reset(): void;
  /** Exported member.*/
  canPreventGestureRecognizer(_preventedGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  canBePreventedByGestureRecognizer(_preventingGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldRequireFailureOfGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  shouldBeRequiredToFailByGestureRecognizer(_otherGestureRecognizer: UIGestureRecognizer | null): boolean;
  /** Exported member.*/
  touchesBeganWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesMovedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesEndedWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  touchesCancelledWithEvent(_touches: NSSet | null, _event: UIEvent | null): void;
  /** Exported member.*/
  initWithTargetAction(_target: unknown, _action: string | null): UITapGestureRecognizer | null;
  /** Exported member.*/
  addTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  removeTargetAction(_target: unknown, _action: string | null): void;
  /** Exported member.*/
  requireGestureRecognizerToFail(_otherGestureRecognizer: UIGestureRecognizer | null): void;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTouches(): number;
  /** Exported member.*/
  locationOfTouchInView(_touchIndex: number, _view: UIView | null): CGPoint;
  /** Exported member.*/
  numberOfTapsRequired: number;
  /** Exported member.*/
  numberOfTouchesRequired: number;
}
/** Native class object for {@link UITapGestureRecognizer}.*/
interface UITapGestureRecognizerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITapGestureRecognizer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITapGestureRecognizer | null;
  /** Exported member.*/
  alloc(): UITapGestureRecognizer | null;
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
}
/** Host-injected native class object.*/
declare var UITapGestureRecognizer: UITapGestureRecognizerClass;

/** Native instance exported as `UITextField`.
 */
interface UITextField {
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
  initWithFrame(_frame: CGRect): UITextField | null;
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
  enabled: boolean;
  /** Exported member.*/
  readonly tracking: boolean;
  /** Exported member.*/
  highlighted: boolean;
  /** Exported member.*/
  contentHorizontalAlignment: number;
  /** Exported member.*/
  selected: boolean;
  /** Exported member.*/
  contentVerticalAlignment: number;
  /** Exported member.*/
  readonly touchInside: boolean;
  /** Exported member.*/
  readonly state: number;
  /** Exported member.*/
  beginTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  continueTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): boolean;
  /** Exported member.*/
  endTrackingWithTouchWithEvent(_touch: UITouch | null, _event: UIEvent | null): void;
  /** Exported member.*/
  cancelTrackingWithEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  addTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  removeTargetActionForControlEvents(_target: unknown, _action: string | null, _controlEvents: number): void;
  /** Exported member.*/
  allTargets(): NSSet | null;
  /** Exported member.*/
  allControlEvents(): number;
  /** Exported member.*/
  actionsForTargetForControlEvent(_target: unknown, _controlEvent: number): unknown[] | null;
  /** Exported member.*/
  sendActionToForEvent(_action: string | null, _target: unknown, _event: UIEvent | null): void;
  /** Exported member.*/
  sendActionsForControlEvents(_controlEvents: number): void;
  /** Exported member.*/
  disabledBackground: UIImage | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  clearsOnBeginEditing: boolean;
  /** Exported member.*/
  textColor: UIColor | null;
  /** Exported member.*/
  background: UIImage | null;
  /** Exported member.*/
  minimumFontSize: number;
  /** Exported member.*/
  placeholder: string | null;
  /** Exported member.*/
  textAlignment: number;
  /** Exported member.*/
  rightViewMode: number;
  /** Exported member.*/
  adjustsFontSizeToFitWidth: boolean;
  /** Exported member.*/
  clearButtonMode: number;
  /** Exported member.*/
  leftView: UIView | null;
  /** Exported member.*/
  leftViewMode: number;
  /** Exported member.*/
  font: UIFont | null;
  /** Exported member.*/
  borderStyle: number;
  /** Exported member.*/
  readonly editing: boolean;
  /** Exported member.*/
  text: string | null;
  /** Exported member.*/
  rightView: UIView | null;
  /** Exported member.*/
  borderRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  textRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  placeholderRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  editingRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  clearButtonRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  leftViewRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  rightViewRectForBounds(_bounds: CGRect): CGRect;
  /** Exported member.*/
  drawTextInRect(_rect: CGRect): void;
  /** Exported member.*/
  drawPlaceholderInRect(_rect: CGRect): void;
}
/** Native class object for {@link UITextField}.*/
interface UITextFieldClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITextField | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITextField | null;
  /** Exported member.*/
  alloc(): UITextField | null;
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
declare var UITextField: UITextFieldClass;

/** Native instance exported as `UITextPosition`.
 */
interface UITextPosition {
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
  readonly markedTextRange: UITextRange | null;
  /** Exported member.*/
  readonly endOfDocument: UITextPosition | null;
  /** Exported member.*/
  markedTextStyle: Record<string, unknown> | null;
  /** Exported member.*/
  readonly tokenizer: unknown;
  /** Exported member.*/
  readonly rect: CGRect;
  /** Exported member.*/
  readonly empty: boolean;
  /** Exported member.*/
  selectedTextRange: UITextRange | null;
  /** Exported member.*/
  readonly isVertical: boolean;
  /** Exported member.*/
  readonly containsEnd: boolean;
  /** Exported member.*/
  inputDelegate: unknown;
  /** Exported member.*/
  readonly containsStart: boolean;
  /** Exported member.*/
  readonly alternativeInterpretations: unknown[] | null;
  /** Exported member.*/
  readonly beginningOfDocument: UITextPosition | null;
  /** Exported member.*/
  readonly end: UITextPosition | null;
  /** Exported member.*/
  readonly text: string | null;
  /** Exported member.*/
  readonly start: UITextPosition | null;
  /** Exported member.*/
  readonly textInputView: UIView | null;
  /** Exported member.*/
  readonly primaryLanguage: string | null;
}
/** Native class object for {@link UITextPosition}.*/
interface UITextPositionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITextPosition | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITextPosition | null;
  /** Exported member.*/
  alloc(): UITextPosition | null;
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
}
/** Host-injected native class object.*/
declare var UITextPosition: UITextPositionClass;

/** Native instance exported as `UITextRange`.
 */
interface UITextRange {
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
  readonly markedTextRange: UITextRange | null;
  /** Exported member.*/
  readonly endOfDocument: UITextPosition | null;
  /** Exported member.*/
  markedTextStyle: Record<string, unknown> | null;
  /** Exported member.*/
  readonly tokenizer: unknown;
  /** Exported member.*/
  readonly rect: CGRect;
  /** Exported member.*/
  readonly empty: boolean;
  /** Exported member.*/
  selectedTextRange: UITextRange | null;
  /** Exported member.*/
  readonly isVertical: boolean;
  /** Exported member.*/
  readonly containsEnd: boolean;
  /** Exported member.*/
  inputDelegate: unknown;
  /** Exported member.*/
  readonly containsStart: boolean;
  /** Exported member.*/
  readonly alternativeInterpretations: unknown[] | null;
  /** Exported member.*/
  readonly beginningOfDocument: UITextPosition | null;
  /** Exported member.*/
  readonly end: UITextPosition | null;
  /** Exported member.*/
  readonly text: string | null;
  /** Exported member.*/
  readonly start: UITextPosition | null;
  /** Exported member.*/
  readonly textInputView: UIView | null;
  /** Exported member.*/
  readonly primaryLanguage: string | null;
}
/** Native class object for {@link UITextRange}.*/
interface UITextRangeClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITextRange | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITextRange | null;
  /** Exported member.*/
  alloc(): UITextRange | null;
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
}
/** Host-injected native class object.*/
declare var UITextRange: UITextRangeClass;

/** Native instance exported as `UITextView`.
 */
interface UITextView {
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
  initWithFrame(_frame: CGRect): UITextView | null;
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
  readonly layoutManager: NSLayoutManager | null;
  /** Exported member.*/
  textContainerInset: UIEdgeInsets;
  /** Exported member.*/
  textColor: UIColor | null;
  /** Exported member.*/
  readonly textStorage: NSTextStorage | null;
  /** Exported member.*/
  allowsEditingTextAttributes: boolean;
  /** Exported member.*/
  textAlignment: number;
  /** Exported member.*/
  selectable: boolean;
  /** Exported member.*/
  readonly textContainer: NSTextContainer | null;
  /** Exported member.*/
  selectedRange: NSRange;
  /** Exported member.*/
  font: UIFont | null;
  /** Exported member.*/
  dataDetectorTypes: number;
  /** Exported member.*/
  typingAttributes: Record<string, unknown> | null;
  /** Exported member.*/
  text: string | null;
  /** Exported member.*/
  editable: boolean;
  /** Exported member.*/
  attributedText: NSAttributedString | null;
  /** Exported member.*/
  scrollRangeToVisible(_range: NSRange): void;
  /** Exported member.*/
  initWithFrameTextContainer(_frame: CGRect, _textContainer: NSTextContainer | null): UITextView | null;
}
/** Native class object for {@link UITextView}.*/
interface UITextViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITextView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITextView | null;
  /** Exported member.*/
  alloc(): UITextView | null;
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
declare var UITextView: UITextViewClass;

/** Native instance exported as `UIToolbar`.
 */
interface UIToolbar {
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
  initWithFrame(_frame: CGRect): UIToolbar | null;
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
  delegate: unknown;
  /** Exported member.*/
  items: unknown[] | null;
  /** Exported member.*/
  translucent: boolean;
  /** Exported member.*/
  barTintColor: UIColor | null;
  /** Exported member.*/
  barStyle: number;
  /** Exported member.*/
  setItemsAnimated(_items: unknown[] | null, _animated: boolean): void;
}
/** Native class object for {@link UIToolbar}.*/
interface UIToolbarClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIToolbar | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIToolbar | null;
  /** Exported member.*/
  alloc(): UIToolbar | null;
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
declare var UIToolbar: UIToolbarClass;

/** Native instance exported as `UITouch`.
 */
interface UITouch {
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
  readonly phase: number;
  /** Exported member.*/
  readonly timestamp: number;
  /** Exported member.*/
  readonly view: UIView | null;
  /** Exported member.*/
  readonly gestureRecognizers: unknown[] | null;
  /** Exported member.*/
  readonly tapCount: number;
  /** Exported member.*/
  readonly window: UIWindow | null;
  /** Exported member.*/
  paused: boolean;
  /** Exported member.*/
  readonly frame: CGRect;
  /** Exported member.*/
  readonly parent: SKNode | null;
  /** Exported member.*/
  readonly scene: SKScene | null;
  /** Exported member.*/
  userData: Record<string, unknown> | null;
  /** Exported member.*/
  physicsBody: SKPhysicsBody | null;
  /** Exported member.*/
  readonly children: unknown[] | null;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  userInteractionEnabled: boolean;
  /** Exported member.*/
  name: string | null;
  /** Exported member.*/
  locationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  previousLocationInView(_view: UIView | null): CGPoint;
  /** Exported member.*/
  locationInNode(_node: SKNode | null): CGPoint;
  /** Exported member.*/
  previousLocationInNode(_node: SKNode | null): CGPoint;
}
/** Native class object for {@link UITouch}.*/
interface UITouchClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UITouch | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UITouch | null;
  /** Exported member.*/
  alloc(): UITouch | null;
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
}
/** Host-injected native class object.*/
declare var UITouch: UITouchClass;

/** Native instance exported as `UIView`.
 */
interface UIView {
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
  initWithFrame(_frame: CGRect): UIView | null;
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
}
/** Native class object for {@link UIView}.*/
interface UIViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIView | null;
  /** Exported member.*/
  alloc(): UIView | null;
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
declare var UIView: UIViewClass;

/** Native instance exported as `UIViewController`.
 */
interface UIViewController {
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
}
/** Native class object for {@link UIViewController}.*/
interface UIViewControllerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIViewController | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIViewController | null;
  /** Exported member.*/
  alloc(): UIViewController | null;
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
declare var UIViewController: UIViewControllerClass;

/** Native instance exported as `UIWebView`.
 */
interface UIWebView {
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
  initWithFrame(_frame: CGRect): UIWebView | null;
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
  readonly canGoForward: boolean;
  /** Exported member.*/
  readonly scrollView: UIScrollView | null;
  /** Exported member.*/
  readonly canGoBack: boolean;
  /** Exported member.*/
  scalesPageToFit: boolean;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  dataDetectorTypes: number;
  /** Exported member.*/
  readonly request: NSURLRequest | null;
  /** Exported member.*/
  readonly loading: boolean;
  /** Exported member.*/
  customUserAgent: string | null;
  /** Exported member.*/
  loadRequest(_request: NSURLRequest | null): void;
  /** Exported member.*/
  loadHTMLStringBaseURL(_string: string | null, _baseURL: NSURL | null): void;
  /** Exported member.*/
  loadDataMIMETypeTextEncodingNameBaseURL(_data: NSData | null, _MIMEType: string | null, _textEncodingName: string | null, _baseURL: NSURL | null): void;
  /** Exported member.*/
  loadFileURLAllowingReadAccessToURL(_URL: NSURL | null, _readAccessURL: NSURL | null): void;
  /** Exported member.*/
  reload(): void;
  /** Exported member.*/
  stopLoading(): void;
  /** Exported member.*/
  goBack(): void;
  /** Exported member.*/
  goForward(): void;
  /** Exported member.*/
  evaluateJavaScript(_javaScriptString: string | null, _completionHandler: unknown): void;
  /** Exported member.*/
  takeSnapshotWithWidth(_width: number, _completionHandler: unknown): void;
}
/** Native class object for {@link UIWebView}.*/
interface UIWebViewClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIWebView | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIWebView | null;
  /** Exported member.*/
  alloc(): UIWebView | null;
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
declare var UIWebView: UIWebViewClass;

/** Native instance exported as `UIWindow`.
 */
interface UIWindow {
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
  initWithFrame(_frame: CGRect): UIWindow | null;
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
  screen: UIScreen | null;
  /** Exported member.*/
  readonly keyWindow: boolean;
  /** Exported member.*/
  rootViewController: UIViewController | null;
  /** Exported member.*/
  windowLevel: number;
  /** Exported member.*/
  becomeKeyWindow(): void;
  /** Exported member.*/
  resignKeyWindow(): void;
  /** Exported member.*/
  makeKeyWindow(): void;
  /** Exported member.*/
  makeKeyAndVisible(): void;
  /** Exported member.*/
  sendEvent(_event: UIEvent | null): void;
  /** Exported member.*/
  convertPointToWindow(_point: CGPoint, _window: UIWindow | null): CGPoint;
  /** Exported member.*/
  convertPointFromWindow(_point: CGPoint, _window: UIWindow | null): CGPoint;
  /** Exported member.*/
  convertRectToWindow(_rect: CGRect, _window: UIWindow | null): CGRect;
  /** Exported member.*/
  convertRectFromWindow(_rect: CGRect, _window: UIWindow | null): CGRect;
}
/** Native class object for {@link UIWindow}.*/
interface UIWindowClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): UIWindow | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): UIWindow | null;
  /** Exported member.*/
  alloc(): UIWindow | null;
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
declare var UIWindow: UIWindowClass;
