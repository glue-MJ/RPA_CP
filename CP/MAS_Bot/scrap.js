function return_info()
{
    var a = document.querySelector('#mas-search-page > div.mas-search-page__content.g\\:12.desktop\\(nm-x\\:s\\) > div > ul');
    var b = a.querySelectorAll("a[class='ola-btn ola-link mas-link mas-link--no-underline '");
    con_str = "";
    counter = 0;
    b.forEach(ele => {con_str += "<div class='Wrapper'><a class='Content' target='_blank' href='" + ele.href + "'>" + (counter+=1).toString() + ". "+ ele.querySelector("span").textContent + "</a></div>"});
    return "<body>" + con_str + "</body>";
};