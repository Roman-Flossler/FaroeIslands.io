SSG.cfg.watermarkText = "🐑 Faroe&#8202;Islands&#8202;.io";
SSG.cfg.watermarkFontSize = 18;
SSG.cfg.fileToLoad = "https://www.faroeislands.io/ssg/sp.html";
SSG.cfg.theme = "light";
// SSG.cfg.mobilePortraitFS = true;
SSG.cfg.preferedCaptionLocation = 3;
SSG.cfg.watermarkOpacity = 0.44;
SSG.cfg.enlargeImg = true;
SSG.cfg.imgBorderRadius = "0.3";
SSG.cfg.imgBorderColor = "#dddddd";
SSG.cfg.imgBorderWidthX =  1;
SSG.cfg.imgBorderWidthY =  1;

var scrollPos = window.pageYOffset;
var speedUpCounter = 0;
var speedDownCounter = 0;
var lambStopRunning = false;
var firstRun = true;
var deeplinked = location.hash != "";
var teasered = false;
var ssgrunning = false;
var ssgDemoRun = false;
var mobile = window.matchMedia(
  "(max-width: 933px) and (orientation: landscape), (max-width: 500px) and (orientation: portrait) "
).matches;

document.addEventListener("scroll", function () {
  if (ssgrunning) return;

  teaserHeight = jQuery("#teaser").height();
  docHeight = jQuery(document).height();
  progres =
    window.pageYOffset + window.innerHeight - (docHeight - teaserHeight);
  if (progres > -333) {
    blurefect();
  }
});

function blurefect() {
  var blurAmount = Math.floor(33 - (progres / teaserHeight) * 33);
  if (blurAmount < 0) blurAmount = 0;
  jQuery("#teaser").css("webkitFilter", "blur(" + blurAmount + "px)");

  if (progres < teaserHeight * 0.7) {
    jQuery("#uteaser").css("visibility", "hidden");
  } else {
    jQuery("#uteaser").css("visibility", "visible");
  }

  if (teasered) return;
  if (progres > jQuery("#teaser").height() - 6) {
    SSG.run({ initImgID: 43 });
    teasered = true;
  }
}

jQuery("body").append(`
<div id="sheep1" class="lambframe" style="top: 72vh">		
<div class="leg rear-first"></div>
<div class="leg rear-second"></div>
<div class="leg front-first"></div>
<div class="leg front-second"></div>
<img src="https://www.faroeislands.io/visuals/images/lamb.svg" alt="lamb" style=" position: absolute; width: 111%; top: 16%; left: auto; right: 0%;">
</div>

<div id="sheep2" class="lambframe" style="top: 81vh;">		
<div class="leg rear-first"></div>
<div class="leg rear-second"></div>
<div class="leg front-first"></div>
<div class="leg front-second"></div>
<img src="https://www.faroeislands.io/visuals/images/lamb.svg" alt="lamb" style=" position: absolute; width: 111%; top: 16%; left: auto; right: 0%;">
</div>

<div id="sheep3" class="lambframe" style="top: 55vh">
<div class="leg rear-first"></div>
<div class="leg rear-second"></div>
<div class="leg front-first"></div>
<div class="leg front-second"></div>
<img src="https://www.faroeislands.io/visuals/images/ram.svg" alt="ram" style=" position: absolute; width: 111%; top: 16%; left: auto; right: 0%;">
</div>	`);

var sheepShow = function (moveImg, data) {
  var imgOffset = jQuery("#SSG1 img#i" + data.imgGalleryId).offset();
  if (imgOffset.left < (screen.width / 100) * 3.3) {
    !window.document.documentMode && jQuery(".lambframe").hide(666);
  } else {
    jQuery(".lambframe").show(666);
    moveImg && jQuery("#SSG1 img#i" + data.imgGalleryId).addClass("move8");
  }
};

