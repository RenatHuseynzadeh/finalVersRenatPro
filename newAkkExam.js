
const users = []

if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))

}



// $('.plName').on('input', function(){
    // $('.plName').each(function(){
        // if($('#name').val().length >= 2 && $('#password').val().length >= 2  && $('#check').is(':checked')){
            // $('.btn').attr('disabled', false)
        // } else {
            // $('.btn').attr('disabled', true)
    // 
        // }
// 
    // })
// 
// 
    // 
// })

// $('#check').click(function(){
    // if($('#name').val().length >= 2 && $('#password').val().length >= 2  && $('#check').is(':checked')){
        // $('.btn').attr('disabled', false)
    // } else {
        // $('.btn').attr('disabled', true)
// 
    // }
// })

 $('.btn1').click(function(event){
    event.preventDefault()

    if($('#ad').val().length >= 2 && $('#tel').val().length >= 12  && $('#ia').val().length >= 2  && $('#sif').val().length >= 2){
         let newUser = {
         name: $('#ad').val(),
         password: $('#sif').val(),
         todos: []
     }
 
     let localUsers = JSON.parse(localStorage.getItem('users'))
 

     localUsers.push(newUser)
     localStorage.setItem('users', JSON.stringify(localUsers))
 
     $('input').val('')

     $('.al').css({
         "display": "block",
     })
    } else{
        alert('Net')
    }
         
})

// if($('#ad').val().length >= 2 && $('#tel').val().length >= 12  && $('#ia').val().length >= 2  && $('#sif').val().length >= 2)
    

    





    // let newUser = {
        // name: $('#ad').val(),
        // password: $('#sif').val(),
        // todos: []
    // }
// 
    // let localUsers = JSON.parse(localStorage.getItem('users'))
// 
// 
    // localUsers.push(newUser)
    // localStorage.setItem('users', JSON.stringify(localUsers))
// 
    // $('input').val('')
// 
    // $('.al').css({
        // "display": "block",
    // })
//  })