import {uploadPhoto, createUser} from './utils.js';
export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[2].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
