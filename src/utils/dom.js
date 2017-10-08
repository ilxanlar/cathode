export function offset(element) {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

export function dimensions(element) {
  const data = element.getBoundingClientRect();

  if (data && data.height && data.width) {
    return {
      height: data.height,
      width: data.width,
      top: data.top,
      left: data.left
    };
  } else {
    return {};
  }
}

export function hotVertices(element, placement) {
  const { height, width, left, top } = dimensions(element);
  const windowHeight = document.body.clientHeight;
  const windowWidth = document.body.clientWidth;

  switch (placement) {
    case 'top':
      return {
        left: {
          left: left,
          top: top
        },
        center: {
          left: left + width / 2,
          top: top
        },
        right: {
          right: windowWidth - left - width,
          top: top
        }
      };

    case 'right':
      return {
        bottom: {
          left: left + width,
          bottom: windowHeight - top - height
        },
        center: {
          left: left + width,
          top: top + height / 2
        },
        top: {
          left: left + width,
          top: top
        }
      };

    case 'bottom':
      return {
        left: {
          left: left,
          top: top + height
        },
        center: {
          left: left + width / 2,
          top: top + height
        },
        right: {
          right: windowWidth - left - width,
          top: top + height
        }
      };

    case 'left':
      return {
        bottom: {
          right: windowWidth - left,
          bottom: windowHeight - top - height
        },
        center: {
          right: windowWidth - left,
          top: top + height / 2
        },
        top: {
          right: windowWidth - left,
          top: top
        }
      };

    default:
      return {};
  }
}

export function hotVertices2(element) {
  const { left, top } = offset(element);
  const { height, width } = dimensions(element);

  return {
    top: {
      left: left + width / 2,
      top: top
    },
    right: {
      left: left + width,
      top: top + height / 2
    },
    bottom: {
      left: left + width / 2,
      top: top + height
    },
    left: {
      left: left,
      top: top + height / 2
    }
  };
}
