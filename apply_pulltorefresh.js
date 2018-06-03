const disabledDomains = [];
disabledDomains.push('bugzilla.mozilla.org');

if (disabledDomains.indexOf(document.location.host) === -1) {
  var ptr = PullToRefresh.init({
    mainElement: 'body',
    onRefresh: function () {
      window.location.reload();
    }
  });
}