window.onload = () => {
    fetch('./data/experiences.json')
        .then(res => res.json())
        .then(data => display_experiences(data))
        .catch(err => console.error(err));
    fetch('./data/education.json')
        .then(res => res.json())
        .then(data => display_educations(data))
        .catch(err => console.error(err));
    const matchX = x => {
        if(x.matches) {
            fetch('./data/skills.json')
                .then(res => res.json())
                .then(data => display_skills_small(data))
                .catch(err => console.errror(err));
        } else {
            fetch('./data/skills.json')
                .then(res => res.json())
                .then(data => display_skills_large(data))
                .catch(err => console.errror(err))
        }
    }
    let x = window.matchMedia("(max-width: 1000px)");
    matchX(x);
    x.addListener(matchX);
    fetch('./data/projects.json')
        .then(res => res.json())
        .then(data => display_projects(data))
        .catch(err => console.error(err));
    fetch('./data/certifications.json')
        .then(res => res.json())
        .then(data => display_certifications(data))
        .catch(err => console.error(err));
    fetch('./data/books.json')
        .then(res => res.json())
        .then(data => display_books(data))
        .catch(err => console.error(err));
}