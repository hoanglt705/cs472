$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var userId = $("#userId").val();
    
    $.ajax("https://jsonplaceholder.typicode.com/posts?userId=" + userId, {
		"type": "get",
    }).done(displayGuests);
}

function displayGuests(data) {
	var html = "<table>";
    html = "<tr><td>UserId</td><td>Title</td><td>Body</td></tr>";
    $.each(data, function( index, data ) {
    	html += "<tr><td>" + data.userId + "</td><td>" + data.title + "</td><td>" + data.body + "</td></tr>";
    });
    html += "</table>";

    $("#result").html(html);
    
}