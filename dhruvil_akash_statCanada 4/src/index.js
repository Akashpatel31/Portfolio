import BarDisplay from './BarDisplay';
import { svg } from 'd3';

// document.getElementsByClassName("svg").style.display = "none";
// document.querySelector("svg").classList.toggle("invisible");
class statGraph{
    constructor(){
        this.fetchData(0, "cyan");  
    }
    //another function named switchDataset is called
    switchDataset(){
        let barGgraph1 = 0;
        let strokeColor = "Cyan"
        // click function for button graph1
        document.getElementById('graph1').addEventListener('click', function() {
            barGgraph1 = 0;
            this.fetchData(barGgraph1,strokeColor); 
            // inner HTML method to change the heading
            document.getElementById("heading").innerHTML = "Fall Temprature and Precipitation of South British Columbia Mountains";
        }.bind(this));
        // click function for button graph2
        document.getElementById('graph2').addEventListener('click', function() {
            barGgraph1 = 1;
            this.fetchData(barGgraph1,strokeColor);
            //inner html method to change the heading
            document.getElementById("heading").innerHTML = "Summer Temprature and Precipitation of Arctic Tundra ";
        }.bind(this));
        // click function for button color1
        // document.getElementById('color1').addEventListener('click', function() {
        //     strokeColor = "cyan";
        //     this.fetchData(barGgraph1,strokeColor);
        // }.bind(this));
        // // click function for button color2
        // document.getElementById('color2').addEventListener('click', function() {
        //     strokeColor = "#FFAD1D";
        //     this.fetchData(barGgraph1,strokeColor);
        // }.bind(this));

        document.getElementById("mainGraph").style.display = "none";
        // d3.selectAll("svg").style("display", "none");
        document.getElementById('graph3').addEventListener('click', function() {
            let graphArea = document.getElementById('svgGraph');
            TweenMax.fromTo(graphArea, 0.5, {
                scale: 0,
                opacity: 0,
                borderRadius: "100%",
                transformOrigin: "center center"
            },{
                scale: 1,
                opacity: 1,
                ease: Power1.easeInOut,
                borderRadius: "10px"
            });
            document.getElementById('mainPage').style.display = 'none';
            // d3.selectAll("svg").style("display", "block");
            document.getElementById("mainGraph").style.display = "block";
            
        }.bind(this));
    }


    //function fetchData is created
    fetchData(graph1, pathColor){
        fetch('data.json')
            .then(data => data.json())
            .then(data => {
                this.data = data.data;
                this.data2 = data.climateData;
                this.barData = this.data;
                this.barData2 = this.data2;
                this.barWidth = 1100;
                this.barHeight = 1000;
                this.barPadding = 2;
                if(graph1 == '0'){
                    this.data = this.barData;
                } else {
                    this.data = this.data2;
                }
                let myBars = new BarDisplay(this.data, this.barWidth, this.barHeight, this.barPadding, pathColor);
            })
            
    }
}
let barG = new statGraph();
barG.switchDataset();