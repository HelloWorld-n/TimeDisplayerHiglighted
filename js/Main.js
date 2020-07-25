var Main = /** @class */ (function () {
    function Main() {
    }
    Main.getTosecond = function () {
        var date = new Date().toISOString();
        var year = date.substr(0, 4);
        var month = String(date.substr(5, 2));
        var day = String(date.substr(8, 2));
        var hours = String(date.substr(11, 2));
        var minutes = String(date.substr(14, 2));
        var seconds = String(date.substr(17, 2));
        while (month.length < 2) {
            month = '0' + month;
        }
        while (day.length < 2) {
            day = '0' + day;
        }
        while (hours.length < 2) {
            hours = '0' + hours;
        }
        while (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        while (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        return "" +
            ("<span class=\"token number\">" + year + "</span><span class=\"token selector\">-</span>") +
            ("<span class=\"token number\">" + month + "</span><span class=\"token selector\">-</span>") +
            ("<span class=\"token number\">" + day + "</span><span class=\"token selector\">T</span>") +
            ("<span class=\"token number\">" + hours + "</span><span class=\"token selector\">:</span>") +
            ("<span class=\"token number\">" + minutes + "</span><span class=\"token selector\">:</span>") +
            ("<span class=\"token number\">" + seconds + "</span><span class=\"token selector\">Z</span>");
    };
    Main.displayTime = function () {
        var tosecond = Main.getTosecond();
        document.getElementById("timeDisplay").innerHTML = Main.getTosecond();
    };
    Main.main = function () {
        setInterval(Main.displayTime, 100);
    };
    return Main;
}());
