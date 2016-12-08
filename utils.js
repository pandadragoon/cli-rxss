function utils(){
    var toCapitalCase = function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
        toCapitalCase
    }
}

module.exports = utils();