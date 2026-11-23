// Builds device tabs from the device table on pages with class "devices".
// Each row becomes a tab named after its first cell. The other cells go in the panel, labeled with their column headings.
(function () {
  var main = document.querySelector('.devices');
  var table = main && main.querySelector('table');
  if (!table) return;

  var headings = Array.prototype.map.call(table.querySelectorAll('thead th'), function (th) {
    return th.textContent.trim();
  });
  var rows = table.querySelectorAll('tbody tr');

  var tabs = document.createElement('div');
  tabs.className = 'device-tabs';
  var list = document.createElement('div');
  list.className = 'device-tablist';
  list.setAttribute('role', 'tablist');
  tabs.appendChild(list);

  var buttons = [];
  var panels = [];

  function select(index) {
    buttons.forEach(function (b, i) {
      b.setAttribute('aria-selected', i === index ? 'true' : 'false');
      b.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
  }

  Array.prototype.forEach.call(rows, function (row, i) {
    var cells = row.querySelectorAll('td');

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'device-tab';
    button.id = 'device-tab-' + i;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'device-panel-' + i);
    button.textContent = cells[0].textContent.trim();
    button.addEventListener('click', function () { select(i); });
    list.appendChild(button);
    buttons.push(button);

    var panel = document.createElement('div');
    panel.className = 'device-panel';
    panel.id = 'device-panel-' + i;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    for (var c = 1; c < cells.length; c++) {
      var p = document.createElement('p');
      var label = document.createElement('span');
      label.className = 'label';
      label.textContent = headings[c];
      p.appendChild(label);
      p.insertAdjacentHTML('beforeend', cells[c].innerHTML);
      panel.appendChild(p);
    }
    tabs.appendChild(panel);
    panels.push(panel);
  });

  // Arrow keys move between tabs, as screen readers expect.
  list.addEventListener('keydown', function (e) {
    var current = buttons.indexOf(document.activeElement);
    if (current < 0) return;
    var next = e.key === 'ArrowRight' ? current + 1 : e.key === 'ArrowLeft' ? current - 1 : null;
    if (next === null) return;
    next = (next + buttons.length) % buttons.length;
    select(next);
    buttons[next].focus();
    e.preventDefault();
  });

  select(0);
  table.parentNode.insertBefore(tabs, table.nextSibling);
  main.classList.add('has-tabs');
})();
