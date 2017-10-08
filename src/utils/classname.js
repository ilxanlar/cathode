export default function classNames(classes) {
  if (typeof classes === 'undefined' || classes === null) {
    return '';
  }

  if (typeof classes === 'string') {
    return classes;
  }

  return classes.filter(cl => cl).map(cl => cl.trim()).join(' ');
}
