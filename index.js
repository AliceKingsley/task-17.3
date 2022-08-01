function formatDate(date) {
    let offset = new Date() - date;

    if (offset < 1000) {
        return `прямо сейчас`;
    }

    if (offset < 60*1000) {
        let sec = Math.floor(offset / 1000);
        return `${sec} сек. назад`;
    }

    if (offset < 60*60*1000) {
        let min = Math.floor(offset / 60000);
        return `${min} мин. назад`;
    }

    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

alert( formatDate(new Date(new Date - 1)) );

alert( formatDate(new Date(new Date - 30 * 1000)) );

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );

alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );