/*fragment.glsl*/
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uPos;
uniform float uColorPattern; // 0.0: blue, 1.0: red, 2.0: green など

varying vec2 vUv;
varying float opacity;

void main() {
  vec2 uv = vUv;

  // スクリーン座標を正規化（0.0-1.0）
  vec2 dist = gl_FragCoord.xy / uResolution;

  // 各カラーパターンを定義
  vec3 bluePattern = vec3(0.0, dist.x, dist.y);
  vec3 redPattern = vec3(dist.x + dist.y * 0.5, dist.y * 0.5, 0.0);
  vec3 yellowPattern = vec3(dist.x, dist.x + dist.y * 0.3, 0.0);
  float gray = (dist.x + dist.y) * 0.5;
  vec3 whitePattern = vec3(gray, gray, gray);

  // 滑らかにブレンド
  vec3 cc;
  float pattern = clamp(uColorPattern, 0.0, 3.0);

  if (pattern <= 1.0) {
    // Blue (0.0) から Red (1.0) へのブレンド
    cc = mix(bluePattern, redPattern, pattern);
  } else if (pattern <= 2.0) {
    // Red (1.0) から Yellow (2.0) へのブレンド
    float t = pattern - 1.0;
    cc = mix(redPattern, yellowPattern, t);
  } else {
    // Yellow (2.0) から White (3.0) へのブレンド
    float t = pattern - 2.0;
    cc = mix(yellowPattern, whitePattern, t);
  }

  // 最終色の計算
  vec3 balck = vec3(0.0, 0.0, 0.0);
  vec3 color = mix(balck, cc, opacity);

  // 全体的な明度を上げる
  color = color * 2.0;

  gl_FragColor = vec4(color, 1.0);
}
