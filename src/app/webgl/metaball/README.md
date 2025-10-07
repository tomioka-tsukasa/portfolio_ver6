# WebGL Metaball Implementation

Three.js公式のMarching Cubesサンプルをベースに、機能ごとにモジュール化したメタボール実装です。

## 概要

このプロジェクトは、WebGLを使用してリアルタイムでメタボール（流体のように動く球体）をレンダリングします。Marching Cubesアルゴリズムを使用して、滑らかな表面を持つ3Dオブジェクトを生成し、dat.GUIによるリアルタイム調整とStats.jsによるパフォーマンス監視機能を提供します。

## 🚀 使用方法

### 基本的な使い方（webgl.tsでの統合）

```typescript
import { metaball } from './metaball/metaball'

// Three.jsシーンの初期化後に呼び出し
const scene = new THREE.Scene()

// メタボールを初期化
const metaballController = metaball(scene)

// アニメーションループ内で呼び出し
function animate(timestamp: number) {
  // 他のアニメーション処理...

  // メタボールのアニメーション更新
  metaballController.animate(timestamp)

  // レンダリング処理...
}
renderer.setAnimationLoop(animate)

// 必要に応じてクリーンアップ
// metaballController.cleanup()
```

### 戻り値

`metaball(scene)` は以下のオブジェクトを返します：

```typescript
{
  animate: (timestamp: number) => void,  // アニメーション更新関数
  cleanup: () => void                    // リソースクリーンアップ関数
}
```

### 前提条件

- Three.jsシーンオブジェクトが初期化されていること
- Three.js, dat.GUI, Stats.jsがインストールされていること

## 📁 プロジェクト構造

```
src/app/webgl/metaball/
├── metaball.ts                     # メイン実装ファイル
└── modules/
    ├── marchingCubes/
    │   ├── marchingCubes.ts        # Marching Cubesアルゴリズム実装
    │   └── marchingCubesTypes.ts   # Marching Cubes型定義
    ├── metaballGenerator/
    │   ├── metaballGenerator.ts    # メタボール生成・更新ロジック
    │   └── metaballGeneratorTypes.ts # メタボール型定義
    ├── sceneSetup/
    │   ├── sceneSetup.ts          # Three.jsシーン初期化
    │   └── sceneSetupTypes.ts     # シーン型定義
    └── stats/
        ├── stats.ts               # パフォーマンス統計
        └── statsTypes.ts          # Stats型定義
```

## ⚙️ 機能詳細

### 1. Marching Cubesモジュール (`modules/marchingCubes/`)

**主な機能:**
- MarchingCubesオブジェクトの初期化と管理
- マテリアル切り替え（Basic, Phong, Normal, Wireframe）
- 解像度とアイソレーション値の動的変更

**主要な関数:**
```typescript
initMarchingCubes(config: MarchingCubesConfig): MarchingCubesManager
changeMaterial(manager: MarchingCubesManager, materialName: string): void
changeResolution(manager: MarchingCubesManager, resolution: number): void
changeIsolation(manager: MarchingCubesManager, isolation: number): void
```

### 2. メタボール生成モジュール (`modules/metaballGenerator/`)

**主な機能:**
- パラメトリックなメタボールアニメーション
- 複数のメタボール間の相互作用
- リアルタイムパラメータ調整

**主要なクラス:**
```typescript
class MetaballGenerator {
  constructor(config: MetaballConfig)
  updateMetaballs(marchingCubesManager: MarchingCubesManager, deltaTime: number): void
  updateConfig(newConfig: Partial<MetaballConfig>): void
}
```

### 3. シーンセットアップモジュール (`modules/sceneSetup/`)

**主な機能:**
- Three.jsシーン、カメラ、レンダラーの初期化
- 複数のライト設定（環境光、指向性ライト、ポイントライト）
- ウィンドウリサイズ対応

**主要な関数:**
```typescript
initScene(canvas: HTMLCanvasElement, config: SceneConfig): SceneManager
render(sceneManager: SceneManager): void
updateCameraAspect(sceneManager: SceneManager, width: number, height: number): void
```

### 4. 統計情報モジュール (`modules/stats/`)

**主な機能:**
- FPS、レンダリング時間の表示
- メモリ使用量の監視
- 表示位置とモードの動的変更

**主要な関数:**
```typescript
initStats(config: StatsConfig): StatsManager
beginStats(statsManager: StatsManager): void
endStats(statsManager: StatsManager): void
```

## 🎛️ 調整可能なパラメータ

### メタボール設定
- **Animation Speed** (0.1-3.0): アニメーション速度
- **Number of Blobs** (1-20): メタボールの個数
- **Blob Strength** (0.1-3.0): メタボールの影響強度
- **Subtraction** (1-20): 負の影響度
- **Enable Colors**: カラー表示の切り替え

### Marching Cubes設定
- **Material**: マテリアル選択（basic, phong, normal, wireframe）
- **Resolution** (10-50): グリッド解像度
- **Isolation** (10-300): 等値面の閾値

## 🔧 技術仕様

### 使用技術
- **Three.js**: 3Dレンダリングエンジン
- **Marching Cubes Algorithm**: 等値面生成
- **dat.GUI**: リアルタイムパラメータ調整
- **Stats.js**: パフォーマンス監視
- **TypeScript**: 型安全性

### アルゴリズム
1. **メタボール計算**: 三角関数を使用したパラメトリックな位置計算
2. **フィールド生成**: 各メタボールの影響度を3D空間に配置
3. **Marching Cubes**: ボクセルグリッドから滑らかなメッシュを生成
4. **リアルタイム更新**: 60FPSでアニメーション更新

## 📚 使用例

### React/Next.jsでの統合

```typescript
'use client'
import { useEffect } from 'react'
import { metaball } from './src/app/webgl/metaball/metaball'

export default function MetaballPage() {
  useEffect(() => {
    const cleanup = metaball()
    return cleanup // コンポーネントアンマウント時にクリーンアップ
  }, [])

  return (
    <div>
      <canvas id="webgl-canvas" />
    </div>
  )
}
```

### カスタム設定での使用

現在の実装では、`metaball.ts`内で設定を変更することで、初期パラメータをカスタマイズできます：

```typescript
const metaballConfig: MetaballConfig = {
  numBlobs: 15,      // メタボール数を15に
  speed: 2.0,        // アニメーション速度を2倍に
  strength: 1.5,     // 強度を上げる
  subtract: 8,       // サブトラクション調整
  enableColors: true // カラー表示を有効化
}
```

## 🎨 ビジュアル効果

- **流体のような動き**: メタボールが滑らかに変形・結合
- **リアルタイムライティング**: 複数のライトソースによる立体的な表現
- **マテリアル切り替え**: Basic、Phong、Normal、Wireframeの4種類
- **カラーモード**: HSLカラー空間による色彩変化

## 🚀 パフォーマンス

- **最適化されたレンダリングループ**: requestAnimationFrame使用
- **動的解像度調整**: パフォーマンスに応じて解像度を調整可能
- **Stats監視**: リアルタイムでFPSとメモリ使用量を確認
- **クリーンアップ**: メモリリークを防ぐリソース管理

## 🔗 参考資料

- [Three.js公式 Marching Cubes例](https://github.com/mrdoob/three.js/blob/master/examples/webgl_marchingcubes.html)
- [Marching Cubesアルゴリズム解説](https://en.wikipedia.org/wiki/Marching_cubes)
- [メタボール理論](https://en.wikipedia.org/wiki/Metaballs)

このREADMEは、実装の理解と使用方法の習得をサポートするために作成されました。質問がある場合は、各モジュールのコメントも参照してください。