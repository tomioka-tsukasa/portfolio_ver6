/*fragment.glsl*/
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uPos;

varying vec2 vUv;
varying float opacity;

void main() {
  vec2 uv = vUv;

  // スクリーン座標を正規化（0.0-1.0）
  vec2 dist = gl_FragCoord.xy / uResolution;

  // uColorを基準にしたグラデーション色の計算（中心を黒く保つ）
  vec3 cc = uColor * vec3(0.0, dist.x, dist.y);

  // 最終色の計算
  vec3 balck = vec3(0.0, 0.0, 0.0);
  vec3 color = mix(balck, cc, opacity);

  // 全体的な明度を上げる
  color = color * 2.0;

  gl_FragColor = vec4(color, 1.0);
}
