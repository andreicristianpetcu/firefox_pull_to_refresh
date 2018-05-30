
const domainToElementSelector = [];
domainToElementSelector['bugzilla.mozilla.org'] = '#bugzilla-body';

var element = domainToElementSelector[document.location.host];

if(!element){
  element = 'body';
}

console.log(`using element ${element}`);

var ptr = PullToRefresh.init({
  mainElement: element,
  onRefresh: function () {
    window.location.reload();
  }
});