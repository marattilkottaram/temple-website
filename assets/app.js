
const target=new Date('2026-12-17T00:00:00+05:30').getTime();
function setCountdown(){const d=Math.max(0,target-Date.now()),v=[Math.floor(d/86400000),Math.floor(d/3600000)%24,Math.floor(d/60000)%60,Math.floor(d/1000)%60];['days','hours','minutes','seconds'].forEach((id,i)=>{const e=document.getElementById(id);if(e)e.textContent=String(v[i]).padStart(2,'0')})}setCountdown();setInterval(setCountdown,1000);
document.querySelector('.nav-toggle')?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
const festivalDays=Array.from({length:11},(_,i)=>17+i),special={17:['Nirmalyam & Temple Opening','Ganapathi Homam','Bhagavatha Parayanam','Inaugural Sreemad Bhagavatha Discourse','Annadanam','Evening Bhajans'],18:['Nirmalyam','Vishnu Sahasranama Parayanam','Sreemad Bhagavatha Discourse','Annadanam','Deeparadhana & Harivarasanam'],19:['Nirmalyam','Bhagavatha Parayanam','Devotional Music','Annadanam','Sreemad Bhagavatha Discourse'],20:['Nirmalyam','Ganapathi Homam','Bhagavatha Discourse','Annadanam','Cultural Programme'],21:['Nirmalyam','Vishnu Sahasranama','Sreemad Bhagavatha Discourse','Annadanam','Bhajans'],22:['Nirmalyam','Bhagavatha Parayanam','Devotional Discourse','Annadanam','Evening Prayer'],23:['Nirmalyam','Temple Rituals','Bhagavatha Discourse','Annadanam','Cultural Programme'],24:['Nirmalyam','Bhagavatha Parayanam','Satsang','Annadanam','Deeparadhana'],25:['Nirmalyam','Vishnu Sahasranama','Sreemad Bhagavatha Discourse','Annadanam','Bhajans'],26:['Nirmalyam','Bhagavatha Parayanam','Spiritual Talk','Annadanam','Cultural Evening'],27:['Nirmalyam','Concluding Parayanam','Mahasathram Valedictory','Annadanam','Deeparadhana']},timeSlots=['05:30 AM – 06:30 AM','06:30 AM – 07:30 AM','07:30 AM – 09:30 AM','10:00 AM – 12:30 PM','12:30 PM – 01:30 PM','06:00 PM – 07:00 PM'];let currentMonth=11,currentYear=2026,selected=17;
function renderCalendar(){const c=document.getElementById('calendar');if(!c)return;document.getElementById('monthTitle').textContent=new Date(currentYear,currentMonth).toLocaleString('en-IN',{month:'long',year:'numeric'});c.innerHTML='';let first=new Date(currentYear,currentMonth,1).getDay(),last=new Date(currentYear,currentMonth+1,0).getDate();for(let i=0;i<first;i++)c.insertAdjacentHTML('beforeend','<button class="blank"></button>');for(let d=1;d<=last;d++){const fest=currentYear===2026&&currentMonth===11&&festivalDays.includes(d),b=document.createElement('button');b.textContent=d;b.className=(fest?'festival ':'')+(d===selected&&fest?'selected':'');if(fest)b.onclick=()=>{selected=d;renderCalendar();renderProgram()};c.append(b)}}
function renderProgram(){const box=document.getElementById('programList');if(!box)return;document.getElementById('selectedDate').textContent=new Date(2026,11,selected).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric',weekday:'long'});box.innerHTML=(special[selected]||[]).map((x,i)=>`<div class="timeline-row"><time>${timeSlots[i]||'07:00 PM – 08:00 PM'}</time><span>${x}</span></div>`).join('')}
document.getElementById('prevMonth')?.addEventListener('click',()=>{currentMonth--;if(currentMonth<0){currentMonth=11;currentYear--}renderCalendar()});document.getElementById('nextMonth')?.addEventListener('click',()=>{currentMonth++;if(currentMonth>11){currentMonth=0;currentYear++}renderCalendar()});renderCalendar();renderProgram();
const gallery=[
{src:'assets/images/gallery-refresh/general-1.jpg',category:'general',title:'General · Temple committee gathering'},
{src:'assets/images/gallery-refresh/general-2.jpg',category:'general',title:'General · Temple community event'},
{src:'assets/images/gallery-refresh/general-3.jpg',category:'general',title:'General · Devotional gathering'},
{src:'assets/images/gallery-refresh/day-11.jpg',day:11,category:'daily',title:'Day 11 · Samapanam & Maha Deeparadhana'},
{src:'assets/images/gallery-refresh/day-10.jpg',day:10,category:'daily',title:'Day 10 · Devotional discourse'},
{src:'assets/images/gallery-refresh/day-9.jpg',day:9,category:'daily',title:'Day 9 · Evening pooja'},
{src:'assets/images/gallery-refresh/day-8.jpg',day:8,category:'daily',title:'Day 8 · Temple gathering'},
{src:'assets/images/gallery-refresh/day-7.jpg',day:7,category:'daily',title:'Day 7 · Bhagavatha discourse'},
{src:'assets/images/gallery-refresh/day-6.jpg',day:6,category:'daily',title:'Day 6 · Prayer and devotion'},
{src:'assets/images/gallery-refresh/day-5.jpg',day:5,category:'daily',title:'Day 5 · Festival ambience'},
{src:'assets/images/gallery-refresh/day-4.jpg',day:4,category:'daily',title:'Day 4 · Bhajans & music'},
{src:'assets/images/gallery-refresh/day-3.jpg',day:3,category:'daily',title:'Day 3 · Spiritual reflection'},
{src:'assets/images/gallery-refresh/day-2.jpg',day:2,category:'daily',title:'Day 2 · Bhagavatha parayanam'},
{src:'assets/images/gallery-refresh/day-1.jpg',day:1,category:'daily',title:'Day 1 · Mahasathram opening'}];
function drawGallery(filter='all'){const grid=document.getElementById('galleryGrid');if(!grid)return;grid.innerHTML=gallery.filter(x=>filter==='all'||(filter==='general'?x.category==='general':x.day===+filter)).map(x=>`<button class="gallery-item" data-src="${x.src}" data-title="${x.title}"><img loading="lazy" src="${x.src}" alt="${x.title}"><span>${x.title}</span></button>`).join('');grid.querySelectorAll('.gallery-item').forEach(b=>b.onclick=()=>{const d=document.getElementById('lightbox');document.getElementById('lightboxImage').src=b.dataset.src;document.getElementById('lightboxCaption').textContent=b.dataset.title;d.showModal()})}
const filterRoot=document.getElementById('galleryFilters');if(filterRoot){filterRoot.innerHTML='<button class="active" data-filter="all">All / Latest</button><button data-filter="general">General</button>'+Array.from({length:11},(_,i)=>`<button data-filter="${i+1}">Day ${i+1}</button>`).join('');filterRoot.onclick=e=>{if(e.target.tagName==='BUTTON'){filterRoot.querySelectorAll('button').forEach(x=>x.classList.remove('active'));e.target.classList.add('active');drawGallery(e.target.dataset.filter)}};drawGallery()}
document.getElementById('closeLightbox')?.addEventListener('click',()=>document.getElementById('lightbox').close());


// Multilingual interface: English / Malayalam
const i18n={
 en:{
  Home:'Home',About:'About',Programme:'Programme',Gallery:'Gallery',Donations:'Donations',Contact:'Contact',
  welcome:'WELCOME, DEVOTEES',aboutMaha:'About Mahasathram',sacredGathering:'A sacred gathering of devotion, discourse and community',
  aboutPara:'The Akhila Bharatha Srimad Bhagavatha Maha Sathram is one of the largest annual Vaishnavite spiritual retreats in South India. Primarily hosted in Kerala, these 10-to-11-day mega-events feature continuous recitations of the 18,000 verses of the Srimad Bhagavatam, mass discourses by prominent scholars, and free daily food for all attendees.',
  divineGathering:'A DIVINE GATHERING',elevenDays:'Eleven blessed days<br>of devotion',dailyDesc:'Daily recitation, spiritual discourse, poojas, bhajans and devotional offerings for all devotees.',divineDays:'11 Divine Days',parayanam:'Bhagavatha Parayanam',discourses:'Daily Discourses',reflection:'Spiritual reflection',bhajansMusic:'Bhajans & Music',eveningDevotion:'Evening devotion',annadanam:'Annadanam',serviceBlessings:'Service and blessings',dailyGallery:'DAILY EVENT GALLERY',recentMoments:'Recent moments of devotion',openGallery:'Open Gallery',viewProgramme:'View Programme Schedule',offerDonation:'Offer a Donation',
  aboutTempleLabel:'ABOUT OUR TEMPLE',faithTradition:'Faith, tradition and service',festivalsLabel:'MAJOR FESTIVALS & EVENTS',thalapoliTitle:'Thalapoli, firework traditions and ritual arts',darshanam:'Bhagavathy Darshanam',heritage:'Temple Heritage',spiritualExperience:'Spiritual Experience',communityCulture:'Community & Culture',festivalWisdom:'Festival Wisdom',
  programmeSchedule:'PROGRAMME SCHEDULE',dailyTimetable:'Daily Mahasathram timetable',scheduleLead:'Select a highlighted date to view the complete programme.',festivalDates:'Mahasathram dates<br><b>17 – 27 December 2026</b>',programme:'PROGRAMME',selectDate:'Select a date',notice:'Note: Timings are subject to change. Please follow announcements from the temple.',
  photoGallery:'PHOTO GALLERY',moments:'Mahasathram moments',galleryLead:'Browse daily moments of devotion. Choose a day to view its event photo',allLatest:'All / Latest',general:'General',
  supportCause:'SUPPORT THE SACRED CAUSE',donationText:'Your generous contribution supports the 43rd All India Sreemad Bhagavatha Mahasathram, annadanam, event arrangements, temple maintenance and spiritual activities.',eventArrangements:'Event arrangements',maintenance:'Temple maintenance',spiritualActivities:'Spiritual activities',scanPay:'Scan & Pay using UPI',upiIdText:'UPI ID: boim-858011200072@boi',upiPayeeName:'Marattil Kottaram Bhagavathy Temple',contactUs:'CONTACT US',hereToHelp:'We are here to help',messageWhatsapp:'Message on WhatsApp',openMaps:'Open in Google Maps ↗',whatsappNumberLabel:'WhatsApp'
 },
 ml:{
  Home:'ഹോം',About:'ക്ഷേത്രം',Programme:'പരിപാടികൾ',Gallery:'ഗാലറി',Donations:'സംഭാവനകൾ',Contact:'ബന്ധപ്പെടുക',
  welcome:'ഭക്തജനങ്ങൾക്ക് സ്വാഗതം',aboutMaha:'മഹാസത്രത്തെക്കുറിച്ച്',sacredGathering:'ഭക്തിയും പ്രഭാഷണവും സമൂഹസേവനവും ചേർന്ന പുണ്യസംഗമം',
  aboutPara:'അഖില ഭാരത ശ്രീമദ് ഭാഗവത മഹാസത്രം ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും വലിയ വാർഷിക വൈഷ്ണവ ആത്മീയ സംഗമങ്ങളിലൊന്നാണ്. കേരളത്തിൽ പ്രധാനമായും നടക്കുന്ന ഈ പത്ത് മുതൽ പതിനൊന്ന് ദിവസം വരെ നീളുന്ന മഹാസംഗമത്തിൽ ശ്രീമദ് ഭാഗവതത്തിലെ 18,000 ശ്ലോകങ്ങളുടെ നിരന്തര പാരായണവും പ്രമുഖ പണ്ഡിതരുടെ പ്രഭാഷണങ്ങളും എല്ലാ ഭക്തജനങ്ങൾക്കും സൗജന്യ അന്നദാനവും നടക്കുന്നു.',
  divineGathering:'ഒരു ദിവ്യസംഗമം',elevenDays:'ഭക്തിയുടെ പതിനൊന്ന്<br>അനുഗ്രഹീത ദിനങ്ങൾ',dailyDesc:'ദൈനംദിന പാരായണം, ആത്മീയ പ്രഭാഷണങ്ങൾ, പൂജകൾ, ഭജനകൾ, ഭക്തിസാന്ദ്രമായ സമർപ്പണങ്ങൾ.',divineDays:'11 ദിവ്യ ദിനങ്ങൾ',parayanam:'ഭാഗവത പാരായണം',discourses:'ദൈനംദിന പ്രഭാഷണങ്ങൾ',reflection:'ആത്മീയ ചിന്തനം',bhajansMusic:'ഭജനകളും സംഗീതവും',eveningDevotion:'സായാഹ്ന ഭക്തി',annadanam:'അന്നദാനം',serviceBlessings:'സേവനവും അനുഗ്രഹവും',dailyGallery:'ദൈനംദിന ഇവന്റ് ഗാലറി',recentMoments:'ഭക്തിയുടെ സമീപകാല നിമിഷങ്ങൾ',openGallery:'ഗാലറി തുറക്കുക',viewProgramme:'പരിപാടികൾ കാണുക',offerDonation:'സംഭാവന നൽകുക',
  aboutTempleLabel:'ഞങ്ങളുടെ ക്ഷേത്രം',faithTradition:'വിശ്വാസം, പാരമ്പര്യം, സേവനം',festivalsLabel:'പ്രധാന ഉത്സവങ്ങളും പരിപാടികളും',thalapoliTitle:'താലപ്പൊലിയും വെടിക്കെട്ട് പാരമ്പര്യവും ആചാരകലകളും',darshanam:'ഭഗവതി ദർശനം',heritage:'ക്ഷേത്ര പൈതൃകം',spiritualExperience:'ആത്മീയ അനുഭവം',communityCulture:'സമൂഹവും സംസ്കാരവും',festivalWisdom:'ഉത്സവ ജ്ഞാനം',
  programmeSchedule:'പരിപാടി പട്ടിക',dailyTimetable:'ദൈനംദിന മഹാസത്ര സമയപ്പട്ടിക',scheduleLead:'പൂർണ്ണ പരിപാടി കാണാൻ ഹൈലൈറ്റ് ചെയ്ത തീയതി തിരഞ്ഞെടുക്കുക. നൽകിയ വിവരങ്ങൾ ആവശ്യാനുസരണം തിരുത്താം.',festivalDates:'മഹാസത്ര ദിവസങ്ങൾ<br><b>17 – 27 ഡിസംബർ 2026</b>',programme:'പരിപാടി',selectDate:'ഒരു തീയതി തിരഞ്ഞെടുക്കുക',notice:'ശ്രദ്ധിക്കുക: സമയങ്ങളിൽ മാറ്റം വരാം. ക്ഷേത്ര അറിയിപ്പുകൾ പിന്തുടരുക.',
  photoGallery:'ഫോട്ടോ ഗാലറി',moments:'മഹാസത്ര നിമിഷങ്ങൾ',galleryLead:'ദൈനംദിന ഭക്തിനിമിഷങ്ങൾ കാണുക. ഒരു ദിവസത്തിന്റെ ചിത്രങ്ങൾ കാണാൻ ആ ദിവസം തിരഞ്ഞെടുക്കുക; ഏറ്റവും പുതിയ ദിവസം ആദ്യം കാണിക്കും.',allLatest:'എല്ലാം / പുതിയത്',general:'പൊതുവായവ',
  supportCause:'പുണ്യകാര്യത്തിന് പിന്തുണ നൽകൂ',donationText:'നിങ്ങളുടെ ഉദാരമായ സംഭാവന 43-ാമത് അഖില ഭാരത ശ്രീമദ് ഭാഗവത മഹാസത്രം, അന്നദാനം, പരിപാടി ക്രമീകരണങ്ങൾ, ക്ഷേത്ര പരിപാലനം, ആത്മീയ പ്രവർത്തനങ്ങൾ എന്നിവയ്ക്ക് പിന്തുണയാകും.',eventArrangements:'പരിപാടി ക്രമീകരണങ്ങൾ',maintenance:'ക്ഷേത്ര പരിപാലനം',spiritualActivities:'ആത്മീയ പ്രവർത്തനങ്ങൾ',scanPay:'UPI ഉപയോഗിച്ച് സ്കാൻ ചെയ്ത് പണമടയ്ക്കുക',upiIdText:'UPI ID: boim-858011200072@boi',upiPayeeName:'മരട്ടിൽ കോട്ടാരം ഭഗവതി ക്ഷേത്രം',contactUs:'ഞങ്ങളെ ബന്ധപ്പെടുക',hereToHelp:'സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെ',messageWhatsapp:'വാട്ട്‌സ്ആപ്പിൽ സന്ദേശം അയക്കുക',openMaps:'ഗൂഗിൾ മാപ്പിൽ തുറക്കുക ↗',whatsappNumberLabel:'വാട്ട്‌സ്ആപ്പ്'
 }
};
function applyLanguage(lang){
 localStorage.setItem('templeLang',lang);document.documentElement.lang=lang==='ml'?'ml':'en';
 document.body.classList.toggle('lang-ml',lang==='ml');
 document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(i18n[lang][key]!==undefined)el.innerHTML=i18n[lang][key]});
 document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
 // keep day filter buttons readable in Malayalam
 const fr=document.getElementById('galleryFilters'); if(fr){fr.querySelectorAll('button').forEach(b=>{if(b.dataset.filter&&b.dataset.filter!=='all'&&b.dataset.filter!=='general'){b.textContent=lang==='ml'?`ദിവസം ${b.dataset.filter}`:`Day ${b.dataset.filter}`}})}
}
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.lang)));
applyLanguage(localStorage.getItem('templeLang')||'en');


