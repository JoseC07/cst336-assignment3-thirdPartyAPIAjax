
// var submit = document.querySelector('.Submit');
// var guessField = document.querySelector('.guessField');
// // var image = 
// var userAnswer = '';
// var orientation = 'horizontal';
// var arrPics = [];
// guessField.focus();//focus mouse on field

 
    var userAnswer = '0451526538'
    console.log($('.field').val());

    var number = 0;
    $.ajax({
        method: "GET",
            url: "https://openlibrary.org/api/books?bibkeys=ISBN:"+encodeURIComponent(userAnswer)+"&format=json&jscmd=data",
        dataType: "json",
            
        success: function(result) {
           
            console.log('hello1');
            console.log(result['ISBN:0451526538']['authors'][0]['name']);
        }
    });
// submit.addEventListener('click', submitChoice);

