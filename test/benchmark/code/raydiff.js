function rdif() {
  var all = flatten(Array.prototype.slice.call(arguments, 1));
  var source = arguments[0];

  all.forEach( function (v, i, a) {
    k = source.indexOf(v);
    if (k !== -1) {
      source.splice(k, 1);
    }
  });

  return source;

  function flatten(arr) {
    var x = [];

    arr.forEach( function (v, i, a) {
      if (Array.isArray(v)) {
        x = x.concat(flatten(v));
      } else
        x.push(v);
    });

    return x;
  }
}

module.exports = rdif;