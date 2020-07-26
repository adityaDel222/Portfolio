const aboutMe = `
    Welcome to my portfolio.<br /><br />
    I'm glad you found me. Allow me to introduce myself.<br /><br />
    My name is Aditya Raj. I am a final year Computer Science undergraduate at Vellore Institute of Technology, Vellore, India.<br /><br />
    Since the beginning, I have always been interested in developing cool, exciting things, exploring new technology and learning new ways.<br /><br />
    Alright, enough talking. Here is a little attempt of mine to walk you through my life, skills I've acquired, stuff I've built and some certifications I've received along the journey.<br /><br />
    Finally, I'll be glad to connect so please feel free to reach out.<br /><br />
    P.S. I'm neither a coffee nor a tea person.
`;
// const aboutMe = `
//     Lorem ipsum dolor sit amet consectetur...<br /><br />
//     What? No, wait.<br /><br />
//     Pardon me but at times I forget to switch my brain from a development to a production mindset.<br /><br />
//     Anyway, hello there! Glad you found me here.<br />
//     Not much of an Einstein but I love to create stuff, and here's my profile for a start.<br /><br />
//     Hope you don't hate it.
// `;
document.getElementById('about-info-p').innerHTML = aboutMe;
const display_more_about = () => {
    document.getElementsByClassName('view-more')[0].style.display = 'none';
    document.getElementsByClassName('about-desc')[0].style.display = 'flex';
    document.getElementsByClassName('view-less')[0].style.display = 'block';
    window.scrollBy(0, 200);
}
const hide_more_about = () => {
    document.getElementsByClassName('view-less')[0].style.display = 'none';
    document.getElementsByClassName('about-desc')[0].style.display = 'none';
    document.getElementsByClassName('view-more')[0].style.display = 'block';
    window.scrollBy(0, -1750);
}