/** @module Value Struct */
/** JavaScriptCore structural geometry conversion. */
interface CGPoint { x: number; y: number; }
/** JavaScriptCore structural geometry conversion. */
interface CGSize { width: number; height: number; }
/** JavaScriptCore structural geometry conversion. */
interface CGRect { origin: CGPoint; size: CGSize; }
/** JavaScriptCore structural geometry conversion. */
interface NSRange { location: number; length: number; }
/** JavaScriptCore structural geometry conversion. */
interface CGAffineTransform { a: number; b: number; c: number; d: number; tx: number; ty: number; }
/** JavaScriptCore structural geometry conversion. */
interface UIEdgeInsets { top: number; left: number; bottom: number; right: number; }
/** JavaScriptCore structural geometry conversion. */
interface UIOffset { horizontal: number; vertical: number; }
/** JavaScriptCore structural geometry conversion. */
interface CATransform3D {
  m11: number; m12: number; m13: number; m14: number;
  m21: number; m22: number; m23: number; m24: number;
  m31: number; m32: number; m33: number; m34: number;
  m41: number; m42: number; m43: number; m44: number;
}
