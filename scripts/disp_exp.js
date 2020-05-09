const display_experiences = data => {
    let htmlString = [];
    for(let i = 0;i < data.length; ++i) {
        htmlString += `
        <div class="experience">
                <div class="timeline">
                    <div class="line"></div>
                    <div class="circle"><div class="inner-circle"></div></div>
                    <div class="line"></div>
                </div>
        `;
        if(i % 2 === 0) {
            htmlString += `<div class="experience-body odd-item">`;
        } else {
            htmlString += `<div class="experience-body">`;
        }
        htmlString += `
                    <p class="exp-title">${ data[i].job_title }</p>
                    <p class="exp-company">${ data[i].company }</p>
                    <p class="exp-period">
                        ${ data[i].period.from.month }, ${ data[i].period.from.year } - 
                        ${ data[i].period.to.month }, ${ data[i].period.to.year }
                    </p>
                    <p class="exp-location"><span class="fas fa-map-marker-alt"></span>
                        ${ data[i].company_location.city },
                        ${ data[i].company_location.country }
                    </p>
                    <p class="exp-description">${ data[i].job_description }</p>
                </div>
            </div>
        `;
    }
    document.getElementsByClassName('experiences-list')[0].innerHTML = htmlString;
}