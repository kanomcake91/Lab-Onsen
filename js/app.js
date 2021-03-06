$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;

        console.log(page.id);
        if (page.id === 'Home') {
            $('#back').hide();
            page.querySelector('#spiderman').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail.html');

            };
            page.querySelector('#infinitywar').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail2.html');
            };
            page.querySelector('#endgame').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail3.html');
            };
        } else if (page.id === 'spiderman' || page.id === 'infinitywar' || page.id === 'endgame') {
            $('#back').show();
            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator').popPage();
                document.querySelector('#myNavigatorSrc').popPage();
            };
        } else if (page.id === 'search') {
            page.querySelector('#spidermanSrc').onclick = function() {
                document.querySelector('#myNavigatorSrc').pushPage('views/detail.html');


            };
            page.querySelector('#infinitywarSrc').onclick = function() {
                document.querySelector('#myNavigatorSrc').pushPage('views/detail2.html');
            };
            page.querySelector('#endgameSrc').onclick = function() {
                document.querySelector('#myNavigatorSrc').pushPage('views/detail3.html');
            };
        }

    });
})