// Full-page Malayalam translation additions
Object.assign(i18n.en,{
 templeName:'Sri Marattil Kottaram Bhagavathy Temple',location:'Maradu, Ernakulam',mahasathramShort:'Mahasathram 2026',whatsapp:'WhatsApp',heroDate:'17 – 27 December 2026',startsIn:'MAHASATHRAM STARTS IN',countdownText:'Counting down to the sacred beginning.',days:'DAYS',hours:'HOURS',minutes:'MINUTES',seconds:'SECONDS',
 day11Title:'Day 11 · Samapanam',day11Desc:'Closing ceremony and sacred offerings',day10Title:'Day 10 · Devotion',day10Desc:'Devotees gathered in prayer',day9Title:'Day 9 · Bhagavatha Discourse',day9Desc:'Spiritual reflection and worship',day8Title:'Day 8 · Pooja',day8Desc:'Temple rituals and devotion',
 aboutP1:'Sri Marattil Kottaram Bhagavathy Temple is a historic shrine in Maradu, Ernakulam, renowned as the former summer house of the Cochin Royals. Dedicated to Goddess Bhagavathy (Bhadrakali), the west-facing deity is deeply revered by devotees.',
 aboutP2:'The temple is known for its grand annual Thalapoli festival and spectacular pyrotechnic displays. It is located near Kundannoor and is managed by a trust led by Nair family members from Maradu, Kundannoor and Poonithura.',
 deities:'<strong>Presiding Deity:</strong> Bhagavathy (Bhadrakali)<br><strong>Sub-Deities:</strong> Shasthavu, Nagaraja, Gandakarna, Ganesha and Bramharakshas.',
 thalapoliText:'<strong>Thalapoli / Maradu Fireworks Festival:</strong> Held annually during the February–March period, the festival is celebrated through the North Cheruvaram and South Cheruvaram committees, with separate rituals and grand fireworks exhibitions.',mudiyettuText:'<strong>Mudiyettu:</strong> Traditional ritual art performances are also occasionally held at the temple grounds.',bhagavathyName:'Sri Kottaram Bhagavathy',darshanamP1:'The sacred image of Bhagavathy helps devotees connect visually with the presiding deity of the temple.',darshanamP2:'This image may be replaced later with an official high-resolution temple photograph if needed.',heritageDesc:'Preserving worship, traditions and cultural legacy.',spiritDesc:'A space for prayer, reflection and devotion.',communityDesc:'Uniting people through service, tradition and celebration.',festivalDesc:'Sreemad Bhagavatha discourse for every generation.',annadanamCause:'🍚 Annadanam',upiNote:'Use this QR code or UPI ID for temple donations: boim-858011200072@boi',upiIdText:'UPI ID: boim-858011200072@boi',upiPayeeName:'Marattil Kottaram Bhagavathy Temple',sun:'Sun',mon:'Mon',tue:'Tue',wed:'Wed',thu:'Thu',fri:'Fri',sat:'Sat'
});
Object.assign(i18n.ml,{
 templeName:'ശ്രീ മരട്ടിൽ കോട്ടാരം ഭഗവതി ക്ഷേത്രം',location:'മരട്, എറണാകുളം',mahasathramShort:'മഹാസത്രം 2026',whatsapp:'വാട്ട്‌സ്ആപ്പ്',heroDate:'17 – 27 ഡിസംബർ 2026',startsIn:'മഹാസത്രം ആരംഭിക്കാൻ',countdownText:'പുണ്യാരംഭത്തിലേക്കുള്ള കൗണ്ട്ഡൗൺ.',days:'ദിവസം',hours:'മണിക്കൂർ',minutes:'മിനിറ്റ്',seconds:'സെക്കൻഡ്',
 day11Title:'ദിവസം 11 · സമാപനം',day11Desc:'സമാപന ചടങ്ങും പുണ്യസമർപ്പണങ്ങളും',day10Title:'ദിവസം 10 · ഭക്തി',day10Desc:'പ്രാർത്ഥനയിൽ ഒന്നിച്ച ഭക്തജനങ്ങൾ',day9Title:'ദിവസം 9 · ഭാഗവത പ്രഭാഷണം',day9Desc:'ആത്മീയ ചിന്തനവും ആരാധനയും',day8Title:'ദിവസം 8 · പൂജ',day8Desc:'ക്ഷേത്രാചാരങ്ങളും ഭക്തിയും',
 aboutP1:'ശ്രീ മരട്ടിൽ കോട്ടാരം ഭഗവതി ക്ഷേത്രം എറണാകുളം ജില്ലയിലെ മരടിലുള്ള ചരിത്രപ്രസിദ്ധമായ ക്ഷേത്രമാണ്. കൊച്ചി രാജാക്കന്മാരുടെ മുൻ വേനൽക്കാല വസതിയായി അറിയപ്പെട്ടിരുന്ന ഈ ക്ഷേത്രത്തിലെ പടിഞ്ഞാറോട്ട് ദർശനമുള്ള ഭഗവതി (ഭദ്രകാളി) അതീവ ആരാധ്യയാണ്.',
 aboutP2:'വർഷംതോറും നടക്കുന്ന ഭംഗിയാർന്ന താലപ്പൊലി ഉത്സവത്തിനും വെടിക്കെട്ടിനും ക്ഷേത്രം പ്രശസ്തമാണ്. കുണ്ടന്നൂരിനടുത്തുള്ള ക്ഷേത്രം മരട്, കുണ്ടന്നൂർ, പൂണിത്തുറ എന്നിവിടങ്ങളിലെ നായർ കുടുംബാംഗങ്ങൾ നയിക്കുന്ന ട്രസ്റ്റാണ് നടത്തുന്നത്.',
 deities:'<strong>പ്രതിഷ്ഠ:</strong> ഭഗവതി (ഭദ്രകാളി)<br><strong>ഉപദേവതകൾ:</strong> ശാസ്താവ്, നാഗരാജാവ്, ഗന്ധകർണൻ, ഗണേശൻ, ബ്രഹ്മരക്ഷസ്.',
 thalapoliText:'<strong>താലപ്പൊലി / മരട് വെടിക്കെട്ട് ഉത്സവം:</strong> ഫെബ്രുവരി–മാർച്ച് മാസങ്ങളിൽ നടക്കുന്ന ഈ ഉത്സവം വടക്ക് ചെറുവരവും തെക്ക് ചെറുവരവും എന്ന രണ്ട് കമ്മിറ്റികളുടെ വ്യത്യസ്ത ആചാരങ്ങളോടും ഗംഭീര വെടിക്കെട്ടോടും കൂടിയാണ് ആഘോഷിക്കുന്നത്.',mudiyettuText:'<strong>മുടിയേറ്റ്:</strong> പരമ്പരാഗത ആചാരകലയായ മുടിയേറ്റ് ക്ഷേത്രമുറ്റത്ത് ചില അവസരങ്ങളിൽ അരങ്ങേറുന്നു.',bhagavathyName:'ശ്രീ കോട്ടാരം ഭഗവതി',darshanamP1:'ഭഗവതിയുടെ പുണ്യചിത്രം ക്ഷേത്രത്തിലെ അധിഷ്ഠാന ദേവതയുമായുള്ള ഭക്തരുടെ ആത്മീയബന്ധം കൂടുതൽ ആഴപ്പെടുത്തുന്നു.',darshanamP2:'ആവശ്യമായാൽ ഈ ചിത്രം പിന്നീട് ഔദ്യോഗിക ഹൈ-റെസലൂഷൻ ക്ഷേത്രചിത്രം ഉപയോഗിച്ച് മാറ്റാം.',heritageDesc:'ആരാധനയും പാരമ്പര്യവും സാംസ്കാരിക പൈതൃകവും സംരക്ഷിക്കുന്നു.',spiritDesc:'പ്രാർത്ഥനയ്ക്കും ധ്യാനത്തിനും ഭക്തിക്കും ഒരിടം.',communityDesc:'സേവനത്തിലൂടെയും പാരമ്പര്യത്തിലൂടെയും ആഘോഷത്തിലൂടെയും ജനങ്ങളെ ഒന്നിപ്പിക്കുന്നു.',festivalDesc:'എല്ലാ തലമുറകൾക്കും ശ്രീമദ് ഭാഗവത പ്രഭാഷണം.',annadanamCause:'🍚 അന്നദാനം',upiNote:'ക്ഷേത്ര സംഭാവനകൾക്കായി ഈ QR കോഡ് അല്ലെങ്കിൽ UPI ID ഉപയോഗിക്കുക: boim-858011200072@boi',upiIdText:'UPI ID: boim-858011200072@boi',upiPayeeName:'മരട്ടിൽ കോട്ടാരം ഭഗവതി ക്ഷേത്രം',sun:'ഞാ',mon:'തി',tue:'ചൊ',wed:'ബു',thu:'വ്യാ',fri:'വെ',sat:'ശ'
});
const mlProgram={17:['നിർമാല്യം & ക്ഷേത്രതുറപ്പ്','ഗണപതി ഹോമം','ഭാഗവത പാരായണം','ഉദ്ഘാടന ശ്രീമദ് ഭാഗവത പ്രഭാഷണം','അന്നദാനം','സായാഹ്ന ഭജനകൾ'],18:['നിർമാല്യം','വിഷ്ണു സഹസ്രനാമ പാരായണം','ശ്രീമദ് ഭാഗവത പ്രഭാഷണം','അന്നദാനം','ദീപാരാധന & ഹരിവരാസനം'],19:['നിർമാല്യം','ഭാഗവത പാരായണം','ഭക്തിഗാനങ്ങൾ','അന്നദാനം','ശ്രീമദ് ഭാഗവത പ്രഭാഷണം'],20:['നിർമാല്യം','ഗണപതി ഹോമം','ഭാഗവത പ്രഭാഷണം','അന്നദാനം','സാംസ്കാരിക പരിപാടി'],21:['നിർമാല്യം','വിഷ്ണു സഹസ്രനാമം','ശ്രീമദ് ഭാഗവത പ്രഭാഷണം','അന്നദാനം','ഭജനകൾ'],22:['നിർമാല്യം','ഭാഗവത പാരായണം','ആത്മീയ പ്രഭാഷണം','അന്നദാനം','സായാഹ്ന പ്രാർത്ഥന'],23:['നിർമാല്യം','ക്ഷേത്രാചാരങ്ങൾ','ഭാഗവത പ്രഭാഷണം','അന്നദാനം','സാംസ്കാരിക പരിപാടി'],24:['നിർമാല്യം','ഭാഗവത പാരായണം','സത്സംഗം','അന്നദാനം','ദീപാരാധന'],25:['നിർമാല്യം','വിഷ്ണു സഹസ്രനാമം','ശ്രീമദ് ഭാഗവത പ്രഭാഷണം','അന്നദാനം','ഭജനകൾ'],26:['നിർമാല്യം','ഭാഗവത പാരായണം','ആത്മീയ സന്ദേശം','അന്നദാനം','സാംസ്കാരിക സായാഹ്നം'],27:['നിർമാല്യം','സമാപന പാരായണം','മഹാസത്ര സമാപന സമ്മേളനം','അന്നദാനം','ദീപാരാധന']};
const mlTimes=['05:30 – 06:30','06:30 – 07:30','07:30 – 09:30','10:00 – 12:30','12:30 – 01:30','06:00 – 07:00'];
function refreshDynamicLanguage(lang){
 if(document.getElementById('calendar')){const t=document.getElementById('monthTitle');if(t)t.textContent=lang==='ml'?'ഡിസംബർ 2026':'December 2026'; const box=document.getElementById('programList');if(box){const d=new Date(2026,11,selected);const locale=lang==='ml'?'ml-IN':'en-IN';document.getElementById('selectedDate').textContent=d.toLocaleDateString(locale,{day:'numeric',month:'long',year:'numeric',weekday:'long'});const rows=(lang==='ml'?mlProgram[selected]:special[selected])||[];box.innerHTML=rows.map((x,i)=>`<div class="timeline-row"><time>${(lang==='ml'?mlTimes:timeSlots)[i]||'07:00 – 08:00'}</time><span>${x}</span></div>`).join('')}}
 if(document.getElementById('galleryGrid')){const galleryTitlesML={general:['പൊതുവായത് · ക്ഷേത്ര കമ്മിറ്റി സംഗമം','പൊതുവായത് · ക്ഷേത്ര സമൂഹ പരിപാടി','പൊതുവായത് · ഭക്തിസംഗമം'],11:'ദിവസം 11 · സമാപനവും മഹാദീപാരാധനയും',10:'ദിവസം 10 · ഭക്തിപ്രഭാഷണം',9:'ദിവസം 9 · സായാഹ്ന പൂജ',8:'ദിവസം 8 · ക്ഷേത്രസംഗമം',7:'ദിവസം 7 · ഭാഗവത പ്രഭാഷണം',6:'ദിവസം 6 · പ്രാർത്ഥനയും ഭക്തിയും',5:'ദിവസം 5 · ഉത്സവാന്തരീക്ഷം',4:'ദിവസം 4 · ഭജനകളും സംഗീതവും',3:'ദിവസം 3 · ആത്മീയ ചിന്തനം',2:'ദിവസം 2 · ഭാഗവത പാരായണം',1:'ദിവസം 1 · മഹാസത്ര ഉദ്ഘാടനം'}; gallery.forEach((g,i)=>{g.title=lang==='ml'?(g.category==='general'?galleryTitlesML.general[i]:galleryTitlesML[g.day]):g.titleEn||g.title; if(!g.titleEn)g.titleEn=g.title}); const active=document.querySelector('#galleryFilters .active'); if(active)drawGallery(active.dataset.filter||'all');}
}
const oldApplyLanguage=applyLanguage;
applyLanguage=function(lang){oldApplyLanguage(lang);refreshDynamicLanguage(lang)};
applyLanguage(localStorage.getItem('templeLang')||'en');


