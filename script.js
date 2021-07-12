// let p = document.getElementById('main')
// let display  = (num)=>{
  
  
//  p.innerHTML=num;
// }

// display(10,
//    display(1,
//       display(2,
//          display(3,
//             display(4,
//                display(5,
//                   display(6,
//                      display(7,
//                         display(8,
//                            display(9,
//                               display('Happy Birthday')))))))
//                ))))
 
      
            
const countDownChange = (num, delay, doNext) => {
   setTimeout(() => {
      if (!num) {
         document.getElementById('main').textContent = 'Happy BirthDay Rajesh';
         document.getElementById('pas').innerHTML='Wishing you all the success and hapiness'

      } else {
         document.getElementById('main').innerHTML = num;
      }
      doNext();
   }, delay);
}

countDownChange(10, 0, () => {
   countDownChange(9, 1000, () => {
      countDownChange(8, 1000, () => {
         countDownChange(7, 1000, () => {
            countDownChange(6, 1000, () => {
               countDownChange(5, 1000, () => {
                  countDownChange(4, 1000, () => {
                     countDownChange(3, 1000, () => {
                        countDownChange(2, 1000, () => {
                           countDownChange(1, 1000, () => {
                              countDownChange(0, 1000, () => {

                              })
                           })
                        })
                     })
                  })
               })
            })
         })
      })
   })
})
               


