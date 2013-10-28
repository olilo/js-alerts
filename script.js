$(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        if (name == "") {
            alert("Bitte gib einen Namen an");
        } else {
            alert("Hallo " + name + ".");
            alert("Freust du dich schon auf den tollen Content?");
            alert("Tja, noch kommt hier gar nix :-P");
        }
    });
});