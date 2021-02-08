var jobArray=[];
var placeArray=[];
var nameArray=[];
var linkArray=[];
var dataObj = [];


$(()=>{
        
    var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;

    $('div.entity-result__primary-subtitle').each(function (index, element) {
       jobArray.push(($(element).text()));

    });
    $('div.entity-result__secondary-subtitle').each(function (index, element) {
        placeArray.push(($(element).text()));
    });
    $(".entity-result__title-text.t-16 a.app-aware-link span > span:nth-child(1)" ).each(function (index, element) {
        nameArray.push(($(element).text()));
        linkArray.push(($(element).parent().parent('a.app-aware-link').attr('href')));
    });



    var job;
    var place;
    var name ;
    var link;

    for (var i = 0; i < nameArray.length; i++) {
        link = linkArray[i];
        link = link.replace(/\s\s+/g, ' ');
        name = nameArray[i];
        name = name.replace(/\s\s+/g, ' ');
        place = placeArray[i];
        place = place.replace(/\s\s+/g, ' ');
        job = jobArray[i];
        job = job.replace(/\s\s+/g, ' ');

        bulk = {};
        bulk["Name"] = name;
        bulk["Job"] = job;
        bulk["Place"] = place;
        bulk["Link"] = link;

        dataObj.push(bulk);
    }

        $.ajax({

            type: "POST",
            url: "https://loopo.onblick.com/api/bulk-profile/testCampaign",
            dataType: "JSON",
            data: { 'data' : JSON.stringify(dataObj)},
            success: function (response) {
                console.log(response);
            }
        });

        setTimeout(() => {
            $('.artdeco-pagination__button--next').click();  
                setTimeout(() => {
                    location.reload(); 
                }, 2000);
        }, 5000);

});




