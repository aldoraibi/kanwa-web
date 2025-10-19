/* KanWa Web (matches SwiftUI sentences & behavior) */
const ITEMS = [
  { mub:{m:"الوَلَدُ",a:"الوَلَدَ",j:"الوَلَدِ"}, khb:{m:"ذكيٌّ",a:"ذكيًّا",j:"ذكيٍّ"} },
  { mub:{m:"الطالبةُ",a:"الطالبةَ",j:"الطالبةِ"}, khb:{m:"ناجحةٌ",a:"ناجحةً",j:"ناجحةٍ"} },
  { mub:{m:"الجوُّ",a:"الجوَّ",j:"الجوِّ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"المعلِّمُ",a:"المعلِّمَ",j:"المعلِّمِ"}, khb:{m:"خبيرٌ",a:"خبيرًا",j:"خبيرٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"متفوّقٌ",a:"متفوّقًا",j:"متفوّقٍ"} },
  { mub:{m:"الطالبةُ المجتهدةُ",a:"الطالبةَ المجتهدةَ",j:"الطالبةِ المجتهدةِ"}, khb:{m:"متفوّقةٌ",a:"متفوّقةً",j:"متفوّقةٍ"} },
  { mub:{m:"الحديقةُ الكبيرةُ",a:"الحديقةَ الكبيرةَ",j:"الحديقةِ الكبيرةِ"}, khb:{m:"نظيفةٌ",a:"نظيفةً",j:"نظيفةٍ"} },
  { mub:{m:"القمرُ البديعُ",a:"القمرَ البديعَ",j:"القمرِ البديعِ"}, khb:{m:"مُضيءٌ",a:"مُضيئًا",j:"مُضيءٍ"} },
  { mub:{m:"الطالبُ النشيطُ",a:"الطالبَ النشيطَ",j:"الطالبِ النشيطِ"}, khb:{m:"كثيرٌ النشاطِ",a:"كثيرًا النشاطَ",j:"كثيرٍ النشاطِ"} },
  { mub:{m:"الطالبةُ المجتهدةُ",a:"الطالبةَ المجتهدةَ",j:"الطالبةِ المجتهدةِ"}, khb:{m:"رفيعةٌ الأخلاقِ",a:"رفيعةً الأخلاقَ",j:"رفيعةٍ الأخلاقِ"} },
  { mub:{m:"المدينةُ الواسعةُ",a:"المدينةَ الواسعةَ",j:"المدينةِ الواسعةِ"}, khb:{m:"جميلةٌ المناظرِ",a:"جميلةً المناظرَ",j:"جميلةٍ المناظرِ"} },
  { mub:{m:"المعلِّمُ الخبيرُ",a:"المعلِّمَ الخبيرَ",j:"المعلِّمِ الخبيرِ"}, khb:{m:"قويٌّ التأثيرِ",a:"قويًّا التأثيرَ",j:"قويٍّ التأثيرِ"} },
  { mub:{m:"الطالبُ",a:"الطالبَ",j:"الطالبِ"}, khb:{m:"مُجتهدٌ",a:"مُجتهدًا",j:"مُجتهدٍ"} },
  { mub:{m:"الطالبةُ",a:"الطالبةَ",j:"الطالبةِ"}, khb:{m:"مُجتهدةٌ",a:"مُجتهدةً",j:"مُجتهدةٍ"} },
  { mub:{m:"المعلِّمُ",a:"المعلِّمَ",j:"المعلِّمِ"}, khb:{m:"ماهِرٌ",a:"ماهِرًا",j:"ماهِرٍ"} },
  { mub:{m:"المعلِّمةُ",a:"المعلِّمةَ",j:"المعلِّمةِ"}, khb:{m:"ماهِرةٌ",a:"ماهِرةً",j:"ماهِرةٍ"} },
  { mub:{m:"المديرُ",a:"المديرَ",j:"المديرِ"}, khb:{m:"نشيطٌ",a:"نشيطًا",j:"نشيطٍ"} },
  { mub:{m:"العِلمُ",a:"العِلمَ",j:"العِلمِ"}, khb:{m:"نافِعٌ",a:"نافِعًا",j:"نافِعٍ"} },
  { mub:{m:"الصديقُ",a:"الصديقَ",j:"الصديقِ"}, khb:{m:"مُخلِصٌ",a:"مُخلِصًا",j:"مُخلِصٍ"} },
  { mub:{m:"المطرُ",a:"المطرَ",j:"المطرِ"}, khb:{m:"غزيرٌ",a:"غزيرًا",j:"غزيرٍ"} },
  { mub:{m:"الطَّقسُ",a:"الطَّقسَ",j:"الطَّقسِ"}, khb:{m:"معتدلٌ",a:"معتدلًا",j:"معتدلٍ"} },
  { mub:{m:"البيتُ",a:"البيتَ",j:"البيتِ"}, khb:{m:"نظيفٌ",a:"نظيفًا",j:"نظيفٍ"} },
  { mub:{m:"المدرسةُ",a:"المدرسةَ",j:"المدرسةِ"}, khb:{m:"جميلةٌ",a:"جميلةً",j:"جميلةٍ"} },
  { mub:{m:"الحديقةُ",a:"الحديقةَ",j:"الحديقةِ"}, khb:{m:"واسعةٌ",a:"واسعةً",j:"واسعةٍ"} },
  { mub:{m:"الطريقُ",a:"الطريقَ",j:"الطريقِ"}, khb:{m:"طويلٌ",a:"طويلًا",j:"طويلٍ"} },
  { mub:{m:"القمرُ",a:"القمرَ",j:"القمرِ"}, khb:{m:"مُضيءٌ",a:"مُضيئًا",j:"مُضيءٍ"} },
  { mub:{m:"الشمسُ",a:"الشمسَ",j:"الشمسِ"}, khb:{m:"ساطعةٌ",a:"ساطعةً",j:"ساطعةٍ"} },
  { mub:{m:"البحرُ",a:"البحرَ",j:"البحرِ"}, khb:{m:"واسعٌ",a:"واسعًا",j:"واسعٍ"} },
  { mub:{m:"السوقُ",a:"السوقَ",j:"السوقِ"}, khb:{m:"مزدحمٌ",a:"مزدحمًا",j:"مزدحمٍ"} },
  { mub:{m:"المريضُ",a:"المريضَ",j:"المريضِ"}, khb:{m:"مُتعبٌ",a:"مُتعبًا",j:"مُتعبٍ"} },
  { mub:{m:"الطبيبُ",a:"الطبيبَ",j:"الطبيبِ"}, khb:{m:"ماهِرٌ",a:"ماهِرًا",j:"ماهِرٍ"} },
  { mub:{m:"المهندسُ",a:"المهندسَ",j:"المهندسِ"}, khb:{m:"مُبدِعٌ",a:"مُبدِعًا",j:"مُبدِعٍ"} },
  { mub:{m:"المزارعُ",a:"المزارعَ",j:"المزارعِ"}, khb:{m:"مُجتهدٌ",a:"مُجتهدًا",j:"مُجتهدٍ"} },
  { mub:{m:"التلميذُ",a:"التلميذَ",j:"التلميذِ"}, khb:{m:"مُؤدَّبٌ",a:"مُؤدَّبًا",j:"مُؤدَّبٍ"} },
  { mub:{m:"العملُ",a:"العملَ",j:"العملِ"}, khb:{m:"مُباركٌ",a:"مُباركًا",j:"مُباركٍ"} },
  { mub:{m:"النِّظامُ",a:"النِّظامَ",j:"النِّظامِ"}, khb:{m:"مهمٌّ",a:"مهمًّا",j:"مهمٍّ"} },
  { mub:{m:"الأدبُ",a:"الأدبَ",j:"الأدبِ"}, khb:{m:"رفيعٌ",a:"رفيعًا",j:"رفيعٍ"} },
  { mub:{m:"الصِّدقُ",a:"الصِّدقَ",j:"الصِّدقِ"}, khb:{m:"نجاةٌ",a:"نجاةً",j:"نجاةٍ"} },
  { mub:{m:"النَّجاحُ",a:"النَّجاحَ",j:"النَّجاحِ"}, khb:{m:"قريبٌ",a:"قريبًا",j:"قريبٍ"} },
  { mub:{m:"الفشلُ",a:"الفشلَ",j:"الفشلِ"}, khb:{m:"بعيدٌ",a:"بعيدًا",j:"بعيدٍ"} },
  { mub:{m:"التعاونُ",a:"التعاونَ",j:"التعاونِ"}, khb:{m:"مفيدٌ",a:"مفيدًا",j:"مفيدٍ"} },
  { mub:{m:"الإبداعُ",a:"الإبداعَ",j:"الإبداعِ"}, khb:{m:"مطلوبٌ",a:"مطلوبًا",j:"مطلوبٍ"} },
  { mub:{m:"التَّفكيرُ",a:"التَّفكيرَ",j:"التَّفكيرِ"}, khb:{m:"سليمٌ",a:"سليمًا",j:"سليمٍ"} },
  { mub:{m:"القِراءةُ",a:"القِراءةَ",j:"القِراءةِ"}, khb:{m:"ممتعةٌ",a:"ممتعةً",j:"ممتعةٍ"} },
  { mub:{m:"الكتابةُ",a:"الكتابةَ",j:"الكتابةِ"}, khb:{m:"سهلةٌ",a:"سهلةً",j:"سهلةٍ"} },
  { mub:{m:"الحِسابُ",a:"الحِسابَ",j:"الحِسابِ"}, khb:{m:"يسيرٌ",a:"يسيرًا",j:"يسيرٍ"} },
  { mub:{m:"الرَّسمُ",a:"الرَّسمَ",j:"الرَّسمِ"}, khb:{m:"جميلٌ",a:"جميلًا",j:"جميلٍ"} },
  { mub:{m:"الطالبُ المجتهدُ",a:"الطالبَ المجتهدَ",j:"الطالبِ المجتهدِ"}, khb:{m:"محبوبٌ",a:"محبوبًا",j:"محبوبٍ"} },
  { mub:{m:"الطالبةُ الذكيّةُ",a:"الطالبةَ الذكيّةَ",j:"الطالبةِ الذكيّةِ"}, khb:{m:"سريعةُ الفهمِ",a:"سريعةَ الفهمِ",j:"سريعةِ الفهمِ"} },
  { mub:{m:"العملُ الجماعيُّ",a:"العملَ الجماعيَّ",j:"العملِ الجماعيِّ"}, khb:{m:"مفيدٌ للتقدّمِ",a:"مفيدًا للتقدّمِ",j:"مفيدٍ للتقدّمِ"} },
  { mub:{m:"المدرسةُ الجميلةُ",a:"المدرسةَ الجميلةَ",j:"المدرسةِ الجميلةِ"}, khb:{m:"تزدانُ بالزهورِ",a:"تزدانَ بالزهورِ",j:"تزدانِ بالزهورِ"} },
  { mub:{m:"الوقتُ المناسبُ",a:"الوقتَ المناسبَ",j:"الوقتِ المناسبِ"}, khb:{m:"سببٌ للنجاحِ",a:"سببًا للنجاحِ",j:"سببٍ للنجاحِ"} },
  { mub:{m:"الصديقُ الصالحُ",a:"الصديقَ الصالحَ",j:"الصديقِ الصالحِ"}, khb:{m:"عونٌ في الحياةِ",a:"عونًا في الحياةِ",j:"عونٍ في الحياةِ"} },
  { mub:{m:"المعلمةُ الفاضلةُ",a:"المعلمةَ الفاضلةَ",j:"المعلمةِ الفاضلةِ"}, khb:{m:"قدوةٌ للطالباتِ",a:"قدوةً للطالباتِ",j:"قدوةٍ للطالباتِ"} },
  { mub:{m:"الوالدانِ الكريمانِ",a:"الوالدَيْنِ الكريميْنِ",j:"الوالدَيْنِ الكريميْنِ"}, khb:{m:"نعمةٌ من اللهِ",a:"نعمةً من اللهِ",j:"نعمةٍ من اللهِ"} },
  { mub:{m:"الجارُ",a:"الجارَ",j:"الجارِ"}, khb:{m:"كريمٌ",a:"كريمًا",j:"كريمٍ"} },
  { mub:{m:"المعملُ",a:"المعملَ",j:"المعملِ"}, khb:{m:"نظيفٌ",a:"نظيفًا",j:"نظيفٍ"} },
  { mub:{m:"المختبرُ",a:"المختبرَ",j:"المختبرِ"}, khb:{m:"مُجهَّزٌ",a:"مُجهَّزًا",j:"مُجهَّزٍ"} },
  { mub:{m:"الفريقُ",a:"الفريقَ",j:"الفريقِ"}, khb:{m:"مُتَّحدٌ",a:"مُتَّحدًا",j:"مُتَّحدٍ"} },
  { mub:{m:"الصَّفُّ",a:"الصَّفَّ",j:"الصَّفِّ"}, khb:{m:"مُرتَّبٌ",a:"مُرتَّبًا",j:"مُرتَّبٍ"} },
  { mub:{m:"القَلبُ",a:"القَلبَ",j:"القَلبِ"}, khb:{m:"سليمٌ",a:"سليمًا",j:"سليمٍ"} },
  { mub:{m:"العَقلُ",a:"العَقلَ",j:"العَقلِ"}, khb:{m:"راجحٌ",a:"راجحًا",j:"راجحٍ"} },
  { mub:{m:"الصَّباحُ",a:"الصَّباحَ",j:"الصَّباحِ"}, khb:{m:"مُشرقٌ",a:"مُشرقًا",j:"مُشرقٍ"} },
  { mub:{m:"المَساءُ",a:"المَساءَ",j:"المَساءِ"}, khb:{m:"هادئٌ",a:"هادئًا",j:"هادئٍ"} },
  { mub:{m:"الهَواءُ",a:"الهَواءَ",j:"الهَواءِ"}, khb:{m:"نقيٌّ",a:"نقيًّا",j:"نقيٍّ"} },
  { mub:{m:"الماءُ",a:"الماءَ",j:"الماءِ"}, khb:{m:"صافٍ",a:"صافيًا",j:"صافٍ"} },
  { mub:{m:"الغذاءُ",a:"الغذاءَ",j:"الغذاءِ"}, khb:{m:"صِحّيٌّ",a:"صِحّيًّا",j:"صِحّيٍّ"} },
  { mub:{m:"الجِسمُ",a:"الجِسمَ",j:"الجِسمِ"}, khb:{m:"قويٌّ",a:"قويًّا",j:"قويٍّ"} },
  { mub:{m:"القِيمُ",a:"القِيمَ",j:"القِيمِ"}, khb:{m:"ساميةٌ",a:"ساميةً",j:"ساميةٍ"} },
  { mub:{m:"الأخلاقُ",a:"الأخلاقَ",j:"الأخلاقِ"}, khb:{m:"كريمةٌ",a:"كريمةً",j:"كريمةٍ"} },
  { mub:{m:"الطُّلابُ",a:"الطُّلابَ",j:"الطُّلابِ"}, khb:{m:"حاضرونَ",a:"حاضرينَ",j:"حاضرينَ"} },
  { mub:{m:"المُعلماتُ",a:"المُعلماتِ",j:"المُعلماتِ"}, khb:{m:"مُجتهداتٌ",a:"مُجتهداتٍ",j:"مُجتهداتٍ"} },
  { mub:{m:"الحدودُ",a:"الحدودَ",j:"الحدودِ"}, khb:{m:"آمِنةٌ",a:"آمِنةً",j:"آمِنةٍ"} },
  { mub:{m:"الطرقُ",a:"الطرقَ",j:"الطرقِ"}, khb:{m:"سالكةٌ",a:"سالكةً",j:"سالكةٍ"} },
  { mub:{m:"الخيراتُ",a:"الخيراتَ",j:"الخيراتِ"}, khb:{m:"كثيرةٌ",a:"كثيرةً",j:"كثيرةٍ"} },
  { mub:{m:"الزهورُ",a:"الزهورَ",j:"الزهورِ"}, khb:{m:"متفتحةٌ",a:"متفتحةً",j:"متفتحةٍ"} },
  { mub:{m:"الأوراقُ",a:"الأوراقَ",j:"الأوراقِ"}, khb:{m:"مرتبةٌ",a:"مرتبةً",j:"مرتبةٍ"} },
  { mub:{m:"الأجهزةُ",a:"الأجهزةَ",j:"الأجهزةِ"}, khb:{m:"جاهزةٌ",a:"جاهزةً",j:"جاهزةٍ"} },
  { mub:{m:"البرامجُ",a:"البرامجَ",j:"البرامجِ"}, khb:{m:"مُحدَّثةٌ",a:"مُحدَّثةً",j:"مُحدَّثةٍ"} },
  { mub:{m:"الخطةُ",a:"الخطةَ",j:"الخطةِ"}, khb:{m:"واضحةٌ",a:"واضحةً",j:"واضحةٍ"} },
  { mub:{m:"الرؤيةُ",a:"الرؤيةَ",j:"الرؤيةِ"}, khb:{m:"سديدةٌ",a:"سديدةً",j:"سديدةٍ"} },
  { mub:{m:"المهمةُ",a:"المهمةَ",j:"المهمةِ"}, khb:{m:"مُنجزةٌ",a:"مُنجزةً",j:"مُنجزةٍ"} },
  { mub:{m:"الفِكرةُ",a:"الفِكرةَ",j:"الفِكرةِ"}, khb:{m:"جيّدةٌ",a:"جيّدةً",j:"جيّدةٍ"} },
  { mub:{m:"القِصَّةُ",a:"القِصَّةَ",j:"القِصَّةِ"}, khb:{m:"ممتعةٌ",a:"ممتعةً",j:"ممتعةٍ"} },
  { mub:{m:"الصُّورةُ",a:"الصُّورةَ",j:"الصُّورةِ"}, khb:{m:"واضحةٌ",a:"واضحةً",j:"واضحةٍ"} }
];

const state = {
  idx: 0, verb: null, twoStep: true,
  mCase: null, kCase: null, mPick: null, kPick: null, success:false
};

const $ = s => document.querySelector(s);
const liveEl = $("#live");
const mubSec = $("#mubSection");
const khabSec = $("#khabSection");
const feedback = $("#feedback");
const checkBtn = $("#checkBtn");
const nextBtn = $("#nextBtn");
const twoStep = $("#twoStep");

function splitTokens(text){ return text.trim().split(/\s+/); }
function current(){ return ITEMS[state.idx]; }

function isFeminine(word){
  const w = word.normalize("NFKD").replace(/\p{M}/gu,"");
  return w.includes("ة") || w.endsWith("ات");
}
function conj(v,f){ if(v==="كان")return f?"كانت":"كان"; if(v==="صار")return f?"صارت":"صار"; if(v==="ليس")return f?"ليست":"ليس"; return ""; }
function form(forms,c){ return forms[c ?? "m"]; }

function tokenForm(forms, idx){
  const mT = splitTokens(forms.m), aT = splitTokens(forms.a), jT = splitTokens(forms.j);
  const i = Math.min(idx ?? 0, Math.max(mT.length,1)-1);
  return { m: mT[i] ?? forms.m, a: aT[i] ?? forms.a, j: jT[i] ?? forms.j };
}

