document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'Home') {
        page.querySelector('#spiderman').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/detail.html');
        };
        page.querySelector('#infinitywar').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/detail2.html');
        };
        page.querySelector('#endgame').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/detail3.html');
        };
    } else if (page.id === 'Home') {

    } else if (page.id === 'Home') {

    }
});