function rdif() {
  var source, k, z;
  z = 1 << 31;
  source = arguments[0];
  work(Array.prototype.slice.call(arguments, 1));
  return source;

  function work(arr) {
    arr.forEach( function (v, i, a) {
      if (Array.isArray(v)) {
        work(v);
      } else {
        if (!((k = source.indexOf(v)) & z)) {
          source.splice(k, 1);
        }
      }
    });
  }
}

module.exports = rdif;