const galleryData = [
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-1.jpg", caption: "Committee formation and lamp lighting ceremony" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-2.jpg", caption: "Committee formation and devotional gathering" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-3.jpg", caption: "Temple committee visit and offering" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-4.jpg", caption: "Felicitation and cultural gathering" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-5.jpg", caption: "Spiritual discourse at auditorium" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-6.jpg", caption: "Devotional address and programme" },
  { day: "general", title: "General Gallery", image: "assets/images/general-gallery/general-7.jpg", caption: "Guruvayoorappan decorated with flowers and lamps" }
];


/* Gallery tabs fixed: General + Day 1 to Day 11 */
(function () {
  const generalImages = [
    "assets/images/general-gallery/general-1.jpg",
    "assets/images/general-gallery/general-2.jpg",
    "assets/images/general-gallery/general-3.jpg",
    "assets/images/general-gallery/general-4.jpg",
    "assets/images/general-gallery/general-5.jpg",
    "assets/images/general-gallery/general-6.jpg",
    "assets/images/general-gallery/general-7.jpg"
  ];

  const tabs = [
    { key: "general", label: "General" },
    { key: "day-1", label: "Day 1" },
    { key: "day-2", label: "Day 2" },
    { key: "day-3", label: "Day 3" },
    { key: "day-4", label: "Day 4" },
    { key: "day-5", label: "Day 5" },
    { key: "day-6", label: "Day 6" },
    { key: "day-7", label: "Day 7" },
    { key: "day-8", label: "Day 8" },
    { key: "day-9", label: "Day 9" },
    { key: "day-10", label: "Day 10" },
    { key: "day-11", label: "Day 11" }
  ];

  function initGallery() {
    const filters = document.getElementById("galleryFilters");
    const grid = document.getElementById("galleryGrid");
    if (!filters || !grid) return;

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeLightbox = document.getElementById("closeLightbox");

    let activeTab = "general";

    function renderTabs() {
      filters.innerHTML = tabs.map(tab => {
        return `<button type="button" class="${tab.key === activeTab ? "active" : ""}" data-tab="${tab.key}">${tab.label}</button>`;
      }).join("");

      filters.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
          activeTab = this.dataset.tab;
          renderTabs();
          renderGrid();
        });
      });
    }

    function renderGrid() {
      if (activeTab === "general") {
        grid.innerHTML = generalImages.map((src, index) => `
          <button type="button" class="gallery-item" data-src="${src}">
            <img src="${src}" alt="Gallery photo ${index + 1}">
          </button>
        `).join("");

        grid.querySelectorAll(".gallery-item").forEach(item => {
          item.addEventListener("click", function () {
            if (!lightbox || !lightboxImage) return;
            lightboxImage.src = this.dataset.src;
            if (lightboxCaption) lightboxCaption.textContent = "";
            lightbox.showModal();
          });
        });
      } else {
        const label = tabs.find(tab => tab.key === activeTab)?.label || "Selected day";
        grid.innerHTML = `
          <div class="empty-gallery-message">
            <b>${label}</b>
            <span>Photos will appear after the day's event.</span>
          </div>
        `;
      }
    }

    if (closeLightbox && lightbox) {
      closeLightbox.onclick = () => lightbox.close();
    }

    renderTabs();
    renderGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGallery);
  } else {
    initGallery();
  }
})();



