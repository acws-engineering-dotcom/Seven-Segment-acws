const segmentMap = {
  0: ['a', 'b', 'c', 'd', 'e', 'f'],
  1: ['b', 'c'],
  2: ['a', 'b', 'g', 'e', 'd'],
  3: ['a', 'b', 'g', 'c', 'd'],
  4: ['f', 'g', 'b', 'c'],
  5: ['a', 'f', 'g', 'c', 'd'],
  6: ['a', 'f', 'g', 'e', 'c', 'd'],
  7: ['a', 'b', 'c'],
  8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  9: ['a', 'b', 'c', 'd', 'f', 'g']
};

function updateSegment() {
  const digit = parseInt(document.getElementById('digit').value);
  const segments = document.querySelectorAll('.segment');
  segments.forEach(seg => seg.classList.remove('on'));

  if (segmentMap[digit]) {
    segmentMap[digit].forEach(id => {
      document.querySelector(`.segment.${id}`).classList.add('on');
    });
  }
}