
$(document).ready(function () {
    let $display = $("#displayname");

    $("button").click(function () {
        let value = $(this).val();

        if (value === "AC") {
            $display.val("");
        } else if (value === "DEL") {
            $display.val($display.val().slice(0, -1));
        } else if (value === "=") {
            try {
                $display.val(eval($display.val()) || '');
            } catch (e) {
                $display.val("Error");
            }
        } else {
            $display.val($display.val() + value);
        }
    });
});