/* FINAL: data-driven gallery. Photos come from assets/data/gallery.json,
   which the temple committee edits through the /admin panel (Sveltia CMS).
   If the file cannot be loaded (e.g. opened directly from disk), it falls
   back to the seven bundled General photos so the page still works. */
window.addEventListener("load", function () {
  const filters = document.getElementById("galleryFilters");
  const grid = document.getElementById("galleryGrid");
  if (!filters || !grid) return;

  const fallbackGeneral = [
    "assets/images/general-gallery/general-1.jpg",
    "assets/images/general-gallery/general-2.jpg",
    "assets/images/general-gallery/general-3.jpg",
    "assets/images/general-gallery/general-4.jpg",
    "assets/images/general-gallery/general-5.jpg",
    "assets/images/general-gallery/general-6.jpg",
    "assets/images/general-gallery/general-7.jpg"
  ].map(src => ({ tab: "general", image: src, caption: "" }));

  const tabs = [
    ["general", "General"],
    ["day-1", "Day 1"],
    ["day-2", "Day 2"],
    ["day-3", "Day 3"],
    ["day-4", "Day 4"],
    ["day-5", "Day 5"],
    ["day-6", "Day 6"],
    ["day-7", "Day 7"],
    ["day-8", "Day 8"],
    ["day-9", "Day 9"],
    ["day-10", "Day 10"],
    ["day-11", "Day 11"]
  ];

  let active = "general";
  let photosByTab = {};

  function setData(photos) {
    photosByTab = {};
    (photos || []).forEach(p => {
      if (!p || !p.image) return;
      const t = p.tab || "general";
      (photosByTab[t] = photosByTab[t] || []).push(p);
    });
  }

  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"]/g, c => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
    ));
  }

  function renderTabs() {
    filters.innerHTML = tabs.map(([key, label]) => (
      `<button type="button" class="${key === active ? "active" : ""}" data-tab="${key}">${label}</button>`
    )).join("");
  }

  function renderGrid() {
    const items = photosByTab[active] || [];
    if (items.length) {
      grid.innerHTML = items.map((p) => {
        const src = escapeHtml(p.image);
        const cap = escapeHtml(p.caption);
        return `<button type="button" class="gallery-item" data-src="${src}" data-title="${cap}">
          <img loading="lazy" src="${src}" alt="${cap || "Gallery photo"}">
          ${cap ? `<span>${cap}</span>` : ""}
        </button>`;
      }).join("");
    } else {
      const label = tabs.find(([key]) => key === active)?.[1] || "Selected day";
      grid.innerHTML = `<div class="empty-gallery-message">
        <b>${label}</b>
        <span>Photos will appear after the day's event.</span>
      </div>`;
    }
  }

  filters.onclick = function (event) {
    const button = event.target.closest("button[data-tab]");
    if (!button) return;
    event.preventDefault();
    active = button.dataset.tab;
    renderTabs();
    renderGrid();
  };

  grid.onclick = function (event) {
    const button = event.target.closest(".gallery-item[data-src]");
    if (!button) return;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    if (lightbox && lightboxImage) {
      lightboxImage.src = button.dataset.src;
      if (lightboxCaption) lightboxCaption.textContent = button.dataset.title || "";
      lightbox.showModal();
    }
  };

  const closeLightbox = document.getElementById("closeLightbox");
  const lightbox = document.getElementById("lightbox");
  if (closeLightbox && lightbox) {
    closeLightbox.onclick = function () { lightbox.close(); };
  }

  fetch("assets/data/gallery.json", { cache: "no-store" })
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => setData(d && d.photos))
    .catch(() => setData(fallbackGeneral))
    .finally(() => { renderTabs(); renderGrid(); });
});
