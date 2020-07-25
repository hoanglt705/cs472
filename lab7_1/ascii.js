const DEFAULT_INTERVAL = 250;
var animationInterval = DEFAULT_INTERVAL;
var startAnimationIntervalId = null;
var text = null;
var index = 0;
var frames = null;

function animationChanged() {
    var animation = document.getElementById("animation");
    frames = buildFrame(animation)
    index = 0;
}

function buildFrame(animation) {
    return ANIMATIONS[animation.value].split("=====\n");
}

function fontSizeChanged() {
    var fontSize = document.getElementById("fontsize");
    document.getElementById("text-area").style.fontSize = fontSize.value;
}

function speedChanged() {
    var speed = document.getElementById("turbo");
    animationInterval = speed.checked ? 50 : DEFAULT_INTERVAL;
    var tmpText = text;
    startAnimationInterval();
    text = tmpText;
}

function startAnimationInterval() {
    if (startAnimationIntervalId) {
        clearInterval(startAnimationIntervalId);
    }
    if (!frames) {
        return;
    }

    let textarea = document.getElementById("text-area");
    startAnimationIntervalId = setInterval(function() {
        textarea.value = frames[index++];
        text = textarea.value;
        if (index == frames.length) {
            index = 0;
        }
    }, animationInterval);
}

function stopAnimationInterval() {
    if (!startAnimationIntervalId) {
        return;
    }
    clearInterval(startAnimationIntervalId);
    var textarea = document.getElementById("text-area");
    document.getElementById("text-area").value = text
}

function onStartBtnClick() {
    document.getElementById("start").disabled = true
    document.getElementById("stop").disabled = false

    startAnimationInterval();
}

function onStopBtnClick() {
    document.getElementById("start").disabled = false
    document.getElementById("stop").disabled = true

    stopAnimationInterval();
}