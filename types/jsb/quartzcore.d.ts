/** @module QuartzCore */
// Generated from JSExport registrations. Do not edit by hand.
// Source revision: 7cbc638e59df. Platform-conditional declarations are a union.

/** Native instance exported as `CAAnimation`.
 */
interface CAAnimation {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
}
/** Native class object for {@link CAAnimation}.*/
interface CAAnimationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAAnimation | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAAnimation | null;
  /** Exported member.*/
  alloc(): CAAnimation | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAAnimation: CAAnimationClass;

/** Native instance exported as `CAAnimationGroup`.
 */
interface CAAnimationGroup {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  timingFunction: CAMediaTimingFunction | null;
  /** Exported member.*/
  values: unknown[] | null;
  /** Exported member.*/
  subtype: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  filter: unknown;
  /** Exported member.*/
  keyTimes: unknown[] | null;
  /** Exported member.*/
  valueFunction: CAValueFunction | null;
  /** Exported member.*/
  cumulative: boolean;
  /** Exported member.*/
  timingFunctions: unknown[] | null;
  /** Exported member.*/
  calculationMode: string | null;
  /** Exported member.*/
  rotationMode: string | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  animations: unknown[] | null;
  /** Exported member.*/
  continuityValues: unknown[] | null;
  /** Exported member.*/
  biasValues: unknown[] | null;
  /** Exported member.*/
  tensionValues: unknown[] | null;
  /** Exported member.*/
  keyPath: string | null;
  /** Exported member.*/
  toValue: unknown;
  /** Exported member.*/
  byValue: unknown;
  /** Exported member.*/
  fromValue: unknown;
  /** Exported member.*/
  additive: boolean;
  /** Exported member.*/
  removedOnCompletion: boolean;
}
/** Native class object for {@link CAAnimationGroup}.*/
interface CAAnimationGroupClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAAnimationGroup | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAAnimationGroup | null;
  /** Exported member.*/
  alloc(): CAAnimationGroup | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAAnimationGroup: CAAnimationGroupClass;

/** Native instance exported as `CABasicAnimation`.
 */
interface CABasicAnimation {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  timingFunction: CAMediaTimingFunction | null;
  /** Exported member.*/
  values: unknown[] | null;
  /** Exported member.*/
  subtype: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  filter: unknown;
  /** Exported member.*/
  keyTimes: unknown[] | null;
  /** Exported member.*/
  valueFunction: CAValueFunction | null;
  /** Exported member.*/
  cumulative: boolean;
  /** Exported member.*/
  timingFunctions: unknown[] | null;
  /** Exported member.*/
  calculationMode: string | null;
  /** Exported member.*/
  rotationMode: string | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  animations: unknown[] | null;
  /** Exported member.*/
  continuityValues: unknown[] | null;
  /** Exported member.*/
  biasValues: unknown[] | null;
  /** Exported member.*/
  tensionValues: unknown[] | null;
  /** Exported member.*/
  keyPath: string | null;
  /** Exported member.*/
  toValue: unknown;
  /** Exported member.*/
  byValue: unknown;
  /** Exported member.*/
  fromValue: unknown;
  /** Exported member.*/
  additive: boolean;
  /** Exported member.*/
  removedOnCompletion: boolean;
}
/** Native class object for {@link CABasicAnimation}.*/
interface CABasicAnimationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CABasicAnimation | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CABasicAnimation | null;
  /** Exported member.*/
  alloc(): CABasicAnimation | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  animationWithKeyPath(_path: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CABasicAnimation: CABasicAnimationClass;

/** Native instance exported as `CAEmitterLayer`.
 */
interface CAEmitterLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CAEmitterLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
  /** Exported member.*/
  renderMode: string | null;
  /** Exported member.*/
  emitterMode: string | null;
  /** Exported member.*/
  emitterCells: unknown[] | null;
  /** Exported member.*/
  emitterShape: string | null;
}
/** Native class object for {@link CAEmitterLayer}.*/
interface CAEmitterLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAEmitterLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAEmitterLayer | null;
  /** Exported member.*/
  alloc(): CAEmitterLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAEmitterLayer: CAEmitterLayerClass;

