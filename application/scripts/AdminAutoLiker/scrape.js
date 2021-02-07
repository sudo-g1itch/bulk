var jobArray=[];
var placeArray=[];
var nameArray=[];
var bulk=[];
var bulks;
var i;
$(()=>{
    
    $('div.entity-result__primary-subtitle').each(function (index, element) {
       jobArray.push(($(element).text()));
       
    });
    

    $('div.entity-result__secondary-subtitle').each(function (index, element) {
        placeArray.push(($(element).text()));
    });


    $(".entity-result__title-text.t-16 a.app-aware-link span > span:nth-child(1)" ).each(function (index, element) {
        nameArray.push(($(element).text()));
    });



    
    var job;
    var place;
    var name ;
    for ( i = 0; i < nameArray.length; i++) {
        name = nameArray[i];
        name = name.replace(/\s\s+/g, ' ');
        place = placeArray[i];
        place = place.replace(/\s\s+/g, ' ');
        job = jobArray[i];
        job = job.replace(/\s\s+/g, ' ');

        bulk = "{"+name+"||"+place+"||"+job+"}";
        console.log(bulk.length);
        $.ajax({
            type: "POST",
            url: "https://loopo.onblick.com/api/bulk-profile/test-campaign",
            dataType: "JSON",
            data: {
               data : bulk
            }
        });
    }


   

    

    var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;


    setTimeout(() => {
        $('.artdeco-pagination__button--next').click();  
            setTimeout(() => {
                location.reload(); 
            }, 2000);
    }, 5000);

});



