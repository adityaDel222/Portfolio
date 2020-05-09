const display_projects = data => {
    let htmlString = ``;
    for(let i = 0;i < 2; ++i) {
        if(i % 2 === 0) {
            htmlString += `<div class="project"><img src="${ data[i].demo }" />`;
        } else {
            htmlString += `<div class="project odd-item">`;
        }
        htmlString += `
            <div class="project-info">
                <h2>${ data[i].title }</h2>
                <p class="project-domain">${ data[i].domain }</p>
                <p>${ data[i].description }</p>
                <p><a href="${ data[i].link }" target="_blank">Visit Project&nbsp;&nbsp;<span class="fas fa-external-link-alt"></span></a></p>
            </div>
        `;
        if(i % 2 !== 0) {
            htmlString += `<img src="${ data[i].demo }" />`;
        }
        htmlString += `</div>`;
    }
    document.getElementsByClassName('projects-list')[0].innerHTML = htmlString;
    htmlString = ``;
    for(let i = 2;i < data.length; ++i) {
        if(i % 2 === 0) {
            htmlString += `<div class="project"><img src="${ data[i].demo }" />`;
        } else {
            htmlString += `<div class="project odd-item">`;
        }
        htmlString += `
            <div class="project-info">
                <h2>${ data[i].title }</h2>
                <p class="project-domain">${ data[i].domain }</p>
                <p>${ data[i].description }</p>
                <p><a href="${ data[i].link }" target="_blank">Visit Project&nbsp;&nbsp;<span class="fas fa-external-link-alt"></span></a></p>
            </div>
        `;
        if(i % 2 !== 0) {
            htmlString += `<img src="${ data[i].demo }" />`;
        }
        htmlString += `</div>`;
    }
    document.getElementsByClassName('more-projects-list')[0].innerHTML = htmlString;
}
const display_more_projects = () => {
    document.getElementsByClassName('view-more')[1].style.display = 'none';
    document.getElementsByClassName('more-projects-list')[0].style.display = 'flex';
    document.getElementsByClassName('view-less')[1].style.display = 'block';
    window.scrollTo(0, 2225);
}
const hide_more_projects = () => {
    document.getElementsByClassName('view-less')[1].style.display = 'none';
    document.getElementsByClassName('more-projects-list')[0].style.display = 'none';
    document.getElementsByClassName('view-more')[1].style.display = 'block';
    window.scrollTo(0, 1300);
}