/** Native instance exported as `CAGradientLayer`.
 */
interface CAGradientLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CAGradientLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
  /** Exported member.*/
  colors: unknown[] | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  locations: unknown[] | null;
}
/** Native class object for {@link CAGradientLayer}.*/
interface CAGradientLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAGradientLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAGradientLayer | null;
  /** Exported member.*/
  alloc(): CAGradientLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAGradientLayer: CAGradientLayerClass;

/** Native instance exported as `CAKeyframeAnimation`.
 */
interface CAKeyframeAnimation {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  timingFunction: CAMediaTimingFunction | null;
  /** Exported member.*/
  values: unknown[] | null;
  /** Exported member.*/
  subtype: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  filter: unknown;
  /** Exported member.*/
  keyTimes: unknown[] | null;
  /** Exported member.*/
  valueFunction: CAValueFunction | null;
  /** Exported member.*/
  cumulative: boolean;
  /** Exported member.*/
  timingFunctions: unknown[] | null;
  /** Exported member.*/
  calculationMode: string | null;
  /** Exported member.*/
  rotationMode: string | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  animations: unknown[] | null;
  /** Exported member.*/
  continuityValues: unknown[] | null;
  /** Exported member.*/
  biasValues: unknown[] | null;
  /** Exported member.*/
  tensionValues: unknown[] | null;
  /** Exported member.*/
  keyPath: string | null;
  /** Exported member.*/
  toValue: unknown;
  /** Exported member.*/
  byValue: unknown;
  /** Exported member.*/
  fromValue: unknown;
  /** Exported member.*/
  additive: boolean;
  /** Exported member.*/
  removedOnCompletion: boolean;
}
/** Native class object for {@link CAKeyframeAnimation}.*/
interface CAKeyframeAnimationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAKeyframeAnimation | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAKeyframeAnimation | null;
  /** Exported member.*/
  alloc(): CAKeyframeAnimation | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  animationWithKeyPath(_path: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAKeyframeAnimation: CAKeyframeAnimationClass;

/** Native instance exported as `CALayer`.
 */
interface CALayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CALayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
}
/** Native class object for {@link CALayer}.*/
interface CALayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CALayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CALayer | null;
  /** Exported member.*/
  alloc(): CALayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CALayer: CALayerClass;

/** Native instance exported as `CAMediaTimingFunction`.
 */
interface CAMediaTimingFunction {
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
  initWithControlPointsC1y(_c1x: number, _c2x: number): CAMediaTimingFunction | null;
  /** Exported member.*/
  getControlPointAtIndexValues(_idx: number, _ptr: NativePointer): void;
}
/** Native class object for {@link CAMediaTimingFunction}.*/
interface CAMediaTimingFunctionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAMediaTimingFunction | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAMediaTimingFunction | null;
  /** Exported member.*/
  alloc(): CAMediaTimingFunction | null;
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
  functionWithName(_name: string | null): unknown;
  /** Exported member.*/
  functionWithControlPointsC1y(_c1x: number, _c2x: number): unknown;
}
/** Host-injected native class object.*/
declare var CAMediaTimingFunction: CAMediaTimingFunctionClass;

/** Native instance exported as `CAPropertyAnimation`.
 */
