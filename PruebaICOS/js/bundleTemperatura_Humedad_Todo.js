(function (d3) {
  'use strict';

var URLactual= window.location

graph("Temperatura_Humedad_Todos_metros.csv")



function graph(valor_csv){





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
        .text("Relative Humidity vs Air Temperature ")
        .style("color","#008B8B");

    svg.append("text")
        .attr("x", (15+width / 2))             
        .attr("y", -15+(height+margin.bottom/2))
        .attr("text-anchor", "middle")  
        .style("font-size", "20px")  
        .text("Date 2019")
        .style("color","#008B8B");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", (height+margin.bottom/2))
        .attr("transform", "translate(-325 ,520) rotate(270)")
        .attr("text-anchor", "middle")  
        .style("font-size", "20px")  
        .text("Relative Humidity vs Air Temperature")
        .style("color","#008B8B");


    //Leyenda

    svg.append("text").attr("x", (58+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("RH_15m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "steelblue")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)


    svg.append("text").attr("x", (-50+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("RH_8m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "green")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)

    svg.append("text").attr("x", (-150+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("RH_4m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "purple")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)

    svg.append("text").attr("x", (165+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("RH_2m").style("font-size", "15px")
    .style("stroke", "pink")
    .attr("stroke-width","0.5")
    .attr("alignment-baseline","middle")
    .attr("opacity", 0.7)
   
    svg.append("text").attr("x", (-255+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("RH_1m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "red")
    .attr("stroke-width","1")
    .attr("opacity", 0.7)

     //Leyenda2

    svg.append("text").attr("x", (58+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("Tair_15m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "yellow")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)


    svg.append("text").attr("x", (-50+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("Tair_8m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "orange")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)

    svg.append("text").attr("x", (-150+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("Tair_4m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "grey")
    .attr("stroke-width","0.5")
    .attr("opacity", 0.7)

    svg.append("text").attr("x", (165+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("Tair_2m").style("font-size", "15px")
    .style("stroke", "#20B2AA")
    .attr("stroke-width","0.5")
    .attr("alignment-baseline","middle")
    .attr("opacity", 0.7)
   
    svg.append("text").attr("x", (-255+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("Tair_1m").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "#191970")
    .attr("stroke-width","1")
    .attr("opacity", 0.7)

    //Leyenda interactuar
    svg.append("text").attr("x", (250+width / 2))
    .attr("y", (10+height+margin.bottom/2))
    .text("*Brush to zoom in").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "grey")
    .attr("stroke-width","1")
    .attr("opacity", 0.7)

    svg.append("text").attr("x", (250+width / 2))
    .attr("y", (30+height+margin.bottom/2))
    .text("*Double click to zoom out").style("font-size", "15px")
    .attr("alignment-baseline","middle")
    .style("stroke", "grey")
    .attr("stroke-width","1")
    .attr("opacity", 0.7)
     //Leyenda Cuandros
    svg.append("rect")
      .attr("x", (-70+width / 2))
      .attr("y", (3+height+margin.bottom/2))
      .style("fill","green")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "green")

    svg.append("rect")
      .attr("x", (-170+width / 2))
      .attr("y", (3+height+margin.bottom/2))
      .style("fill","purple")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "purple")

    svg.append("rect")
      .attr("x", (38+width / 2))
      .attr("y", (3+height+margin.bottom/2))
      .style("fill","steelblue")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "steelblue")

    svg.append("rect")
      .attr("x", (-270+width / 2))
      .attr("y", (3+height+margin.bottom/2))
      .style("fill","red")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "red")

    svg.append("rect")
      .attr("x", (149+width / 2))
      .attr("y", (3+height+margin.bottom/2))
      .style("fill","pink")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "pink")

  //Leyenda Cuandros 2
    svg.append("rect")
      .attr("x", (-70+width / 2))
      .attr("y", (23+height+margin.bottom/2))
      .style("fill","orange")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "orange")

    svg.append("rect")
      .attr("x", (-170+width / 2))
      .attr("y", (23+height+margin.bottom/2))
      .style("fill","grey")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "grey")

    svg.append("rect")
      .attr("x", (38+width / 2))
      .attr("y", (23+height+margin.bottom/2))
      .style("fill","yellow")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "yellow")

    svg.append("rect")
      .attr("x", (-270+width / 2))
      .attr("y", (23+height+margin.bottom/2))
      .style("fill","#191970")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "#191970")

    svg.append("rect")
      .attr("x", (149+width / 2))
      .attr("y", (23+height+margin.bottom/2))
      .style("fill","#20B2AA")
      .attr("width","12")
      .attr("height","12")
      .attr("alignment-baseline","middle")
    .style("stroke", "#20B2AA")


        // Define the div for the tooltip
    var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

//Read the data
d3.csv("./data/"+valor_csv,

  // When reading the csv, I must format variables:
  function(d){
    return { date : d3.timeParse("%Y-%m-%d %H:%M:%S")(d.date), RH_15m_Avg : Number(d.RH_15m_Avg), RH_8m_Avg: Number(d.RH_8m_Avg), RH_4m_Avg: Number(d.RH_4m_Avg),
    RH_2m_Avg : Number(d.RH_2m_Avg), RH_1m_Avg : Number(d.RH_1m_Avg), Tair_15m_Avg : Number(d.Tair_15m_Avg), Tair_8m_Avg : Number(d.Tair_8m_Avg)
    ,Tair_4m_Avg : Number(d.Tair_4m_Avg),Tair_2m_Avg : Number(d.Tair_2m_Avg), Tair_1m_Avg : Number(d.Tair_1m_Avg) }
    
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
      .domain([0, 100])
      .range([ height, 0 ]);
    var yAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(y));

      // Add Z axis
    var z = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
  var zAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(z));

 var w = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
  var wAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(w));

   // Add v axis
    var v = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
  var vAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(v));
   


   // Add k axis
    var k = d3.scaleLinear()
      .domain([0, 100])
      .range([ height, 0 ]);
  var kAxis = svg.append("g")
      .attr("class", "axisRed")
      .call(d3.axisLeft(k));


 var p = d3.scaleLinear()
      .domain([0, 50])
      .range([ height, 0 ]);
  var pAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(p));

   // Add v axis
    var o = d3.scaleLinear()
      .domain([0, 50])
      .range([ height, 0 ]);
   var oAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(o));
   // Add k axis
    var t = d3.scaleLinear()
      .domain([0, 50])
      .range([ height, 0 ]);
   var tAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(t));
      
       // Add k axis
    var q = d3.scaleLinear()
      .domain([0, 50])
      .range([ height, 0 ]);
   var qAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(q));

    var f = d3.scaleLinear()
      .domain([0, 50])
      .range([ height, 0 ]);
   var fAxis = svg.append("g")
      .attr("class", "axisBlue")
      .attr("transform", "translate( " + width + ", 0 )")
      .call(d3.axisRight(f));




  function make_x_gridlines() {   
    return d3.axisBottom(x)
        .ticks(12)
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

    var clip3 = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip3")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("w", 0)
        .style("fill", "none");

    var clip4 = svg.append("defs").append("svg:clipPath") //PRUEBA
        .attr("id", "clip4")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("v", 0);

    var clip5 = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip5")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("k", 0)
        .style("fill", "none");

    var clip6 = svg.append("defs").append("svg:clipPath") //PRUEBA
        .attr("id", "clip6")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("p", 0);

      var clip7 = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip7")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("o", 0)
        .style("fill", "none");

    var clip8 = svg.append("defs").append("svg:clipPath") //PRUEBA
        .attr("id", "clip8")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("t", 0);


      var clip9 = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip9")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("q", 0)
        .style("fill", "none");

      var clip9 = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip10")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("f", 0)
        .style("fill", "none");
  



 // add the X gridlines
      svg.append("g")     
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .attr("opacity", 0.1)
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
        .on("end", updateChart)            // Each time the brush selection changes, trigger the 'updateChart' function

        //.on("start", function(d){ Info_points() }) //llamamos a la funcion para crear los puntos con información


  	var line = svg.append('g')
      	.attr("clip-path", "url(#clip)")


    var line2=svg.append("g") ///prueba
      .attr("clip-path","url(#clip2)" )

  var line3 = svg.append('g')
        .attr("clip-path", "url(#clip3)")


    var line4=svg.append("g") ///prueba
      .attr("clip-path","url(#clip4)" )

      var line5 = svg.append('g')
        .attr("clip-path", "url(#clip5)")


    var line6=svg.append("g") ///prueba
      .attr("clip-path","url(#clip6)" )
    
  var line7 = svg.append('g')
        .attr("clip-path", "url(#clip7)")


    var line8=svg.append("g") ///prueba
      .attr("clip-path","url(#clip8)" )

      var line9 = svg.append('g')
        .attr("clip-path", "url(#clip9)")


    var line10=svg.append("g") ///prueba
      .attr("clip-path","url(#clip10)" )

      var lineFunction1=d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.RH_15m_Avg) })
       
      var lineFunction2 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return z(d.RH_8m_Avg) })

       var lineFunction3 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return w(d.RH_4m_Avg) })
        
      var lineFunction4 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return v(d.RH_2m_Avg) })

      var lineFunction5 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return k(d.RH_1m_Avg) })

      var lineFunction6 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return p(d.Tair_15m_Avg) })  
            
      var lineFunction7 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return o(d.Tair_8m_Avg) })  

     var lineFunction8 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return t(d.Tair_4m_Avg) }) 

     var lineFunction9 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return q(d.Tair_2m_Avg) })

     var lineFunction10 = d3.line()
              .x(function(d) { return x(d.date) })
              .y(function(d) { return f(d.Tair_1m_Avg) })     
   
         // Add the line
    line.append("path")
      .datum(data)
     
      .attr("class", "line")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 0.5)
      .attr("d", lineFunction1)
   
    
        // Add the line
    line2.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line2")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 0.5)
      .attr("color","green")
      .attr("d", lineFunction2)

       // Add the line
    line3.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line3")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "purple")
      .attr("stroke-width", 0.5)
      .attr("color","purple")
      .attr("d", lineFunction3)
           // Add the line
    line4.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line4")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "pink")
      .attr("stroke-width", 1)
      .attr("color","pink")
      .attr("d", lineFunction4)
           // Add the line
    line5.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line5")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 0.5)
      .attr("color","red")
      .attr("d", lineFunction5)
           // Add the line
    line6.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line6")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "yellow")
      .attr("stroke-width", 0.5)
      .attr("color","yellow")
      .attr("d", lineFunction6)
           // Add the line
    line7.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line7")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 0.5)
      .attr("color","orange")
      .attr("d", lineFunction7)
           // Add the line
    line8.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line8")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "grey")
      .attr("stroke-width", 0.5)
      .attr("color","grey")
      .attr("d", lineFunction8)
           // Add the line
    line9.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line9")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "#20B2AA")
      .attr("stroke-width", 0.5)
      .attr("color","#20B2AA")
      .attr("d", lineFunction9)
           // Add the line
    line10.append("path") ///PRUEBA
      .datum(data)
      
      .attr("class", "line10")  // I add the class line to be able to modify this line later on.
      .attr("fill", "none")
      .attr("stroke", "#191970")
      .attr("stroke-width", 0.5)
      .attr("color","#191970")
      .attr("d", lineFunction10)
 
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

    //Info_points()//llamamos a la funcion para crear los puntos con información

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
            .y(function(d) { return y(d.RH_15m_Avg) })
          )
      xAxis.transition().duration(0).call(d3.axisBottom(x))
      line2
          .select(".line2")
          .transition()
          .duration(0)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return z(d.RH_8m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line3
          .select(".line3")
          .transition()
          .duration(0)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return w(d.RH_4m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line4
          .select(".line4")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return v(d.RH_2m_Avg) })
          )
                 xAxis.transition().duration(0).call(d3.axisBottom(x))
      line5
          .select(".line5")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return k(d.RH_1m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line6
          .select(".line6")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return p(d.Tair_15m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line7
          .select(".line7")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return o(d.Tair_8m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line8
          .select(".line8")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return t(d.Tair_4m_Avg) })
          )
           xAxis.transition().duration(0).call(d3.axisBottom(x))
      line9
          .select(".line9")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return q(d.Tair_2m_Avg) })
          )
      xAxis.transition().duration(0).call(d3.axisBottom(x))
      line10
          .select(".line10")
          .transition()
          .duration(0)
            .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return f(d.Tair_1m_Avg) })
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
          .y(function(d) { return y(d.RH_15m_Avg) }),
                //llamamos a la funcion para crear los puntos con información
          //llamamos a la funcion para crear los puntos con información

      )
      xAxis.transition().call(d3.axisBottom(x))
      line2
        .select('.line2')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return z(d.RH_8m_Avg) }),
           

          )
         xAxis.transition().call(d3.axisBottom(x))
      line3
        .select('.line3')
        .transition()
        .duration(0)
         .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return w(d.RH_4m_Avg) })
          

          )
         xAxis.transition().call(d3.axisBottom(x))
      line4
        .select('.line4')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return v(d.RH_2m_Avg) })

          )
          xAxis.transition().call(d3.axisBottom(x))
      line5
        .select('.line5')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return k(d.RH_1m_Avg) })
           

          )
            xAxis.transition().call(d3.axisBottom(x))
      line6
        .select('.line6')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return p(d.Tair_15m_Avg) })
            

          )
      line7
        .select('.line7')
        .transition()
        .duration(0)
         .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return o(d.Tair_8m_Avg) })
         
          )
      line8
        .select('.line8')
        .transition()
        .duration(0)
         .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return t(d.Tair_4m_Avg) })
           

          )
      line9
        .select('.line9')
        .transition()
        .duration(0)
         .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return q(d.Tair_2m_Avg) })
           

          )
      line10
        .select('.line10')
        .transition()
        .duration(0)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return f(d.Tair_1m_Avg) })
           

          )
    });



    /*  function Info_points(){

        svg.selectAll("circle").remove() //primero se eliminan los puntos anteriores

	 line.selectAll("dot")  //Selecccionamos los puntos de la linea
        .data(data)     
        .enter().append("circle")
        .style("opacity",0)             
        .attr("r", 3)   
        .attr("cx", function(d) { return x(d.date) })     
        .attr("cy", function(d) { return z(d.RH_15m_Avg)})   
        .on("mouseover", function(d) {                         //añadimos la cajita cada vez que pasamos el ratón
            div.transition()    
                .duration(200)    
                .style("opacity", 1);    
            div .html((d.date) + "<br/>"+"Relative Humidity: "+d.RH_15m_Avg+"%"+"<br/>"+"Air Temperature: " + d.Tair_15m_Avg+"ºC")  
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



        line6.selectAll("dot")  //Selecccionamos los puntos de la linea
        .data(data)     
        .enter().append("circle")
        .style("opacity",0)             
        .attr("r", 3)   
        .attr("cx", function(d) { return x(d.date); })     
        //.attr("cy", function(d) { return y(d.RH_15m_Avg); })
        .attr("cz", function(d) { return z(d.Tair_15m_Avg)})   
        .on("mouseover", function(d) {                         //añadimos la cajita cada vez que pasamos el ratón
            div.transition()    
                .duration(200)    
                .style("opacity", 1);    
            div .html((d.date) + "<br/>"+"Relative Humidity: "+d.RH_15m_Avg+"%"+"<br/>"+"Air Temperature: " + d.Tair_15m_Avg+"ºC")  
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


*/

  

 } )

}


  }(d3));