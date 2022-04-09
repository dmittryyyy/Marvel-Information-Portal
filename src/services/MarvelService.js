class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=5cc63046e33dde9b14767c48bd6ed4a4';

    getResource = async(url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Не удалось получить данные с${url}, статус операции ${res.status}`);
        } else if(res.ok) {
            console.log('Данные получены!');
        } else {
            console.log('Неизвестная ошибка...');
        }

        return await res.json();
    }

    getAllCharapters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharapter);
    }

    getCharapters = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharapter(res.data.results[0]);
    }

    _transformCharapter = (charapter) => {
        if(charapter.description === '') {
            charapter.description = 'Описание про данного персонажа отсутствует';
        } else if(charapter.description.length > 70) {
            return charapter.description.substring(0, 70) + '...';
        }
        return {
                name: charapter.name,
                description: charapter.description,
                thumbnail: charapter.thumbnail.path + '.' + charapter.thumbnail.extension,
                homepage: charapter.urls[0].url,
                wiki: charapter.urls[1].url
        }
    }
}

export default MarvelService;