interface CAPropertyAnimation {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  timingFunction: CAMediaTimingFunction | null;
  /** Exported member.*/
  values: unknown[] | null;
  /** Exported member.*/
  subtype: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  filter: unknown;
  /** Exported member.*/
  keyTimes: unknown[] | null;
  /** Exported member.*/
  valueFunction: CAValueFunction | null;
  /** Exported member.*/
  cumulative: boolean;
  /** Exported member.*/
  timingFunctions: unknown[] | null;
  /** Exported member.*/
  calculationMode: string | null;
  /** Exported member.*/
  rotationMode: string | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  animations: unknown[] | null;
  /** Exported member.*/
  continuityValues: unknown[] | null;
  /** Exported member.*/
  biasValues: unknown[] | null;
  /** Exported member.*/
  tensionValues: unknown[] | null;
  /** Exported member.*/
  keyPath: string | null;
  /** Exported member.*/
  toValue: unknown;
  /** Exported member.*/
  byValue: unknown;
  /** Exported member.*/
  fromValue: unknown;
  /** Exported member.*/
  additive: boolean;
  /** Exported member.*/
  removedOnCompletion: boolean;
}
/** Native class object for {@link CAPropertyAnimation}.*/
interface CAPropertyAnimationClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAPropertyAnimation | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAPropertyAnimation | null;
  /** Exported member.*/
  alloc(): CAPropertyAnimation | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  animationWithKeyPath(_path: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAPropertyAnimation: CAPropertyAnimationClass;

/** Native instance exported as `CAReplicatorLayer`.
 */
interface CAReplicatorLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CAReplicatorLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
}
/** Native class object for {@link CAReplicatorLayer}.*/
interface CAReplicatorLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAReplicatorLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAReplicatorLayer | null;
  /** Exported member.*/
  alloc(): CAReplicatorLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAReplicatorLayer: CAReplicatorLayerClass;

/** Native instance exported as `CAScrollLayer`.
 */
interface CAScrollLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CAScrollLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
  /** Exported member.*/
  scrollToPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollToRect(_r: CGRect): void;
}
/** Native class object for {@link CAScrollLayer}.*/
interface CAScrollLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAScrollLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAScrollLayer | null;
  /** Exported member.*/
  alloc(): CAScrollLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAScrollLayer: CAScrollLayerClass;

/** Native instance exported as `CAShapeLayer`.
 */
interface CAShapeLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CAShapeLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
  /** Exported member.*/
  lineCap: string | null;
  /** Exported member.*/
  lineDashPattern: unknown[] | null;
  /** Exported member.*/
  fillColor: unknown;
  /** Exported member.*/
  strokeColor: unknown;
  /** Exported member.*/
  path: unknown;
  /** Exported member.*/
  fillRule: string | null;
  /** Exported member.*/
  lineJoin: string | null;
}
/** Native class object for {@link CAShapeLayer}.*/
interface CAShapeLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAShapeLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAShapeLayer | null;
  /** Exported member.*/
  alloc(): CAShapeLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAShapeLayer: CAShapeLayerClass;

/** Native instance exported as `CATextLayer`.
 */
interface CATextLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CATextLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
  /** Exported member.*/
  string: unknown;
  /** Exported member.*/
  truncationMode: string | null;
  /** Exported member.*/
  alignmentMode: string | null;
  /** Exported member.*/
  wrapped: boolean;
}
/** Native class object for {@link CATextLayer}.*/
interface CATextLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CATextLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CATextLayer | null;
  /** Exported member.*/
  alloc(): CATextLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CATextLayer: CATextLayerClass;

/** Native instance exported as `CATiledLayer`.
 */
interface CATiledLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CATiledLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
}
/** Native class object for {@link CATiledLayer}.*/
interface CATiledLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CATiledLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CATiledLayer | null;
  /** Exported member.*/
  alloc(): CATiledLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
  /** Exported member.*/
  fadeDuration(): number;
}
/** Host-injected native class object.*/
declare var CATiledLayer: CATiledLayerClass;

/** Native instance exported as `CATransaction`.
 */
