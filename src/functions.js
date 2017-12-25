// вытаскиваем имя породы. в ответе его нет
function getBreedName (breed) { return breed.replace(/(https:\/\/dog.ceo\/api\/img\/)(.*)\/(.*)/g, '$2') }

// переделывам ссылку - разные запросы на породу и под-породы
// function modifyPath (path) { return path.match(/-/g) ? path.replace(/(\w+)-(\w+)/g, '$1/$2') : path }
function modifyPath (path) { return 'xxx' }

export {modifyPath, getBreedName}