function renderLive(){
  const M = current().mub, K = current().khb;
  const mText = form(M, state.mCase ?? "m");
  const kText = form(K, state.kCase ?? "m");
  const mTokens = splitTokens(mText), kTokens = splitTokens(kText);

  const parts = [];
  if(state.verb){
    const fem = isFeminine(mText);
    parts.push(`<span class="verb">${conj(state.verb,fem)}</span>`);
  }
  mTokens.forEach((tok,i)=>{
    const sel = state.mPick===i ? " token sel-m" : " token";
    parts.push(`<span class="${sel}" data-m="${i}">${tok}</span>`);
  });
  kTokens.forEach((tok,i)=>{
    const sel = state.kPick===i ? " token sel-k" : " token";
    parts.push(`<span class="${sel}" data-k="${i}">${tok}</span>`);
  });
  liveEl.innerHTML = parts.join(" ");

  liveEl.querySelectorAll("[data-m]").forEach(el=> el.onclick = ()=>{ state.mPick=+el.dataset.m; refresh(); });
  liveEl.querySelectorAll("[data-k]").forEach(el=> el.onclick = ()=>{ state.kPick=+el.dataset.k; refresh(); });

  checkBtn.disabled = !isAnswerComplete();
  nextBtn.disabled  = !state.success;
}

