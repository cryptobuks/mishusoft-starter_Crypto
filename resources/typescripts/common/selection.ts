export function selectAllCheckBox() {
    import('./dom').then(function (dom) {
        let select_all = dom.captureElement('#select_all'); //select all checkbox
        let checkboxes = dom.captureElement('.checkbox'); //checkbox items
        if (select_all && checkboxes) {
            //select all checkboxes
            select_all.addEventListener("change", function () {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = select_all.checked;
                }
            });

            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', function () { //".checkbox" change
                    //uncheck "select all", if one of the listed checkbox item is unchecked
                    if (this.checked === false) {
                        select_all.checked = false;
                    }
                    //check "select all" if all checkbox items are checked
                    if (document.querySelectorAll('.checkbox:checked').length === checkboxes.length) {
                        select_all.checked = true;
                    }
                });
            }
        }
    })
}
