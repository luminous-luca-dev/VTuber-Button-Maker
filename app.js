const KANA_GROUPS = ["NEW", "あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ", "英語", "歌", "挨拶"];
const STORAGE_KEY = "vtuber-button-factory-project-v1";
const FONT_STACKS = {
  gothic: `"BIZ UDPGothic", "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif`,
  rounded: `"M PLUS Rounded 1c", "Hiragino Maru Gothic ProN", "Yu Gothic", sans-serif`,
  mincho: `"Yu Mincho", "Hiragino Mincho ProN", "BIZ UDPMincho", serif`,
  system: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  pop: `"Hachi Maru Pop", "Yomogi", "Yu Gothic", cursive`
};

const STANDALONE_SITE_CSS = String.raw`
*{box-sizing:border-box}body{margin:0;color:#241f21;background:#efe9ed;font-family:"BIZ UDPGothic","Yu Gothic","Hiragino Kaku Gothic ProN",sans-serif}button,input{font:inherit}button{border:1px solid #cfc6cb;background:#fff;color:inherit;border-radius:8px;min-height:38px;padding:0 13px;cursor:pointer}button:hover{border-color:var(--site-accent,#d24b76);color:var(--site-accent,#d24b76)}.primary{background:#241f21;color:#fff;border-color:#241f21;font-weight:700}.button-site{--site-bg:#f8eef3;--site-text:#2a2024;--site-accent:#d24b76;--site-bg-overlay:linear-gradient(rgba(255,255,255,.58),rgba(255,255,255,.58));--site-bg-photo:none;--site-pattern:none;--button-scale:1;--title-size:clamp(38px,5vw,78px);--body-size:16px;--section-size:clamp(24px,3vw,38px);--button-text-size:16px;min-height:100vh;color:var(--site-text);background-color:var(--site-bg);background-image:var(--site-bg-overlay),var(--site-bg-photo),var(--site-pattern);background-size:cover,var(--site-bg-size,cover),var(--site-pattern-size,auto);background-position:center,center,center;background-attachment:fixed,fixed,fixed;font-family:var(--site-font,"BIZ UDPGothic","Yu Gothic",sans-serif);font-size:var(--body-size)}.button-site__inner{width:min(1180px,calc(100% - 40px));margin:0 auto;padding:34px 0 76px}.hero{position:relative;min-height:220px;display:grid;align-items:end;margin-bottom:24px;padding:34px;border:var(--hero-border,1px solid rgba(0,0,0,.08));background:var(--hero-bg,rgba(255,255,255,.84));box-shadow:var(--hero-shadow,none);overflow:hidden}.hero__title{margin:0;max-width:820px;font-size:var(--title-size);line-height:1.02;letter-spacing:0}.hero__copy{max-width:680px;margin:14px 0 0;color:color-mix(in srgb,var(--site-text) 76%,transparent);font-size:var(--body-size);font-weight:700;line-height:1.8}.mascot{position:absolute;right:28px;bottom:18px;width:min(24vw,210px);max-height:86%;object-fit:contain;filter:drop-shadow(0 14px 24px rgba(0,0,0,.18));pointer-events:none}.site-nav{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 28px}.site-nav a,.request-chip{display:inline-grid;place-items:center;min-height:38px;padding:0 14px;border:1px solid color-mix(in srgb,var(--site-accent) 55%,#fff);border-radius:var(--nav-radius,999px);color:var(--site-accent);background:color-mix(in srgb,#fff 82%,var(--site-accent));text-decoration:none;font-weight:800}.request-chip{border-style:dashed}.tools-line{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:0 0 28px}.site-search{width:100%;max-width:360px;border:1px solid color-mix(in srgb,var(--site-accent) 45%,#fff);border-radius:8px;background:#fff;color:inherit;min-height:40px;padding:9px 11px}.sound-section{margin:0 0 34px}.section-title{display:flex;align-items:center;gap:12px;margin:0 0 14px;font-size:var(--section-size);letter-spacing:0}.section-title::before{content:"";width:8px;height:1.1em;background:var(--site-accent);border-radius:99px}.section-date{color:color-mix(in srgb,var(--site-text) 65%,transparent);font-size:14px;font-weight:800}.sound-grid{display:flex;flex-wrap:wrap;gap:calc(7px + var(--button-scale)*2px)}.layout-grid .sound-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(calc(150px + var(--button-scale)*28px),1fr))}.layout-compact .button-site__inner{width:min(1500px,calc(100% - 24px))}.layout-compact .sound-grid{gap:5px}.layout-newspaper .sound-section{border:2px solid color-mix(in srgb,var(--site-text) 82%,transparent);background:rgba(255,255,255,.72);padding:24px}.sound-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:calc(34px + var(--button-scale)*8px);min-width:calc(84px + var(--button-scale)*18px);max-width:100%;padding:0 calc(12px + var(--button-scale)*6px);border:var(--sound-border,1px solid color-mix(in srgb,var(--site-accent) 42%,#222));border-radius:var(--sound-radius,8px);color:var(--sound-text,var(--site-text));background:var(--sound-bg,#fff);box-shadow:var(--sound-shadow,0 2px 0 color-mix(in srgb,var(--site-accent) 32%,#444));font-size:var(--button-text-size);font-weight:800;line-height:1.3;transition:transform 140ms ease,box-shadow 140ms ease,filter 140ms ease}.sound-button::before{content:"▶";font-size:.9em;color:var(--site-accent)}.sound-button.is-playing{color:#fff;background:var(--site-accent);border-color:var(--site-accent)}.sound-button.is-playing::before{color:#fff}.shape-pill .sound-button{--sound-radius:999px}.shape-outline .sound-button{--sound-radius:4px;--sound-bg:rgba(255,255,255,.64);--sound-shadow:none;--sound-border:2px solid color-mix(in srgb,var(--site-text) 70%,var(--site-accent))}.shape-ticket .sound-button{--sound-radius:3px;--sound-bg:color-mix(in srgb,#fff 86%,var(--site-accent));border-style:dashed}.effect-press .sound-button:active{transform:translateY(2px);box-shadow:none}.effect-pop .sound-button:hover{transform:translateY(-3px) rotate(-1deg);box-shadow:0 8px 0 color-mix(in srgb,var(--site-accent) 32%,#444)}.effect-glow .sound-button:hover{filter:drop-shadow(0 0 13px color-mix(in srgb,var(--site-accent) 64%,transparent))}.request-form{margin-top:42px;border:1px solid color-mix(in srgb,var(--site-accent) 42%,#fff);background:rgba(255,255,255,.78);padding:20px}.request-form h2{margin:0 0 12px}.request-form__grid{display:grid;grid-template-columns:1fr 1fr auto auto;gap:10px;align-items:end}.field{display:grid;gap:7px;color:color-mix(in srgb,var(--site-text) 65%,transparent);font-size:13px;font-weight:700}.field input{width:100%;border:1px solid #cfc6cb;border-radius:8px;background:#fff;color:inherit;min-height:40px;padding:9px 11px}.file-button{display:inline-grid;place-items:center;border:1px solid #cfc6cb;background:#fff;border-radius:8px;min-height:40px;padding:0 13px;cursor:pointer}.theme-classic{--site-pattern:none;--hero-bg:#fff;--hero-border:2px solid #1e181a;--hero-shadow:none}.theme-classic .hero{text-align:center;min-height:170px}.theme-classic .hero__title{margin-inline:auto;font-style:italic}.theme-pastel{--site-pattern:linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px);--site-pattern-size:28px 28px;--hero-bg:rgba(255,255,255,.72);--hero-shadow:0 18px 48px rgba(36,31,33,.14)}.theme-doodle{--site-pattern:radial-gradient(circle at 15% 18%,color-mix(in srgb,var(--site-accent) 18%,transparent) 0 32px,transparent 34px),radial-gradient(circle at 74% 22%,rgba(47,159,134,.17) 0 28px,transparent 30px),radial-gradient(circle at 36% 72%,rgba(255,190,76,.2) 0 24px,transparent 26px);--site-pattern-size:360px 280px;--hero-bg:rgba(255,255,255,.62)}.theme-doodle .hero,.theme-doodle .request-form{transform:rotate(-.2deg)}.theme-neon{--site-pattern:linear-gradient(135deg,rgba(255,255,255,.05) 25%,transparent 25% 50%,rgba(255,255,255,.05) 50% 75%,transparent 75%);--site-pattern-size:22px 22px;--hero-bg:rgba(13,16,23,.76);--hero-border:1px solid color-mix(in srgb,var(--site-accent) 75%,#fff);--hero-shadow:0 0 36px color-mix(in srgb,var(--site-accent) 35%,transparent)}.theme-neon .sound-button,.theme-neon .request-form,.theme-neon .layout-newspaper .sound-section{background:rgba(255,255,255,.9)}.theme-gallery{--site-pattern:linear-gradient(90deg,rgba(255,255,255,.8),rgba(255,255,255,.36)),radial-gradient(circle at 80% 12%,color-mix(in srgb,var(--site-accent) 22%,transparent),transparent 220px);--hero-bg:transparent;--hero-border:0;--hero-shadow:none}.theme-gallery .hero{min-height:300px;padding-left:0;padding-right:0}@media (max-width:640px){.button-site__inner{width:min(100% - 24px,1180px);padding-top:18px}.hero{min-height:190px;padding:22px}.mascot{opacity:.26;right:12px}.request-form__grid{grid-template-columns:1fr}.sound-button{width:auto;min-width:0}}
`;

