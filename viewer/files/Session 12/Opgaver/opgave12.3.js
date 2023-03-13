// make a asyncronised promise.all function that takes a random number between 0 and 10 and resolves under 7, and rejects over 7 and rejects 10.
function randomPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 11);
        if (randomNum < 7) {
          resolve(randomNum);
        } else if (randomNum < 10) {
          reject('The number ' + randomNum + ' is too large');
        } else {
          throw new Error('The number ' + randomNum + 'caused an exception');
        }
        }, 1000);
    });
}

const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(randomPromise());
}

Promise.all(promises)
    .then((results) => console.log('Promise.all resolved with '+ results))
    .catch((error) => console.log('Promise.all rejected with '+ error));

Promise.any(promises)
    .then((results) => console.log('Promise.any resolved with '+ results))
    .catch((error) => console.log('Promise.any rejected with '+ error));

Promise.allSettled(promises)
    .then((results) => console.log('Promise.allSettled resolved with '+ results.map((result) => result.status)
    .join(", ")))
    .catch((error) => console.log('Promise.allSettled rejected with '+ error));
