'use strict';
console.log('create.js file was loaded');

// A. Sukurti forma su inputu title, text ir userId(selectas)
// pateikiant forma siusti duomnenis i api ir sukurti nauja post, isconsolinti atsakyma

// B. tas pats kaip ir A variantas tik kuriam nauja useri kuriam reikia paduoti name email ir adreso su bent 3 savybem
const url = 'https://jsonplaceholder.typicode.com/posts';

const els = {
  createBtn: document.querySelector('#btn1'),
  titleInputEl: document.querySelector('#title'),
  textInputEl: document.querySelector('#text'),
  idSelectorEl: document.querySelector('#userId'),
  formBody: document.getElementById('formListiner'),
  emailInputEl: document.querySelector('#email'),
  cityInputEl: document.querySelector('#city'),
  streetInputEl: document.querySelector('#street'),
  houseNrInputEl: document.querySelector('#house-number'),
};

els.formBody.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleVal = els.titleInputEl.value;
  console.log('titleVal ===', titleVal);
  const textVal = els.textInputEl.value;
  console.log('textVal ===', textVal);
  const idVal = els.idSelectorEl.value;
  console.log('idVal ===', idVal);
  const emailEl = els.emailInputEl.value;
  console.log('emailEl ===', emailEl);
  const cityVal = els.cityInputEl.value;
  console.log('cityVal ===', cityVal);
  const streetVal = els.streetInputEl.value;
  console.log('streetVal ===', streetVal);
  const houseNrVal = els.houseNrInputEl.value;
  console.log('houseNrVal ===', houseNrVal);

  const newPost = {
    title: titleVal,
    body: textVal,
    userId: idVal,
    email: emailEl,
    address: {
      city: cityVal,
      street: streetVal,
      houseNumber: houseNrVal,
    },
  };

  createNewPost(newPost);
});

function createNewPost(post) {
  console.log('creatingNewPost');
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post),
  })
    .then((resp) => {
      console.log('resp ===', resp);
      return resp.json();
    })
    .then((ats) => {
      console.log('ats ===', ats);
    })
    .catch((error) => console.warn('ivyko klaida', error));
}
