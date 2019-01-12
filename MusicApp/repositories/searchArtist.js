export function SearchArtist() {

    this.searchArtist = async function (artistSearch) {
        var result = null;

        var url = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+ artistSearch +"&api_key=cb12f4c4cc252eb5328201724e008ca4&format=json&limit=5");
        try {
            var response = await url;
            result = await response.json();

            console.log("repository: ", result.results.artistmatches);

            return result.results.artistmatches;

        } catch (error) {
            return result;
        }
    }
}