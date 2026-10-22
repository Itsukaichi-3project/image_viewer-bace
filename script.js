const elem = document.getElementById('viewArea');
const panzoom = Panzoom(elem, {
  maxScale: 8,       // 最大で何倍まで拡大できるか（例: 8倍）
  minScale: 1,       // 最小縮小倍率
  contain: 'outside', // コンテナの枠外に行き過ぎないようにする制御
});

// 1. マウスホイールでの拡大・縮小を有効化
elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// 2. スマホやタブレットのピンチイン・ピンチアウト、指でのドラッグ移動はデフォルトで有効になります