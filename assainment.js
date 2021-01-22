//https://github.com/hossain2000/assainment3/



// first probleame solve -- 1 Start

function kilometerToMeter(kilometer){
    var meter = kilometer*100;
    return meter;
}
// first probleame solve -- 1 End
                                                           



// secend probleame solve -- 2 Start

function budgetCalculator(watch,phone,laptop){

    var totalWatchPrice  = watch*50;
    var totalPhonePrice  = phone*100;
    var totalLaptopPrice = laptop*500;

    var allItemPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice ;

    return allItemPrice;

}

// secend probleame solve -- 2 End
                                                      

// third probleam solve -- 3 Start

function hotelCost(days){
    var cost = 0 ;

    if( days<=10 ){
        cost = days*100;
    }

    else if( days<=20 ){
        var firstTime  = 10*100;
        var  remaining = days-10;
        var secendTime = remaining*80;

        cost = firstTime + secendTime ;

    }
    
    else {
        var firstTime  = 10*100 ;
        var secendTime = 10*80 ;
        var remaining  = days-20 ;
        var thirdTime  =  remaining*50 ;
        
        cost = firstTime + secendTime + thirdTime ;


    }

    return cost ;

}
// third probleam solve -- 3 End



// four probleame solve -- 4 Start
 
  function megaFriend(str){
      var words = str.split(' ');
      longNameFriend = '';

      for( var word of words){
          if(word.length>longNameFriend.length){
           
            longNameFriend = word;

          }
          
      }
       return longNameFriend;
  }

// four probleame solve -- 4 End

