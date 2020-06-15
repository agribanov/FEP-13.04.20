const tabs = new Tabset(document.getElementById('container'));

setTimeout(() => tabs.show(1), 1000);
setTimeout(() => tabs.next(), 3000);

// tabs.prev();
