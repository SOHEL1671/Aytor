$(function(){
    //Toggle Search Modal
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn').on('click', function(){
        $('#search_modal').removeClass('show');
    })
})