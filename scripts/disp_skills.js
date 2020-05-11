const display_skills_large = data => {
    data.sort((a, b) => {
        return a.strength - b.strength;
    });
    let dataRearranged = [];
    for(let i = data.length - 1;i >= 0; i -= 2) {
        dataRearranged.unshift(data[i]);
    }
    for(let i = data.length - 2;i >= 0; i -= 2) {
        dataRearranged.push(data[i]);
    }
    let htmlString = ``;
    for(let i = 0;i < dataRearranged.length; ++i) {
        htmlString += `
            <div class="skill">
                <p class="skill-strength-value">${ dataRearranged[i].strength }%</p>
                <button class="skill-strength" style="height: ${ dataRearranged[i].strength * 4 }px" onfocusin="show_strength(${ i })" onfocusout="hide_strength(${ i })"></button>
                <p class="skill-name">${ dataRearranged[i].name }</p>
            </div>
        `;
    }
    document.getElementsByClassName('skills-list')[0].innerHTML = htmlString;
}
const display_skills_small = data => {
    data.sort((a, b) => {
        return a.strength - b.strength;
    });
    let dataRearranged = [];
    for(let i = data.length - 1;i >= 0; i -= 2) {
        dataRearranged.unshift(data[i]);
    }
    for(let i = data.length - 2;i >= 0; i -= 2) {
        dataRearranged.push(data[i]);
    }
    let htmlString = ``;
    for(let i = 0;i < dataRearranged.length; ++i) {
        htmlString += `
            <div class="skill">
                <div class="skill-bar">
                    <button
                        class="skill-strength"
                        style="width: ${ dataRearranged[i].strength * 0.6 }vw"
                        onfocusin="show_strength(${ i })"
                        onfocusout="hide_strength(${ i })">
                    </button>
                    <p class="skill-strength-value">${ dataRearranged[i].strength }%</p>
                </div>
                <p class="skill-name">${ dataRearranged[i].name }</p>
            </div>
        `;
    }
    document.getElementsByClassName('skills-list')[0].innerHTML = htmlString;
}
const show_strength = i => {
    document.getElementsByClassName('skill-strength-value')[i].style.opacity = '1';
}
const hide_strength = i => {
    document.getElementsByClassName('skill-strength-value')[i].style.opacity = '0';
}