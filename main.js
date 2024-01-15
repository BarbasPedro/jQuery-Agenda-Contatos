// jQuery funciona através de $('elemento'), no caso foi o document
$(document).ready(function() {
  /* Com JS fariamos:
  console.log(document.querySelector('header button'));

  Com jQuery faremos: */
  $('header button').click(function() {
    $('form').slideDown();

    $('#botaoCancelar').click(function() {
      $('form').slideUp();
    })

    $('form').on('submit', function(e) {
    e.preventDefault();

    const enderecoImagemNova = $('#enderecoImagemNova').val();

    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
    $(`
      <div class="overlay-image-link">
        <a href=${enderecoImagemNova} title="Ver imagem em tamanho real" target="_blank">
          Ver imagem em tamanho real
        </a>
      </div>
      `).appendTo(novoItem);

      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(1000);

      $('#enderecoImagemNova').val(``)
    });
  });
})
