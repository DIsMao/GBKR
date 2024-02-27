$( "button" ).on( "click", function() {
    let result = $( "input" ).val().split(',');
let newarrTXT = '['
let justArr = []
    result.forEach(element => {
        
        if(element.length <= 3 && element.length != 0){
            newarrTXT = newarrTXT + '"'+ element +'", '
            justArr.push(element)
        }
    });
    newarrTXT = newarrTXT.substring(0, newarrTXT.length-2) + "]"
    $( ".res" ).html(newarrTXT);
  } );