const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const loadVideo = (iframe) => {
    const cid = iframe.getAttribute('cid');
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
    fetch(reqURL, requestOptions)
        .then(response => response.json())
        .then(result => {
            const videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
            const link = result.items[videoNumber].link;
            const id = link.substr(link.indexOf("=") + 1);
            iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
        })
        .catch(error => console.log('error', error));
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
}