const sampleSounds = [
  ["大変光栄です！ありがとうございます！", "NEW"],
  ["お許しを！", "NEW"],
  ["あ、待って待って", "あ"],
  ["あーだめだ", "あ"],
  ["いいじゃん！", "あ"],
  ["うーん", "あ"],
  ["えい！", "あ"],
  ["おはようございます", "あ"],
  ["かしこまりました", "か"],
  ["きちゃー", "か"],
  ["こんな配信がしたかった", "か"],
  ["さすがです", "さ"],
  ["じゃあ行きます", "さ"],
  ["ちょっと待って", "た"],
  ["助かる", "た"],
  ["なんで？", "な"],
  ["にゃーん", "な"],
  ["はい、おにぎり屋台始まります", "は"],
  ["ハーツ...", "は"],
  ["マジ？", "ま"],
  ["もう一回！", "ま"],
  ["やらかしたー！", "や"],
  ["よろしくお願いします", "や"],
  ["笑い声", "挨拶"],
  ["Thank you!", "英語"],
  ["Moon!!", "歌"]
];

let project = loadProject();
let activeAudio = null;
let activeButtonId = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}-${Date.now().toString(36)}`;
}

function createProject() {
  return {
    title: "剣持刀子　ボタン",
    subtitle: "ｴｲﾌﾟﾘﾙﾌｰﾙに限らずいつでも刀子の鶯舌を拝聴できるボタンサイト。愛してるぞ、刀子。",
    requestUrl: "",
    design: {
      theme: "pastel",
      layout: "sectioned",
      shape: "soft",
      scale: 1,
      effect: "press",
      fontFamily: "gothic",
      titleSize: 64,
      bodySize: 16,
      sectionSize: 34,
      buttonTextSize: 16,
      bgColor: "#b45fec",
      textColor: "#2b2025",
      accentColor: "#7cee6d",
      bgImage: "toko_winter.png",
      mascotImage: "toko.png"
    },
    sounds: sampleSounds.map(([label, group], index) => ({
      id: uid("sound"),
      label,
      group,
      fileName: `${String(index + 1).padStart(2, "0")}-${slugify(label)}.mp3`,
      dataUrl: "",
      createdAt: index < 2 ? "2026-06-21" : "2026-06-20",
      tags: group === "NEW" ? ["new"] : []
    })),
    submissions: []
  };
}

function loadProject() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return normalizeProject(JSON.parse(stored));
  } catch (_) {}
  return createProject();
}

function normalizeProject(input) {
  const fresh = createProject();
  return {
    ...fresh,
    ...input,
    design: { ...fresh.design, ...(input.design || {}) },
    sounds: Array.isArray(input.sounds) ? input.sounds : fresh.sounds,
    submissions: Array.isArray(input.submissions) ? input.submissions : []
  };
}

function saveProject() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
  } catch (_) {
    const slim = {
      ...project,
      sounds: project.sounds.map((sound) => ({ ...sound, dataUrl: "" })),
      submissions: project.submissions.map((item) => ({ ...item, dataUrl: "" }))
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slim));
    } catch (_) {}
    const status = document.querySelector("#importStatus");
    if (status) status.textContent = "保存容量を超えたため、音声はこの画面を開いている間だけ保持します。";
  }
}

function slugify(text) {
  return text
    .normalize("NFKC")
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_\s]*/, "")
    .replace(/[\\/:*?"<>|]/g, "")
    .trim()
    .slice(0, 42) || "button";
}

function inferGroup(label) {
  if (/^[a-z0-9]/i.test(label)) return "英語";
  const first = label.normalize("NFKC").replace(/^[「『（(\s]+/, "")[0] || "";
  if ("あいうえおぁぃぅぇぉ".includes(first)) return "あ";
  if ("かきくけこがぎぐげご".includes(first)) return "か";
  if ("さしすせそざじずぜぞ".includes(first)) return "さ";
  if ("たちつてとだぢづでどっ".includes(first)) return "た";
  if ("なにぬねの".includes(first)) return "な";
  if ("はひふへほばびぶべぼぱぴぷぺぽ".includes(first)) return "は";
  if ("まみむめも".includes(first)) return "ま";
  if ("やゆよゃゅょ".includes(first)) return "や";
  if ("らりるれろ".includes(first)) return "ら";
  if ("わをん".includes(first)) return "わ";
  return "NEW";
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function bindControls() {
  $(".tabs").addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (!tab) return;
    const panel = tab.dataset.tab;
    $(".app").dataset.panel = panel;
    $$(".tab").forEach((button) => button.classList.toggle("is-active", button === tab));
    $$(".panel").forEach((section) => section.classList.toggle("is-active", section.dataset.panelName === panel));
  });

  $("#siteTitle").addEventListener("input", (event) => updateProject("title", event.target.value));
  $("#siteSubtitle").addEventListener("input", (event) => updateProject("subtitle", event.target.value));
  $("#requestUrl").addEventListener("input", (event) => updateProject("requestUrl", event.target.value));

  $("#themePreset").addEventListener("change", (event) => updateDesign("theme", event.target.value));
  $("#fontFamily").addEventListener("change", (event) => updateDesign("fontFamily", event.target.value));
  $("#layoutMode").addEventListener("change", (event) => updateDesign("layout", event.target.value));
  $("#buttonShape").addEventListener("change", (event) => updateDesign("shape", event.target.value));
  $("#buttonScale").addEventListener("input", (event) => updateDesign("scale", Number(event.target.value)));
  $("#buttonEffect").addEventListener("change", (event) => updateDesign("effect", event.target.value));
  $("#titleSize").addEventListener("input", (event) => updateDesign("titleSize", Number(event.target.value)));
  $("#bodySize").addEventListener("input", (event) => updateDesign("bodySize", Number(event.target.value)));
  $("#sectionSize").addEventListener("input", (event) => updateDesign("sectionSize", Number(event.target.value)));
  $("#buttonTextSize").addEventListener("input", (event) => updateDesign("buttonTextSize", Number(event.target.value)));
  $("#bgColor").addEventListener("input", (event) => updateDesign("bgColor", event.target.value));
  $("#textColor").addEventListener("input", (event) => updateDesign("textColor", event.target.value));
  $("#accentColor").addEventListener("input", (event) => updateDesign("accentColor", event.target.value));

  $("#chooseFolder").addEventListener("click", () => $("#folderImport").click());
  $("#chooseFiles").addEventListener("click", () => $("#filesImport").click());
  $("#folderImport").addEventListener("change", importFolder);
  $("#filesImport").addEventListener("change", importFiles);
  $("#manualPick").addEventListener("click", () => $("#manualFile").click());
  $("#manualFile").addEventListener("change", addManualSound);
  $("#buttonSearch").addEventListener("input", renderButtonList);
  $("#clearButtons").addEventListener("click", () => {
    if (!confirm("すべてのボタンを消しますか？")) return;
    project.sounds = [];
    persistAndRender();
  });

  $("#bgImage").addEventListener("change", (event) => importImage(event, "bgImage"));
  $("#mascotImage").addEventListener("change", (event) => importImage(event, "mascotImage"));
  $("#clearBgImage").addEventListener("click", () => updateDesign("bgImage", ""));
  $("#clearMascot").addEventListener("click", () => updateDesign("mascotImage", ""));

  $("#sampleSubmission").addEventListener("click", () => {
    project.submissions.unshift({
      id: uid("sub"),
      label: "待って、今のかわいい",
      note: "切り抜き 12:34 あたり",
      dataUrl: "",
      fileName: "",
      createdAt: new Date().toISOString()
    });
    persistAndRender();
  });

  $("#submissionList").addEventListener("click", handleSubmissionAction);
  $("#buttonList").addEventListener("click", handleButtonAction);
  $("#sitePreview").addEventListener("click", handlePreviewClick);
  $("#sitePreview").addEventListener("submit", handlePreviewSubmit);
  $("#shufflePlay").addEventListener("click", playRandom);
  $("#stopAudio").addEventListener("click", stopAudio);
  $("#downloadHtml").addEventListener("click", downloadStandaloneHtml);
  $("#downloadJson").addEventListener("click", downloadProjectJson);
  $("#projectImport").addEventListener("change", importProjectJson);
  $("#resetProject").addEventListener("click", () => {
    if (!confirm("サンプル状態に戻しますか？")) return;
    project = createProject();
    persistAndRender();
  });
}

function updateProject(key, value) {
  project[key] = value;
  persistAndRender();
}

function updateDesign(key, value) {
  project.design[key] = value;
  persistAndRender();
}

async function importFolder(event) {
  await importMp3Files(event.target.files);
  event.target.value = "";
}

async function importFiles(event) {
  await importMp3Files(event.target.files);
  event.target.value = "";
}

async function importMp3Files(fileList) {
  const files = [...fileList].filter((file) => /\.mp3$/i.test(file.name) || file.type === "audio/mpeg" || file.type === "audio/mp3");
  if (!files.length) return;
  $("#importStatus").textContent = `${files.length}件を読み込み中...`;

  const imported = [];
  for (const file of files) {
    const label = slugify(file.name);
    imported.push({
      id: uid("sound"),
      label,
      group: inferGroup(label),
      fileName: file.webkitRelativePath || file.name,
      dataUrl: await fileToDataUrl(file),
      createdAt: new Date().toISOString().slice(0, 10),
      tags: ["new"]
    });
  }
  project.sounds = [...imported, ...project.sounds];
  $("#importStatus").textContent = `${files.length}件を追加しました。`;
  persistAndRender();
}

async function addManualSound(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const label = $("#manualLabel").value.trim() || slugify(file.name);
  project.sounds.unshift({
    id: uid("sound"),
    label,
    group: inferGroup(label),
    fileName: file.name,
    dataUrl: await fileToDataUrl(file),
    createdAt: new Date().toISOString().slice(0, 10),
    tags: ["new"]
  });
  $("#manualLabel").value = "";
  event.target.value = "";
  persistAndRender();
}

async function importImage(event, key) {
  const file = event.target.files?.[0];
  if (!file) return;
  project.design[key] = await fileToDataUrl(file);
  event.target.value = "";
  persistAndRender();
}

function handleButtonAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.closest(".button-row").dataset.id;
  const index = project.sounds.findIndex((sound) => sound.id === id);
  if (index === -1) return;
  if (button.dataset.action === "play") playSound(project.sounds[index]);
  if (button.dataset.action === "delete") {
    project.sounds.splice(index, 1);
    persistAndRender();
  }
}

function handleSubmissionAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.closest(".submission").dataset.id;
  const index = project.submissions.findIndex((item) => item.id === id);
  if (index === -1) return;
  const submission = project.submissions[index];
  if (button.dataset.action === "approve") {
    project.sounds.unshift({
      id: uid("sound"),
      label: submission.label,
      group: inferGroup(submission.label),
      fileName: submission.fileName || `${slugify(submission.label)}.mp3`,
      dataUrl: submission.dataUrl || "",
      createdAt: new Date().toISOString().slice(0, 10),
      tags: ["new", "submitted"]
    });
    project.submissions.splice(index, 1);
  }
  if (button.dataset.action === "reject") project.submissions.splice(index, 1);
  persistAndRender();
}

function handlePreviewClick(event) {
  const soundButton = event.target.closest(".sound-button");
  if (soundButton) {
    const sound = project.sounds.find((item) => item.id === soundButton.dataset.id);
    if (sound) playSound(sound);
    return;
  }
}

async function handlePreviewSubmit(event) {
  if (!event.target.matches(".request-form")) return;
  event.preventDefault();
  const form = event.target;
  const file = form.soundFile.files?.[0];
  project.submissions.unshift({
    id: uid("sub"),
    label: form.soundLabel.value.trim(),
    note: form.soundNote.value.trim(),
    dataUrl: file ? await fileToDataUrl(file) : "",
    fileName: file?.name || "",
    createdAt: new Date().toISOString()
  });
  form.reset();
  persistAndRender();
  $(".tab[data-tab='admin']").click();
}

function playRandom() {
  const playable = project.sounds.filter((sound) => sound.dataUrl);
  const pool = playable.length ? playable : project.sounds;
  const sound = pool[Math.floor(Math.random() * pool.length)];
  if (sound) playSound(sound);
}

function playSound(sound) {
  stopAudio();
  if (!sound.dataUrl) {
    flashButton(sound.id);
    return;
  }
  activeAudio = new Audio(sound.dataUrl);
  activeButtonId = sound.id;
  activeAudio.addEventListener("ended", stopAudio, { once: true });
  activeAudio.play().catch(() => stopAudio());
  renderPlayingState();
}

function stopAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  activeAudio = null;
  activeButtonId = null;
  renderPlayingState();
}

function flashButton(id) {
  activeButtonId = id;
  renderPlayingState();
  window.setTimeout(() => {
    if (activeButtonId === id && !activeAudio) {
      activeButtonId = null;
      renderPlayingState();
    }
  }, 420);
}

function renderPlayingState() {
  $$(".sound-button").forEach((button) => {
    button.classList.toggle("is-playing", button.dataset.id === activeButtonId);
  });
}

function persistAndRender() {
  saveProject();
  syncControls();
  render();
}

function syncControls() {
  $("#siteTitle").value = project.title;
  $("#siteSubtitle").value = project.subtitle;
  $("#requestUrl").value = project.requestUrl;
  $("#themePreset").value = project.design.theme;
  $("#fontFamily").value = project.design.fontFamily;
  $("#layoutMode").value = project.design.layout;
  $("#buttonShape").value = project.design.shape;
  $("#buttonScale").value = project.design.scale;
  $("#buttonEffect").value = project.design.effect;
  $("#titleSize").value = project.design.titleSize;
  $("#bodySize").value = project.design.bodySize;
  $("#sectionSize").value = project.design.sectionSize;
  $("#buttonTextSize").value = project.design.buttonTextSize;
  $("#bgColor").value = project.design.bgColor;
  $("#textColor").value = project.design.textColor;
  $("#accentColor").value = project.design.accentColor;
  $("#previewName").textContent = project.title || "ボタンサイト";
}

function render() {
  $("#sitePreview").innerHTML = renderSite(project, { appMode: true });
  renderButtonList();
  renderSubmissions();
  renderPlayingState();
}

function renderButtonList() {
  const query = $("#buttonSearch").value.trim().toLowerCase();
  const sounds = project.sounds.filter((sound) => sound.label.toLowerCase().includes(query));
  $("#buttonList").innerHTML = sounds.map((sound) => `
    <div class="button-row" data-id="${escapeHtml(sound.id)}">
      <div>
        <strong>${escapeHtml(sound.label)}</strong>
        <small>${escapeHtml(sound.group)} / ${escapeHtml(sound.fileName || "音源なし")}</small>
      </div>
      <div class="row-actions">
        <button data-action="play" title="再生">▶</button>
        <button data-action="delete" title="削除">×</button>
      </div>
    </div>
  `).join("") || `<div class="empty-state"><strong>該当なし</strong><span>検索条件を変えてください。</span></div>`;
}

function renderSubmissions() {
  $("#queueCount").textContent = `${project.submissions.length}件`;
  if (!project.submissions.length) {
    $("#submissionList").innerHTML = $("#emptyQueueTemplate").innerHTML;
    return;
  }
  $("#submissionList").innerHTML = project.submissions.map((item) => `
    <div class="submission" data-id="${escapeHtml(item.id)}">
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <small>${escapeHtml(item.note || "メモなし")} / ${escapeHtml(item.fileName || "音源なし")}</small>
      </div>
      <div class="row-actions">
        <button data-action="approve">承認</button>
        <button data-action="reject">却下</button>
      </div>
    </div>
  `).join("");
}

function groupedSounds(sounds) {
  const map = new Map();
  for (const key of KANA_GROUPS) map.set(key, []);
  for (const sound of sounds) {
    const group = sound.group && sound.group !== "NEW" ? sound.group : inferGroup(sound.label);
    if (sound.tags?.includes("new")) map.get("NEW").push(sound);
    if (group !== "NEW" || !sound.tags?.includes("new")) {
      if (!map.has(group)) map.set(group, []);
      map.get(group).push(sound);
    }
  }
  return [...map.entries()].filter(([, items]) => items.length);
}

function renderSite(state, options = {}) {
  const d = state.design;
  const fontStack = FONT_STACKS[d.fontFamily] || FONT_STACKS.gothic;
  const classes = [
    "button-site",
    `theme-${d.theme}`,
    `layout-${d.layout}`,
    `shape-${d.shape}`,
    `effect-${d.effect}`
  ].join(" ");
  const style = [
    `--site-bg:${d.bgColor}`,
    `--site-text:${d.textColor}`,
    `--site-accent:${d.accentColor}`,
    `--site-font:${fontStack}`,
    `--button-scale:${Number(d.scale) || 0}`,
    `--title-size:${Number(d.titleSize) || 64}px`,
    `--body-size:${Number(d.bodySize) || 16}px`,
    `--section-size:${Number(d.sectionSize) || 34}px`,
    `--button-text-size:${Number(d.buttonTextSize) || 16}px`,
    d.bgImage ? `--site-bg-photo:url("${String(d.bgImage).replaceAll('"', "%22")}")` : "--site-bg-photo:none",
    d.bgImage ? "--site-bg-overlay:linear-gradient(rgba(255,255,255,.42),rgba(255,255,255,.42))" : "--site-bg-overlay:linear-gradient(rgba(255,255,255,.58),rgba(255,255,255,.58))"
  ].join(";");

  return `
    <article class="${classes}" style="${escapeHtml(style)}">
      <div class="button-site__inner">
        <header class="hero">
          <div>
            <h1 class="hero__title">${escapeHtml(state.title)}</h1>
            <p class="hero__copy">${escapeHtml(state.subtitle)}</p>
          </div>
          ${d.mascotImage ? `<img class="mascot" src="${d.mascotImage}" alt="">` : ""}
        </header>
        <nav class="site-nav" aria-label="五十音">
          ${KANA_GROUPS.slice(0, 11).map((key) => `<a href="#group-${escapeHtml(key)}">${escapeHtml(key)}</a>`).join("")}
          ${state.requestUrl ? `<a class="request-chip" href="${escapeHtml(state.requestUrl)}" target="_blank" rel="noreferrer">追加申請</a>` : `<span class="request-chip">追加申請</span>`}
        </nav>
        <div class="tools-line">
          <input class="site-search" type="search" placeholder="サイト内検索" ${options.appMode ? "" : `oninput="filterSounds(this.value)"`} />
          <button type="button" ${options.appMode ? `id="previewRandomInline"` : `onclick="playRandomSound()"`}>ランダム</button>
          <button type="button" ${options.appMode ? `id="previewStopInline"` : `onclick="stopSound()"`}>停止</button>
        </div>
        <main class="sections">
          ${groupedSounds(state.sounds).map(([group, sounds]) => renderSoundSection(group, sounds)).join("")}
        </main>
        <form class="request-form">
          <h2>ボタン追加申請</h2>
          <div class="request-form__grid">
            <label class="field"><span>セリフ</span><input name="soundLabel" required maxlength="80"></label>
            <label class="field"><span>メモ</span><input name="soundNote" maxlength="140" placeholder="動画URLやタイムスタンプ"></label>
            <label class="file-button">mp3<input name="soundFile" type="file" accept="audio/mpeg,.mp3" hidden></label>
            <button class="primary" type="submit">申請</button>
          </div>
        </form>
      </div>
    </article>
  `;
}

