window.onload = () => {
    fetch('./data/experiences.json')
        .then(res_exp => res_exp.json())
        .then(data_exp => display_experiences(data_exp))
        .catch(err_exp => console.error(err_exp));
    fetch('./data/education.json')
        .then(res_edu => res_edu.json())
        .then(data_edu => display_educations(data_edu))
        .catch(err_edu => console.error(err_edu));
    fetch('./data/projects.json')
        .then(res_proj => res_proj.json())
        .then(data_proj => display_projects(data_proj))
        .catch(err_proj => console.error(err_proj));
    fetch('./data/books.json')
        .then(res_book => res_book.json())
        .then(data_book => display_books(data_book))
        .catch(err_book => console.error(err_book));
}