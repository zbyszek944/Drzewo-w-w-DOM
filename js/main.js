let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    
    
    let liElement = document.createElement('li')
    
    liElement.setAttribute('class','city');
    console.log(liElement);
    liElement.innerText = element
    document.getElementById('list').appendChild(liElement)
}