function renderSoundSection(group, sounds) {
  const latest = sounds[0]?.createdAt || "";
  return `
    <section class="sound-section" id="group-${escapeHtml(group)}">
      <h2 class="section-title">${escapeHtml(group)} ${latest ? `<span class="section-date">${escapeHtml(latest)}</span>` : ""}</h2>
      <div class="sound-grid">
        ${sounds.map((sound) => `
          <button class="sound-button" data-id="${escapeHtml(sound.id)}" data-label="${escapeHtml(sound.label)}" type="button">${escapeHtml(sound.label)}</button>
        `).join("")}
      </div>
    </section>
  `;
}

function standaloneCss() {
  const css = [...document.styleSheets]
    .filter((sheet) => sheet.href && sheet.href.endsWith("styles.css"))
    .map((sheet) => {
      try {
        return [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
      } catch (_) {
        return "";
      }
    })
    .join("\n");
  return css.replaceAll("min-height: calc(100vh - 66px);", "min-height: 100vh;");
}

function standaloneScript(state) {
  return `
    const sounds = ${JSON.stringify(state.sounds)};
    let audio = null;
    let activeId = null;
    function stopSound(){
      if(audio){ audio.pause(); audio.currentTime = 0; }
      audio = null; activeId = null; paint();
    }
    function playSound(id){
      const sound = sounds.find(item => item.id === id);
      stopSound();
      if(!sound || !sound.dataUrl){ activeId = id; paint(); setTimeout(stopSound, 420); return; }
      audio = new Audio(sound.dataUrl);
      activeId = id;
      audio.addEventListener("ended", stopSound, { once: true });
      audio.play().catch(stopSound);
      paint();
    }
    function playRandomSound(){
      const pool = sounds.filter(item => item.dataUrl).length ? sounds.filter(item => item.dataUrl) : sounds;
      const sound = pool[Math.floor(Math.random() * pool.length)];
      if(sound) playSound(sound.id);
    }
    function paint(){
      document.querySelectorAll(".sound-button").forEach(button => button.classList.toggle("is-playing", button.dataset.id === activeId));
    }
    function filterSounds(value){
      const q = value.trim().toLowerCase();
      document.querySelectorAll(".sound-button").forEach(button => {
        button.hidden = q && !button.dataset.label.toLowerCase().includes(q);
      });
    }
    document.addEventListener("click", event => {
      const button = event.target.closest(".sound-button");
      if(button) playSound(button.dataset.id);
    });
    document.addEventListener("submit", event => {
      if(event.target.matches(".request-form")){
        event.preventDefault();
        alert("申請を受け付けました。静的HTML版では管理者にJSONを送る運用にしてください。");
        event.target.reset();
      }
    });
  `;
}

function downloadStandaloneHtml() {
  const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(project.title)}</title>
  <style>${standaloneCss()}</style>
</head>
<body>
${renderSite(project)}
<script>${standaloneScript(project)}<\/script>
</body>
</html>`;
  downloadBlob(html, `${slugify(project.title)}.html`, "text/html");
}

function downloadProjectJson() {
  downloadBlob(JSON.stringify(project, null, 2), `${slugify(project.title)}.json`, "application/json");
}

function importProjectJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      project = normalizeProject(JSON.parse(reader.result));
      persistAndRender();
    } catch (_) {
      alert("JSONを読み込めませんでした。");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

bindControls();
syncControls();
render();

$("#sitePreview").addEventListener("input", (event) => {
  if (event.target.matches(".site-search")) {
    const q = event.target.value.trim().toLowerCase();
    $$(".sound-button").forEach((button) => {
      button.hidden = q && !button.dataset.label.toLowerCase().includes(q);
    });
  }
});

$("#sitePreview").addEventListener("click", (event) => {
  if (event.target.id === "previewRandomInline") playRandom();
  if (event.target.id === "previewStopInline") stopAudio();
});
