function share_whatsapp(){
    window.open("whatsapp://send?text=" + window.location.href + "%20" + encodeURI(document.title), '_blank');
}

function share_facebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href + "%20" + encodeURI(document.title), '_blank');
}

function share_twitter(){
    window.open('https://twitter.com/intent/tweet?text=' + window.location.href + "%20" + encodeURI(document.title), '_blank');
}

function share_linkdln(){
    window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + '%title=' + encodeURI(document.title), '_blank');
}

function trigger_navigation(){
    navigator
    .share({
        title: document.title,
        text: document.title,
        url: window.location.href
    })
    .then(() => console.log('share sukses'))
    .catch(err => console.error(err));
}