runAnimation = function () {
  if (lambStopRunning) return;
  window.isScrolling && window.clearTimeout(window.isScrolling);

  firstRun && jQuery(".leg").addClass("play");
  firstRun = false;

  // direction of the sheep
  if (window.pageYOffset > scrollPos) {
    jQuery(".lambframe").removeClass("runningUp");
  } else {
    jQuery(".lambframe").addClass("runningUp");
  }

  // Speed of the sheep
  if (Math.abs(window.pageYOffset - scrollPos) > 9) {
    speedUpCounter++;
    speedDownCounter = 0;
  } else {
    speedDownCounter++;
    speedUpCounter = 0;
  }
  if (speedDownCounter > 3) {
    jQuery(".leg").addClass("speedDown");
  } else if (speedUpCounter > 3) {
    jQuery(".leg").removeClass("speedDown");
  }

  scrollPos = window.pageYOffset;
  window.isScrolling = setTimeout(function () {
    jQuery(".leg").removeClass("play");
    jQuery(".leg").addClass("stop");
    firstRun = true;
    setTimeout(function () {
      jQuery(".leg").removeClass("stop");
    }, 50);
  }, 333);
};

function runaway(event) {
  var actualPos =
    (parseInt(jQuery(this).css("top")) / window.innerHeight) * 100;
  var delta = (Math.random() * 5 + 8) * (Math.random() < 0.5 ? -1 : 1);
  var newPos = actualPos + delta;
  if (newPos > 90) {
    newPos = newPos - 24;
    delta = -1;
  } else if (newPos < 10) {
    newPos = newPos + 24;
    delta = 1;
  }

  jQuery("#" + event.currentTarget.id + " .leg").removeClass("speedDown");
  jQuery(this).css("top", newPos + "vh");
  jQuery("#" + event.currentTarget.id + " .leg").addClass("play");
  if (delta > 0) {
    jQuery(this).removeClass("runningUp");
  } else {
    jQuery(this).addClass("runningUp");
  }

  if (event.type == "click") stopRunning(event);
}

function stopRunning(event) {
  setTimeout(function () {
    jQuery("#" + event.currentTarget.id + " .leg").removeClass("play");
    jQuery("#" + event.currentTarget.id + " .leg").addClass("stop");
  }, 666);
  setTimeout(function () {
    jQuery("#" + event.currentTarget.id + " .leg").removeClass("stop");
  }, 681);
}

window.addEventListener("scroll", runAnimation);
jQuery(".lambframe").on("click mouseover", runaway);
jQuery(".lambframe").on("mouseout", stopRunning);

SSG.cfg.onGalleryStart = function () {
  window.stopHover && stopHover();
  // when deeplinking, loading is stopped and sheeps isn't loaded. This solves the issue:
  if (location.hash !== "") {
    jQuery(".lambframe img").attr("src", "visuals/images/ram.svg");
  }  
  jQuery(".lambframe").css("filter", "none"); // no sheep shadow
  // for ie11
  // window.document.documentMode && jQuery(".lambframe").css("opacity", "0.2");
  ssgrunning = true;
  if (mobile) {
    if (location.hash == "" || screen.width > screen.height) {
      lambStopRunning = true;
      jQuery(".lambframe").hide();
    } else {
      lambStopRunning = false;
      jQuery("#sheep3").hide();
    }
  }
  window.setTimeout(function () {
    jQuery("#masterframe").toggleClass("hideit");
  }, 1111);
};

SSG.cfg.onGalleryExit = function () {
  jQuery("#masterframe").toggleClass("hideit");
  jQuery('.lambframe').css("filter", "drop-shadow(0px 0px 16px rgb(0, 54, 47))");
  teasered && jQuery("#farphotos").html("Enter photo <u>gallery</u>");
  window.document.documentMode && jQuery(".lambframe").css("opacity", "1");
  jQuery(".lambframe").show();
  lambStopRunning = false;
  window.setTimeout(function () {
    ssgrunning = false;
  }, 300);
  ssgDemoRun && jQuery(".lambframe").css("opacity", "1");
};

SSG.cfg.onOrientationChange = function (data) {
  if (!deeplinked) return;
  if (window.orientation == 0) {
    lambStopRunning = false;
    jQuery("#sheep1, #sheep2").show();
  } else {
    lambStopRunning = true;
    jQuery(".lambframe").hide();
  }
};

if (!mobile) {
  SSG.cfg.onImgView = sheepShow.bind(this, false);
  SSG.cfg.onImgScrollsIn = sheepShow.bind(this, true);
  SSG.cfg.onBeyondGallery = function (data) {
    jQuery(".lambframe").show(666);
  };
}
