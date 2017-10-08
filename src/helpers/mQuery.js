var $;

/**
 * @author: Mohamad Mohebifar
 *
 * I made it because it makes the package lighter generally
 * When it comes to use $.create('p').addClass().html()
 * Using something like jQuery rather than 3-4 lines of vanillaJs is worth it :)
 */

/**
 *
 * @constructor
 * @param selector
 * @param parent
 */
var mQuery = function (selector, parent) {
  parent = parent || document;
  var items;

  if (typeof selector === 'string') {
    items = [].slice.call(parent.querySelectorAll(selector));
  } else if (typeof selector === 'object' && selector instanceof Node) {
    items = [selector];
  } else if (typeof selector === 'object') {
    items = selector
  } else {
    items = [];
  }

  this.items = items;

  return this;
};

mQuery.isValid = function (object) {
  return object instanceof mQuery;
};

/**
 * Iterates over the items in this object and applies the given callback to them
 *
 * @param callback
 */
mQuery.prototype.each = function (callback) {
  for (var i = 0; i < this.items.length; i++) {
    var obj = this.items[i];
    // callback(obj, i);
    callback.apply(obj, [i, this]);
  }

  return this;
};

/**
 * Fetches the first item
 *
 * @returns {*}
 */
mQuery.prototype.first = function () {
  return this.items[0];
};

/**
 * Sets/Gets an attribute
 *
 * @param key
 * @param value
 * @returns {string}
 */
mQuery.prototype.attr = function (key, value) {
  var first = this.first();
  if (typeof value === 'undefined') {
    if (first) {
      return first.getAttribute(key);
    }
  } else {
    this.each(function () {
      this.setAttribute(key, value);
    });

    return this;
  }
};

mQuery.prototype.appendTo = function (dom) {
  if (dom instanceof mQuery) {
    dom = dom.first();
  }

  if (dom instanceof Node) {
    this.each(function () {
      dom.appendChild(this);
    });
  }

  return this;
};

mQuery.prototype.append = function (dom) {
  if (!mQuery.isValid(dom)) {
    dom = $(dom);
  }

  var first = this.first();

  dom.each(function () {
    var element = this;
    if (mQuery.isValid(element)) {
      element = element.first();
    }
    first.appendChild(element);
  });

  return this;
};

mQuery.prototype.prepend = function (dom) {
  if (!mQuery.isValid(dom)) {
    dom = $(dom);
  }

  var first = this.first();

  dom.each(function () {
    var element = this;
    if (mQuery.isValid(element)) {
      element = element.first();
    }
    first.insertBefore(element, first.children[0] || null);
  });

  return this;
};

mQuery.prototype.css = function (styles) {
  this.each(function () {
    for (var key in styles) {
      this.style[key] = styles[key];
    }
  });

  return this;
};

mQuery.prototype.html = function (html) {
  var first;
  if (typeof html !== 'undefined') {
    this.each(function () {
      this.innerHTML = html;
    });
    return this;
  } else if (first = this.first()) {
    return first.innerHTML;
  }
};

mQuery.prototype.hasClass = function (cls) {
  var hasClass = true;

  this.each(function () {
    hasClass = hasClass && !!this.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  });

  return hasClass;
};

mQuery.prototype.addClass = function (cls) {
  if (!this.hasClass(cls)) {
    this.each(function () {
      this.className = this.className.trim() + ' ' + cls;
    });
  }

  return this;
};

mQuery.prototype.removeClass = function (cls) {
  var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  this.each(function () {
    this.className = this.className.replace(reg, ' ');
    this.className = this.className.trim();
  });

  return this;
};

mQuery.prototype.find = function (selector) {
  return $(selector, this.first());
};

mQuery.prototype.val = function (value) {
  if (typeof value !== 'undefined') {
    this.each(function () {
      this.value = value;
    });

    return this;
  } else {
    return this.first().value;
  }
};

mQuery.prototype.remove = function () {
  var element = this.first()
  element.parentNode.removeChild(element);
};

mQuery.prototype.on = function (event, callback) {
  this.each(function () {
    this.addEventListener(event, callback);
  });

  return this;
};

$ = function (selector, parent) {
  return new mQuery(selector, parent);
};

$.create = function (tagName) {
  var element = document.createElement(tagName);
  return $(element);
};

module.exports = $;