interface CATransaction {
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
}
/** Native class object for {@link CATransaction}.*/
interface CATransactionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CATransaction | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CATransaction | null;
  /** Exported member.*/
  alloc(): CATransaction | null;
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
  begin(): void;
  /** Exported member.*/
  commit(): void;
  /** Exported member.*/
  flush(): void;
  /** Exported member.*/
  lock(): void;
  /** Exported member.*/
  unlock(): void;
  /** Exported member.*/
  animationDuration(): number;
  /** Exported member.*/
  setAnimationDuration(_dur: number): void;
  /** Exported member.*/
  animationTimingFunction(): CAMediaTimingFunction | null;
  /** Exported member.*/
  setAnimationTimingFunction(_function: CAMediaTimingFunction | null): void;
  /** Exported member.*/
  disableActions(): boolean;
  /** Exported member.*/
  setDisableActions(_flag: boolean): void;
  /** Exported member.*/
  completionBlock(): NativeBlock | null;
  /** Exported member.*/
  setCompletionBlock(_block: NativeBlock | null): void;
  /** Exported member.*/
  valueForKey(_key: string | null): unknown;
  /** Exported member.*/
  setValueForKey(_anObject: unknown, _key: string | null): void;
}
/** Host-injected native class object.*/
declare var CATransaction: CATransactionClass;

/** Native instance exported as `CATransformLayer`.
 */
