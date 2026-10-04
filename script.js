// EDIT HERE: all personal copy, captions, names and photo filenames live together.
// The personal letter, lessons and original quotes are suggested wording: replace freely.
const EDITION = {
  names: ['Abdul Wahab', 'Abu Bakr'],
  coverPhoto: { file: 'assets/mam-irum-hira.jpg', alt: 'Mam Irum Hira smiling in a snowy mountain landscape' },
  posterPhoto: { file: 'assets/mam-and-bakr.jpg', alt: 'Mam Irum Hira and Abu Bakr standing beside a mountain lake' },
  // Add 2–8 photo objects here. Put Abdul Wahab’s photo in the first two positions.
  photos: [
    { file: 'assets/photo-2.jpg', alt: 'Mam Irum Hira with students during a mountain trip', title: 'The days we keep.', caption: 'Together, away from the usual routine.' },
    { file: 'assets/photo-4.jpg', alt: 'A group of students and teachers gathered in a green mountain valley', title: 'All of us, together.', caption: 'A whole day, held in one photograph.' },
    { file: 'assets/photo-1.jpg', alt: 'Mam Irum Hira and four companions standing beside a snowman', title: 'A little snow. A lot of memories.', caption: 'Some of our favourite moments happened between the plans.' },
    { file: 'assets/photo-3.jpg', alt: 'Mam Irum Hira standing in front of a lake and snow-capped mountains', title: 'A moment for Mam.', caption: 'A quiet frame from a day worth remembering.' }
  ],
  letter: [
    'We wanted to do something a little different this Teachers’ Day. So we made a magazine with you on the cover, and the things we want to say inside.',
    'Thank you for taking us seriously, for expecting us to do better, and for being someone we can turn to. We may not say it often, but your time and support mean a lot to us.',
    'These pages are a few memories and a small thank you from both of us. We hope they make you smile.'
  ],
  lessons: [
    'Every student deserves to feel that they matter.',
    'Being strict and being kind can go together.',
    'It is okay to ask when you do not understand.',
    'Doing things properly takes patience.',
    'A good leader makes time to listen.',
    'Small acts of support stay with people.'
  ],
  quotes: [
    { text: 'One child, one teacher, one book, one pen can change the world.', author: 'Malala Yousafzai' },
    { text: 'You expect us to do better, and you help us get there.', author: 'Abdul Wahab & Abu Bakr' },
    { text: 'Knowing we could come to you made a difference.', author: 'Abdul Wahab & Abu Bakr' }
  ],
  text: {
    'edition-label': '5 October · Teachers’ Day', 'header-write': 'Write to Mam',
    'cover-edition': 'The Teachers’ Day Edition', 'cover-date': '5 October 2026',
    'cover-kicker': 'Our cover star', 'cover-name': 'Irum Hira', 'cover-deck': 'The HOD who leads with heart.',
    'cover-secondary': 'The memories. The lessons. A thank you, from us.',
    'seal-top': 'October', 'seal-bottom': 'One of one',
    'cover-byline': 'A special edition by Abdul Wahab and Abu Bakr.', 'cover-price': 'Priceless',
    'open-cover': 'Open the edition', 'letter-folio': 'The editor’s letter', 'letter-kicker': 'Dear Mam,',
    'letter-title': 'A note from the editors.', 'salutation': 'Mam Irum Hira,', 'signoff': 'With love and respect,',
    'signature-caption': 'Your students. Your editors for today.',
    'lessons-folio': 'Beyond the everyday', 'lessons-kicker': 'The things that stay', 'lessons-title': 'Things we learned from her.',
    'poster-folio': 'The centerfold', 'poster-title': 'One for the memory books.', 'poster-aside': 'Some photographs say enough.',
    'poster-caption': 'Mam and Bakr. Teachers’ Day edition, 5 October.',
    'photos-folio': 'The photo story', 'photos-kicker': 'From our camera roll', 'photo-story-title': 'Good days, kept close.',
    'photo-instruction': 'Swipe to turn the pages. Tap a photo to look closer.', 'previous-photo': 'Previous', 'next-photo': 'Next',
    'quotes-folio': 'Words to keep', 'letters-folio': 'Letters to the editor', 'letters-kicker': 'A few words of your own',
    'letters-title': 'Dear Mam…', 'letters-intro': 'Have something you would like to say? Leave a little thank you here.',
    'write-letter': 'Write to Mam', 'form-title': 'Your letter to Mam', 'cancel-letter': 'Cancel',
    'name-label': 'Your name (optional)', 'message-label': 'Your message', 'save-letter': 'Keep this letter',
    'local-note': 'Letters are saved only in this browser on this device. They are not sent to Mam or shared with other visitors.',
    'back-folio': 'The back cover', 'back-kicker': 'For everything, big and small', 'back-title': 'Thank you, Mam.',
    'back-names': 'Abdul Wahab and Abu Bakr', 'read-again': 'Read it again', 'back-date': '5 October 2026', 'back-price': 'Always priceless',
    'close-photo': 'Close photo'
  },
  ui: { anonymous: 'A grateful student', saved: 'Your letter is kept on this device.', unsaved: 'Your letter is shown below, but this browser could not save it. It will disappear when you leave.', empty: 'Please write a message first.', photoPage: 'Page', photoOf: 'of', signature: 'Abdul Wahab and Abu Bakr' }
};

