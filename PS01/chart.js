var svg3 = d3.select('svg2');

/* Your code goes here */

var svg3 = d3.select('#svg2');

var selectedPlayer

var nestedData4;

d3.csv('./tor.csv', function (dataIn4){

  nestedData4 = d3.nest()
      .key(function(d){return d.Player})
      .entries(dataIn4);






  var drawPoints4 = svg3.selectAll('circle')
    .data(dataIn4)
    .enter()
    .append('circle')
    .attr("cx", function(d){

    return d.locx;
    })
    .attr("cy", function(d){
      return d.locy;

    })

    .attr('r', '1')

    .attr("fill", "white")

  });

  function updateData4(newSelection4){
      return nestedData4.filter(function(d){ return d.key == newSelection4 })[0].values
  };



//       .attr('fill', function(d){
//         return randomColor();
// })
// })
