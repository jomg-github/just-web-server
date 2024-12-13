(function () {
  const ENV = window.TARGET_ENV || "dev";  // 환경 변수 (디폴트 값은 dev)
  const configFile = `env/${ENV}.js`;      // 환경별 설정 파일 경로

  // 환경 파일 로드
  const script = document.createElement("script");
  script.src = configFile;
  script.onload = () => {
    console.log(`Loaded configuration: ${configFile}`);
  };
  script.onerror = () => {
    console.error(`Failed to load configuration: ${configFile}`);
  };
  document.head.appendChild(script);
})();