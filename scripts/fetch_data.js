window.onload = () => {
    fetch('./data/experiences.json')
        .then(res => res.json())
        .then(data => display_experiences(data))
        .catch(err => console.error(err));
    fetch('./data/education.json')
        .then(res => res.json())
        .then(data => display_educations(data))
        .catch(err => console.error(err));
    fetch('./data/projects.json')
        .then(res => res.json())
        .then(data => display_projects(data))
        .catch(err => console.error(err));
    fetch('./data/books.json')
        .then(res => res.json())
        .then(data => display_books(data))
        .catch(err => console.error(err));
}