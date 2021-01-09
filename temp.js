var wholeDOM = jQuery('body').html();
jQuery('body').append(wholeDOM);

var links = document.getElementsByTagName("link");
for (var cl in links)
{
    var link = links[cl];
    if (link.rel === "stylesheet")
        link.href += "";
}
