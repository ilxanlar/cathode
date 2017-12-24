let $;

/**
 * @author: Mohamad Mohebifar
 */

/**
 *
 * @constructor
 * @param selector
 * @param parent
 */
let mQuery = function (selector, parent) {
  parent = parent || document;
  let items;

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

mQuery.prototype.each = function (callback) {
  for (let i = 0; i < this.items.length; i++) {
    let obj = this.items[i];
    callback.apply(obj, [i, this]);
  }

  return this;
};

mQuery.prototype.first = function () {
  return this.items[0];
};

mQuery.prototype.attr = function (key, value) {
  let first = this.first();
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

  let first = this.first();

  dom.each(function () {
    let element = this;
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

  let first = this.first();

  dom.each(function () {
    let element = this;
    if (mQuery.isValid(element)) {
      element = element.first();
    }
    first.insertBefore(element, first.children[0] || null);
  });

  return this;
};

mQuery.prototype.css = function (styles) {
  this.each(function () {
    for (let key in styles) {
      this.style[key] = styles[key];
    }
  });

  return this;
};

mQuery.prototype.html = function (html) {
  let first;
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
  let hasClass = true;

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
  let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
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
  let element = this.first();
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
  let element = document.createElement(tagName);
  return $(element);
};

export default $;