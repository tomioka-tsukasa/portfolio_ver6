# メタボール位置計算の詳細解説

メタボールの動き方をカスタマイズするための完全ガイド

## 基本的な計算式の構造

### 現在の実装（Three.js公式ベース）

```typescript
// X軸の位置計算
const ballx = Math.sin(i + 1.26 * this.time * this.config.speed * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5

// Y軸の位置計算
const bally = Math.abs(Math.cos(i + 1.12 * this.time * this.config.speed * Math.cos(1.22 + 0.1424 * i))) * 0.77

// Z軸の位置計算
const ballz = Math.cos(i + 1.32 * this.time * this.config.speed * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5
```

### 計算式の分解

```typescript
// 基本構造: 波形関数(位相 + 周波数 * 時間 * 個別係数) * 振幅 + 中心位置
const position = WaveFunction(phase + frequency * time * individualFactor) * amplitude + center
```

## パラメータの詳細解説

### 1. **位相（Phase）** - 初期位置のずれ

```typescript
// 現在
const ballx = Math.sin(i + ...)  // i = メタボール番号による位相のずれ

// カスタマイズ例
const ballx = Math.sin(i * 2.0 + ...)     // より大きな初期位置差
const ballx = Math.sin(i * 0.5 + ...)     // より小さな初期位置差
const ballx = Math.sin(i + Math.PI + ...) // 180度位相をずらす
```

### 2. **基本周波数** - 基本的な動きの速さ

```typescript
// 現在
const ballx = Math.sin(... + 1.26 * this.time * ...)  // X軸基本周波数
const bally = Math.cos(... + 1.12 * this.time * ...)  // Y軸基本周波数
const ballz = Math.cos(... + 1.32 * this.time * ...)  // Z軸基本周波数

// カスタマイズ例
const ballx = Math.sin(... + 2.0 * this.time * ...)   // 2倍速
const ballx = Math.sin(... + 0.5 * this.time * ...)   // 半分の速度
const ballx = Math.sin(... + 0.8 * this.time * ...)   // ゆったりした動き
```

### 3. **個別係数** - メタボール毎の個性

```typescript
// X軸の個別係数（複雑なパターン）
(1.03 + 0.5 * Math.cos(0.21 * i))

// 分解すると
1.03                  // 基本個別係数
0.5                   // 個別変動の振幅
Math.cos(0.21 * i)    // 個別変動パターン（cos波）
0.21                  // 個別変動の周波数

// カスタマイズ例
(1.0 + 1.0 * Math.cos(0.5 * i))      // より大きな個別差
(1.05 + 0.2 * Math.cos(0.1 * i))     // より小さな個別差
(1.0 + 0.8 * Math.sin(0.3 * i))      // sin波に変更
(1.0 + 0.6 * Math.cos(0.15 * i))     // より滑らかな変動
```

### 4. **Y軸の特殊処理** - 床に沈む効果

```typescript
// 現在
const bally = Math.abs(Math.cos(...)) * 0.77

// Math.abs()の効果
Math.cos(...)     // 範囲: -0.77 ~ +0.77
Math.abs(...)     // 範囲: 0 ~ +0.77（床に沈まない）

// カスタマイズ例
const bally = Math.cos(...) * 0.77 + 0.77          // 床より上のみ
const bally = (Math.cos(...) + 1) * 0.385          // 0 ~ 0.77の範囲
const bally = Math.max(0, Math.cos(...)) * 0.77    // 負の部分を0にクランプ
```

### 5. **振幅（Amplitude）** - 動きの範囲

```typescript
// 現在
const ballx = Math.sin(...) * 0.27 + 0.5  // 振幅0.27、範囲0.23~0.77
const bally = Math.abs(...) * 0.77        // 振幅0.77、範囲0~0.77
const ballz = Math.cos(...) * 0.27 + 0.5  // 振幅0.27、範囲0.23~0.77

// カスタマイズ例
const ballx = Math.sin(...) * 0.5 + 0.5   // より大きな動き（0~1）
const ballx = Math.sin(...) * 0.1 + 0.5   // より小さな動き（0.4~0.6）
const ballx = Math.sin(...) * 0.3 + 0.3   // 左寄り（0~0.6）
const ballx = Math.sin(...) * 0.3 + 0.7   // 右寄り（0.4~1）
```

### 6. **中心位置（Center）** - 動きの基準点

```typescript
// 現在
const ballx = Math.sin(...) * 0.27 + 0.5  // 中心0.5（画面中央）
const ballz = Math.cos(...) * 0.27 + 0.5  // 中心0.5（画面中央）

// 座標系の理解
0.0 = 左端/前端
0.5 = 中央
1.0 = 右端/奥端

// カスタマイズ例
const ballx = Math.sin(...) * 0.2 + 0.2   // 左側で動く
const ballx = Math.sin(...) * 0.2 + 0.8   // 右側で動く
const ballz = Math.cos(...) * 0.3 + 0.2   // 手前側で動く
```

