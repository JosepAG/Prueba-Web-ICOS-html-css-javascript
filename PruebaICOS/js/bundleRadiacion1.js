(function (d3) {
  'use strict';

var URLactual= window.location









var margin = {top: 70, right: 350, bottom: 100, left: 70},
    width = 1210 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#grafica")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
    
    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "25px")   
        .text("Radiation SW")
        .style("color","#008B8B");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", (height+margin.bottom/2))
        .attr("text-anchor", "middle")  
        .style("font-size", "20px")  
        .text("Date 2019")
        .style("color","#008B8B");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", (height+margin.bottom/2))
        .attr("transform", "translate(-330 ,520) rotate(270)")
        .attr("text-anchor", "middle")  
        .style("font-size", "20px")  
        .text("SW_in_Avg vs SW_out_Avg")
        .style("color","#008B8B");

    //Leyenda
    svg.append("text").attr("x", (-120+width / 2))
    .attr("y", (20+height+margin.bottom/2))
    .text("SW_in_Avg").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "yellow")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)


    svg.append("text").attr("x", (50+width / 2))
    .attr("y", (20+height+margin.bottom/2))
    .text("SW_out_Avg").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "red")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)


    //Leyenda Cuandros
    svg.append("rect")
      .attr("x", (30+width / 2))
      .attr("y", (13+height+margin.bottom/2))
      .style("fill","red")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "red")

    svg.append("rect")
      .attr("x", (-142+width / 2))
      .attr("y", (13+height+margin.bottom/2))
      .style("fill","yellow")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "yellow")





        // Define the div for the tooltip
    var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

//Read the data
d3.csv("./data/Radiacion.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d %H:%M:%S")(d.date), SW_in_Avg : Number(d.SW_in_Avg), SW_out_Avg: Number(d.SW_out_Avg)}
    //LW_in: Number(d.LW_in_Avg),LW_out: Number(d.LW_out_Avg)
  }, function(data) {
    console.log(data)


    // Add X axis --> it is a date format
     var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    var xAxis = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


       // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.SW_in_Avg; })])
      .range([ height, 0 ]);
    var yAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(y));

      // Add Z axis
    var z = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.SW_in_Avg; })])
      .range([ height, 0 ]);
   
   /* var zAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(z));
    */
  function make_x_gridlines() {   
    return d3.axisBottom(x)
        .ticks(11)
      }

    // gridlines in y axis function
      function make_y_gridlines() {   
    return d3.axisLeft(y)
        .ticks(6)
      }
      function make_y_gridlines() {   
    return d3.axisLeft(z)
        .ticks(6)
      }

  // Add a clipPath: everything out of this area won't be drawn.
    var clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "none");

    var clip2 = svg.append("defs").append("svg:clipPath") //PRUEBA
        .attr("id", "clip2")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("z", 0);


 // add the X gridlines
      svg.append("g")     
      .attr("class", "grid")
      .attr("opacity", 0.1)
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
      )

 // add the Y gridlines
      svg.append("g")     
      .attr("class", "grid")
      .attr("opacity", 0.1)
      .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
      )


    var brush = d3.brushX()                   // Add the brush feature using the d3.brush function
        .extent( [ [0,0], [width,height] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
        .on("end", updateChart)              // Each time the brush selection changes, trigger the 'updateChart' function

        .on("start", function(d){ Info_points() }) //llamamos a la funcion para crear los puntos con información

  	var line = svg.append('g')
      	.attr("clip-path", "url(#clip)")

    var line2=svg.append("g") ///prueba
      .attr("clip-path","url(#clip2)" )


      	 // Add the line
    line.append("path")
      .datum(data)
      .attr("class", "line")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("opacity", 0.5)
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.SW_in_Avg) })
        )

      // Add the line
    line2.append("path") ///PRUEBA
      .datum(data)
      .attr("class", "line2")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("opacity", 0.5)
      .attr("stroke-width", 1.5)
      .attr("color","red")
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return z(d.SW_out_Avg) })
        )

        // Add the brushing
    line
      .append("g")
        .attr("class", "brush")
        .call(brush);


         // A function that set idleTimeOut to null
    var idleTimeout
    function idled() { idleTimeout = null; }


    var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

    Info_points()//llamamos a la funcion para crear los puntos con información

    // A function that update the chart for given boundaries
    function updateChart() {


      // What are the selected boundaries?
      var extent = d3.event.selection

      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if(!extent){
        if (!idleTimeout) return idleTimeout = setTimeout(idled, 0); // This allows to wait a little bit
        x.domain([ 4,8])
      }else{
        x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
        line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
      }

      // Update axis and line position
      xAxis.transition().duration(0).call(d3.axisBottom(x))
      line
          .select('.line')
          .transition()
          .duration(0)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.SW_in_Avg) })
          )
      xAxis.transition().duration(0).call(d3.axisBottom(x))
      line2
          .select(".line2")
          .transition()
          .duration(0)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return z(d.SW_out_Avg) })
          )
    }

    // If user double click, reinitialize the chart
    svg.on("dblclick",function(){
      x.domain(d3.extent(data, function(d) { return d.date; }))
      xAxis.transition().call(d3.axisBottom(x))
      line
        .select('.line')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.SW_in_Avg) }),
          Info_points()      //llamamos a la funcion para crear los puntos con información
          //llamamos a la funcion para crear los puntos con información

      )
      xAxis.transition().call(d3.axisBottom(x))
      line2
        .select('.line2')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return z(d.SW_out_Avg) }),
          Info_points()  

          )
    });


      function Info_points(){

        svg.selectAll("circle").remove() //primero se eliminan los puntos anteriores

	 line2.selectAll("dot")  //Selecccionamos los puntos de la linea
        .data(data)     
        .enter().append("circle")
        .style("opacity",0)             
        .attr("r", 3)   
        .attr("cx", function(d) { return x(d.date); })     
        .attr("cy", function(d) { return z(d.SW_out_Avg);})   
        .on("mouseover", function(d) {                         //añadimos la cajita cada vez que pasamos el ratón
            div.transition()    
                .duration(200)    
                .style("opacity", 1);    
            div .html((d.date) + "<br/>"+"SW_in_Avg: "+d.SW_in_Avg+"<br/>"+"SW_out_Avg: " + d.SW_out_Avg)  
                .style("left", (d3.event.pageX-100)+ "px")   
                .style("top", (d3.event.pageY -100) + "px")
                .style("color","#008B8B")
                .style("opacity", 1);
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        })



        line.selectAll("dot")  //Selecccionamos los puntos de la linea
        .data(data)     
        .enter().append("circle")
        .style("opacity",0)             
        .attr("r", 3)   
        .attr("cx", function(d) { return x(d.date); })     
        .attr("cy", function(d) { return y(d.SW_in_Avg); })
        .attr("cz", function(d) { return z(d.SW_out_Avg); })   
        .on("mouseover", function(d) {                         //añadimos la cajita cada vez que pasamos el ratón
            div.transition()    
                .duration(200)    
                .style("opacity", 1);    
            div .html((d.date) + "<br/>"+"SW_in_Avg: "+d.SW_in_Avg+"<br/>"+"SW_out_Avg: " + d.SW_out_Avg)  
                .style("left", (d3.event.pageX-100)+ "px")   
                .style("top", (d3.event.pageY - 100) + "px")
                .style("color","#008B8B")
                .style("opacity", 1);
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        })






}




  

 } )




  }(d3));