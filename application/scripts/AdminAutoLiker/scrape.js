var jobArray=[];
var placeArray=[];
var nameArray=[];

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

    
    var job = JSON.stringify(jobArray);
    var place = JSON.stringify(placeArray);
    var name = JSON.stringify(nameArray);


    $.ajax({
        type: "POST",
        url: "https://loopo.onblick.com/api/bulk-profile/test-campaign",
        dataType: "JSON",
        data: {
            name: name,
            job : job,
            place : place
        },
    });

    var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;


    setTimeout(() => {
        $('.artdeco-pagination__button--next').click();  
            setTimeout(() => {
                location.reload(); 
            }, 2000);
    }, 5000);

});



