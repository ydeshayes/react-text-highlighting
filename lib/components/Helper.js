module.exports = {
  getRangesFromString: function(string, text) {
    var regex = new RegExp(string, 'gi');
    var result;
    var indices = [];

    while ((result = regex.exec(text))) {
      indices.push(result.index);
    }

    return indices.map(function(indice) {
      return {start: indice, end: indice + string.length - 1}
    });
  }
}
