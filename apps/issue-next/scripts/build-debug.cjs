#!/usr/bin/env node
// 더 자세한 스택을 위해 Node 옵션 강제
process.env.NODE_OPTIONS = [
  process.env.NODE_OPTIONS,
  '--trace-uncaught',
  '--trace-warnings',
  '--enable-source-maps',
]
  .filter(Boolean)
  .join(' ');

// 전역 에러 훅
process.on('uncaughtException', (err) => {
  console.error('\n[uncaughtException]');
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('\n[unhandledRejection]');
  console.error(reason && reason.stack ? reason.stack : reason);
  process.exit(1);
});
(async () => {
  try {
    // Next 13~15: export 모양이 버전에 따라 달라질 수 있어 안전하게 로드
    let mod;
    try {
      // CJS require 경로 (권장)
      mod = require('next/dist/build');
    } catch {
      // ESM 경로 fallback
      mod = await import('next/dist/build/index.js');
    }

    const build =
      (mod && (mod.default || mod.build)) || // ESM default / named
      (typeof mod === 'function' ? mod : null); // CJS 함수 자체 export

    if (typeof build !== 'function') {
      console.error(
        '[build-debug] Cannot resolve next build function. Got keys:',
        Object.keys(mod || {}),
      );
      process.exit(1);
    }

    const dir = process.cwd(); // apps/next
    // Next 15에선 인자 하나로 충분
    await build(dir);
    console.log('\n[build-debug] Build finished without throwing.');
  } catch (e) {
    console.error('\n[build error]');
    console.error(e && e.stack ? e.stack : e);
    process.exit(1);
  }
})();
