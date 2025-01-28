async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersData = await response.json();
    const result = usersData.map(function (user) {
        return `
            <div class='user'>
                <div class = 'dd'>
                    <h2>id : ${user.id}</h2>
                    <h2>name : ${user.name}</h2>
                </div>
                <div class = 'dd'>
                    <h3>username : ${user.username}</h3>
                    <h3>email : ${user.email}</h3>
                </div>
                <div class = 'dd'>
                    <h3>address : </h3>
                        <div>
                        <span>street : ${user.address.street}</span>
                        <span> - suite : ${user.address.suite}</span>
                        <span> - city : ${user.address.city}</span>
                        <span> - zipcode : ${user.address.zipcode}</span>
                        <div>
                            geo :
                            <div>
                                <span>lat : ${user.address.geo.lat}</span>
                                <span> - lng : ${user.address.geo.lng}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = 'dd'>
                    <h4>phone : ${user.phone}</h4>
                    <h4>website : ${user.website}</h4>
                </div>
                <div class = 'dd'>
                    <h4>company : </h4>
                    <div>
                         <span>name : ${user.company.name}</span>
                         <span> - catchPhrase : ${user.company.catchPhrase}</span>
                         <span> - bs : ${user.company.bs}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelector(".row").innerHTML = result;
}

getPosts();
