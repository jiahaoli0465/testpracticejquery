$(document).ready(function() {
    const form = $('#mainForm');
    let movieName;
    let rating;

    form.submit(function(e) {
        e.preventDefault();
        movieName = $('#name').val();
        if (movieName.length < 2) {
            alert('Movie name must have at least 2 characters.');
            return;
        }

        rating = $('#rating').val();
        let newLi = $('<li>')
            .attr('data-name', movieName)
            .attr('data-rating', rating)
            .text('Movie: ' + movieName + ' | Rating: ' + rating);
        
        let btn = $('<button>').text('Remove');
        btn.on('click', function() {
            $(this).parent().remove();
        });

        newLi.append(btn);
        $('ol').append(newLi);
    });

    $('#sortByName').click(() => sortList((a, b) => $(a).data('name').localeCompare($(b).data('name'))));
    $('#sortByRatingAsc').click(() => sortList((a, b) => parseFloat($(a).data('rating')) - parseFloat($(b).data('rating'))));
    $('#sortByRatingDesc').click(() => sortList((a, b) => parseFloat($(b).data('rating')) - parseFloat($(a).data('rating'))));

    function sortList(compareFunc) {
        $('ol li').get().sort(compareFunc).forEach(item => $('ol').append(item));
    }
});
