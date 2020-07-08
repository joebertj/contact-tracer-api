function hashPass(){
    var shaone = CryptoJS.SHA1(document.passform.plain.value);	
    document.passform.shaone.value = shaone.toString().toUpperCase();
    $( "#result" ).empty().append("Searching...");
 
    var posting = $.post( "/api/v1/password", { shaone: document.passform.shaone.value } );
 
    posting.done(function( data ) {
	var p = JSON.parse(data);
	if(p.count == 0){
	    $( "#result" ).empty().append( "Your password is safe for now" );
	}else{
	    $( "#result" ).empty().append( "Your password has been part of a breach " + p.count + " times!");
	}
	document.passform.reset();
    });
}
$( "#plain" ).on("keydown", function (e) {
    if (e.keyCode === 13) {
        hashPass();
    }
});
