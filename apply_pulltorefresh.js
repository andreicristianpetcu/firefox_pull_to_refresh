var ptr = PullToRefresh.init({
    mainElement: 'body',
    onRefresh: function(){ window.location.reload(); }
  });