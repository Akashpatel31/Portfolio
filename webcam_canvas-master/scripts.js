class PhotoBooth{
    constructor(){
        this.red = false;
        this.split = false;
        this.greenScreen = false;
        this.ghostFilter = false;
        this.horizontalflipFilter = false;
        this.verticalflipFilter = false;
        this.video = document.querySelector('.player');
        this.canvas = document.querySelector('.photo');
        this.ctx = this.canvas.getContext('2d');
        this.rmin = document.querySelector('#rmin');
        this.rmax = document.querySelector('#rmax');
        this.gmin = document.querySelector('#gmin');
        this.gmax = document.querySelector('#gmax');
        this.bmin = document.querySelector('#bmin');
        this.bmax = document.querySelector('#bmax');
        this.rminOut = document.querySelector('#range-slider-value');
        this.rmaxOut = document.querySelector('#range-slider-value1');
        this.gminOut = document.querySelector('#range-slider-value2');
        this.gmaxOut = document.querySelector('#range-slider-value3');
        this.bminOut = document.querySelector('#range-slider-value4');
        this.bmaxOut = document.querySelector('#range-slider-value5');
        this.strip = document.querySelector('.strip');
        this.snap = document.querySelector('.snap');
        this.shutter = document.querySelector("#camButton")
        this.redBtn = document.querySelector("#redEffect");
        this.splitBtn = document.querySelector("#splitEffect");
        this.greenScreenBtn = document.querySelector("#greenScreenEffect");
        this.ghostBtn = document.querySelector("#ghostEffect");
        this.verticalBtn = document.querySelector("#verticalEffect");
        this.horizontalflipBtn = document.querySelector("#horizontalEffect");
        this.redBtn.addEventListener("click", ()=>{
            this.red = !this.red;
            this.ghostFilter = false;
            this.greenScreen = false;
            this.split = false;
            this.verticalflipFilter = false;
            this.horizontalFilter = false;
        });
        this.ghostBtn.addEventListener("click", ()=>{
            this.ghostFilter = !this.ghostFilter;
            this.greenScreen = false;
            this.verticalflipFilter = false;
            this.split = false;
            this.red = false;
            this.horizontalflipFilter = false;
        });

        this.splitBtn.addEventListener("click", ()=>{
            this.ghostFilter = false;
            this.greenScreen = false;
            this.red = false;
            this.verticalflipFilter = false;
            this.split = !this.split;
            this.horizontalflipFilter = false;
        });
        this.greenScreenBtn.addEventListener("click", ()=>{
            this.ghostFilter = false;
            this.greenScreen = !this.greenScreen;
            this.red = false;
            this.verticalflipFilter = false;
            this.split = false;
            this.horizontalflipFilter = false;
        });
        this.verticalBtn.addEventListener("click", ()=>{
            this.ghostFilter = false;
            this.greenScreen = false;
            this.red = false;
            this.verticalflipFilter = !this.verticalflipFilter;
            this.split = false;
            this.horizontalflipFilter = false;
        });
        this.horizontalflipBtn.addEventListener("click", ()=>{
            this.red = false;
            this.ghostFilter = false;
            this.greenScreen = false;
            this.split = false;
            this.verticalflipFilter = false;
            this.horizontalflipFilter = !this.horizontalflipFilter;
        });
        
        camButton.addEventListener("click", ()=>this.takePhoto());
        this.getVideo();
        this.video.addEventListener("canplay", () => {
            this.paintToCanvas();
        });
        let docStyle = document.documentElement.style;
        let aElem = document.querySelector('#camButton');
        let boundingClientRect = aElem.getBoundingClientRect();

        aElem.onmousemove = (e) => {
            let x = e.clientX - boundingClientRect.left;
            let y = e.clientY - boundingClientRect.top;
            let xc = boundingClientRect.width / 2;
            let yc = boundingClientRect.height / 2;
            let dx = x - xc;
            let dy = y - yc;
            docStyle.setProperty('--rx', "".concat(dy / -1, "deg"));
            docStyle.setProperty('--ry', "".concat(dx / 10, "deg"));
            };
            
            aElem.onmouseleave = (e) => {
                docStyle.setProperty('--ty', '0');
                docStyle.setProperty('--rx', '0');
                docStyle.setProperty('--ry', '0');
            };
            
            aElem.onmousedown = (e) => {
                docStyle.setProperty('--tz', '-25px');
            };
            
            document.body.onmouseup = (e) => {
                docStyle.setProperty('--tz', '-12px');
            };

            let width = window.innerWidth;
            let height =window.innerHeight ;

                let stage = new Konva.Stage({
                container: 'container',
                width: width,
                height: height
                });
                let layer = new Konva.Layer();
                stage.add(layer);
        
                // what is url of dragging element?
                let itemURL = '';
                document
                .getElementById('drag-items')
                .addEventListener('dragstart', function(e) {
                    itemURL = e.target.src;
                });
        
                let con = stage.container();
                con.addEventListener('dragover', function(e) {
                e.preventDefault(); // !important
                });
        
                con.addEventListener('drop', function(e) {
                e.preventDefault();
                // now we need to find pointer position
                // we can't use stage.getPointerPosition() here, because that event
                // is not registered by Konva.Stage
                // we can register it manually:
                stage.setPointersPositions(e);
        
                Konva.Image.fromURL(itemURL, function(image) {
                    layer.add(image);
        
                    image.position(stage.getPointerPosition());
                    image.draggable(true);
        
                    layer.draw();
                });
                });
            
            rmin.addEventListener('change', ()=> {
            this.rminOut.value = this.rmin.value;
            }, false);
            
            rmin.addEventListener('input', ()=>  {
            this.rminOut.value = this.rmin.value;
            }, false);

            rmax.addEventListener('change', ()=>  {
                this.rmaxOut.value = this.rmax.value;
                }, false);
                
            rmax.addEventListener('input', ()=>  {
                this.rmaxOut.value = this.rmax.value;
                }, false);
            
            gmin.addEventListener('change', ()=>  {
            this.gminOut.value = this.gmin.value;
            }, false);
            
            gmin.addEventListener('input', ()=>  {
            this.gminOut.value = this.gmin.value;
            }, false);

            gmax.addEventListener('change', ()=>  {
            this.gmaxOut.value = this.gmax.value;
            }, false);
            
            gmax.addEventListener('input', ()=>  {
            this.gmaxOut.value = this.gmax.value;
            }, false);
            
            bmin.addEventListener('change', ()=>  {
            this.bminOut.value = this.bmin.value;
            }, false);
            
            bmin.addEventListener('input', ()=>  {
            this.bminOut.value = this.bmin.value;
            }, false);

            bmax.addEventListener('change', ()=>  {
                this.bmaxOut.value = this.bmax.value;
                }, false);
                
            bmax.addEventListener('input', ()=>  {
                this.bmaxOut.value = this.bmax.value;
                }, false);
                
    }
    paintToCanvas() {
        const width = this.video.videoWidth;
        const height = this.video.videoHeight;
        let canvas = document.querySelector('.photo');
        console.log(width, height);
        this.canvas.width = width;
        this.canvas.height = height;
                
        
        return setInterval(() => {
            this.ctx.drawImage(this.video, 0, 0, width, height);
            // *take pixels out
            let pixels = this.ctx.getImageData(0, 0, width, height);
            if(this.red==true){
                pixels = this.redEffect(pixels);
            }
            if(this.split==true){
                pixels = this.rgbSplit(pixels);
            }
            if(this.greenScreen==true){
                pixels = this.greenScreenEffect(pixels);
            }
            if(this.ghostFilter==true){
                pixels = this.ghostFilterEffect(pixels);
            }
            if(this.verticalflipFilter==true){
                pixels = this.verticalEffect(pixels);
            }
            if(this.horizontalflipFilter ==true){
                pixels = this.horizontalEffect(pixels);
            }

            this.ctx.putImageData(pixels, 0, 0);
        }, 16)
    }
    getVideo() {
        navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then(localMediaStream => {
                this.video.srcObject = localMediaStream;
                this.video.play();
            })
            .catch(error => {
                console.error("Egad!  You don't want video!", error);
            })
    }
    redEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
        }
        return pixels;
    }
    rgbSplit(pixels) {
        for (let i = 0; i < pixels.data.length; i += 4) {
            pixels.data[i + 0] = pixels.data[i + 100]; // RED
            pixels.data[i + 1] = pixels.data[i + 1]; // GREEN
            pixels.data[i + 2] = pixels.data[i + 202]; // Blue
        }
        return pixels;
    }
    greenScreenEffect(pixels) {
        const levels = {};
        document.getElementById("container").style.background = "url('./images/party.jpg')";
        document.querySelectorAll('.rgb input').forEach((input) => {
            levels[input.name] = input.value;
        });
        for (let i = 0; i < pixels.data.length; i = i+4) {
            let red = pixels.data[i + 0];
            let green = pixels.data[i + 1];
            let blue = pixels.data[i + 2];
            let alpha = pixels.data[i + 3];
            // let l = pixels.data.length;
        
    
            if (red >= levels.rmin &&
                green >= levels.gmin &&
                blue >= levels.bmin &&
                red <= levels.rmax &&
                green <= levels.gmax &&
                blue <= levels.bmax) {
                pixels.data[i + 0] = 0;
                pixels.data[i + 1] = 1;
                pixels.data[i + 2] - 2;
                pixels.data[i + 3] = 3;
                    //   }
                // take it out!
                
            }
        }
        return pixels;
    }
    // The invert function subtracts each color from the max value 255
    ghostFilterEffect(pixels) {
                    for(let i = 0; i < pixels.data.length; i+=4) {
                    pixels.data[i] = 255 - pixels.data[i]; // red
                    pixels.data[i + 1] = 255 - pixels.data[i + 1]; // green
                    pixels.data[i + 2] = 255 - pixels.data[i + 2]; // blue
                        let avg = (pixels.data[i] + pixels.data[i + 1] + pixels.data[i + 2]) / 3;
                        pixels.data[i + 0] = avg; // red
                        pixels.data[i + 1] = avg; // green
                        pixels.data[i + 2] = avg; // blue
                    }
                        return pixels;
                    }
        handleVisibilityChange(stream) {
                    if (document["hidden"]) {
                    stream.getTracks()[0].stop()
                    console.log("Camera stopped because of inactivity");
                    }
                }
                

    horizontalEffect(pixels){
    let output = this.ctx.createImageData(pixels.width, pixels.height);
    let w = pixels.width;
    let h = pixels.height;
    let dst = output.data;
    let d = pixels.data;
    for (var y=0; y<h; y++) {
        for (var x=0; x<w; x++) {
        var off = (y*w+x)*4;
        var dstOff = (y*w+(w-x-1))*4;
        dst[dstOff] = d[off];
        dst[dstOff+1] = d[off+1];
        dst[dstOff+2] = d[off+2];
        dst[dstOff+3] = d[off+3];
    }
    }
    return output;
}
verticalEffect(pixels){
    let output = this.ctx.createImageData(pixels.width, pixels.height);
    let w = pixels.width;
    let h = pixels.height;
    let dst = output.data;
    let d = pixels.data;
    for (var y=0; y<h; y++) {
        for (var x=0; x<w; x++) {
            var off = (y*w+x)*4;
            var dstOff = ((h-y-1)*w+x)*4;
            dst[dstOff] = d[off];
            dst[dstOff+1] = d[off+1];
            dst[dstOff+2] = d[off+2];
            dst[dstOff+3] = d[off+3];
    }
    }
    return output;
}
    takePhoto() {
        this.snap.currentTime = 0;
        this.snap.play();
        const data = this.canvas.toDataURL('image/jpg');
        //console.log(data);
        const link = document.createElement('a');
        link.href = data;
        link.setAttribute("download", "zaphod");
        link.textContent = "Download Image";
        link.innerHTML = `<img src=${data} alt="Still no tentacles"/>`;
        this.strip.insertBefore(link, this.strip.firstChild);
    }
}
// window.addEventListener('load', init);
let myPhotoBooth = new PhotoBooth();


