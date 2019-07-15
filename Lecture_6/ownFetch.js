const ownFetch = url => {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        var err = new Error(this.statusText);
        err.code = this.status;
        reject(err);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
};

ownFetch("https://jsonplaceholder.typicode.com/posts")
  .then(console.log)
  .then(res => res())
  .catch(err => console.log(err));
