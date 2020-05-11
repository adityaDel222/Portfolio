const display_certifications = data => {
    let htmlString = ``;
    for(let i = 0;i < data.length; ++i) {
        htmlString += `
            <div class="certification">
                <div class="certification-header" onclick="toggle_certification_body(${ i })">
                    <p>${ data[i].name }</p>
                    <span class="fas fa-chevron-down"></span>
                    <span class="fas fa-chevron-up"></span>
                </div>
                <div class="certification-body">
                    <div class="certification-body-left">
                        <p><strong>Issued by:</strong> ${ data[i].issuing_organisation }</p>
        `;
        if(data[i].does_not_expire) {
            htmlString += `
                        <p class="cert-date"><strong>Issued on:</strong> <span>${ data[i].issue_date.month }, ${ data[i].issue_date.year }</span></p>
                        <p><strong><i>*This certification does not expire.</i></strong></p>
            `;
        } else {
            htmlString += `
                        <p class="cert-date"><strong>Issued on:</strong> <span>${ data[i].issue_date.month }, ${ data[i].issue_date.year }</span></p>
                        <p class="cert-date"><strong>Expires on:</strong> <span>${ data[i].expiry_date.month }, ${ data[i].expiry_date.year }</span></p>
            `;
        }
        htmlString += `
                    </div>
                    <div class="certification-body-right">
                        <p><strong>Credential ID:</strong> ${ data[i].credential_id }</p>
                        <p><a href="${ data[i].credential_url }" target="_blank"><strong>View Credential</strong> <span class="fas fa-external-link-alt"></span></a></p>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementsByClassName('certifications-list')[0].innerHTML = htmlString;
}
const toggle_certification_body = i => {
    const certificationBody = document.getElementsByClassName('certification-body')[i];
    const certificationHeader = document.getElementsByClassName('certification-header')[i];
    const downArrow = certificationHeader.childNodes[3];
    const upArrow = certificationHeader.childNodes[5];
    if(certificationBody.style.display === 'none') {
        certificationBody.style.display = 'flex';
        certificationHeader.style.borderBottomLeftRadius = '0';
        certificationHeader.style.borderBottomRightRadius = '0';
        downArrow.style.display = 'none';
        upArrow.style.display = 'inline';
    } else {
        certificationBody.style.display = 'none';
        certificationHeader.style.borderBottomLeftRadius = '7px';
        certificationHeader.style.borderBottomRightRadius = '7px';
        upArrow.style.display = 'none';
        downArrow.style.display = 'inline';
    }
}