interface CATransformLayer {
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
  readonly visibleRect: CGRect;
  /** Exported member.*/
  bounds: CGRect;
  /** Exported member.*/
  position: CGPoint;
  /** Exported member.*/
  anchorPoint: CGPoint;
  /** Exported member.*/
  frame: CGRect;
  /** Exported member.*/
  hidden: boolean;
  /** Exported member.*/
  doubleSided: boolean;
  /** Exported member.*/
  geometryFlipped: boolean;
  /** Exported member.*/
  readonly superlayer: CALayer | null;
  /** Exported member.*/
  sublayers: Array<CALayer> | null;
  /** Exported member.*/
  mask: CALayer | null;
  /** Exported member.*/
  contents: unknown;
  /** Exported member.*/
  opaque: boolean;
  /** Exported member.*/
  backgroundColor: UIColor | null;
  /** Exported member.*/
  borderColor: UIColor | null;
  /** Exported member.*/
  compositingFilter: unknown;
  /** Exported member.*/
  filters: unknown[] | null;
  /** Exported member.*/
  backgroundFilters: unknown[] | null;
  /** Exported member.*/
  shadowColor: UIColor | null;
  /** Exported member.*/
  scrollPoint(_p: CGPoint): void;
  /** Exported member.*/
  scrollRectToVisible(_r: CGRect): void;
  /** Exported member.*/
  init(): CATransformLayer | null;
  /** Exported member.*/
  presentationLayer(): unknown;
  /** Exported member.*/
  modelLayer(): unknown;
  /** Exported member.*/
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  affineTransform(): CGAffineTransform;
  /** Exported member.*/
  setAffineTransform(_m: CGAffineTransform): void;
  /** Exported member.*/
  contentsAreFlipped(): boolean;
  /** Exported member.*/
  removeFromSuperlayer(_unused: unknown): void;
  /** Exported member.*/
  addSublayer(_layer: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAtIndex(_layer: CALayer | null, _idx: number): void;
  /** Exported member.*/
  insertSublayerBelow(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  insertSublayerAbove(_layer: CALayer | null, _sibling: CALayer | null): void;
  /** Exported member.*/
  replaceSublayerWith(_layer: CALayer | null, _layer2: CALayer | null): void;
  /** Exported member.*/
  convertPointFromLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertPointToLayer(_p: CGPoint, _l: CALayer | null): CGPoint;
  /** Exported member.*/
  convertRectFromLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertRectToLayer(_r: CGRect, _l: CALayer | null): CGRect;
  /** Exported member.*/
  convertTimeFromLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  convertTimeToLayer(_t: number, _l: CALayer | null): number;
  /** Exported member.*/
  hitTest(_p: CGPoint): CALayer | null;
  /** Exported member.*/
  containsPoint(_p: CGPoint): boolean;
  /** Exported member.*/
  display(): void;
  /** Exported member.*/
  setNeedsDisplay(): void;
  /** Exported member.*/
  setNeedsDisplayInRect(_r: CGRect): void;
  /** Exported member.*/
  needsDisplay(): boolean;
  /** Exported member.*/
  displayIfNeeded(): void;
  /** Exported member.*/
  drawInContext(_ctx: unknown): void;
  /** Exported member.*/
  renderInContext(_ctx: unknown): void;
  /** Exported member.*/
  preferredFrameSize(): CGSize;
  /** Exported member.*/
  setNeedsLayout(): void;
  /** Exported member.*/
  needsLayout(): boolean;
  /** Exported member.*/
  layoutIfNeeded(): void;
  /** Exported member.*/
  layoutSublayers(): void;
  /** Exported member.*/
  actionForKey(_event: string | null): unknown;
  /** Exported member.*/
  addAnimationForKey(_anim: CAAnimation | null, _key: string | null): void;
  /** Exported member.*/
  removeAllAnimations(): void;
  /** Exported member.*/
  removeAnimationForKey(_key: string | null): void;
  /** Exported member.*/
  animationKeys(): unknown[] | null;
  /** Exported member.*/
  animationForKey(_key: string | null): CAAnimation | null;
}
/** Native class object for {@link CATransformLayer}.*/
interface CATransformLayerClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CATransformLayer | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CATransformLayer | null;
  /** Exported member.*/
  alloc(): CATransformLayer | null;
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
  layer(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
  /** Exported member.*/
  needsDisplayForKey(_key: string | null): boolean;
  /** Exported member.*/
  defaultActionForKey(_event: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CATransformLayer: CATransformLayerClass;

/** Native instance exported as `CATransition`.
 */
interface CATransition {
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
  shouldArchiveValueForKey(_key: string | null): boolean;
  /** Exported member.*/
  timingFunction: CAMediaTimingFunction | null;
  /** Exported member.*/
  values: unknown[] | null;
  /** Exported member.*/
  subtype: string | null;
  /** Exported member.*/
  delegate: unknown;
  /** Exported member.*/
  filter: unknown;
  /** Exported member.*/
  keyTimes: unknown[] | null;
  /** Exported member.*/
  valueFunction: CAValueFunction | null;
  /** Exported member.*/
  cumulative: boolean;
  /** Exported member.*/
  timingFunctions: unknown[] | null;
  /** Exported member.*/
  calculationMode: string | null;
  /** Exported member.*/
  rotationMode: string | null;
  /** Exported member.*/
  type: string | null;
  /** Exported member.*/
  animations: unknown[] | null;
  /** Exported member.*/
  continuityValues: unknown[] | null;
  /** Exported member.*/
  biasValues: unknown[] | null;
  /** Exported member.*/
  tensionValues: unknown[] | null;
  /** Exported member.*/
  keyPath: string | null;
  /** Exported member.*/
  toValue: unknown;
  /** Exported member.*/
  byValue: unknown;
  /** Exported member.*/
  fromValue: unknown;
  /** Exported member.*/
  additive: boolean;
  /** Exported member.*/
  removedOnCompletion: boolean;
}
/** Native class object for {@link CATransition}.*/
interface CATransitionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CATransition | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CATransition | null;
  /** Exported member.*/
  alloc(): CATransition | null;
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
  animation(): unknown;
  /** Exported member.*/
  defaultValueForKey(_key: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CATransition: CATransitionClass;

/** Native instance exported as `CAValueFunction`.
 */
interface CAValueFunction {
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
  readonly name: string | null;
}
/** Native class object for {@link CAValueFunction}.*/
interface CAValueFunctionClass {
  /** Exported member.*/
  load(): void;
  /** Exported member.*/
  "new"(): CAValueFunction | null;
  /** Exported member.*/
  allocWithZone(_zone: NativePointer | null): CAValueFunction | null;
  /** Exported member.*/
  alloc(): CAValueFunction | null;
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
  functionWithName(_name: string | null): unknown;
}
/** Host-injected native class object.*/
declare var CAValueFunction: CAValueFunctionClass;
