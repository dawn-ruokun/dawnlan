function init_life_time() {
    function getAsideLifeTime() {
        /* 当前时间戳 */
        let nowDate = +new Date();
        /* 今天开始时间戳 */
        let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
        /* 今天已经过去的时间 */
        let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
        /* 今天已经过去的时间比 */
        let todayPassHoursPercent = (todayPassHours / 24) * 100;
        $('#dayProgress .date-text span').html(parseInt(todayPassHours));
        $('#dayProgress .progress .progress-bar').css('width', parseInt(todayPassHoursPercent) + '%');
        $('#dayProgress .progress .progress-bar').html(parseInt(todayPassHoursPercent) + '%');
        /* 当前周几 */
        let weeks = {
            0: 7,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
        };
        let weekDay = weeks[new Date().getDay()];
        let weekDayPassPercent = (weekDay / 7) * 100;
        $('#weekProgress .date-text span').html(weekDay);
        $('#weekProgress .progress .progress-bar').css('width', parseInt(weekDayPassPercent) + '%');
        $('#weekProgress .progress .progress-bar').html(parseInt(weekDayPassPercent) + '%');
        /* 月 */
        let year = new Date().getFullYear();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let monthAll = new Date(year, month, 0).getDate();
        let monthPassPercent = (date / monthAll) * 100;
        $('#monthProgress .date-text span').html(date);
        $('#monthProgress .progress .progress-bar').css('width', parseInt(monthPassPercent) + '%');
        $('#monthProgress .progress .progress-bar').html(parseInt(monthPassPercent) + '%');
        /* 年 */
        let yearPass = (month / 12) * 100;
        $('#yearProgress .date-text span').html(month);
        $('#yearProgress .progress .progress-bar').css('width', parseInt(yearPass) + '%');
        $('#yearProgress .progress .progress-bar').html(parseInt(yearPass) + '%');
    }
    getAsideLifeTime();
    setInterval(() => {
        getAsideLifeTime();
    }, 1000);
}
init_life_time()

now = new Date(), hour = now.getHours()
if (hour < 6) {
    var hello = "凌晨好，修仙者";
} else if (hour < 9) {
    var hello = "早上好，今天空气不错";
} else if (hour < 12) {
    var hello = "上午好，多呼吸新鲜空气";
} else if (hour < 14) {
    var hello = "中午好，吃饭了嘛你嘞";
} else if (hour < 17) {
    var hello = "下午好，期待黄昏的唯美";
} else if (hour < 19) {
    var hello = "傍晚好，今天还不错对吧";
} else if (hour < 22) {
    var hello = "晚上好，记得早点休息";
} else {
    var hello = "夜深了，还在工作吗，早点睡";
}