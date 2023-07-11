// --------------- working with jQuery ---------------

// syntax: $(selector).method(params);

// ------- do something with elements
$('ol.product-list li:nth-child(3)').addClass('selected');

// .first() .last() .eq(index) .lt(index) .gt(index)
const $list = $('ol.product-list');

$list.children().eq(5).addClass('selected');
$list.children().last().attr('title', 'I`m the last item!');

// .each((index, element) => { code })
$('ol.product-list li').each(function (ind, el) {

    // $(HTMLElement).methods...

    if (ind % 3 === 0)
        console.log($(el).text());
});

// get element data: .text() .html() .val() 

// ------- event handlers
// $(selector).on('event_name', handler);
// events: 'click' 'dblclick' 'mouseenter' 'mouseleave'

$('ol.product-list li').on('click', function () {

    // this - reference to the current event target object

    // working with CSS: .addClass() .removeClass() .toggleClass()
    $(this).toggleClass('selected');
});

// get subling elements: .prev() .next() .even() .odd() .parent()
$('ol.product-list li').on('mouseenter', function () {

    $(this).addClass('medium-text');

    $(this).prev().addClass('muted-text');
    $(this).next().addClass('muted-text');
});
$('ol.product-list li').on('mouseleave', function () {

    $(this).removeClass('medium-text');

    $(this).prev().removeClass('muted-text');
    $(this).next().removeClass('muted-text');
});

// ------- forms
$('#product-form').submit(function (e) {

    const value = $('#product-form input[name=name]').val();
    console.log(`Name: ${value}`);

    // change content: append() prepend() before() after() empty() remove()
    $list.append(`<li>${value}</li>`);

    return false; // instead of e.preventDefault();
});
