originalTimeout = window.setTimeout; window.setTimeout = (method) => originalTimeout(() => { method(); HideLoader(); ScrollToBottom(); }, 1);
document.getElementById('video-wrap').remove();
