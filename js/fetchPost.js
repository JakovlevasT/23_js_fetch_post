'use strict';
console.log('fetchPost.js file was loaded');

const els = {
  createBtn: document.querySelector('#btn1'),
};
// console.log('els ===', els);

const url = 'https://jsonplaceholder.typicode.com/posts';

const newPost = {
  title: 'My first post',
  body: 'Body of my first post',
  userId: 7,
};

// issiusti newPost migtuko paspaudimu su fetch

els.createBtn.addEventListener('click', createNewPost);

function createNewPost() {
  console.log('creating');
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
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
