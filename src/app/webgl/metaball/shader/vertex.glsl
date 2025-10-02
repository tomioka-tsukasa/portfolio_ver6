/*vertex.glsl*/
uniform vec3 viewVector;// CameraPosition
uniform vec2 uResolution;
varying vec2 vUv;
varying float opacity;

void main() {
  // 1. UV座標をフラグメントシェーダーに渡す
  vUv = uv;

  // 2. 頂点の世界座標変換
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  // 3. インナーグロー効果の計算
  vec3 nNomal = normalize(normal);        // 正規化された法線ベクトル
  vec3 nViewVec = normalize(viewVector);  // 正規化されたカメラ方向ベクトル
  opacity = dot(nNomal, nViewVec);        // 内積計算（-1.0 ～ 1.0）
  opacity = 1.0 - abs(opacity * 1.3);    // インナーグロー効果
}
