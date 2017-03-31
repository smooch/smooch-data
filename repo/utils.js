module.exports.parseOnSave = props => parse(props, toSqlCase);
module.exports.parseOnFetch = props => parse(props, toSmoochCase);
module.exports.removeKeys = removeKeys;

function parse(props, fn) {
  const parsed = {};
  for (key in props) {
    parsed[fn(key)] = props[key];
  }
  return parsed;
}

function toSqlCase(text) {
  if (text === '_id') return 'id';
  return text.replace(/[A-Z]/g, ch => '_' + ch.toLowerCase());
}

function toSmoochCase(text) {
  if (text === 'id') return '_id';
  return text.replace(/(_[a-z])/g, substr => substr[1].toUpperCase());
}

function removeKeys(props, keys) {
  const object = Object.assign({}, props);

  for (const key of keys) {
    delete object[key];
  }

  return object;
}
