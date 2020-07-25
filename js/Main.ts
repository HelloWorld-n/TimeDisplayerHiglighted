class Main {
    private static getTosecond(): string {
        let date = new Date().toISOString();
        let year = date.substr(0, 4);
        let month = String(date.substr(5, 2));
        let day = String(date.substr(8, 2));
        let hours = String(date.substr(11, 2));
        let minutes = String(date.substr(14, 2));
        let seconds = String(date.substr(17, 2));
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
        return `` +
            `<span class="token number">${year}</span><span class="token selector">-</span>` +
            `<span class="token number">${month}</span><span class="token selector">-</span>` +
            `<span class="token number">${day}</span><span class="token selector">T</span>` +
            `<span class="token number">${hours}</span><span class="token selector">:</span>` +
            `<span class="token number">${minutes}</span><span class="token selector">:</span>` +
            `<span class="token number">${seconds}</span><span class="token selector">Z</span>`;
    }
    public static displayTime() {
        let tosecond = Main.getTosecond();
        document.getElementById("timeDisplay")!.innerHTML = Main.getTosecond();
    }
    public static main(): void {
        setInterval(Main.displayTime, 100);
    }
}