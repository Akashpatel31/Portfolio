/* 
    Stat Canada Group Project
    
    Group Members:
        1. Akash Patel
        2. Dhruvil Modi
    
        1st graph
    Region: South British Columbia Mountains

    Season: Fall

    2nd graph
    Region: Arctic Tundra

    Season: Summer

    Period: 1970 to 2010
    the link of my site at dca server is :https://dca.durhamcollege.ca/~patelakashkumar/datamodelling_dist/dist/
*/
import * as d3 from "d3";

//es6 class Bardisplay.
export default class BarDisplay{
    constructor(data, barWidth, barHeight, padding, pathColor){
        //removing one graph for another graph 
        d3.select("svg").remove();
        this.w = barWidth;
        this.h = barHeight;
        this.padding = padding;
        this.dataset = data;
        this.pathColor = pathColor;
        this.buildChart(); 
        }


    //build chart function is maded
    buildChart() {
        let svg = d3.select("#svgGraph")
            .append("svg")
            .style("background-color", "#000")
            .style("color", "#FFF")
            .style("margin-left", "auto")
            .style("margin-right", "auto")
            .style("border-radius", "10px")
            .style("padding", "10px")
            .style("display", "block")
            .attr("width", 910)
            .attr("height", 550);

            // legends
            svg.append("g").attr("class", "legend")
            .append("circle").attr("cx",105).attr("cy",25).attr("r", 6).style("fill", "green")
            svg.append("g").attr("class", "legend")
            .append("circle").attr("cx",105).attr("cy",45).attr("r", 6).style("fill", "red")
            svg.append("g").attr("class", "legend")
            .append("circle").attr("cx",105).attr("cy",65).attr("r", 6).style("fill", this.pathColor)
            svg.append("g").attr("class", "legend")
            .append("text").attr("x", 125).attr("y", 25).text("Positive Precipitation").style("font-size", "15px").style("fill", "#FFFFFF").attr("alignment-baseline","middle")
            svg.append("g").attr("class", "legend")
            .append("text").attr("x", 125).attr("y", 45).text("Negative Precipitation").style("font-size", "15px").style("fill", "#FFFFFF").attr("alignment-baseline","middle")
            svg.append("g").attr("class", "legend")
            .append("text").attr("x", 125).attr("y", 65).text("Temprature").style("font-size", "15px").style("fill", "#FFFFFF").attr("alignment-baseline","middle");
        
            // graph label for Precipitation
            svg.append("g")
            .attr("class", "graphLabels")
            .append("text")
            .attr("x", 10)
            .attr("y", 225)
            .attr("transform", "translate(-215,425) rotate(270)")
            .text("Precipitation in Percentage(%)")
            .style("font-size", "14px")
            .style("fill", "#FFFFFF")
            .style("letter-spacing", "2px")
            .attr("alignment-baseline","middle")

            // graph label for temprature
            svg.append("g")
            .attr("class", "graphLabels")
            .append("text")
            .attr("transform", "translate(900,175) rotate(90)")
            .text("Temprature in C°")
            .style("font-size", "14px")
            .style("fill", "#FFFFFF")
            .style("letter-spacing", "2px")
            .attr("alignment-baseline","middle")

            // graph label for years
            svg.append("g")
            .attr("class", "graphLabels")
            .append("text")
            .attr("transform", "translate(435,545)")
            .text("Years")
            .style("font-size", "14px")
            .style("fill", "#FFFFFF")
            .style("letter-spacing", "2px")
            .attr("alignment-baseline","middle")
        
        //xscale gives length and max min to the x axis.
        let xscale = d3.scaleLinear()
            .domain([1970,2010])
            .range([0, 815])
        
        // defining left y scale
        let yscale = d3.scaleLinear()
            .domain([-50,50])
            .range([500, 0])

        // defining right y scale
        let yScale = d3.scaleLinear()
            .domain([5,-5])
            .range([0,500])

        // defining bottom axis
        let x_axis = d3.axisBottom()
            .scale(xscale)
            .tickFormat(d3.format("d"));
            
        // defining left axis
        let y_axis = d3.axisLeft()
            .scale(yscale);

        // defining right axis
        let yaxis = d3.axisRight()
            .scale(yScale);

        // defining tooltip
        let tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)
        .style("background-color", "white");

        //position of y_axis is defined
        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(50, 10)")
            .call(y_axis)
            .attr("font-size", "12px");
        
        //position of yaxis is defined
        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(865, 10)")
            .call(yaxis)
            .attr("font-size", "12px");
        
        //position of x_axis is defined
        let xAxisTranslate = this.h/2+10;
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(50, 600)")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)
            .attr("font-size", "12px")

        // display bar chart
        let g = svg.append("g")
            .attr("transform", "translate(" + 51 + "," + 10 + ")");
            g.selectAll("rect")
            .data(this.dataset)
            .enter()
            .append("rect")    
            .attr("class", function(d) { return "bar" + (d.precip < 0 ? "negative" : "positive"); })
            .attr("x", (d, i) => i * 20)
            .attr("y", function(d) { return yscale(Math.max(0, d.precip)); })
            .attr("width", 15)
            .attr("height",function(d) { return Math.abs(yscale(d.precip) - yscale(0)); })
            .on('mouseover', (d) => {
                        tooltip.transition().duration(200).style('opacity', 0.9);
                        tooltip.html(`Precipitation : <span>${d.precip}</span>  Year:<span>${d.year}</span>`)
                            .style('left', `${d3.event.layerX}px`)
                            .style('top', `${(d3.event.layerY - 28)}px`);
                    })
                    .on('mouseout', () => tooltip.transition().duration(500).style('opacity', 0))
            .attr("fill",(d, i) => {
                if (d.precip<0) {
                    return "red";
                } else {
                    return "green";
                }
            })

        // define line variable
        let lineGenerator = d3.line()
            .x(function(d) { return xscale(d.year)+50 })
            .y(function(d) { return yScale(d.temp)+5 })
            .curve(d3.curveCardinal);

            // display line chart
            svg.append("path")
            .datum(this.dataset)
            .attr("fill", "none")
            .attr("stroke", this.pathColor)
            .attr("stroke-width", 4)
            .attr("d", lineGenerator)

        // line graph labels
        let labelLine = svg.selectAll(".circle")
            .data(this.dataset)
            .enter()
            .append("circle")
            .text(d => d.temp)
            .attr("class", function(d) { return "line" + (d.temp < 0 ? "negative" : "positive"); })
            .attr("cx", (d, i) => i * 20.2+55)
            .attr("cy", function(d) { return yScale(Math.max(0, d.temp) || Math.min(0, d.temp)); })
            .attr("r", 5)
            .attr("dy", "2em") 
            .attr("font-size", "13px")
            .attr("font-family", "sans-serif")
            .attr("fill", "#FFF") 
            .on('mouseover', (d) => {
                tooltip.transition().duration(200).style('opacity', 0.9);
                tooltip.html(`Temperature : <span>${d.temp}</span>  Year:<span>${d.year}</span>`)
                    .style('left', `${d3.event.layerX}px`)
                    .style('top', `${(d3.event.layerY)}px`);
            })
            .on('mouseout', () => tooltip.transition().duration(500).style('opacity', 0));

            // d3.selectAll("svg").remove();
        
    }
        
}