function selectedMTokenForms(){
  const idx = state.mPick ?? 0; return tokenForm(current().mub, idx);
}
function selectedKTokenForms(){
  const idx = state.kPick ?? 0; return tokenForm(current().khb, idx);
}

function renderForms(){
  mubSec.innerHTML = ""; khabSec.innerHTML = "";
  const mTokens = splitTokens(form(current().mub, state.mCase ?? "m"));
  const kTokens = splitTokens(form(current().khb, state.kCase ?? "m"));
  const needMPick = mTokens.length>1, needKPick = kTokens.length>1;

  if(state.twoStep){
    if(needMPick && state.mPick==null){
      mubSec.innerHTML = `<div class="helper">اختر المبتدأ أولاً بالضغط على الكلمة الصحيحة في الجملة أعلاه، ثم ستظهر لك صيغ المبتدأ.</div>`;
    }else{
      mubSec.innerHTML = renderFormsBlock("اختر صيغة المبتدأ الصحيحة", selectedMTokenForms(), "mCase");
      if(needKPick && state.kPick==null){
        khabSec.innerHTML = `<div class="helper">عيّن الخبر أولاً بالضغط على الكلمة الصحيحة في الجملة أعلاه</div>`;
      }else{
        khabSec.innerHTML = renderFormsBlock("اختر صيغة الخبر الصحيحة", selectedKTokenForms(), "kCase");
      }
    }
  }else{
    if(needMPick && state.mPick==null){
      mubSec.innerHTML = `<div class="helper">عيّن المبتدأ أولاً بالضغط على الكلمة الصحيحة في الجملة أعلاه</div>`;
    }else{
      mubSec.innerHTML = renderFormsBlock("اختر صيغة المبتدأ الصحيحة", selectedMTokenForms(), "mCase");
    }
    if(needKPick && state.kPick==null){
      khabSec.innerHTML = `<div class="helper">عيّن الخبر أولاً بالضغط على الكلمة الصحيحة في الجملة أعلاه</div>`;
    }else{
      khabSec.innerHTML = renderFormsBlock("اختر صيغة الخبر الصحيحة", selectedKTokenForms(), "kCase");
    }
  }

  mubSec.querySelectorAll("[data-case]").forEach(btn=> btn.onclick=()=>{ state.mCase=btn.dataset.case; refresh(); });
  khabSec.querySelectorAll("[data-case]").forEach(btn=> btn.onclick=()=>{ state.kCase=btn.dataset.case; refresh(); });
}

