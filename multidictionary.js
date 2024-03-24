//임시
fetch("https://docs.google.com/document/d/1hZ2Uanz7YHneXI4MxaXWYTAVrF4EuO1HMEUZlC79ZE8/edit")
.then(response=>{
	return response.text();
})
.then(data=>{
	console.log(data.split('modelChunk = ')[1].split('"s":\"')[1].split('\"')[0]);
});
