const display_educations = data => {
    let htmlString = [];
    for(let i = 0;i < data.length; ++i) {
        htmlString += `
        <div class="education">
                <div class="timeline">
                    <div class="line"></div>
                    <div class="circle"><div class="inner-circle"></div></div>
                    <div class="line"></div>
                </div>
        `;
        if(i % 2 === 0) {
            htmlString += `<div class="education-body odd-item">`;
        } else {
            htmlString += `<div class="education-body">`;
        }
        htmlString += `
                    <p class="edu-degree">${ data[i].degree }</p>
                    <p class="edu-institution">${ data[i].institution }, ${ data[i].location.city }</p>
                    <p class="edu-period">
                        ${ data[i].period.from.month }, ${ data[i].period.from.year } - 
                        ${ data[i].period.to.month }, ${ data[i].period.to.year }
                    </p>
                    <p class="edu-subject"><span class="fas fa-book"></span> ${ data[i].subject }
        `;
        if(data[i].specialisation != null) {
            htmlString += ` with ${ data[i].specialisation }`;
        }
        htmlString += `
                    </p>
                </div>
            </div>
        `;
    }
    document.getElementsByClassName('education-list')[0].innerHTML = htmlString;
}