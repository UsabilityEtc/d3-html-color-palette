d3.csv("./CSSColorNames.csv").then(renderPalette)

function renderPalette(data) {
    d3.select("#palette")
        .selectAll("div.swatch")
        .data(data)
        .enter()
            .append("div")
                .attr("class", "swatch")
                .style("background-color", d => d.Name)
            .append("div")
                .html(d => `<p>${d.Name}</p><p>${d.Hex}</p>`)
                .style("color", d => d3.hsl(d.Name).l >= 0.5 ? "black" : "white")
}
