const aboutMe = `Lorem ipsum dolor sit amet consectetur... <br /><br />What? No, wait.<br /><br />Pardon me but sometimes I forget to switch my mindset from development to production.<br /><br />Hey, there! Glad you found me here.<br />Not much of an Einstein but I love to create stuff, and here's my profile for a start.<br /><br />Hope you don't hate it.`;
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