self.onmessage = ({ data: { question:any } }) => {
    self.postMessage({
        answer: 42,
    });
};