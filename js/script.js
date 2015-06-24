/**
 * Created by grrrgo on 6/23/15.
 */
function toggleExpandable (id) {
    $( "#"+id ).click(function() {
        $( "#" + id + "Detail" ).slideToggle( "slow", function() {
        });
        if ($("#" + id + " span").hasClass("triangle-down")) {
            $("#" + id + " span").attr("class", "triangle-up")
        } else {
            $("#" + id + " span").attr("class", "triangle-down")
        }
    });
}
$( "#yinHang" ).click(function() {
    $( "#yinHangDetail" ).slideToggle( "slow", function() {
    });
    if ($("#yinHang span").hasClass("triangle-down")) {
        $("#yinHang span").attr("class", "triangle-up")
    } else {
        $("#yinHang span").attr("class", "triangle-down")
    }
});
$( "#xinTuo" ).click(function() {
    $( "#xinTuoDetail" ).slideToggle( "slow", function() {
        // Animation complete.
    });
    if ($("#xinTuo span").hasClass("triangle-down")) {
        $("#xinTuo span").attr("class", "triangle-up")
    } else {
        $("#xinTuo span").attr("class", "triangle-down")
    }
});
$( "#jiJin" ).click(function() {
    $( "#jiJinDetail" ).slideToggle( "slow", function() {
        // Animation complete.
    });
    if ($("#jiJin span").hasClass("triangle-down")) {
        $("#jiJin span").attr("class", "triangle-up")
    } else {
        $("#jiJin span").attr("class", "triangle-down")
    }
});
$( "#ziGuan" ).click(function() {
    $( "#ziGuanDetail" ).slideToggle( "slow", function() {
        // Animation complete.
    });
    if ($("#ziGuan span").hasClass("triangle-down")) {
        $("#ziGuan span").attr("class", "triangle-up")
    } else {
        $("#ziGuan span").attr("class", "triangle-down")
    }
});
$( "#baoXian" ).click(function() {
    $( "#baoXianDetail" ).slideToggle( "slow", function() {
        // Animation complete.
    });
    if ($("#baoXian span").hasClass("triangle-down")) {
        $("#baoXian span").attr("class", "triangle-up")
    } else {
        $("#baoXian span").attr("class", "triangle-down")
    }
});