const display_books = data => {
    let htmlString = ``;
    for(let i = 0;i < data.length; ++i) {
        htmlString += `
            <div class="book">
        `;
        if(data[i].cover === null) {
            htmlString += `
                <img src="https://picsum.photos/200/300" />
            `;
        } else {
            htmlString += `
                <img src="${ data[i].cover }" />
            `;
        }
        htmlString += `
                <div class="book-info">
                    <p class="book-title">${ data[i].title }</p>
                    <p class="book-genre">${ data[i].genre }</p>
                    <p class="book-description">${ data[i].description }</p>
                    <p class="book-release-date">${ data[i].release_date.date } ${ data[i].release_date.month }, ${ data[i].release_date.year }</p>
                    <p><span class="fas fa-rupee-sign"></span> ${ data[i].price }</p>
                </div>
        `;
    }
    document.getElementsByClassName('books-list')[0].innerHTML = htmlString;
}