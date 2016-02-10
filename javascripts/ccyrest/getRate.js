function getRate() {
    performRequest('latest?base=' + ccy, 'GET', {
        "_items_per_page": 100
    }, function(data) {
        console.log('Fetched ' + data.result.paging.total_items + ' ccy');
    });
}