const $ = (id) => document.getElementById(id);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
Object.entries(EDITION.text).forEach(([id, value]) => { if ($(id)) $(id).textContent = value; });
$('cover-photo').src = EDITION.coverPhoto.file;
$('cover-photo').alt = EDITION.coverPhoto.alt;
$('poster-photo').src = EDITION.posterPhoto.file;
$('poster-photo').alt = EDITION.posterPhoto.alt;
$('signature-label').textContent = EDITION.ui.signature;
$('signature-text').textContent = EDITION.ui.signature;
EDITION.letter.forEach(text => { const p = document.createElement('p'); p.textContent = text; $('letter-paragraphs').append(p); });
EDITION.lessons.forEach((text, i) => {
  const item = document.createElement('li'); item.className = 'lesson';
  const number = document.createElement('span'); number.className = 'lesson-number'; number.textContent = String(i + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true');
  const p = document.createElement('p'); p.textContent = text;
  item.append(number, p);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', '0 0 100 2'); svg.setAttribute('preserveAspectRatio', 'none'); svg.setAttribute('aria-hidden', 'true'); svg.classList.add('lesson-line');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', 'M0 1H100'); svg.append(path); item.append(svg);
  $('lesson-list').append(item);
});

const dialog = $('photo-dialog');
let lastPhotoButton;
EDITION.photos.forEach((photo, i) => {
  const spread = document.createElement('article'); spread.className = 'spread';
  const button = document.createElement('button'); button.type = 'button'; button.className = 'photo-button'; button.setAttribute('aria-label', photo.title + ' — enlarge photo');
  const img = document.createElement('img'); img.src = photo.file; img.alt = photo.alt; img.loading = 'lazy'; img.decoding = 'async'; button.append(img);
  const copy = document.createElement('div'); copy.className = 'spread-copy';
  const number = document.createElement('span'); number.className = 'spread-number'; number.textContent = String(i + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true');
  const title = document.createElement('h3'); title.textContent = photo.title;
  const caption = document.createElement('p'); caption.textContent = photo.caption;
  copy.append(number, title, caption); spread.append(button, copy); $('spreads').append(spread);
  button.addEventListener('click', () => {
    lastPhotoButton = button; $('dialog-photo').src = photo.file; $('dialog-photo').alt = photo.alt;
    $('dialog-caption').textContent = photo.title + ' ' + photo.caption;
    dialog.showModal(); document.body.style.overflow = 'hidden';
  });
});
$('close-photo').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastPhotoButton?.focus({preventScroll:true}); });
const spreads = $('spreads');
function currentPhoto() { const children = [...spreads.children]; return children.reduce((best, node, i) => Math.abs(node.offsetLeft - children[0].offsetLeft - spreads.scrollLeft) < Math.abs(children[best].offsetLeft - children[0].offsetLeft - spreads.scrollLeft) ? i : best, 0); }
function updatePhotoControls() { const i = currentPhoto(); $('previous-photo').disabled = i === 0; $('next-photo').disabled = i === EDITION.photos.length - 1; $('photo-position').textContent = `${EDITION.ui.photoPage} ${i + 1} ${EDITION.ui.photoOf} ${EDITION.photos.length}`; }
function turnPhoto(direction) { const i = Math.max(0, Math.min(EDITION.photos.length - 1, currentPhoto() + direction)); spreads.scrollTo({left:spreads.children[i].offsetLeft - spreads.children[0].offsetLeft, behavior:reducedMotion.matches?'instant':'smooth'}); }
$('previous-photo').addEventListener('click', () => turnPhoto(-1)); $('next-photo').addEventListener('click', () => turnPhoto(1));
spreads.addEventListener('scroll', updatePhotoControls, {passive:true});
spreads.addEventListener('keydown', e => { if(e.target === spreads && ['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();turnPhoto(e.key==='ArrowRight'?1:-1);} });
window.addEventListener('resize', updatePhotoControls); updatePhotoControls();
EDITION.quotes.forEach(quote => {
  const page = document.createElement('div'); page.className = 'quote-page';
  const mark = document.createElement('span'); mark.className = 'quote-mark'; mark.textContent = '“'; mark.setAttribute('aria-hidden','true');
  const block = document.createElement('blockquote'); block.textContent = quote.text;
  const author = document.createElement('cite'); author.textContent = quote.author; page.append(mark,block,author); $('quote-list').append(page);
});

const STORAGE_KEY = 'mam-irum-hira-letters-v1';
let letters = [];
try { const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); if(Array.isArray(stored)) letters = stored.filter(x => x && typeof x.message === 'string' && typeof x.name === 'string').slice(0,100).map(x => ({message:x.message.slice(0,400),name:x.name.slice(0,60)})); } catch { /* Device-local storage may be unavailable. */ }
function renderLetters() { $('printed-letters').replaceChildren(); letters.forEach(letter => { const article = document.createElement('article'); article.className='printed-letter'; const p = document.createElement('p'); p.textContent=letter.message; const by = document.createElement('footer'); by.textContent=letter.name || EDITION.ui.anonymous; article.append(p,by); $('printed-letters').append(article); }); }
renderLetters();
function closeLetterForm() { $('letter-form').hidden=true; $('write-letter').setAttribute('aria-expanded','false'); $('write-letter').focus({preventScroll:true}); }
$('write-letter').addEventListener('click', () => { const opening = $('letter-form').hidden; $('letter-form').hidden=!opening; $('write-letter').setAttribute('aria-expanded', String(opening)); if(opening) $('writer-message').focus({preventScroll:false}); });
$('cancel-letter').addEventListener('click',closeLetterForm);
$('writer-message').addEventListener('input', () => { $('writer-message').setCustomValidity(''); $('character-count').textContent=`${$('writer-message').value.length} / 400`; });
$('letter-form').addEventListener('submit', event => {
  event.preventDefault(); const message=$('writer-message').value.trim(); if(!message){$('writer-message').setCustomValidity(EDITION.ui.empty);$('writer-message').reportValidity();return;}
  letters.unshift({name:$('writer-name').value.trim().slice(0,60),message:message.slice(0,400)}); letters=letters.slice(0,100);
  let saved=true; try{localStorage.setItem(STORAGE_KEY,JSON.stringify(letters));}catch{saved=false;}
  renderLetters(); $('letter-form').reset(); $('character-count').textContent='0 / 400';closeLetterForm();$('letter-status').textContent=saved?EDITION.ui.saved:EDITION.ui.unsaved;
});
$('read-again').addEventListener('click', () => {
  $('cover').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth'});
  if(window.gsap && !reducedMotion.matches) gsap.fromTo('.cover',{rotationY:-6},{rotationY:0,duration:1,clearProps:'transform'});
});

// All content remains readable if either animation CDN is unavailable.
if(window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo('.cover',{y:40,rotation:-1,opacity:0},{y:0,rotation:0,opacity:1,duration:1.2,ease:'power3.out',clearProps:'transform,opacity'});
    gsap.fromTo('.letter-layout',{rotationY:9,x:-15},{rotationY:0,x:0,duration:1.1,ease:'power2.out',scrollTrigger:{trigger:'#letter',start:'top 85%'},clearProps:'transform'});
    document.querySelectorAll('.headline').forEach(heading => {
      const label=heading.textContent; heading.setAttribute('aria-label',label); heading.replaceChildren();
      label.split(' ').forEach((word,i) => {if(i)heading.append(' ');const span=document.createElement('span');span.textContent=word;span.style.display='inline-block';span.setAttribute('aria-hidden','true');heading.append(span);});
      gsap.fromTo(heading.querySelectorAll('span'),{y:20,opacity:0},{y:0,opacity:1,stagger:.065,duration:.7,scrollTrigger:{trigger:heading,start:'top 90%'},clearProps:'transform,opacity'});
    });
    gsap.fromTo('.signature-stroke',{strokeDashoffset:600},{strokeDashoffset:0,duration:2,ease:'none',scrollTrigger:{trigger:'.signature',start:'top 90%'}});
    document.querySelectorAll('.lesson').forEach((item,i) => {
      gsap.fromTo(item,{y:16,opacity:0},{y:0,opacity:1,duration:.6,scrollTrigger:{trigger:item,start:'top 92%'},clearProps:'transform,opacity'});
      gsap.to(item.querySelector('path'),{strokeDashoffset:0,duration:1,scrollTrigger:{trigger:item,start:'top 90%'}});
      const counter={value:0};gsap.to(counter,{value:i+1,duration:.75,snap:{value:1},onUpdate:()=>{item.querySelector('.lesson-number').textContent=String(counter.value).padStart(2,'0');},scrollTrigger:{trigger:item,start:'top 90%'}});
    });
    gsap.fromTo('#poster-photo',{scale:1},{scale:1.025,ease:'none',scrollTrigger:{trigger:'.poster-frame',start:'top bottom',end:'bottom top',scrub:1}});
    document.querySelectorAll('.quote-page blockquote').forEach(quote => gsap.fromTo(quote,{y:24,opacity:0},{y:0,opacity:1,duration:.9,scrollTrigger:{trigger:quote,start:'top 88%'},clearProps:'transform,opacity'}));
    return () => { document.querySelectorAll('.lesson-number').forEach((el,i)=>el.textContent=String(i+1).padStart(2,'0')); };
  });
  window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
}
