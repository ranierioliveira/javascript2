const games = [
    'Dark Night", "Arrival", "Inception", "Interestelar", "Auto da Compadecida", "Inglorious Basterds", "Django", "Infinity War", "Kung-fu Panda", "Wolf of Wall Street'
];
const cmd = document.querySelector('#console');

const action = prompt(`
Choose action:
Listar filmes [list]
Ver um jogo [view]
Adicionar um jogo [create]
Alterar um jogo [update]
Deletar um jogo [delete]
`);

switch(action){
    case 'list':
        const movies = findAll();
        cmd.innerHTML = `** Movie List **<br> ${movies.join('<br>')}`;

        break;
    case 'view':
        const movieToView = prompt('Input movie id to view: ');
        const movieTitleToView = findById(movieToView);
        cmd.innerHTML = movieTitleToView;

        break;
    case 'create':
        const movieId = prompt('Input movie id: ');
        const movieTitle = prompt('Input movie tilte: ');
        cmd.innerHTML = `Movie ${movieTitle} updated with success!`;
        create(movieId, movieTitle);
        break;

    case 'update':
        const movieIdToUpdate = prompt('Input movie  id to update: ');
        const movieToUpdate = prompt('Input movie to update: ');
        update(movieIdToUpdate, movieToUpdate);
        cmd.innerHTML = `Movie ${movieToUpdate} created with success!`;
        break;

    case 'delete':
        const movieIdToDelete = prompt('Input movie id to delete: ');
        deleteById(movieIdToDelete);
        const moviesAfterDelete = findAll();
        cmd.innerHTML = `** Movie List **<br> ${moviesAfterDelete.join('<br>')}`;
        break;

    default:
        alert('Não existe');
}

function findAll(){
    const movies = Object.values(localStorage);
    return movies;
}
function findById(id){
    const movieTitle = localStorage.getItem(id);
    return movieTitle;
}
function create(movieId, movieTitle){
    localStorage.setItem(movieId, movieTitle);
}
function deleteById(movieId){
    localStorage.removeItem(movieId);
}
function update(movieId, movieTitle){
    localStorage.setItem(movieId, movieTitle);
}
