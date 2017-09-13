/**
 * Created by gdjob on 2017/9/7.
 */
function searchCity() {
    var searchCityName = $(".searchCityName").val();
    if (searchCityName == "") {
        $(".allcontent ul li").show();
    } else {
        $(".allcontent ul li").each(function() {
            var pinyin = $(this).attr("pinyin");
            var cityName = $(this).attr("cityname");
            if (pinyin.indexOf(searchCityName) != -1|| cityName.indexOf(searchCityName) != -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
}
$('.searchCityName').bind('input propertychange', function() {
    searchCity();
});
function searchCity1() {
    var searchCityName = $(".searchCityName1").val();
    if (searchCityName == "") {
        $(".hcstart ul li").show();
    } else {
        $(".hcstart ul li").each(function() {
            var pinyin = $(this).attr("pinyin");
            var cityName = $(this).attr("cityname");
            if (pinyin.indexOf(searchCityName) != -1|| cityName.indexOf(searchCityName) != -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
}
$('.searchCityName1').bind('input propertychange', function() {
    searchCity1();
});
function searchCity2() {
    var searchCityName = $(".searchCityName2").val();
    if (searchCityName == "") {
        $(".hcend ul li").show();
    } else {
        $(".hcend ul li").each(function() {
            var pinyin = $(this).attr("pinyin");
            var cityName = $(this).attr("cityname");
            if (pinyin.indexOf(searchCityName) != -1|| cityName.indexOf(searchCityName) != -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
}
$('.searchCityName2').bind('input propertychange', function() {
    searchCity2();
});