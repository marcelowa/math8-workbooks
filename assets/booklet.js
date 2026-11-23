(function () {
  var KEY = 'math8-progress-v1';
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { state = {}; }

  var boxes = document.querySelectorAll('input[data-key]');
  Array.prototype.forEach.call(boxes, function (box) {
    box.checked = !!state[box.getAttribute('data-key')];
    box.addEventListener('change', function () {
      state[box.getAttribute('data-key')] = box.checked;
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
      document.dispatchEvent(new CustomEvent('progress:change'));
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-print]'), function (btn) {
    btn.addEventListener('click', function () { window.print(); });
  });
})();
