
//compatibility for firefox and chrome
// @ts-ignore
window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
const pc = new RTCPeerConnection({iceServers: []}), noop = function () {
};
//create a bogus data channel
pc.createDataChannel("locale");
// create offer and set local description
// @ts-ignore
pc.createOffer(pc.setLocalDescription.bind(pc), noop);
//listen for candidate events
pc.onicecandidate = function(ice){
    if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
    // @ts-ignore
    var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    console.log('my IP: ', myIP);
    pc.onicecandidate = noop;
};