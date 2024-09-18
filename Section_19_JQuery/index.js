// window.onload=function(){
//     alert("Hello");
    
// }
// $(document).ready(function(){
//     $('h1').css('color','red');
// })

console.log($('h1').css('color'));
// $('h1').css('color','green'); //this will directly add the css to inline like <h1 style="color: green;"></h1>
$('h1').addClass('big-title margin-50'); //.removeClass()
$('h1').attr('id','big-tt');
console.log($('h1').hasClass('big-title'));

// Manipulate Text
$('h1').text('Bye');

$('button').html('<em>Hey</em>')
// $('button').text("Don't Click")
$('a').attr('href','https://www.google.com/')
$('h1').click(function(){
    $('h1').css('color','purple');
})
$('button').click(function(){
    $('h1').css('color','red');
    setTimeout(function(){
        $('h1').css('color','purple');
    },1500);
});

$('input').keypress(function(event){ //to use keypress for entire document you can use 'body' or 'document' instead of input
    $('h1').text(event.key);
})

$("h1").on('mouseover',function(){
    $('h1').css('color','purple')
    // setTimeout(function(){
    //     $('h1').css('color','red');
    // },500);
})

$('h1').before('<button>Before</button>')
$('h1').after('<button>After</button>')
$('h1').prepend('<button>Prepend</button>')
$('h1').append('<button>Append</button>')
//$('button').remove()

