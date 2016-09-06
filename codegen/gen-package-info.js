var package = require("../package.json");

module.exports = function(props) {
    var tsCode = "";
    for (var i = 0; i < props.length; i++) {
        var p = props[i];
        tsCode += "let " + p + " = " + JSON.stringify(package[p], null, "    ") + ";\n";
    }

    tsCode += "export { " + props.join(", ") + " }";
    return tsCode;
};