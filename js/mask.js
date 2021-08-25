let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


let selector2 = document.querySelectorAll('.email__input');
let im2 = new Inputmask('*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}].*{1,20}');
im2.mask(selector2);