## 動きパターンのカスタマイズ例

### パターン1: ゆったりとした円運動

```typescript
const angle = this.time * this.config.speed * 0.3 + i * 0.8
const radius = 0.2 + 0.05 * Math.sin(this.time * 0.5 + i)

const ballx = Math.cos(angle) * radius + 0.5
const bally = Math.sin(this.time * 0.8 + i * 0.5) * 0.2 + 0.4
const ballz = Math.sin(angle) * radius + 0.5
```

**特徴**: 水平面で円運動、Y軸で上下運動

### パターン2: ランダムな跳ね回り

```typescript
const ballx = Math.sin(3.0 * this.time * this.config.speed + i * 1.7) * 0.45 + 0.5
const bally = Math.abs(Math.sin(2.5 * this.time * this.config.speed + i * 2.1)) * 0.8
const ballz = Math.cos(2.8 * this.time * this.config.speed + i * 1.3) * 0.45 + 0.5
```

**特徴**: 高速で不規則な動き、各軸で異なる周波数

### パターン3: 渦巻き運動

```typescript
const spiralTime = this.time * this.config.speed * 0.5
const radius = 0.1 + 0.2 * (i / this.config.numBlobs)
const height = (this.time * 0.3 + i * 0.5) % 1.0

const ballx = Math.cos(spiralTime + i * 2.0) * radius + 0.5
const bally = height * 0.6 + 0.1
const ballz = Math.sin(spiralTime + i * 2.0) * radius + 0.5
```

**特徴**: 螺旋状に上昇する動き

### パターン4: 波打つような動き

```typescript
const waveOffset = (i / this.config.numBlobs) * 0.8 + 0.1
const ballx = waveOffset
const bally = Math.sin(waveOffset * 12 + this.time * 2.0) * 0.25 + 0.4
const ballz = Math.cos(waveOffset * 8 + this.time * 1.5) * 0.2 + 0.5
```

**特徴**: X軸固定、YZ軸で波動

### パターン5: Figure-8運動

```typescript
const t = this.time * this.config.speed + i * 0.5
const ballx = Math.sin(t) * 0.3 + 0.5
const bally = Math.sin(t * 2) * 0.2 + 0.4
const ballz = Math.cos(t) * 0.3 + 0.5
```

**特徴**: 8の字を描く動き

## 強度計算の調整

```typescript
// 現在の強度計算
const strength = this.config.strength / ((Math.sqrt(this.config.numBlobs) - 1) / 4 + 1)

// 意味: メタボール数が増えるほど強度を下げて、全体の密度を一定に保つ

// カスタマイズ例
const strength = this.config.strength                           // 固定強度
const strength = this.config.strength * 0.5                     // 半分の強度
const strength = this.config.strength / Math.sqrt(this.config.numBlobs)  // 平方根で調整
const strength = this.config.strength * (1.0 - i / this.config.numBlobs) // 番号に応じて減衰
```

## 実用的なカスタマイズガイド

### 1. **よりゆっくりした動き**

```typescript
// 全ての周波数を0.5倍に
const ballx = Math.sin(i + 0.63 * this.time * this.config.speed * (...)) * 0.27 + 0.5
const bally = Math.abs(Math.cos(i + 0.56 * this.time * this.config.speed * ...)) * 0.77
const ballz = Math.cos(i + 0.66 * this.time * this.config.speed * 0.1 * ...) * 0.27 + 0.5
```

### 2. **より規則的な動き**

```typescript
// 個別係数を簡素化
const ballx = Math.sin(i + 1.0 * this.time * this.config.speed) * 0.27 + 0.5
const bally = Math.abs(Math.cos(i + 1.0 * this.time * this.config.speed)) * 0.77
const ballz = Math.cos(i + 1.0 * this.time * this.config.speed) * 0.27 + 0.5
```

### 3. **より大きな動きの範囲**

```typescript
// 振幅と中心位置を調整
const ballx = Math.sin(...) * 0.4 + 0.5  // 範囲0.1~0.9
const bally = Math.abs(...) * 0.9         // 範囲0~0.9
const ballz = Math.cos(...) * 0.4 + 0.5  // 範囲0.1~0.9
```

## デバッグのヒント

### 位置の確認

```typescript
// デバッグ出力を追加
console.log(`Metaball ${i}: x=${ballx.toFixed(3)}, y=${bally.toFixed(3)}, z=${ballz.toFixed(3)}`)
```

### 範囲の確認

```typescript
// 位置が0~1の範囲内かチェック
if (ballx < 0 || ballx > 1) console.warn(`ballx out of range: ${ballx}`)
if (bally < 0 || bally > 1) console.warn(`bally out of range: ${bally}`)
if (ballz < 0 || ballz > 1) console.warn(`ballz out of range: ${ballz}`)
```

このドキュメントを参考に、お好みの動きパターンを作成してください！