$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("#gitTbody").empty();
        for (var i = 0; i < commits.length; i++) {
          $("#gitTbody").append(buildTableRow(commits[i]));
        }
      }
    })
  });

  function buildTableRow(commitData) {

    var authorTd = $("<td>").append(commitData.commit.author.name);
    var messageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);
    var url = commitData.html_url;
    newRow = $("<tr>").addClass('clickable-row').attr("data-href", url);
    return newRow.append(authorTd)
      .append(messageTd).attr("href", url)
      .append(dateTd)
  }

  $(document).on('click', '.clickable-row', function(event) {
    event.preventDefault();
    /* Act on the event */
    window.open($(this).data("href"));
  });

});