function renderFormsBlock(title, forms, bindKey){
  const sel = (bindKey==="mCase"?state.mCase:state.kCase) ?? "m";
  const chip = (label,code)=>`<button class="form-chip ${sel===code?'sel':''}" data-case="${code}">${label}</button>`;
  return `
    <h3>${title}</h3>
    <div class="forms">
      ${chip(forms.m,"m")}
      ${chip(forms.a,"a")}
      ${chip(forms.j,"j")}
    </div>
  `;
}

function isAnswerComplete(){
  const mTokens = splitTokens(form(current().mub, state.mCase ?? "m"));
  const kTokens = splitTokens(form(current().khb, state.kCase ?? "m"));
  const needMPick = mTokens.length>1, needKPick = kTokens.length>1;
  const base = state.verb && state.mCase && state.kCase;
  return base && (!needMPick || state.mPick!=null) && (!needKPick || state.kPick!=null);
}

function check(){
  if(!isAnswerComplete()) return;
  const okM = state.mCase==="m";
  const okK = state.kCase==="a";

  const mTokens = splitTokens(form(current().mub, state.mCase ?? "m"));
  const kTokens = splitTokens(form(current().khb, state.kCase ?? "m"));
  const needMPick = mTokens.length>1, needKPick = kTokens.length>1;
  const okPickM = !needMPick || state.mPick===0;
  const okPickK = !needKPick || state.kPick===0;

  if(okM && okK && okPickM && okPickK){
    feedback.className = "feedback ok";
    feedback.textContent = `أحسنت! بعد (${state.verb}): المبتدأ مرفوع والخبر منصوب.`;
    state.success = true;
  }else{
    let hints=[];
    if(needMPick && !okPickM) hints.push("عيّن المبتدأ: أول كلمة في الجملة الاسمية");
    if(needKPick && !okPickK) hints.push("عيّن الخبر: أول كلمة من التركيب الخبري");
    if(!okM) hints.push("المبتدأ الصحيح: مرفوع");
    if(!okK) hints.push("الخبر الصحيح: منصوب");
    feedback.className = "feedback bad";
    feedback.textContent = "تحقق مرة أخرى: " + hints.join("، ") + ".";
    state.success = false;
  }
  checkBtn.disabled = !isAnswerComplete();
  nextBtn.disabled  = !state.success;
}

function next(){
  if(!state.success) return;
  state.idx = (state.idx+1) % ITEMS.length;
  state.verb = null; state.mCase=null; state.kCase=null;
  state.mPick=null; state.kPick=null; state.success=false;
  refresh(true);
}

document.querySelectorAll(".chip[data-verb]").forEach(b=>{
  b.onclick = ()=>{
    document.querySelectorAll(".chip[data-verb]").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    state.verb = b.dataset.verb;
    refresh();
  };
});
twoStep.onchange = ()=>{ state.twoStep = twoStep.checked; refresh(); };
checkBtn.onclick = check;
nextBtn.onclick = next;

function refresh(resetFeedback){
  renderLive();
  renderForms();
  if(resetFeedback){ feedback.className="feedback hidden"; feedback.textContent=""; }
}
refresh(true);
