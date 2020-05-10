let i = 0;
const display_projects = data => {
    let htmlString = ``;
    for(i = 0;i < 2; ++i) {
        if(i % 2 === 0) {
            htmlString += `<div class="project"><img src="${ data[i].demo }" />`;
        } else {
            htmlString += `<div class="project odd-item">`;
        }
        htmlString += `
            <div class="project-info">
                <h2>${ data[i].title }</h2>
                <p class="project-domain">${ data[i].domain }</p>
                <p class="project-description">${ data[i].description }</p>
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
    for(i = 2;i < data.length; ++i) {
        if(i % 2 === 0) {
            htmlString += `<div class="project"><img src="${ data[i].demo }" />`;
        } else {
            htmlString += `<div class="project odd-item">`;
        }
        htmlString += `
            <div class="project-info">
                <h2>${ data[i].title }</h2>
                <p class="project-domain">${ data[i].domain }</p>
                <p class="project-description">${ data[i].description }</p>
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
    window.scrollBy(0, 200);
}
const hide_more_projects = () => {
    document.getElementsByClassName('view-less')[1].style.display = 'none';
    document.getElementsByClassName('more-projects-list')[0].style.display = 'none';
    document.getElementsByClassName('view-more')[1].style.display = 'block';
    window.scrollBy(0, -(i * 150));
}