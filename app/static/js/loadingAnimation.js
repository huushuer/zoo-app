// //logoの表示
// $(window).on('load', function () {
//     $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//     $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
// });


// logoの表示
$(window).on('load', function () {
    $("#splash").delay(1500).fadeOut('slow', function () {
        // ローディング画面のフェードアウトが完了したら、メインコンテンツを表示
        $("#mainContent").fadeIn('slow');
    });
    $("#splash_logo").delay(1200).fadeOut('slow');
});