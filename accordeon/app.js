const acc = new Accordeon(document.getElementById('container'), {
    collapseOther: false,
});

acc.open(0);
setTimeout(() => acc.toggle(1), 3000);
// acc.close(0);
// acc.toggle(1);
