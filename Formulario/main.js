const $btn = $("#btn");

$btn.click((e) => {
  e.preventDefault();
  
  const $name = $("#name");
  const $pass = $("#pass");
  const $form = $("#form");
  
  const passValue = $pass.val();
  
  $name.toggleClass("is-invalid", $name.val().length > 10);
  $name.toggleClass("is-valid", $name.val().length <= 10);
  
  const cont = passValue.match(/[A-Z]/g)?.length ?? 0;
  
  $pass.toggleClass("is-invalid", cont === 0);
  $pass.toggleClass("is-valid", cont > 0);
});

