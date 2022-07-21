let users = [{ "id": 1, "ename": "Janella", "email": "jjest0@bloglines.com", "gender": "Female" },
{ "id": 2, "ename": "Kimberlyn", "email": "kespinal1@yolasite.com", "gender": "Female" },
{ "id": 3, "ename": "Noby", "email": "ncaulton2@flickr.com", "gender": "Non-binary" },
{ "id": 4, "ename": "Catharina", "email": "cverner3@blogtalkradio.com", "gender": "Female" },
{ "id": 5, "ename": "Theodore", "email": "tschimek4@tinypic.com", "gender": "Male" },
{ "id": 6, "ename": "Nananne", "email": "nstewartson5@123-reg.co.uk", "gender": "Female" },
{ "id": 7, "ename": "Patricia", "email": "pliddington6@java.com", "gender": "Female" },
{ "id": 8, "ename": "Sayre", "email": "spacher7@usa.gov", "gender": "Female" },
{ "id": 9, "ename": "Nickie", "email": "nwooding8@people.com.cn", "gender": "Male" },
{ "id": 10, "ename": "Janeta", "email": "jvansalzberger9@ycombinator.com", "gender": "Female" },
{ "id": 11, "ename": "Erv", "email": "ebruneta@princeton.edu", "gender": "Male" },
{ "id": 12, "ename": "Marie", "email": "mmangeonb@go.com", "gender": "Female" },
{ "id": 13, "ename": "Garreth", "email": "gdiegoc@yellowpages.com", "gender": "Male" },
{ "id": 14, "ename": "Diena", "email": "dgeertzd@cam.ac.uk", "gender": "Female" },
{ "id": 15, "ename": "Dot", "email": "dsherane@oaic.gov.au", "gender": "Female" },
{ "id": 16, "ename": "Felice", "email": "fcumberlidgef@51.la", "gender": "Male" },
{ "id": 17, "ename": "Zelig", "email": "ziddyg@engadget.com", "gender": "Male" },
{ "id": 18, "ename": "Nari", "email": "nbreenh@flavors.me", "gender": "Bigender" },
{ "id": 19, "ename": "Pall", "email": "pspurdeni@apache.org", "gender": "Male" },
{ "id": 20, "ename": "Bethany", "email": "bcawthraj@com.com", "gender": "Female" },
{ "id": 21, "ename": "Norene", "email": "nrycraftk@ftc.gov", "gender": "Female" },
{ "id": 22, "ename": "Nollie", "email": "ndriffel@spiegel.de", "gender": "Non-binary" },
{ "id": 23, "ename": "Heath", "email": "hboakem@state.gov", "gender": "Non-binary" },
{ "id": 24, "ename": "Bailie", "email": "bpaddeleyn@ft.com", "gender": "Male" },
{ "id": 25, "ename": "Gary", "email": "gtrenamo@seattletimes.com", "gender": "Male" },
{ "id": 26, "ename": "Livia", "email": "lsayp@admin.ch", "gender": "Female" },
{ "id": 27, "ename": "Milo", "email": "mmacnabq@jugem.jp", "gender": "Male" },
{ "id": 28, "ename": "Linette", "email": "lgreensider@blogtalkradio.com", "gender": "Female" },
{ "id": 29, "ename": "Malissa", "email": "mmcilvaneys@g.co", "gender": "Female" },
{ "id": 30, "ename": "Allan", "email": "adorceyt@icio.us", "gender": "Male" },
{ "id": 31, "ename": "Pip", "email": "plegonu@typepad.com", "gender": "Male" },
{ "id": 32, "ename": "Spense", "email": "shelietv@gravatar.com", "gender": "Male" },
{ "id": 33, "ename": "Maggie", "email": "msmoothw@gov.uk", "gender": "Female" },
{ "id": 34, "ename": "Hewe", "email": "hbagwellx@digg.com", "gender": "Bigender" },
{ "id": 35, "ename": "Karlik", "email": "klemarquisy@sourceforge.net", "gender": "Genderqueer" },
{ "id": 36, "ename": "Marcela", "email": "mcafferyz@hp.com", "gender": "Female" },
{ "id": 37, "ename": "Anstice", "email": "amahomet10@google.pl", "gender": "Female" },
{ "id": 38, "ename": "Indira", "email": "ieastman11@people.com.cn", "gender": "Female" },
{ "id": 39, "ename": "Alec", "email": "aeamer12@behance.net", "gender": "Male" },
{ "id": 40, "ename": "Steffi", "email": "segdale13@theglobeandmail.com", "gender": "Bigender" },
{ "id": 41, "ename": "Lira", "email": "lmaven14@flavors.me", "gender": "Female" },
{ "id": 42, "ename": "Claudette", "email": "ckingswood15@about.me", "gender": "Female" },
{ "id": 43, "ename": "Elissa", "email": "esussans16@goo.ne.jp", "gender": "Female" },
{ "id": 44, "ename": "Serena", "email": "sgeekie17@cisco.com", "gender": "Non-binary" },
{ "id": 45, "ename": "Giacomo", "email": "gmander18@taobao.com", "gender": "Male" },
{ "id": 46, "ename": "Bartolemo", "email": "bcockling19@huffingtonpost.com", "gender": "Male" },
{ "id": 47, "ename": "Trenna", "email": "trau1a@bizjournals.com", "gender": "Female" },
{ "id": 48, "ename": "Gertrude", "email": "gchown1b@php.net", "gender": "Female" },
{ "id": 49, "ename": "Winnie", "email": "wweems1c@discuz.net", "gender": "Male" }]

function display_Users() {
    let rows = ""
    for (let i = 0; i <= users.length - 1; i++) {
        rows += `<tr>
                    <td>${users[i].id}</td>
                    <td>${users[i].ename.toUpperCase()}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].gender.substr(0,1)}</td>
        </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}